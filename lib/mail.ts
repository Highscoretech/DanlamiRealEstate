import nodemailer from "nodemailer";
import { site } from "@/content/site";

/**
 * Transactional email for the two forms.
 *
 * Two messages go out per submission: a confirmation to the person who filled
 * the form, and a notification to the company so nobody has to watch a
 * spreadsheet. Both are best-effort — see `notify` below. The lead is already
 * saved by the time we get here, so a mail failure must never turn a
 * successful submission into an error on the visitor's screen.
 *
 * Setup: see .env.example. Until SMTP is configured, messages are logged
 * server-side instead of sent, so the forms keep working in development and
 * before the client's mailbox is connected.
 */

export function mailConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASSWORD
  );
}

/**
 * The reason the last send failed, if it did.
 *
 * Kept so the API can report it: on a serverless host the console output is
 * buried in the platform's logs, and "the email did not arrive" is otherwise
 * indistinguishable from a blocked port, a bad password or a timeout.
 */
let lastError: string | null = null;
export function lastMailError() {
  return lastError;
}

function transporter() {
  const port = Number(process.env.SMTP_PORT ?? 587);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    // 465 is implicit TLS; 587 upgrades with STARTTLS.
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    /* Serverless functions are killed after about ten seconds. Without these
       a blocked port hangs until the platform terminates the whole request,
       which looks like a site error rather than a mail problem. Failing fast
       lets us return a useful reason instead. */
    connectionTimeout: 7000,
    greetingTimeout: 5000,
    socketTimeout: 7000,
  });
}

/** Where notifications land. Falls back to the address on the site. */
function ownerAddress() {
  return process.env.NOTIFY_EMAIL || site.email;
}

/**
 * The visible From line. Defaults to the authenticated account, which is the
 * safest option: sending under a different address than the one we logged in
 * as is legitimate but costs reputation with spam filters, so an explicit
 * SMTP_FROM should stay on the same domain.
 */
function fromAddress() {
  return process.env.SMTP_FROM || `${site.name} <${process.env.SMTP_USER}>`;
}

type Mail = {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

/**
 * Send, but never throw. A form submission that reached the spreadsheet has
 * succeeded from the visitor's point of view; a bounced notification is our
 * problem, not theirs, and the row is still there to work from.
 */
async function send(mail: Mail) {
  if (!mailConfigured()) {
    lastError = "SMTP_HOST, SMTP_USER or SMTP_PASSWORD is not set";
    console.warn(`[mail] SMTP not configured — not sent to ${mail.to}: ${mail.subject}`);
    return false;
  }
  try {
    const info = await transporter().sendMail({
      from: fromAddress(),
      /* Return-Path is set to the account we actually authenticated as. SPF is
         checked against this, while DMARC compares its domain to the From
         domain — both are danlamirealestate.com, so alignment passes even
         though we send under the partners@ identity. Without this the two can
         diverge and Gmail treats the message as unaligned. */
      envelope: {
        from: process.env.SMTP_USER,
        to: mail.to,
      },
      /* Transactional mail, not marketing. Saying so plainly keeps it out of
         Gmail's Promotions tab and discourages bulk-mail heuristics. */
      headers: {
        "Auto-Submitted": "auto-generated",
        "X-Entity-Ref-ID": Date.now().toString(36),
      },
      ...mail,
    });

    /* Ethereal is a throwaway mailbox used to check templates without a real
       account. It does not deliver; it just hosts a preview of what would
       have arrived. */
    const preview = nodemailer.getTestMessageUrl(info);
    if (preview) console.log(`[mail] preview (${mail.to}): ${preview}`);

    lastError = null;
    return true;
  } catch (error) {
    lastError = error instanceof Error ? error.message : String(error);
    console.error(`[mail] failed to send to ${mail.to}`, error);
    return false;
  }
}

/* ---------- templates ----------
   Plain and text-first. These are transactional messages, not marketing, and
   they are read on a phone in a hurry. */

const shell = (heading: string, body: string) => `
<div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;max-width:34rem;margin:0 auto;padding:1.5rem;color:#0D1417;line-height:1.6">
  <p style="font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:#1180B0;margin:0 0 .5rem">${site.name}</p>
  <h1 style="font-size:1.35rem;margin:0 0 1rem;color:#0A4354">${heading}</h1>
  ${body}
  <hr style="border:0;border-top:1px solid #E2E6E6;margin:1.75rem 0 1rem">
  <p style="font-size:.8rem;color:#5C6A72;margin:0">
    ${site.name} &mdash; ${site.authority}<br>
    ${site.location} &middot; <a href="tel:${site.phoneE164}" style="color:#1180B0">${site.phone}</a>
  </p>
</div>`;

const rows = (pairs: [string, string][]) =>
  pairs
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:.35rem 1rem .35rem 0;color:#5C6A72;font-size:.85rem;vertical-align:top">${k}</td><td style="padding:.35rem 0;font-size:.9rem">${v}</td></tr>`
    )
    .join("");

