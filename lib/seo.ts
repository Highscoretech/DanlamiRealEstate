import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * One place that knows how a page describes itself to search engines.
 *
 * Every route calls `pageMetadata` so that canonical URLs, Open Graph and
 * Twitter cards stay consistent and nothing is forgotten on a new page.
 */

export const BASE_URL = `https://${site.domain}`;

export function absoluteUrl(path = "/") {
  return path === "/" ? BASE_URL : `${BASE_URL}${path}`;
}

type PageMetaInput = {
  /** Route path, always starting with "/". Becomes the canonical URL. */
  path: string;
  /** Runs through the layout title template unless `titleAbsolute` is set. */
  title: string;
  description: string;
  /** Use the title exactly as given, without the "— Dan Lami Real Estate" suffix. */
  titleAbsolute?: boolean;
  /** Path to a share image. Falls back to the site-wide Open Graph image. */
  image?: string;
  imageAlt?: string;
  /** Set on thin or duplicate pages we would rather Google left out. */
  noIndex?: boolean;
};

/**
 * Keeps a description inside what Google will actually render (~160 chars),
 * preferring to end on a sentence rather than mid-clause. A safety net for
 * descriptions composed from listing data, whose length we do not control.
 */
export function clampDescription(text: string, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const sentenceEnd = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "));
  if (sentenceEnd > max * 0.55) return cut.slice(0, sentenceEnd + 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

export function pageMetadata({
  path,
  title,
  description: rawDescription,
  titleAbsolute,
  image,
  imageAlt,
  noIndex,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const description = clampDescription(rawDescription);

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      locale: "en_NG",
      title: titleAbsolute ? title : `${title} — ${site.name}`,
      description,
      ...(image
        ? { images: [{ url: image, width: 1200, height: 630, alt: imageAlt ?? title }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: titleAbsolute ? title : `${title} — ${site.name}`,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

/** "₦400,000,000" -> 400000000. Returns null if there is no usable number. */
export function priceToNumber(price: string): number | null {
  const digits = price.replace(/[^\d]/g, "");
  return digits ? Number(digits) : null;
}

/**
 * "₦400,000,000" -> "₦400M", "₦1,400,000,000" -> "₦1.4B".
 *
 * For page titles: the full figure eats the ~60 characters Google shows, and
 * the short form is how the market writes it anyway ("N400M" on every listing
 * board in Lagos).
 */
export function priceShort(price: string): string {
  const n = priceToNumber(price);
  if (!n) return price;
  if (n >= 1_000_000_000) {
    const b = n / 1_000_000_000;
    return `₦${b % 1 === 0 ? b : b.toFixed(1)}B`;
  }
  if (n >= 1_000_000) return `₦${Math.round(n / 1_000_000)}M`;
  return price;
}
