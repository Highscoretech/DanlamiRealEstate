/**
 * Location landing pages.
 *
 * People do not search for "Dan Lami Real Estate". They search for
 * "5 bedroom fully detached duplex Ikota Villa Estate" and "houses for sale in
 * Osapa London". These pages exist to answer those searches with a real page
 * rather than making Google guess from the listings index.
 *
 * STRATEGY NOTE: the head terms ("houses for sale in Lekki") belong to the
 * portals — PropertyPro lists ~11,000 Lekki properties and Nigeria Property
 * Centre ~33,000. Six listings will never outrank that on volume. What these
 * pages can win is the long tail: a named estate, a specific configuration, and
 * genuine local detail written by someone who actually sells there. That is the
 * one thing an aggregator cannot fake.
 *
 * COPY NOTE: the geography and commute figures below are drawn from public area
 * guides and are stated plainly, without claims about prices, appreciation or
 * infrastructure timelines that we cannot stand behind. The client should
 * enrich these with what they know first-hand — that is what will make these
 * pages beat the portals. See docs/seo.md.
 */

export type Area = {
  slug: string;
  /** Short name, used in body copy. */
  name: string;
  /** How the area is written on a listing, e.g. "Osapa London, Lekki". */
  fullName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  /** Short factual points. Rendered as a definition list on the page. */
  facts: { label: string; value: string }[];
  /** Values of `property.location` that belong to this area. */
  locations: string[];
  /** Other area slugs worth linking to from this page. */
  related: string[];
  /**
   * Headline areas shown as browse pills: Lekki, Victoria Island, Ikoyi and
   * Ajah. Sub-areas are not pills — they are reached by opening their parent
   * area, which is how the client wants people to drill in (9 Sep 2026).
   */
  primary?: boolean;
  /** Slugs of the neighbourhoods inside this area, shown on its page. */
  children?: string[];
};

/** The areas shown as browse pills across the site. */
export const primaryAreas = () => areas.filter((a) => a.primary);

