# SEO — strategy, what is built, and what is still owed

## The honest position

We are not going to outrank the portals on head terms, and we should not spend
effort trying. Searching "houses for sale in Lekki" returns PropertyPro with
roughly **11,000** Lekki listings and Nigeria Property Centre with about
**33,000**. We have six. On volume that fight is lost before it starts.

What we can win is everything those aggregators are bad at:

| They win | We win |
|---|---|
| Volume of listings | A named estate, a specific configuration, one honest page |
| Every area in Lagos | The four areas we actually transact in |
| Generic descriptions | Local detail written by someone who sells there |
| Nothing | Explaining title documents, buying from abroad, what to verify |

So the plan is **long tail plus expertise**. Rank for
"5 bedroom fully detached duplex Ikota Villa Estate" rather than "houses in
Lagos", and own the questions buyers ask before they are ready to look at a
property at all.

## What the market actually types

Checked against live search results, not assumed:

- Bedroom count leads: **"5 bedroom fully detached duplex"**, not "luxury home"
- Estates are named in full: **"Ikota Villa Estate"**, **"Osapa London"**
- **"BQ"** (boys' quarters) and **"swimming pool"** are search terms, not fluff
- Prices are written short — **"N400M"**, not "₦400,000,000"
- **"fully detached"** and **"semi-detached"** are treated as different products

Page titles, H1s, listing copy and the short price format all follow this.

## Built

**Technical**

- `app/sitemap.ts` — 27 URLs plus **64 property photos** as image-sitemap
  entries. Property search is visual; this is how the photos become eligible
  for Google Images and for thumbnails in web results.
- `app/robots.ts` — allows everything except `/api/`, points at the sitemap.
- Canonical URL on every page, via `pageMetadata` in `lib/seo.ts`. Every route
  goes through that one function so a new page cannot forget.
- `max-image-preview:large` — lets Google show full-size property photos in
  results. On property searches that is most of the click-through advantage.
- Icons, web manifest, and a pre-rendered Open Graph card at `public/og.jpg`.
- AVIF/WebP image formats and a one-year cache TTL in `next.config.mjs`.

**Structured data** (all validated, `lib/schema.ts`)

| Page | Markup |
|---|---|
| Every page | `RealEstateAgent` + `WebSite`, joined by `@id` |
| Property pages | `RealEstateListing` → `Offer` (price, NGN, availability) → `SingleFamilyResidence`/`Apartment` with bedrooms, address, photos, amenities |
| Location pages | `Place` + `ItemList` + `BreadcrumbList` |
| Guides | `Article` + `FAQPage` + `BreadcrumbList` |
| `/faq` | `FAQPage`, 9 questions |
| `/the-closer` | `Person` |

**Content**

- Four location pages carrying real local detail — where Osapa London sits on
  the expressway, what it takes to reach Victoria Island, what the housing
  stock is. This is the part the portals cannot fake.
- Two guides, which are also the client's positioning made concrete:
  - `/guides/land-titles-in-lagos` — C of O, Governor's Consent, excision,
    gazette, and what to ask before paying.
  - `/guides/buying-property-in-lagos-from-abroad` — the diaspora process.
- `/faq` — nine questions, all answered from what the client has already said.

**Internal linking.** Every location page is linked from the footer on every
page, so none of them is an orphan. Listings link to their area; areas link to
the guides; guides link back to listings.

## Audit

`27 URLs checked, 0 with findings.` Every page has a unique title under 70
characters, a unique description of 108–158 characters, exactly one `<h1>`, a
correct canonical, an OG image, and valid JSON-LD.

## Still owed — the client has to do these

Nothing below is code. These are the things that decide whether any of the
above converts into rankings.

1. **Google Search Console.** Verify the domain, then submit
   `https://danlamirealestate.com/sitemap.xml`. Set
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in the environment for the meta-tag
   verification method.
2. **Google Business Profile.** For a Lagos property firm this is the single
   highest-value item on this list — it is what puts them in the map pack. It
   needs a real office address, which we do not have yet.
3. **The office address.** `site.address.streetAddress` is deliberately empty.
   A guessed address is worse than none: inconsistent name/address/phone data
   across the web actively damages local ranking.
4. **Confirm the phone number and email.** Both were read off an Instagram
   caption. They appear in `LocalBusiness` structured data, so if they are
   wrong they are wrong in a place Google reads.
5. **`.com` vs `.ng`.** Their flyers advertise `danlamirealestate.ng`. If both
   resolve, one must 301-redirect to the other or the domains compete with each
   other for the same rankings.
6. **Real social profile URLs.** `facebook`, `linkedin` and `youtube` in
   `content/site.ts` are `#` placeholders and are filtered out of `sameAs`
   until set. `sameAs` is how Google connects the site to the Instagram
   account.
7. **Have a solicitor read both guides.** They describe the law accurately and
   carry disclaimers, but they are published under the client's name.
8. **Enrich the location pages.** The geography is public knowledge; what will
   actually beat the portals is what the client knows first-hand — the schools,
   the specific streets, what is being built nearby.

## Rules for anyone adding pages later

- Every page goes through `pageMetadata()`. No exceptions — it is what
  guarantees the canonical.
- New route means a new entry in `app/sitemap.ts`.
- Titles under 70 characters, descriptions 120–160, exactly one `<h1>`.
- **No statistics.** The client asked that unverified numbers stay off the site
  until they confirm them. That still stands.
- Do not create a location page for an area with no listings and nothing true
  to say about it. A thin page with a keyword in the title is a doorway page,
  and Google treats it accordingly.
