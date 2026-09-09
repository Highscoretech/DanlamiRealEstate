import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.authority}`,
    short_name: "Dan Lami",
    description:
      "Luxury real estate sales, investment advisory and property development in Lagos, Nigeria.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F8F8",
    theme_color: "#0C7EA3",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
