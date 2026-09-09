/**
 * Guides.
 *
 * The portals win on listing volume; they lose on explanation. These pages
 * answer the questions a buyer actually types before they are ready to look at
 * a property — and they are the client's own positioning made concrete: "we
 * don't just sell property, we help you understand the investment."
 *
 * Everything factual here was checked against public legal and industry
 * sources. Nothing states a price, a return or a timeline. Have the client's
 * solicitor read both guides before launch — see docs/seo.md.
 */

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  updated: string;
};

export const guides: Guide[] = [
  {
    slug: "land-titles-in-lagos",
    title: "Land Titles in Lagos, Explained",
    metaTitle:
      "Lagos Land Titles: C of O, Governor's Consent, Excision & Gazette",
    metaDescription:
      "What a Certificate of Occupancy, Governor's Consent, Excision and Gazette actually mean in Lagos, how they relate, and what to ask for before you pay for a property.",
    summary:
      "A Certificate of Occupancy is not the same as Governor's Consent, and an excision is not a title. What each document does, and which one your purchase needs.",
    updated: "2026-09-09",
  },
  {
    slug: "buying-property-in-lagos-from-abroad",
    title: "Buying Property in Lagos From Abroad",
    metaTitle:
      "Buying Property in Lagos From Abroad — A Guide for Diaspora Buyers",
    metaDescription:
      "How Nigerians abroad buy Lagos property without being in Lagos: verification, documentation, paying across currencies, and who you need on the ground.",
    summary:
      "You can complete a Lagos purchase without being in Lagos. The part people skip is verification — and that, not outright fraud, is where most money is lost.",
    updated: "2026-09-09",
  },
];

export function findGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
