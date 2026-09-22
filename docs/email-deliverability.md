# Why form emails land in spam, and how to fix it

Diagnosed 22 September 2026, after a live test message from the partner form
went to Gmail's spam folder.

Nothing is wrong with the website or with Hostinger. The mail is sent and
accepted correctly. What is missing is proof to Gmail that the message really
came from `danlamirealestate.com`.

---

## What the domain has today

| Record | State | Notes |
|---|---|---|
| **MX** | ✅ Correct | `mx1.hostinger.com` (5), `mx2.hostinger.com` (10) |
| **SPF** | ✅ Present | `v=spf1 include:_spf.mail.hostinger.com ~all` |
| **DKIM** | ❌ **Missing** | Nine common selectors probed, none found |
| **DMARC** | ⚠️ Weak | `v=DMARC1; p=none` — monitoring only, enforces nothing |

---

## The three causes, in order of impact

### 1. DKIM is missing — the main one

DKIM signs every message with a private key held by Hostinger. Gmail checks
the signature against a public key in your DNS and knows the message is
genuine and unmodified.

A domain with SPF but no DKIM looks half-configured. Gmail's own sender
guidelines have required both for bulk senders since 2024, and transactional
mail is judged by the same signals.

**Fix:** hPanel → **Emails** → the domain → **Email Deliverability** (sometimes
labelled *DKIM* or *DNS records*). There is usually a one-click **Enable**. If
the domain's DNS is also at Hostinger it applies within minutes; if DNS is
elsewhere, Hostinger shows a record to add there.

Confirm afterwards:

```
nslookup -type=TXT hostingermail1._domainkey.danlamirealestate.com
```

### 2. DMARC is set to monitor only

`p=none` tells receivers "watch, but do nothing". It gives no assurance.

**Fix — only after DKIM has been live for a few days**, so you do not enforce a
policy the domain cannot yet satisfy:

```
v=DMARC1; p=quarantine; rua=mailto:admin@danlamirealestate.com; pct=100
```

Added as a TXT record on `_dmarc.danlamirealestate.com`.

### 3. The From address differed from the account we log in as

We authenticate as `admin@` and send as `partners@`. That is legitimate — they
are aliases on one domain — but the mismatch is also what spoofing looks like.

**Already fixed in code.** `lib/mail.ts` now sets the envelope sender
(Return-Path) to the authenticated account, so SPF is checked against `admin@`
while the visible From stays `partners@`. Both are on
`danlamirealestate.com`, so DMARC alignment passes in relaxed mode.

The cleanest version is still to create a dedicated `noreply@` or `website@`
mailbox and both authenticate *and* send as it. That also keeps the admin
password out of the website's configuration.

---

## Also worth doing

- **Rescue the test messages.** In Gmail, move them from Spam to Inbox and mark
  *Not spam*. Ask two or three colleagues to do the same. Early engagement from
  real accounts builds reputation faster than anything else.
- **Check `mail.danlamirealestate.com`.** It does not resolve. Not required for
  sending, but its absence suggested the mail DNS was incomplete, which turned
  out to be true.
- **Warm up gradually.** A domain that has never sent mail is treated
  cautiously. Volume from this site will be low and steady, which is the ideal
  pattern — placement should improve over the first week or two once DKIM is
  in place.

---

## If it still lands in spam after DKIM

Move to a dedicated sending service. **Resend** and **Brevo** are both free at
this volume, handle DKIM and DMARC setup for you, and maintain their own
sending reputation.

`lib/mail.ts` is deliberately isolated — swapping provider means changing the
transport and the environment variables, and nothing else. No form, template or
API change.

---

## How to verify it is fixed

Send a test to a Gmail address, open the message, then **Show original**. You
want all three:

```
SPF:   PASS
DKIM:  PASS
DMARC: PASS
```

Today DKIM is absent, which is why the third line cannot pass.
