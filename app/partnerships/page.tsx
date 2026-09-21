import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { developmentPartners } from "@/content/homepage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/partnerships",
  title: "Development Partnerships — Joint Ventures in Lagos Real Estate",
  titleAbsolute: true,
  description:
    "Have the land, capital or vision? We partner with landowners, developers, investors, architects and engineers to bring Lagos developments to market.",
  image: "/og.jpg",
});

/* Copy: docs/brand-direction-2026.md §13. */

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow={developmentPartners.eyebrow}
        title={
          <>
            {developmentPartners.title[0]}
            <br />
            {developmentPartners.title[1]}
          </>
        }
        lede={developmentPartners.body[0]}
      />

      <section className="band">
        <div className="shell">
          <div className="split split-lead">
            <Reveal>
              <div className="stack stack-2">
                <p className="rule-label">{developmentPartners.worksWithLabel}</p>
                <ul className="listing-run">
                  {developmentPartners.worksWith.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="stack stack-3">
              <p className="body">{developmentPartners.body[1]}</p>
              <p className="body">{developmentPartners.close}</p>

              <div className="stack stack-2" style={{ marginTop: ".5rem" }}>
                <p className="rule-label">The partnership model</p>
                <p className="pull pull-teal" style={{ maxWidth: "none" }}>
                  {developmentPartners.equation.join(" + ")}
                </p>
              </div>

              <div className="btn-row" style={{ marginTop: ".5rem" }}>
                <Link href="/partners" className="btn btn-primary">
                  Discuss a Development Partnership
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- sales partnership cross-link ---------- */}
      <section className="band band-white">
        <div className="shell">
          <div className="split split-lead" style={{ alignItems: "center" }}>
            <Reveal>
              <div className="stack stack-2">
                <p className="eyebrow">Sales Partnership</p>
                <h2 style={{ fontSize: "var(--step-4)" }}>
                  Not a developer? Sell with us instead.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.12} className="stack stack-3">
              <p className="body">
                We also partner with realtors, 9-to-5ers and affiliate
                marketers who sell our properties and earn commissions and
                incentives.
              </p>
              <div className="btn-row">
                <Link href="/partnerships/sales" className="btn btn-outline">
                  About Sales Partnership
                </Link>
                <Link href="/partners" className="btn btn-primary">
                  Partner With Us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
