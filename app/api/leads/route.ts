import { NextResponse } from "next/server";
import { COLUMNS, isSalesPartner, sheetFor } from "@/lib/lead-routing";
import { sendConfirmation, sendOwnerNotification } from "@/lib/mail";
import { appendRow, sheetsConfigured } from "@/lib/sheets";

export const runtime = "nodejs";

/* Both forms post here. The destination tab depends on what the person
   picked rather than which page they were on — see lib/lead-routing.ts. */

const FORMS = ["enquiry", "partner"];

/** Human labels for the notification email, in the order they are shown. */
const LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  whatsapp: "WhatsApp",
  instagram: "Instagram",
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
  if (!FORMS.includes(form)) {
    return NextResponse.json({ error: "Unknown form." }, { status: 400 });
  }

  const partnerType = String(payload.partnerType ?? "").trim();
  const interest = String(payload.interest ?? "").trim();
  const tab = sheetFor(form, { partnerType, interest });
  const columns = COLUMNS[tab];

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
    ...columns.map((f) => String(payload[f] ?? "")),
  ];

  let stored = false;
  if (sheetsConfigured()) {
    try {
      await appendRow(tab, row);
      stored = true;
    } catch (error) {
      console.error("[leads] append failed", error);
      return NextResponse.json(
        { error: "We couldn't save your message. Please call or WhatsApp us instead." },
        { status: 502 }
      );
    }
  } else {
    /* The browser also posts straight to the client's Apps Script, which is
       what actually fills the spreadsheet today. This path is the fallback
       for when the Sheets API is wired up instead. */
    console.warn(`[leads] Sheets API not configured — ${tab} row not written here:`, row);
  }

  const salesPartner = form === "partner" && isSalesPartner(partnerType);
  const groupUrl = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL;

  /* Email is best-effort and deliberately not awaited as a condition of
     success: the lead is already recorded, so a mail problem must not show
     the visitor an error. Failures are logged inside lib/mail.ts. */
  await Promise.all([
    email
      ? sendConfirmation({
          to: email,
          name,
          whatsappGroupUrl: salesPartner ? groupUrl : undefined,
        })
      : Promise.resolve(false),
    sendOwnerNotification({
      kind: form as "enquiry" | "partner",
      tab,
      replyTo: email || undefined,
      fields: columns
        .map((f) => [LABELS[f] ?? f, String(payload[f] ?? "")] as [string, string])
        .filter(([, v]) => v),
    }),
  ]);

  return NextResponse.json({
    ok: true,
    stored,
    tab,
    // Tells the form whether to offer the WhatsApp group on success.
    salesPartner,
  });
}
