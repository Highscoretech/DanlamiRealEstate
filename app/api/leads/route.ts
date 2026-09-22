import { NextResponse } from "next/server";
import { sendConfirmation, sendOwnerNotification } from "@/lib/mail";
import { appendRow, sheetsConfigured } from "@/lib/sheets";

export const runtime = "nodejs";

/* Both forms post here. Enquiries and partner registrations go to separate
   tabs of the same spreadsheet — one document for the client to open, two
   tables inside it. */

const TABS: Record<string, { tab: string; fields: string[] }> = {
  enquiry: {
    tab: "Enquiries",
    fields: [
      "name",
      "email",
      "phone",
      "whatsapp",
      "location",
      "interest",
      "budget",
      "message",
    ],
  },
  partner: {
    tab: "Partners",
    fields: [
      "name",
      "email",
      "phone",
      "whatsapp",
      "city",
      "partnerType",
      "experience",
      "heardVia",
      "accountName",
      "bankName",
      "accountNumber",
      "message",
    ],
  },
};

/** Human labels for the notification email, in the order they are shown. */
const LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  whatsapp: "WhatsApp",
  city: "City",
  location: "Location",
  partnerType: "Partnering as",
  experience: "Years in real estate",
  heardVia: "Heard about us via",
  accountName: "Account name",
  bankName: "Bank",
  accountNumber: "Account number",
  interest: "Interested in",
  budget: "Budget range",
  message: "Message",
};

/**
 * Partner types that sell on our behalf. These are the ones invited into the
 * WhatsApp group on success — landowners, developers and investors are not
 * sales partners and should not be dropped into a sellers' group.
 */
const SALES_PARTNER_TYPES = [
  "Realtor or sales agent",
  "Affiliate marketer",
  "Referral partner (9–5er)",
];

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Bots fill hidden fields; people leave them empty. Accept and discard.
  if (typeof payload.company === "string" && payload.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const form = String(payload.form ?? "");
  const spec = TABS[form];
  if (!spec) {
    return NextResponse.json({ error: "Unknown form." }, { status: 400 });
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const phone = String(payload.phone ?? "").trim();

  if (!name) {
    return NextResponse.json({ error: "Please tell us your name." }, { status: 422 });
  }
  if (!email && !phone) {
    return NextResponse.json(
      { error: "Please leave either an email address or a phone number." },
      { status: 422 }
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 422 }
    );
  }

  const row = [
    new Date().toISOString(),
    ...spec.fields.map((f) => String(payload[f] ?? "")),
  ];

  let stored = false;
  if (sheetsConfigured()) {
    try {
      await appendRow(spec.tab, row);
      stored = true;
    } catch (error) {
      console.error("[leads] append failed", error);
      return NextResponse.json(
        { error: "We couldn't save your message. Please call or WhatsApp us instead." },
        { status: 502 }
      );
    }
  } else {
    // Until the client gives us their Google account, keep the form working and
    // record the lead in the server log so nothing is silently lost.
    console.warn(
      `[leads] Google Sheets not configured — ${spec.tab} row not saved:`,
      row
    );
  }

  const partnerType = String(payload.partnerType ?? "").trim();
  const isSalesPartner =
    form === "partner" && SALES_PARTNER_TYPES.includes(partnerType);
  const groupUrl = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL;

  /* Email is best-effort and deliberately not awaited as a condition of
     success: the lead is already recorded, so a mail problem must not show
     the visitor an error. Failures are logged inside lib/mail.ts. */
  await Promise.all([
    email
      ? sendConfirmation({
          to: email,
          name,
          whatsappGroupUrl: isSalesPartner ? groupUrl : undefined,
        })
      : Promise.resolve(false),
    sendOwnerNotification({
      kind: form as "enquiry" | "partner",
      replyTo: email || undefined,
      fields: spec.fields
        .map((f) => [LABELS[f] ?? f, String(payload[f] ?? "")] as [string, string])
        .filter(([, v]) => v),
    }),
  ]);

  return NextResponse.json({
    ok: true,
    stored,
    // Tells the form whether to offer the WhatsApp group on success.
    salesPartner: isSalesPartner,
  });
}
