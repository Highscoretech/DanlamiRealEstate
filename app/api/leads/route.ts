import { NextResponse } from "next/server";
import { appendRow, sheetsConfigured } from "@/lib/sheets";

export const runtime = "nodejs";

/* Both forms post here. Enquiries and partner registrations go to separate
   tabs of the same spreadsheet — one document for the client to open, two
   tables inside it. */

const TABS: Record<string, { tab: string; fields: string[] }> = {
  enquiry: {
    tab: "Enquiries",
    fields: ["name", "email", "phone", "interest", "message"],
  },
  partner: {
    tab: "Partners",
    fields: [
      "name",
      "email",
      "phone",
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

  if (!sheetsConfigured()) {
    // Until the client gives us their Google account, keep the form working and
    // record the lead in the server log so nothing is silently lost.
    console.warn(
      `[leads] Google Sheets not configured — ${spec.tab} row not saved:`,
      row
    );
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    await appendRow(spec.tab, row);
    return NextResponse.json({ ok: true, stored: true });
  } catch (error) {
    console.error("[leads] append failed", error);
    return NextResponse.json(
      { error: "We couldn't save your message. Please call or WhatsApp us instead." },
      { status: 502 }
    );
  }
}
