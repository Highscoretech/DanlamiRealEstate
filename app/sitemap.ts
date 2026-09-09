import type { MetadataRoute } from "next";
import { areas } from "@/content/areas";
import { guides } from "@/content/guides";
import { properties } from "@/content/properties";
import { absoluteUrl } from "@/lib/seo";

/**
 * Priority here is a hint about relative importance within our own site, not a
 * ranking lever. Money pages — listings and location pages — sit above the
 * brand-story pages.
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1.0, "weekly"],
    ["/properties", 0.9, "daily"],
    ["/locations", 0.8, "weekly"],
    ["/guides", 0.7, "monthly"],
    ["/developments", 0.8, "weekly"],
    ["/investors", 0.7, "monthly"],
    ["/diaspora", 0.7, "monthly"],
    ["/services", 0.7, "monthly"],
    ["/faq", 0.6, "monthly"],
    ["/about", 0.6, "monthly"],
    ["/the-closer", 0.6, "monthly"],
    ["/partnerships", 0.5, "monthly"],
    ["/partners", 0.5, "monthly"],
    ["/philosophy", 0.4, "yearly"],
    ["/contact", 0.6, "yearly"],
  ];

  return [
    ...staticPages.map(([path, priority, changeFrequency]) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...areas.map((area) => ({
      url: absoluteUrl(`/locations/${area.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...guides.map((guide) => ({
      url: absoluteUrl(`/guides/${guide.slug}`),
      lastModified: new Date(guide.updated),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...properties.map((property) => ({
      url: absoluteUrl(`/properties/${property.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      // Image sitemap entries: property search is visual, and this is how the
      // photos become eligible for Google Images and the image thumbnails in
      // web results.
      images: [property.image, ...(property.images ?? [])]
        .filter((src): src is string => Boolean(src))
        .map((src) => absoluteUrl(src)),
    })),
  ];
}
