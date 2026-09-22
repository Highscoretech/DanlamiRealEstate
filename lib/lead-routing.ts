/**
 * Which spreadsheet tab a submission belongs in.
 *
 * The client keeps five tabs rather than one per form, so the destination
 * depends on what the person picked, not which page they were on. A developer
 * who fills in the contact form still belongs in Developers.
 *
 * Both callers use this: the browser sends the name to the Apps Script, and
 * our own API route uses it when writing through the Sheets API. Keeping the
 * rule in one place stops the two drifting apart.
 *
 * TAB NAMES MUST MATCH THE SPREADSHEET EXACTLY, including "Enquires" — that is
 * how the tab is spelled in the client's sheet. Correcting the spelling here
 * would send rows to a tab that does not exist.
 */

export const SHEET_TABS = {
  enquiries: "Enquires",
  investors: "Investors",
  landowners: "LandOwner",
  developers: "Developers",
  salesPartners: "SalesPartners",
} as const;

export type SheetTab = (typeof SHEET_TABS)[keyof typeof SHEET_TABS];

/** Partner types who sell on the company's behalf. */
export const SALES_PARTNER_TYPES = [
  "Realtor or sales agent",
  "Affiliate marketer",
  "Referral partner (9–5er)",
];

export function isSalesPartner(partnerType: string) {
  return SALES_PARTNER_TYPES.includes(partnerType.trim());
}

export function sheetFor(
  form: string,
  values: { partnerType?: string; interest?: string }
): SheetTab {
  const partnerType = (values.partnerType ?? "").trim();
  const interest = (values.interest ?? "").trim();

  if (form === "partner") {
    if (isSalesPartner(partnerType)) return SHEET_TABS.salesPartners;
    if (partnerType === "Landowner") return SHEET_TABS.landowners;
    if (partnerType === "Developer") return SHEET_TABS.developers;
    if (partnerType === "Investor") return SHEET_TABS.investors;
    // "Other" and anything unrecognised: a person, not a category yet.
    return SHEET_TABS.enquiries;
  }

  // Contact form. Route on what they came for.
  if (interest === "Investment Opportunity" || interest === "Diaspora Investment") {
    return SHEET_TABS.investors;
  }
  if (interest === "Development Partnership") return SHEET_TABS.developers;

  return SHEET_TABS.enquiries;
}

/**
 * Columns written for each tab, in order. The timestamp is added first by the
 * writer, so these are columns B onwards.
 */
export const COLUMNS: Record<SheetTab, string[]> = {
  Enquires: [
    "name",
    "email",
    "phone",
    "whatsapp",
    "location",
    "interest",
    "budget",
    "message",
  ],
  Investors: [
    "name",
    "email",
    "phone",
    "whatsapp",
    "location",
    "interest",
    "budget",
    "partnerType",
    "message",
  ],
  LandOwner: [
    "name",
    "email",
    "phone",
    "whatsapp",
    "city",
    "partnerType",
    "heardVia",
    "message",
  ],
  Developers: [
    "name",
    "email",
    "phone",
    "whatsapp",
    "city",
    "partnerType",
    "experience",
    "heardVia",
    "message",
  ],
  SalesPartners: [
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
};