/** Confirmation to whoever submitted a form. */
export async function sendConfirmation(opts: {
  to: string;
  name: string;
  /** Sales partners get the group invitation in the email too. */
  whatsappGroupUrl?: string;
}) {
  const first = opts.name.split(" ")[0] || "there";

  const groupBlock = opts.whatsappGroupUrl
    ? `<p style="margin:1.25rem 0 0">While you wait, join our partners group on WhatsApp — that is where opportunities, updates and materials are shared first.</p>
       <p style="margin:1rem 0 0">
         <a href="${opts.whatsappGroupUrl}" style="display:inline-block;background:#1180B0;color:#fff;text-decoration:none;padding:.75rem 1.5rem;font-weight:600;font-size:.9rem">Join the WhatsApp group</a>
       </p>`
    : "";

  return send({
    to: opts.to,
    subject: `Thanks for submitting your form, ${first}`,
    text: `Hi ${first},\n\nThanks for submitting your form. Our team will get in touch with you shortly.\n\nIf it is urgent, call or WhatsApp us on ${site.phone}.${
      opts.whatsappGroupUrl
        ? `\n\nJoin our partners WhatsApp group: ${opts.whatsappGroupUrl}`
        : ""
    }\n\n${site.name}\n${site.authority}\n${site.strapline}`,
    html: shell(
      `Thanks, ${first}.`,
      `<p style="margin:0;font-size:1.05rem">Thanks for submitting your form. Our team will get in touch with you shortly.</p>
       <p style="margin:1rem 0 0">If it is urgent, call or WhatsApp us on <a href="tel:${site.phoneE164}" style="color:#1180B0">${site.phone}</a>.</p>
       ${groupBlock}`
    ),
  });
}

/** Notification to the company that a new submission has landed. */
export async function sendOwnerNotification(opts: {
  kind: "enquiry" | "partner";
  /** Spreadsheet tab the row went to — named in the subject so the office
      can see at a glance which pipeline this belongs to. */
  tab?: string;
  fields: [string, string][];
  replyTo?: string;
}) {
  const heading =
    opts.kind === "partner" ? "New partner registration" : "New enquiry";
  const who = opts.fields.find(([k]) => k === "Name")?.[1] ?? "Someone";
  const where = opts.tab ? ` [${opts.tab}]` : "";

  return send({
    to: ownerAddress(),
    replyTo: opts.replyTo,
    subject: `${heading}${where} — ${who}`,
    text: opts.fields.map(([k, v]) => `${k}: ${v}`).join("\n"),
    html: shell(
      heading,
      `${opts.tab ? `<p style="margin:0 0 1rem;font-size:.85rem;color:#5C6A72">Filed under <strong>${opts.tab}</strong></p>` : ""}
       <table style="border-collapse:collapse;width:100%">${rows(opts.fields)}</table>`
    ),
  });
}
