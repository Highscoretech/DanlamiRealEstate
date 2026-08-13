# danlamirealestate.com

Next.js project for Danlami Real Estate.

## Right now

The app currently serves **one temporary page: the client brief**. It walks the client
through the proposed homepage section by section and states exactly what they need to
send us for each part — brand, projects, photographs, YouTube links, form data.

It is built as a real page rather than a document so the client can see what they are
buying, and it has a **Save as PDF** button that prints cleanly.

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Removing the brief when the real build starts

The brief is deliberately isolated. To take it off:

1. Delete `components/brief/`
2. Delete `app/page.tsx` and replace it with the real homepage
3. Delete everything below the header comment in `app/globals.css`, keeping only the
   `:root` token blocks if you want to carry the palette forward

Nothing else in the project imports from it.

## Sharing it with the client

Cheapest route is Vercel — free, and it takes a couple of minutes:

```bash
npx vercel
```

That gives a public preview URL to send on WhatsApp. Point the real domain at it later,
when the actual site replaces the brief.

## What gets built after the brief

Confirmed scope from the client meeting:

- **Landing page** — hero, proof strip, featured projects, video, about, investor band,
  testimonials, Instagram, partner call to action, contact
- **Project pages** — one per project, driven by the data in part three of the brief
- **Investor section** — open or gated, pending the client's decision
- **Partner registration form** — submissions written to a Google Sheet, with email
  notification
- **Contact message box** — same pipeline, separate sheet or tab
- **YouTube embeds** — videos stay on the client's channel, embedded by video ID
- **Instagram** — link, live feed, or hand-picked posts, pending the client's decision

## Notes

- No CSS framework. Plain CSS with custom properties in `app/globals.css`, so the brief
  can be deleted without unpicking a build chain. Add Tailwind later if the real build
  wants it.
- Light and dark themes are both handled through tokens.
- Image placeholders are drawn in SVG rather than pulled from a stock service, so nothing
  on the page depends on an external host or breaks when a link dies.
