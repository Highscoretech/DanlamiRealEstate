import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import { guides, plannedTopics } from "@/content/guides";
import { itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/guides",
  title: "The Intelligent Investor — Understand Before You Own",
  titleAbsolute: true,
  description:
    "Articles and insights to help investors make more informed real estate decisions in Lagos: land titles, buying from abroad, and what to check before you pay.",
  image: "/og.jpg",
});

/* §21 of docs/brand-direction-2026.md. The client's note: "This builds
   authority, not just inventory. And it gives 'Africa's Luxury Real Estate
   Authority' substance." */

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          guides.map((g) => ({ name: g.title, path: `/guides/${g.slug}` })),
          "The Intelligent Investor — insights from Dan Lami Real Estate"
        )}
      />

      <PageHero
        eyebrow="The Intelligent Investor"
        title="Understand before you own."
        lede="Articles, videos and insights designed to help investors make more informed real estate decisions."
      />

      <section className="band">
        <div className="shell stack stack-4">
          <Reveal>
            <p className="rule-label">Published</p>
          </Reveal>

          <div className="grid-2">
            {guides.map((g, i) => (
              <Reveal key={g.slug} delay={(i % 2) * 0.1}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="card"
                  style={{ textDecoration: "none", height: "100%" }}
                >
                  <p className="eyebrow">Guide</p>
                  <h2 style={{ fontSize: "var(--step-3)" }}>{g.title}</h2>
                  <p>{g.summary}</p>
                  <span className="link-arrow" style={{ marginTop: ".75rem" }}>
                    Read the guide &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- what is coming ----------
           Listed, not linked: these are titles the client wants covered, and
           a topic is only a link once it is actually written. */}
      <section className="band band-white">
        <div className="shell stack stack-4">
          <Reveal>
            <div className="split" style={{ alignItems: "end", gap: "1.5rem" }}>
              <div className="stack stack-2">
                <p className="eyebrow">Coming next</p>
                <h2 style={{ fontSize: "var(--step-4)" }}>
                  What we are writing about.
                </h2>
              </div>
              <div style={{ justifySelf: "start" }}>
                <Link href="/contact" className="link-arrow">
                  Ask us something directly &rarr;
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="topic-list">
              {plannedTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <p className="disclosure">
              Want one of these sooner, or have a question none of them answer?
              Tell us and we will write it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="band band-tight">
        <div className="shell">
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
