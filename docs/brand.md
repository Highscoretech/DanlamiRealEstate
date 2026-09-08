# Brand — Dan Lami Real Estate

Everything here was measured off the logo files the client sent
(`assets/brand/`). The client did **not** send colour codes, fonts, or a brand
guide, so these are extracted values, not supplied ones. They need signing off.

## Logo files we hold

| File | Size | What it is | Use |
|---|---|---|---|
| `lockup-dark-text.jpg` | 1280×319 | Full lockup, black wordmark, teal mark, deep-teal "REAL ESTATE" | Light backgrounds |
| `lockup-light-text.jpg` | 1240×305 | Full lockup, teal mark, white wordmark | Dark backgrounds |
| `lockup-all-white.jpg` | 1240×305 | Entire lockup in white | Photos, dark bands |
| `mark-teal.jpg` | 492×449 | Icon only, teal gradient | Favicon, avatar, watermark |
| `mark-black.jpg` | 492×449 | Icon only, solid black | Single-colour use |
| `mark-white.jpg` | 492×449 | Icon only, solid white | On dark |

**These are all JPEGs, so none of them have transparency.** Every one has a baked-in
white rectangle behind it. They cannot be placed over a photograph or a dark band
without showing a white box. We need SVG or transparent PNG from the client's designer
before launch — this is blocking for the header and the footer.

## Colour

Sampled from the gradient in `mark-teal.jpg`.

| Token | Hex | Where it came from |
|---|---|---|
| `--brand-teal-light` | `#0D90BE` | Light end of the logo gradient (95th percentile) |
| `--brand-teal` | `#0C7EA3` | Midpoint of the gradient — the primary brand colour |
| `--brand-teal-deep` | `#0A4354` | Dark end of the gradient (5th percentile) |
| `--brand-ink` | `#000000` | The wordmark is pure black |

The mark is a linear gradient running roughly bottom-left to top-right:

    linear-gradient(45deg, #0A4354, #0D90BE)

### Notes on using it

- The teal is the only colour in the identity. Everything else has to come from
  neutrals, so the neutrals need to be chosen deliberately rather than defaulted to grey.
- `#0C7EA3` on white gives a contrast ratio of about 4.6:1 — fine for large text and UI,
  **too low for body copy**. Use `--brand-teal-deep` for small text on light grounds.
- The client's own marketing (the Garett Court flyers on Instagram) uses black and gold,
  which is a different palette from the teal logo. Worth asking whether gold is meant to
  be part of the brand or was specific to that one development.

## Type

The client sent no fonts and no brand guide.

From the logo artwork:

- **Wordmark** — a heavy geometric sans, tight tracking, flat terminals. Closest common
  matches are Montserrat ExtraBold or Poppins Bold. Not confirmed.
- **"REAL ESTATE"** — a light sans, very wide letter-spacing, roughly 0.35em.

Ask the designer what the wordmark font actually is. If we can't get it, the safe route
is to keep the logo as artwork and choose a separate typeface for the site rather than
guessing at a match and getting it slightly wrong everywhere.

## Positioning, in the client's own words

> Africa's Luxury Real Estate Authority
>
> Structured for Wealth. Built for Legacy.

The written tone is formal, confident and investment-led — closer to a private bank than
to a typical Nigerian estate agency. The design should follow that: restrained, dark,
generous spacing, photography doing the selling. Full copy in `docs/client-content.md`.
