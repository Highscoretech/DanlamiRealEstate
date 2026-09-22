# Google Apps Script — form submissions

Paste this whole file's code block into the Apps Script editor attached to the
**DAN LAMI SALES PARTNERS** spreadsheet, replacing everything that is there.

The website works out which tab a submission belongs in and sends it as a
`sheet` parameter. The script can also work it out on its own from what the
person picked, so nothing is ever misfiled if that parameter goes missing.

All five tabs are handled: `Enquires`, `Investors`, `LandOwner`, `Developers`
and `SalesPartners`.

---

## The script

```js
// Works out which tab a submission belongs in, from what the person picked.
// The website sends the answer as `sheet`, but this function means the script
// can also work it out on its own — so a submission is never misfiled.
function pickSheet(e) {
  if (e.parameter.sheet) {
    return e.parameter.sheet;
  }

  var partnerType = e.parameter.partnerType || '';
  var interest = e.parameter.interest || '';

  if (partnerType === 'Realtor or sales agent') { return 'SalesPartners'; }
  if (partnerType === 'Affiliate marketer')     { return 'SalesPartners'; }
  if (partnerType.indexOf('Referral partner') === 0) { return 'SalesPartners'; }
  if (partnerType === 'Landowner') { return 'LandOwner'; }
  if (partnerType === 'Developer') { return 'Developers'; }
  if (partnerType === 'Investor')  { return 'Investors'; }

  if (interest === 'Investment Opportunity') { return 'Investors'; }
  if (interest === 'Diaspora Investment')    { return 'Investors'; }
  if (interest === 'Development Partnership') { return 'Developers'; }

  return 'Enquires';
}

function doPost(e) {
  var sheetName = pickSheet(e);

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  if (!sheet) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: 'Sheet not found: ' + sheetName })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  // Columns for each tab, in order. These must match the website.
  var COLUMNS = {
    'Enquires': [
      'name', 'email', 'phone', 'whatsapp',
      'location', 'interest', 'budget', 'message'
    ],
    'Investors': [
      'name', 'email', 'phone', 'whatsapp',
      'location', 'interest', 'budget', 'partnerType', 'message'
    ],
    'LandOwner': [
      'name', 'email', 'phone', 'whatsapp', 'instagram',
      'city', 'partnerType', 'heardVia', 'message'
    ],
    'Developers': [
      'name', 'email', 'phone', 'whatsapp', 'instagram',
      'city', 'partnerType', 'experience', 'heardVia', 'message'
    ],
    'SalesPartners': [
      'name', 'email', 'phone', 'whatsapp', 'instagram',
      'city', 'partnerType', 'experience', 'heardVia',
      'accountName', 'bankName', 'accountNumber', 'message'
    ]
  };

  var fields = COLUMNS[sheetName];
  if (!fields) {
    fields = COLUMNS['Enquires'];
  }

  // Write the header row the first time a tab is used.
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['timestamp'].concat(fields));
  }

  var row = [new Date().toISOString()];
  for (var i = 0; i < fields.length; i++) {
    row.push(e.parameter[fields[i]] || '');
  }

  sheet.appendRow(row);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, sheet: sheetName })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

---

## After pasting

1. **Save** — Ctrl+S.
2. **Deploy → Manage deployments**, click the **pencil** to edit.
3. Set **Version: New version**. Apps Script keeps serving the old code until
   you do this, so skipping it is the usual reason a change appears to do
   nothing.
4. Check **Who has access: Anyone**. Without this the endpoint returns
   **401 Unauthorized** and no submission can be written. "Anyone" means anyone
   may *submit*; it does not expose the spreadsheet.
5. **Deploy**, and copy the URL. If it changed, update
   `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` in `.env.local`.

---

## Where each submission lands

| What the person picks | Tab |
|---|---|
| Realtor or sales agent | `SalesPartners` |
| Affiliate marketer | `SalesPartners` |
| Referral partner (9–5er) | `SalesPartners` |
| Landowner | `LandOwner` |
| Developer, or "Development Partnership" on the contact form | `Developers` |
| Investor, or "Investment Opportunity" / "Diaspora Investment" | `Investors` |
| Anything else | `Enquires` |

Those three sales roles are also the only ones shown the WhatsApp group
invitation after submitting — a landowner should not be dropped into a
sellers' group.

The same routing lives in `lib/lead-routing.ts` on the website. If you change
one, change the other.

---

## Tab names

The names in `COLUMNS` must match the spreadsheet **exactly**, including two
spellings that look like mistakes but are not:

- **`Enquires`** — not "Enquiries".
- **`LandOwner`** — singular, not "LandOwners".

A mismatch means the script cannot find the tab and returns
`Sheet not found`.

---

## Adding a field later

Three places, or rows go into the wrong columns:

1. The form field, in `app/partners/page.tsx` or `app/contact/page.tsx`.
2. The column list in `lib/lead-routing.ts`.
3. The matching `COLUMNS` entry above, then redeploy.

If a tab already has a header row, add the new column header to it by hand —
the script only writes headers to an empty tab.
