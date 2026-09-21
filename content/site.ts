/**
 * Site-wide facts and navigation.
 *
 * Contact details were read off the client's Instagram captions, not supplied
 * directly — see docs/open-questions.md items 9 and 14 before launch.
 */

export const site = {
  name: "Dan Lami Real Estate",
  legalName: "Dan Lami Real Estate Ltd",
  authority: "Africa's Luxury Real Estate Authority",
  strapline: "Structured for Wealth. Built for Legacy.",
  domain: "danlamirealestate.com",
  disciplines: [
    "Luxury Real Estate",
    "Investment Advisory",
    "Development",
    "Strategic Partnerships",
  ],
  location: "Lagos, Nigeria",

  /**
   * Used for LocalBusiness structured data. `streetAddress` is deliberately
   * empty: publishing a guessed office address would be worse than publishing
   * none, and Google penalises inconsistent NAP data. Fill it in from the
   * client's Google Business Profile before launch — docs/seo.md.
   */
  address: {
    streetAddress: "",
    locality: "Lekki",
    region: "Lagos",
    country: "NG",
    postalCode: "",
  },

  /** Areas the business covers (client-confirmed 9 Sep 2026), for areaServed. */
  areaServed: [
    "Ikoyi, Lagos",
    "Victoria Island, Lagos",
    "Lekki, Lagos",
    "Osapa London, Lagos",
    "Ikota, Lagos",
    "Cowrie Creek, Lagos",
    "Lagos, Nigeria",
  ],

  /** Naira band across the current portfolio, for LocalBusiness priceRange. */
  priceRange: "₦₦₦₦",

  // UNCONFIRMED — from an Instagram caption.
  phone: "07032535735",
  phoneHref: "tel:+2347032535735",
  phoneE164: "+2347032535735",
  email: "danlamirealestate@gmail.com",
  whatsapp: "https://wa.me/2347032535735",

  social: {
    instagram: "https://instagram.com/danlamirealestate",
    facebook: "#",
    linkedin: "#",
    youtube: "https://www.youtube.com/@danlamiojo",
  },
} as const;

/** Order set by the client, 9 Sep 2026: Developments first. Partnerships
    is a dropdown — Development Partnerships, then Sales Partnership. */
export const nav: ReadonlyArray<{
  href: string;
  label: string;
  children?: ReadonlyArray<{ href: string; label: string }>;
}> = [
  { href: "/developments", label: "Developments" },
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Services" },
  {
    href: "/partnerships",
    label: "Partnerships",
    children: [
      { href: "/partnerships", label: "Development Partnerships" },
      { href: "/partnerships/sales", label: "Sales Partnership" },
    ],
  },
  { href: "/investors", label: "Investors" },
  { href: "/academy", label: "Academy" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * The "Areas we cover" column is here for search as much as for people: it
 * gives every location page an internal link from every page on the site,
 * which is what stops them being treated as orphans.
 */
export const footerNav = {
  Explore: [
    { href: "/developments", label: "Signature Developments" },
    { href: "/properties", label: "Properties" },
    { href: "/services", label: "What We Do" },
    { href: "/partnerships", label: "Development Partnerships" },
    { href: "/partnerships/sales", label: "Sales Partnership" },
  ],
  "Areas we cover": [
    { href: "/locations/ikoyi", label: "Property in Ikoyi" },
    { href: "/locations/victoria-island", label: "Property in Victoria Island" },
    { href: "/locations/lekki", label: "Property in Lekki" },
    { href: "/locations/osapa-london", label: "Property in Osapa London" },
    { href: "/locations/ikota-villa-estate", label: "Property in Ikota Villa Estate" },
    { href: "/locations/cowrie-creek", label: "Property in Cowrie Creek" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/philosophy", label: "Our Philosophy" },
    { href: "/the-closer", label: "The Closer" },
    { href: "/academy", label: "Dan Lami Academy" },
    { href: "/partners", label: "Partner With Us" },
  ],
  "Invest & learn": [
    { href: "/investors", label: "For Investors" },
    { href: "/diaspora", label: "For Diaspora Clients" },
    { href: "/guides", label: "The Intelligent Investor" },
    { href: "/guides/land-titles-in-lagos", label: "Lagos Land Titles Explained" },
    { href: "/guides/buying-property-in-lagos-from-abroad", label: "Buying From Abroad" },
    { href: "/faq", label: "Questions Answered" },
    { href: "/contact", label: "Book a Consultation" },
  ],
} as const;
