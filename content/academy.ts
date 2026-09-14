/**
 * Dan Lami Academy — courses sold on the client's Selar storefront
 * (selar.com/m/Danlamiojo). Titles, price bands and the star rating were
 * read directly off that storefront on 9 Sep 2026; buying happens on Selar,
 * not on this site, so every course links out to the store.
 */

export const academy = {
  storeUrl: "https://selar.com/m/Danlamiojo",
  courses: [
    {
      slug: "pitch-like-a-closer",
      title: "Pitch Like a Closer",
      priceRange: "₦25,000",
      summary:
        "A pitching masterclass by Danlami Ojo — his approach to pitching real estate as an investment opportunity, not just a listing.",
      image: "/academy/pitch-like-a-closer.png",
    },
    {
      slug: "the-blueprint-to-selling-luxury-real-estate",
      title: "The Blueprint to Selling Luxury Real Estate",
      priceRange: "₦99,000",
      summary:
        "Your fast-track to a successful real estate career — blueprints, scripts and systems built from real closings, used by top closers doing billions in sales.",
      image: "/academy/blueprint-luxury-real-estate.png",
      /** Portrait poster — anchor near the top so the title shows instead
          of the centred crop landing mid-torso. */
      imageFocus: "center 12%",
    },
  ],
} as const;