export const areas: Area[] = [
  {
    slug: "lekki",
    name: "Lekki",
    fullName: "Lekki, Lagos",
    h1: "Property for Sale in Lekki, Lagos",
    metaTitle: "Property for Sale in Lekki, Lagos — Luxury Duplexes & Apartments",
    metaDescription:
      "Duplexes and apartments for sale in Lekki, Lagos — Osapa London, Ikota Villa Estate and Cowrie Creek. Prices, specifications and inspection bookings.",
    intro: [
      "Lekki is a peninsula: Victoria Island and Ikoyi sit to its west, the Atlantic to the south, Lagos Lagoon to the north and Lekki Lagoon to the east. It is the corridor along which most of the city's recent premium residential development has run, and it holds the largest concentration of newly built detached and semi-detached duplexes in Lagos.",
      "The corridor is not one market but several. Osapa London and Ikota Villa Estate are established residential neighbourhoods of gated streets; Cowrie Creek is waterfront and sits at the top of the range. What a naira buys differs sharply between them, which is the first thing worth understanding before you shortlist anything.",
      "Below are the Lekki properties we currently hold. Title documentation and payment terms are shared on request, and we will walk you through both before you commit to anything.",
    ],
    facts: [
      { label: "Position", value: "Peninsula east of Victoria Island and Ikoyi" },
      { label: "Main artery", value: "Lekki-Epe Expressway" },
      { label: "Neighbourhoods we sell in", value: "Osapa London, Ikota Villa Estate, Cowrie Creek" },
      { label: "Typical stock", value: "Fully-detached and semi-detached duplexes, terraces, apartments" },
    ],
    locations: [
      "Osapa, Lekki",
      "Ikota Villa Estate, Lekki",
      "Cowrie Creek, Lekki",
      "Osapa London, Lekki",
    ],
    related: ["osapa-london", "ikota-villa-estate", "cowrie-creek"],
    primary: true,
    children: ["osapa-london", "ikota-villa-estate", "cowrie-creek"],
  },
  {
    slug: "osapa-london",
    name: "Osapa London",
    fullName: "Osapa London, Lekki",
    h1: "Property for Sale in Osapa London, Lekki",
    metaTitle: "Property for Sale in Osapa London, Lekki — Duplexes & Apartments",
    metaDescription:
      "Duplexes and apartments for sale in Osapa London, Lekki, Lagos. Current listings with prices, specifications and an area guide from Dan Lami Real Estate.",
    intro: [
      "Osapa London sits in the heart of Lekki, between the 5th and 6th roundabouts of the Lekki-Epe Expressway, running from Jakande Estate across to Agungi bus stop. More than half of its housing sits inside gated estates, and the stock is largely newly built — duplexes, terraces and townhouses, both detached and semi-detached.",
      "Its appeal is position. Victoria Island is roughly fifteen minutes away off-peak and around thirty-five in the morning rush, which is what makes it work for people who need to be on the Island but do not want to pay Ikoyi prices to live near it. The area has been described as affordable luxury, and the mix of professionals, young families and returnees gives it a cosmopolitan character.",
      "It is also where our own Signature Development, Garelt Court, is being built. These are the Osapa London properties currently available.",
    ],
    facts: [
      { label: "Where", value: "Between the 5th and 6th roundabouts, Lekki-Epe Expressway" },
      { label: "Extent", value: "Jakande Estate across to Agungi bus stop" },
      { label: "To Victoria Island", value: "About 15 minutes off-peak, about 35 in the morning rush" },
      { label: "Housing", value: "Mostly gated estates; new-build duplexes, terraces and townhouses" },
    ],
    locations: ["Osapa, Lekki", "Osapa London, Lekki"],
    related: ["lekki", "ikota-villa-estate", "cowrie-creek"],
  },
  {
    slug: "ikota-villa-estate",
    name: "Ikota Villa Estate",
    fullName: "Ikota Villa Estate, Lekki",
    h1: "Property for Sale in Ikota Villa Estate, Lekki",
    metaTitle: "5 Bedroom Duplexes for Sale in Ikota Villa Estate, Lekki",
    metaDescription:
      "Five bedroom fully-detached duplexes with BQ for sale in Ikota Villa Estate, Lekki, Lagos. Prices, features and inspection bookings with Dan Lami Real Estate.",
    intro: [
      "Ikota Villa Estate is one of the longer-established gated estates on the Lekki corridor, sitting off the Lekki-Epe Expressway near Ikota. It remains a consistent source of fully-detached family housing rather than the higher-density stock found closer to the expressway itself, which is why it holds its appeal for buyers who want a house and a compound rather than an apartment.",
      "The estate's defining product is the five bedroom fully-detached duplex with a boys' quarters — usually all rooms ensuite, fitted kitchen, and in many cases a pool. That configuration is what we hold here.",
      "Our current Ikota Villa Estate listings are finished and available to inspect.",
    ],
    facts: [
      { label: "Where", value: "Off the Lekki-Epe Expressway, Ikota" },
      { label: "Type", value: "Long-established gated estate" },
      { label: "Defining product", value: "5 bedroom fully-detached duplex with BQ" },
      { label: "Our range here", value: "₦400,000,000 to ₦650,000,000" },
    ],
    locations: ["Ikota Villa Estate, Lekki"],
    related: ["lekki", "osapa-london", "cowrie-creek"],
  },
  {
    slug: "cowrie-creek",
    name: "Cowrie Creek",
    fullName: "Cowrie Creek, Lekki",
    h1: "Property for Sale in Cowrie Creek, Lekki",
    metaTitle: "Waterfront Homes for Sale in Cowrie Creek, Lekki, Lagos",
    metaDescription:
      "Waterfront property for sale in Cowrie Creek Estate, Lekki, Lagos. Current listings, specifications and inspections with Dan Lami Real Estate.",
    intro: [
      "Cowrie Creek is a waterfront estate on the Lekki peninsula and sits at the upper end of the residential market there. Waterfront land is finite in a way that inland plots are not, and that scarcity is most of the argument for buying here.",
      "Stock moves accordingly. If nothing below is currently available, it is worth registering what you are looking for rather than waiting for a listing to appear.",
    ],
    facts: [
      { label: "Where", value: "Waterfront estate, Lekki peninsula" },
      { label: "Position in the market", value: "Upper end of Lekki residential" },
      { label: "Typical stock", value: "Detached and semi-detached duplexes" },
      { label: "Our range here", value: "₦1,400,000,000" },
    ],
    locations: ["Cowrie Creek, Lekki"],
    related: ["lekki", "osapa-london", "ikota-villa-estate"],
  },

  /* Ikoyi, Victoria Island and Ajah — the areas the business covers
     alongside Lekki. No listings held in them yet, so the pages invite
     registration and list the neighbourhoods we cover inside each. */
  {
    slug: "ikoyi",
    name: "Ikoyi",
    fullName: "Ikoyi, Lagos",
    h1: "Property for Sale in Ikoyi, Lagos",
    metaTitle: "Property for Sale in Ikoyi, Lagos — Luxury Homes & Apartments",
    metaDescription:
      "Luxury property in Ikoyi, Lagos with Dan Lami Real Estate. Tell us what you are looking for and we will source it — apartments, penthouses and detached homes.",
    intro: [
      "Ikoyi occupies the eastern part of Lagos Island, separated from Victoria Island by Five Cowrie Creek, and is the most established luxury address in Lagos. Its stock runs from serviced luxury apartments and penthouses to detached homes on mature, quiet streets.",
      "We cover Ikoyi as part of our luxury sales and acquisition work. Listings at this end of the market often move privately rather than publicly, so if you are buying here, tell us what you are looking for and we will source and evaluate it for you.",
    ],
    facts: [
      { label: "Where", value: "Eastern Lagos Island, across Five Cowrie Creek from Victoria Island" },
      { label: "Character", value: "The most established luxury district in Lagos" },
      { label: "Typical stock", value: "Luxury apartments, penthouses, detached residences" },
      { label: "How we work here", value: "Sourcing and acquisition on request" },
    ],
    locations: ["Ikoyi, Lagos"],
    related: ["victoria-island", "lekki"],
    primary: true,
    children: ["banana-island", "parkview-estate", "old-ikoyi"],
  },
  {
    slug: "victoria-island",
    name: "Victoria Island",
    fullName: "Victoria Island, Lagos",
    h1: "Property for Sale in Victoria Island, Lagos",
    metaTitle: "Property for Sale in Victoria Island, Lagos — Apartments & Investments",
    metaDescription:
      "Property in Victoria Island, Lagos with Dan Lami Real Estate — residential and investment opportunities in the city's principal business district.",
    intro: [
      "Victoria Island is the principal business district of Lagos and one of its strongest short-let and rental markets, with residential towers and serviced apartments sitting alongside corporate offices and embassies.",
      "We cover Victoria Island for both residence and investment. If you are looking to buy here, register what you are looking for and we will bring you suitable opportunities as they come to market.",
    ],
    facts: [
      { label: "Where", value: "Between Ikoyi and the Lekki peninsula" },
      { label: "Character", value: "Principal business district; strong short-let demand" },
      { label: "Typical stock", value: "Residential towers, serviced apartments" },
      { label: "How we work here", value: "Sourcing and acquisition on request" },
    ],
    locations: ["Victoria Island, Lagos"],
    related: ["ikoyi", "lekki"],
    primary: true,
    children: ["oniru", "eko-atlantic"],
  },

  {
    slug: "ajah",
    name: "Ajah",
    fullName: "Ajah, Lagos",
    h1: "Property for Sale in Ajah, Lagos",
    metaTitle: "Property for Sale in Ajah, Lagos — Duplexes, Terraces & Land",
    metaDescription:
      "Property in Ajah, Lagos with Dan Lami Real Estate — duplexes, terraces and land along the eastern end of the Lekki-Epe Expressway.",
    intro: [
      "Ajah sits along the Lekki-Epe Expressway east of Lekki and is one of the busiest growth corridors in Lagos, with gated estates, terraces and land opportunities at more accessible price points than the inner peninsula.",
      "We cover Ajah for buyers and investors looking at the eastern corridor. Register what you are looking for and we will bring you opportunities that fit.",
    ],
    facts: [
      { label: "Where", value: "Eastern end of the Lekki-Epe Expressway" },
      { label: "Character", value: "Fast-growing corridor of gated estates" },
      { label: "Typical stock", value: "Duplexes, terraces, land" },
      { label: "How we work here", value: "Sourcing and acquisition on request" },
    ],
    locations: ["Ajah, Lagos"],
    related: ["lekki", "victoria-island"],
    primary: true,
    children: ["sangotedo", "abraham-adesanya"],
  },

  /* Neighbourhoods inside the four headline areas. Geography only — no
     price, appreciation or infrastructure claims, since we hold no
     listings in most of them yet. The client should enrich these with
     first-hand detail. See docs/seo.md. */
  {
    slug: "banana-island",
    name: "Banana Island",
    fullName: "Banana Island, Ikoyi",
    h1: "Property for Sale in Banana Island, Ikoyi",
    metaTitle: "Property for Sale in Banana Island, Ikoyi, Lagos",
    metaDescription:
      "Luxury property in Banana Island, Ikoyi, Lagos. Sourcing and acquisition with Dan Lami Real Estate — tell us what you are looking for.",
    intro: [
      "Banana Island is a man-made island off Ikoyi, reached by a single causeway, and is the most exclusive residential address in Lagos. It is fully planned, with underground services and its own security regime.",
      "Stock here rarely reaches the open market. If you are buying on Banana Island, tell us your requirement and we will source and evaluate it privately.",
    ],
    facts: [
      { label: "Where", value: "Man-made island off Ikoyi, single causeway access" },
      { label: "Character", value: "The most exclusive address in Lagos" },
      { label: "Typical stock", value: "Detached residences, luxury apartments" },
      { label: "How we work here", value: "Private sourcing on request" },
    ],
    locations: ["Banana Island, Ikoyi"],
    related: ["ikoyi", "victoria-island"],
  },
  {
    slug: "parkview-estate",
    name: "Parkview Estate",
    fullName: "Parkview Estate, Ikoyi",
    h1: "Property for Sale in Parkview Estate, Ikoyi",
    metaTitle: "Property for Sale in Parkview Estate, Ikoyi, Lagos",
    metaDescription:
      "Property in Parkview Estate, Ikoyi, Lagos with Dan Lami Real Estate. Register your requirement for this gated Ikoyi estate.",
    intro: [
      "Parkview Estate is a gated estate in Ikoyi, known for being quiet, low-density and tightly managed, with a mix of detached houses and apartment blocks.",
      "We source in Parkview on request. Tell us the configuration you need and we will bring you what fits.",
    ],
    facts: [
      { label: "Where", value: "Gated estate, Ikoyi" },
      { label: "Character", value: "Quiet, low-density, tightly managed" },
      { label: "Typical stock", value: "Detached houses and apartments" },
      { label: "How we work here", value: "Sourcing and acquisition on request" },
    ],
    locations: ["Parkview Estate, Ikoyi"],
    related: ["ikoyi", "banana-island"],
  },
  {
    slug: "old-ikoyi",
    name: "Old Ikoyi",
    fullName: "Old Ikoyi, Lagos",
    h1: "Property for Sale in Old Ikoyi, Lagos",
    metaTitle: "Property for Sale in Old Ikoyi, Lagos",
    metaDescription:
      "Property in Old Ikoyi, Lagos with Dan Lami Real Estate — the original Ikoyi streets. Sourcing and acquisition on request.",
    intro: [
      "Old Ikoyi is the original residential core of Ikoyi — mature, tree-lined streets close to the golf club and the waterfront, where much of the stock is being redeveloped into low-density apartment schemes.",
      "We cover Old Ikoyi for buyers who want the address rather than a new-build tower. Register what you are looking for.",
    ],
    facts: [
      { label: "Where", value: "Original residential core of Ikoyi" },
      { label: "Character", value: "Mature, tree-lined, low-density" },
      { label: "Typical stock", value: "Redeveloped apartment schemes, older detached homes" },
      { label: "How we work here", value: "Sourcing and acquisition on request" },
    ],
    locations: ["Old Ikoyi, Lagos"],
    related: ["ikoyi", "parkview-estate"],
  },
  {
    slug: "oniru",
    name: "Oniru",
    fullName: "Oniru, Victoria Island",
    h1: "Property for Sale in Oniru, Victoria Island",
    metaTitle: "Property for Sale in Oniru, Victoria Island, Lagos",
    metaDescription:
      "Property in Oniru, Victoria Island, Lagos with Dan Lami Real Estate — apartments and short-let investment stock near the beachfront.",
    intro: [
      "Oniru sits at the eastern end of Victoria Island, between VI proper and the Lekki peninsula, with beach access and a dense mix of apartments, hotels and restaurants.",
      "It is one of the stronger short-let markets in Lagos, which is why it comes up often with investor clients. Register what you are looking for and we will bring you opportunities.",
    ],
    facts: [
      { label: "Where", value: "Eastern Victoria Island, towards the Lekki peninsula" },
      { label: "Character", value: "Dense, mixed-use, beach access" },
      { label: "Typical stock", value: "Apartments and serviced units" },
      { label: "How we work here", value: "Sourcing and acquisition on request" },
    ],
    locations: ["Oniru, Victoria Island"],
    related: ["victoria-island", "ikoyi"],
  },
  {
    slug: "eko-atlantic",
    name: "Eko Atlantic",
    fullName: "Eko Atlantic City, Lagos",
    h1: "Property for Sale in Eko Atlantic City, Lagos",
    metaTitle: "Property for Sale in Eko Atlantic City, Lagos",
    metaDescription:
      "Property in Eko Atlantic City, Lagos with Dan Lami Real Estate — the planned city reclaimed from the Atlantic, beside Victoria Island.",
    intro: [
      "Eko Atlantic is a planned city built on land reclaimed from the Atlantic, adjoining Victoria Island and protected by the Great Wall of Lagos. It is being developed in phases, with its own power, drainage and road network.",
      "Buying here means buying into a project still under construction, so the sequencing matters as much as the unit. Tell us what you are considering and we will walk you through it.",
    ],
    facts: [
      { label: "Where", value: "Reclaimed land adjoining Victoria Island" },
      { label: "Character", value: "Planned city, phased delivery, own infrastructure" },
      { label: "Typical stock", value: "Apartment towers, commercial plots" },
      { label: "How we work here", value: "Advisory and acquisition on request" },
    ],
    locations: ["Eko Atlantic, Lagos"],
    related: ["victoria-island", "ikoyi"],
  },
  {
    slug: "sangotedo",
    name: "Sangotedo",
    fullName: "Sangotedo, Ajah",
    h1: "Property for Sale in Sangotedo, Ajah",
    metaTitle: "Property for Sale in Sangotedo, Ajah, Lagos",
    metaDescription:
      "Property in Sangotedo, Ajah, Lagos with Dan Lami Real Estate — gated estates, terraces and land on the eastern corridor.",
    intro: [
      "Sangotedo sits east of Ajah along the Lekki-Epe Expressway and has become one of the busier estate-development pockets on the corridor, with a large concentration of gated schemes.",
      "We cover Sangotedo for buyers and investors working to a budget that does not stretch to the inner peninsula. Register your requirement.",
    ],
    facts: [
      { label: "Where", value: "East of Ajah, Lekki-Epe Expressway" },
      { label: "Character", value: "Concentration of gated estate schemes" },
      { label: "Typical stock", value: "Duplexes, terraces, land" },
      { label: "How we work here", value: "Sourcing and acquisition on request" },
    ],
    locations: ["Sangotedo, Ajah"],
    related: ["ajah", "lekki"],
  },
  {
    slug: "abraham-adesanya",
    name: "Abraham Adesanya",
    fullName: "Abraham Adesanya, Ajah",
    h1: "Property for Sale in Abraham Adesanya, Ajah",
    metaTitle: "Property for Sale in Abraham Adesanya, Ajah, Lagos",
    metaDescription:
      "Property around Abraham Adesanya, Ajah, Lagos with Dan Lami Real Estate — estates and land off the Lekki-Epe Expressway.",
    intro: [
      "Abraham Adesanya is a established junction and estate area in Ajah, off the Lekki-Epe Expressway, and one of the recognised reference points on that stretch of the corridor.",
      "We cover it as part of our Ajah work. Tell us what you are looking for and we will bring you what fits.",
    ],
    facts: [
      { label: "Where", value: "Off the Lekki-Epe Expressway, Ajah" },
      { label: "Character", value: "Established junction and estate area" },
      { label: "Typical stock", value: "Duplexes, terraces, land" },
      { label: "How we work here", value: "Sourcing and acquisition on request" },
    ],
    locations: ["Abraham Adesanya, Ajah"],
    related: ["ajah", "sangotedo"],
  },
];

export function findArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
