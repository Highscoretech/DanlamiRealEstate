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

      <Cta />
    </>
  );
}
