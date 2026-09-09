import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { siteGraph } from "@/lib/schema";
import { BASE_URL } from "@/lib/seo";
import "./globals.css";

/* Fraunces carries the headlines — a serif with enough character to read as
   luxury without tipping into decoration. WONK and SOFT are pinned to 0 in
   globals.css to keep it serious. Manrope handles everything else; it is
   geometric, which sits comfortably beside the geometric logo wordmark. */

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const DESCRIPTION =
  "Luxury duplexes and apartments for sale in Lekki, Lagos. Investment advisory behind every purchase, for buyers, investors and diaspora clients.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${site.name} — Luxury Property for Sale in Lekki, Lagos`,
    template: `%s — ${site.name}`,
  },
  description: DESCRIPTION,
  applicationName: site.name,
  alternates: { canonical: BASE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Lets Google show full-size property photos in results, which is most
      // of the click-through advantage on property searches.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: `${site.name} — Luxury Property for Sale in Lekki, Lagos`,
    description: DESCRIPTION,
    url: BASE_URL,
    siteName: site.name,
    locale: "en_NG",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.authority}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Luxury Property for Sale in Lekki, Lagos`,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
  // Set these in the environment once the client has verified ownership.
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
  },
  category: "real estate",
};

export const viewport: Viewport = {
  themeColor: "#0C7EA3",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        {/* Business and website entities, referenced by @id from every page. */}
        <JsonLd data={siteGraph()} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
