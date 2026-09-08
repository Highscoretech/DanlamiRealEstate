/**
 * Property listings.
 *
 * SOURCE WARNING: every entry below was read off the client's Instagram grid
 * (assets/reference/instagram/), not supplied as data. Prices and locations are
 * legible; title documents, plot sizes, payment plans and availability are not
 * known. Confirm all of it with the client before launch —
 * docs/open-questions.md item 13.
 *
 * Photography: none usable yet. `image: null` renders the designed stand-in
 * panel. Drop a file in /public/properties/ and set the path to swap it in.
 */

export type Property = {
  slug: string;
  title: string;
  location: string;
  price: string;
  priceNote?: string;
  status: "Available" | "Coming soon" | "Sold";
  beds?: number;
  type: string;
  summary: string;
  features: string[];
  image: string | null;
  confirmed: boolean;
};

export const properties: Property[] = [
  {
    slug: "2-bedroom-apartment-osapa",
    title: "2 Bedroom Apartment",
    location: "Osapa, Lekki",
    price: "₦180,000,000",
    status: "Available",
    beds: 2,
    type: "Apartment",
    summary:
      "A luxury two bedroom apartment with a swimming pool, finished to a high specification and built for both comfortable living and short-let income.",
    features: [
      "24/7 light",
      "24/7 security",
      "Clean water",
      "Ensuite rooms",
      "Aesthetic pop ceilings",
      "Top quality tiles",
      "Smart automation",
      "Spacious living room",
      "Custom vanity",
      "Parking space",
      "Fully fitted kitchen",
      "Automated lighting",
      "Balcony",
      "Bluetooth speakers",
      "Serene environment",
      "Swimming pool",
    ],
    image: null,
    confirmed: false,
  },
  {
    slug: "5-bedroom-duplex-ikota-400",
    title: "5 Bedroom Duplex",
    location: "Ikota Villa, Lekki",
    price: "₦400,000,000",
    status: "Available",
    beds: 5,
    type: "Duplex",
    summary:
      "A five bedroom duplex in Ikota Villa, one of the most established residential pockets on the Lekki corridor.",
    features: [],
    image: null,
    confirmed: false,
  },
  {
    slug: "5-bedroom-duplex-ikota-570",
    title: "5 Bedroom Duplex",
    location: "Ikota Villa, Lekki",
    price: "₦570,000,000",
    status: "Available",
    beds: 5,
    type: "Duplex",
    summary:
      "A five bedroom duplex in Ikota Villa, finished and ready for inspection.",
    features: [],
    image: null,
    confirmed: false,
  },
  {
    slug: "5-bedroom-duplex-ikota-650",
    title: "5 Bedroom Duplex",
    location: "Ikota Villa, Lekki",
    price: "₦650,000,000",
    status: "Available",
    beds: 5,
    type: "Duplex",
    summary:
      "A five bedroom duplex in Ikota Villa with contemporary detailing throughout.",
    features: [],
    image: null,
    confirmed: false,
  },
  {
    slug: "5-bedroom-duplex-cowrie-creek",
    title: "5 Bedroom Duplex",
    location: "Cowrie Creek, Lekki",
    price: "₦1,400,000,000",
    status: "Available",
    beds: 5,
    type: "Duplex",
    summary:
      "A five bedroom duplex in Cowrie Creek, a waterfront address and one of the strongest capital-appreciation locations on the peninsula.",
    features: [],
    image: null,
    confirmed: false,
  },
  {
    slug: "5-bedroom-duplex-osapa",
    title: "5 Bedroom Duplex",
    location: "Osapa, Lekki",
    price: "₦1,700,000,000",
    status: "Available",
    beds: 5,
    type: "Duplex",
    summary:
      "A five bedroom duplex in Osapa, at the top of the current portfolio.",
    features: [],
    image: null,
    confirmed: false,
  },
];

/** Signature Developments — the client's own in-house projects. */
export const developments = [
  {
    slug: "garett-court",
    title: "Garett Court",
    location: "Lekki, Lagos",
    status: "Coming soon" as const,
    summary:
      "An apartment development introduced on the company's own channels. Details still to be confirmed by the client.",
    image: null,
    confirmed: false,
  },
];
