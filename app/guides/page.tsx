import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { guides } from "@/content/guides";
import { itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/guides",
  title: "Guides — Buying Property in Lagos",
  titleAbsolute: true,
  description:
    "Plain answers on Lagos land titles, buying from abroad, and what to check before you pay. Written by Dan Lami Real Estate.",
  image: "/og.jpg",
});

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          guides.map((g) => ({ name: g.title, path: `/guides/${g.slug}` })),
          "Guides to buying property in Lagos"
        )}
      />

      <PageHero
        eyebrow="Guides"
        title="Before You Buy"
        lede="Anyone can show you a property. These are the things worth understanding before you pay for one."
      />

      <section className="band">
        <div className="shell stack stack-4">
          <div className="grid-2">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="card"
                style={{ textDecoration: "none" }}
              >
                <p className="eyebrow">Guide</p>
                <h2 style={{ fontSize: "var(--step-3)" }}>{g.title}</h2>
                <p>{g.summary}</p>
                <span className="link-arrow" style={{ marginTop: ".75rem" }}>
                  Read the guide &rarr;
                </span>
              </Link>
            ))}
          </div>

          <p className="body">
            Something not covered here?{" "}
            <Link href="/faq">Our frequently asked questions</Link> deal with
            payment plans, inspections and partnerships &mdash; or just{" "}
            <Link href="/contact">ask us directly</Link>.
          </p>
        </div>
      </section>

      <Cta />
    </>
  );
}
