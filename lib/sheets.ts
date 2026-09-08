import { createSign } from "node:crypto";

/**
 * Appends a row to a Google Sheet using a service account.
 *
 * Deliberately dependency-free: it mints its own RS256 JWT and exchanges it for
 * an access token, rather than pulling in the whole googleapis package for one
 * append call.
 *
 * Setup (see .env.example):
 *   1. Create a Google Cloud service account, enable the Google Sheets API,
 *      and download its JSON key.
 *   2. Share the target spreadsheet with the service account's email address,
 *      giving it Editor access. This is the step people forget.
 *   3. Set GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY and SHEET_ID.
 */

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";

function base64url(input: Buffer | string) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export function sheetsConfigured() {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.SHEET_ID
  );
}

async function getAccessToken(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
  // Env vars flatten newlines, so restore them before the key is parsed.
  const key = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({
      iss: email,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    })
  );

  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const signature = base64url(signer.sign(key));
  const assertion = `${header}.${claims}.${signature}`;

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!res.ok) {
    throw new Error(`Google token request failed: ${res.status} ${await res.text()}`);
  }

  const data = (await res.json()) as { access_token?: string };
  if (!data.access_token) throw new Error("Google token response had no access_token");
  return data.access_token;
}

/**
 * @param tab   Sheet tab name, e.g. "Enquiries" or "Partners". The tab must
 *              already exist in the spreadsheet.
 * @param row   Cell values, left to right.
 */
export async function appendRow(tab: string, row: (string | number)[]) {
  const token = await getAccessToken();
  const range = encodeURIComponent(`${tab}!A:Z`);
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}` +
    `/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [row] }),
  });

  if (!res.ok) {
    throw new Error(`Sheets append failed: ${res.status} ${await res.text()}`);
  }
}
