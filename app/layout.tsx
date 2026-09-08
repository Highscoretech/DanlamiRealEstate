import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { site } from "@/content/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} — ${site.authority}`,
    template: `%s — ${site.name}`,
  },
  description:
    "We help individuals, families and investors acquire exceptional real estate assets in Lagos, strategically positioned for wealth creation, wealth preservation and long-term legacy.",
  openGraph: {
    title: `${site.name} — ${site.authority}`,
    description: site.strapline,
    url: `https://${site.domain}`,
    siteName: site.name,
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
