import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/partnerships",
  title:
    "Development Partnerships — Joint Ventures in Lagos Real Estate",
  titleAbsolute: true,
  description:
    "We partner with landowners, developers, investors, architects and engineers to bring Lagos real estate developments to market, from strategy through to sales.",
  image: "/og.jpg",
});

const model = [
  "Capital",
  "Strategy",
  "Development",
  "Brand",
  "Sales",
  "Marketing",
  "Distribution",
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Development partnerships"
        title="Building better real estate together."
        lede="We partner with property owners, developers, investors, architects, engineers and other strategic stakeholders to transform opportunities into commercially viable real estate developments."
      />

      <section className="band">
        <div className="shell">
          <div className="split split-lead">
            <div className="stack stack-2">
              <p className="rule-label">Our partnership model brings together</p>
              <ul className="checks">
                {model.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>

            <div className="stack stack-3">
              <p className="rule-label">The objective is simple</p>
              <p className="pull pull-teal">
                Create exceptional developments, and build lasting value for
                every stakeholder.
              </p>
              <p className="body">
                If you hold land, are planning a development, or are looking for
                a partner to take a project to market, we would like to hear
                from you.
              </p>
              <Link href="/partners" className="link-arrow">
                Partner with us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- sales partnership cross-link ---------- */}
      <section className="band band-white">
        <div className="shell">
          <div className="split split-lead" style={{ alignItems: "center" }}>
            <div className="stack stack-2">
              <p className="eyebrow">Sales Partnership</p>
              <h2 style={{ fontSize: "var(--step-4)" }}>
                Not a developer? Sell with us instead.
              </h2>
            </div>
            <div className="stack stack-3">
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
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
