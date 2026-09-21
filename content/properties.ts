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
  /** Additional photos shown as a gallery on the property page. */
  images?: string[];
  /**
   * "Why this opportunity" — the 2–3 sentence investment thesis the 2026
   * brand direction asks for on every card (§9). This has to be the client's
   * own market judgement, so it stays undefined until Danlami writes it; the
   * card simply omits the block rather than guessing at a thesis.
   */
  thesis?: string;
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
    image: "/properties/2-bedroom-apartment-osapa.jpg",
    confirmed: false,
  },
  {
    slug: "5-bedroom-duplex-ikota-400",
    title: "5 Bedroom Fully-Detached Duplex",
    location: "Ikota Villa Estate, Lekki",
    price: "₦400,000,000",
    status: "Available",
    beds: 5,
    type: "Fully-detached duplex",
    summary:
      "A beautiful five bedroom fully-detached duplex with a BQ at Ikota Villa Estate, one of the most established residential pockets on the Lekki corridor.",
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
      "Boys' quarters (BQ)",
    ],
    image: "/properties/ik400-1.jpg",
    images: [
      "/properties/ik400-2.jpg",
      "/properties/ik400-3.jpg",
      "/properties/ik400-4.jpg",
      "/properties/ik400-5.jpg",
      "/properties/ik400-6.jpg",
      "/properties/ik400-7.jpg",
      "/properties/ik400-8.jpg",
      "/properties/ik400-9.jpg",
      "/properties/ik400-10.jpg",
      "/properties/ik400-11.jpg",
    ],
    confirmed: false,
  },
  {
    slug: "5-bedroom-duplex-ikota-570",
    title: "5 Bedroom Fully-Detached Duplex",
    location: "Ikota Villa Estate, Lekki",
    price: "₦570,000,000",
    status: "Available",
    beds: 5,
    type: "Fully-detached duplex",
    summary:
      "A luxury five bedroom fully-detached duplex with a BQ and a swimming pool at Ikota Villa Estate, finished and ready for inspection.",
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
      "Boys' quarters (BQ)",
    ],
    image: "/properties/ik570-1.jpg",
    images: [
      "/properties/ik570-2.jpg",
      "/properties/ik570-3.jpg",
      "/properties/ik570-4.jpg",
      "/properties/ik570-5.jpg",
      "/properties/ik570-6.jpg",
      "/properties/ik570-7.jpg",
      "/properties/ik570-8.jpg",
      "/properties/ik570-9.jpg",
      "/properties/ik570-10.jpg",
      "/properties/ik570-11.jpg",
      "/properties/ik570-12.jpg",
      "/properties/ik570-13.jpg",
    ],
    confirmed: false,
  },
  {
    slug: "5-bedroom-duplex-ikota-650",
    title: "5 Bedroom Fully-Detached Duplex",
    location: "Ikota Villa Estate, Lekki",
    price: "₦650,000,000",
    status: "Available",
    beds: 5,
    type: "Fully-detached duplex",
    summary:
      "A beautiful five bedroom fully-detached duplex with a BQ and a swimming pool at Ikota Villa Estate, with contemporary detailing throughout.",
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
      "Boys' quarters (BQ)",
    ],
    image: "/properties/ik650-1.jpg",
    images: [
      "/properties/ik650-2.jpg",
      "/properties/ik650-3.jpg",
      "/properties/ik650-4.jpg",
      "/properties/ik650-5.jpg",
      "/properties/ik650-6.jpg",
      "/properties/ik650-7.jpg",
      "/properties/ik650-8.jpg",
      "/properties/ik650-9.jpg",
      "/properties/ik650-10.jpg",
      "/properties/ik650-11.jpg",
      "/properties/ik650-12.jpg",
      "/properties/ik650-13.jpg",
    ],
    confirmed: false,
  },
  {
    slug: "5-bedroom-duplex-cowrie-creek",
    title: "5 Bedroom Semi-Detached Duplex",
    location: "Cowrie Creek, Lekki",
    price: "₦1,400,000,000",
    status: "Available",
    beds: 5,
    type: "Semi-detached duplex",
    summary:
      "A luxury five bedroom semi-detached duplex with a BQ and a swimming pool at Cowrie Creek, a waterfront address and one of the strongest capital-appreciation locations on the peninsula.",
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
      "Cinema",
      "Swimming pool",
      "Boys' quarters (BQ)",
    ],
    image: "/properties/cc14-1.jpg",
    images: [
      "/properties/cc14-2.jpg",
      "/properties/cc14-3.jpg",
      "/properties/cc14-4.jpg",
      "/properties/cc14-5.jpg",
      "/properties/cc14-6.jpg",
      "/properties/cc14-7.jpg",
      "/properties/cc14-8.jpg",
      "/properties/cc14-9.jpg",
      "/properties/cc14-10.jpg",
      "/properties/cc14-11.jpg",
      "/properties/cc14-12.jpg",
      "/properties/cc14-13.jpg",
      "/properties/cc14-14.jpg",
      "/properties/cc14-15.jpg",
    ],
    confirmed: false,
  },
  {
    slug: "5-bedroom-duplex-osapa",
    title: "5 Bedroom Semi-Detached Duplex",
    location: "Osapa, Lekki",
    price: "₦1,700,000,000",
    status: "Available",
    beds: 5,
    type: "Semi-detached duplex",
    summary:
      "A luxury five bedroom semi-detached duplex with a private cinema and a swimming pool at Osapa, at the top of the current portfolio.",
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
      "Cinema",
      "Swimming pool",
      "Boys' quarters (BQ)",
    ],
    image: "/properties/5dp-1.jpg",
    images: [
      "/properties/5dp-2.jpg",
      "/properties/5dp-3.jpg",
      "/properties/5dp-4.jpg",
      "/properties/5dp-5.jpg",
      "/properties/5dp-6.jpg",
      "/properties/5dp-7.jpg",
      "/properties/5dp-8.jpg",
      "/properties/5dp-9.jpg",
      "/properties/5dp-10.jpg",
      "/properties/5dp-11.jpg",
    ],
    confirmed: false,
  },
];

