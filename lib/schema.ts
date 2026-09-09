import type { Property } from "@/content/properties";
import { site } from "@/content/site";
import { BASE_URL, absoluteUrl, priceToNumber } from "./seo";

/**
 * Structured data builders.
 *
 * Everything hangs off two stable @id nodes — the organisation and the website
 * — so that individual pages can reference them instead of repeating the
 * business details, and Google can join them into one entity.
 */

export const ORG_ID = `${BASE_URL}/#organization`;
export const WEBSITE_ID = `${BASE_URL}/#website`;

/**
 * RealEstateAgent is a LocalBusiness subtype, which is what this business
 * actually is. It carries the contact and area-served signals that matter for
 * local search.
 */
export function organizationSchema() {
  const sameAs = Object.values(site.social).filter((url) => url && url !== "#");

  return {
    "@type": "RealEstateAgent",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: BASE_URL,
    description:
      "Luxury real estate sales, investment advisory and strategic property development in Lagos, Nigeria.",
    slogan: site.strapline,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/brand/lockup.png"),
      width: 1280,
      height: 319,
    },
    image: absoluteUrl("/hero/garelt-court.jpg"),
    telephone: site.phoneE164,
    email: site.email,
    priceRange: site.priceRange,
    currenciesAccepted: "NGN",
    address: {
      "@type": "PostalAddress",
      ...(site.address.streetAddress
        ? { streetAddress: site.address.streetAddress }
        : {}),
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    knowsAbout: [
      "Luxury real estate",
      "Real estate investment advisory",
      "Property development",
      "Diaspora property investment",
      "Lagos property market",
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: BASE_URL,
    name: site.name,
    inLanguage: "en-NG",
    publisher: { "@id": ORG_ID },
  };
}

/** The two nodes every page can point at. Rendered once, in the root layout. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), websiteSchema()],
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Home", path: "/" },
      ...trail,
    ].map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/** Apartments and houses are different schema types; Google reads both. */
function residenceType(property: Property) {
  return property.type.toLowerCase().includes("apartment")
    ? "Apartment"
    : "SingleFamilyResidence";
}

export function propertySchema(property: Property) {
  const path = `/properties/${property.slug}`;
  const price = priceToNumber(property.price);
  const photos = [property.image, ...(property.images ?? [])]
    .filter((src): src is string => Boolean(src))
    .map((src) => absoluteUrl(src));

  const residence = {
    "@type": residenceType(property),
    name: `${property.title}, ${property.location}`,
    description: property.summary,
    ...(property.beds ? { numberOfBedrooms: property.beds } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location.split(",")[0].trim(),
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    ...(photos.length ? { photo: photos } : {}),
    ...(property.features.length
      ? {
          amenityFeature: property.features.map((feature) => ({
            "@type": "LocationFeatureSpecification",
            name: feature,
            value: true,
          })),
        }
      : {}),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Properties", path: "/properties" },
        { name: `${property.title}, ${property.location}`, path },
      ]),
      {
        "@type": "RealEstateListing",
        "@id": `${absoluteUrl(path)}#listing`,
        url: absoluteUrl(path),
        name: `${property.title} for sale in ${property.location}`,
        description: property.summary,
        isPartOf: { "@id": WEBSITE_ID },
        provider: { "@id": ORG_ID },
        mainEntity: {
          "@type": "Offer",
          ...(price ? { price, priceCurrency: "NGN" } : {}),
          availability:
            property.status === "Available"
              ? "https://schema.org/InStock"
              : property.status === "Sold"
                ? "https://schema.org/SoldOut"
                : "https://schema.org/PreOrder",
          seller: { "@id": ORG_ID },
          itemOffered: residence,
        },
      },
    ],
  };
}

/** Listing pages: tells Google what the collection contains and in what order. */
export function itemListSchema(
  items: { name: string; path: string }[],
  listName: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Long-form guides. Article markup plus the breadcrumb trail above it. */
export function articleSchema({
  path,
  headline,
  description,
  datePublished,
  dateModified,
}: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@type": "Article",
    "@id": `${absoluteUrl(path)}#article`,
    headline,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "en-NG",
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl("/og.jpg"),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

/** Area landing pages: the neighbourhood itself as a described place. */
export function placeSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "Place",
    "@id": `${absoluteUrl(path)}#place`,
    name,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: name,
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    containedInPlace: {
      "@type": "Place",
      name: "Lagos, Nigeria",
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Danlami Ojo",
    jobTitle: "Founder and Chief Executive Officer",
    description:
      "Founder and CEO of Dan Lami Real Estate, widely known as “The Closer.”",
    url: absoluteUrl("/the-closer"),
    image: absoluteUrl("/team/danlami-ojo.jpg"),
    worksFor: { "@id": ORG_ID },
    knowsAbout: [
      "Luxury real estate",
      "Real estate investment",
      "Property development",
    ],
  };
}

/** Wraps any node set with a breadcrumb trail for an ordinary content page. */
export function pageGraph(
  trail: { name: string; path: string }[],
  extra: object[] = []
) {
  return {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema(trail), ...extra],
  };
}