/** Signature Developments — the client's own in-house projects.
    Name, location and artwork from the client's own flyers
    (assets/brand/hero/): "Garelt Court — Osapa London, Lekki".

    UNCONFIRMED: unit mix, sizes, prices, payment plans, completion date and
    title documents have not been supplied. `facts` carries only what the
    client's own material states; nothing else is guessed. `brochureUrl` and
    `videoId` stay null until the client provides them — the development page
    hides those elements while they are null. */
export type Development = {
  slug: string;
  title: string;
  location: string;
  status: "Coming soon" | "Selling" | "Sold out";
  summary: string;
  image: string | null;
  /** Additional renders, shown as a gallery on the development page. */
  images?: string[];
  /** Short factual points, rendered as a definition list. */
  facts?: { label: string; value: string }[];
  /** PDF in /public/brochures/, or an external link. Null falls back to
      a "Request the Brochure" button. */
  brochureUrl?: string | null;
  /** True when brochureUrl points off-site (e.g. an Instagram post), so the
      link opens rather than triggering a download. */
  brochureIsExternal?: boolean;
  /** YouTube id for a walkthrough. Null hides the embed. */
  videoId?: string | null;
  confirmed: boolean;
};

export const developments: Development[] = [
  {
    slug: "garelt-court",
    title: "Garelt Court",
    location: "Osapa London, Lekki",
    status: "Coming soon",
    summary:
      "An apartment development in Osapa London, Lekki — one of the most established residential pockets on the peninsula, roughly fifteen minutes from Victoria Island off-peak.",
    image: "/hero/garelt-court.jpg",
    images: [
      "/hero/garelt-court-dusk.jpg",
      "/hero/garelt-court-night.jpg",
      "/hero/garelt-court-interior.jpg",
    ],
    facts: [
      { label: "Location", value: "Osapa London, Lekki, Lagos" },
      { label: "Type", value: "Apartment development" },
      { label: "Status", value: "Coming soon" },
      { label: "Unit mix and prices", value: "To be announced" },
    ],
    /* The client's brochure lives as an Instagram post rather than a PDF
       (supplied 9 Sep 2026), so this opens the post instead of downloading. */
    brochureUrl: "https://www.instagram.com/p/DdMpjFUDrEc/",
    brochureIsExternal: true,
    videoId: null,
    confirmed: false,
  },
];
