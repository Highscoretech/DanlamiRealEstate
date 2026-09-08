import type { Metadata } from "next";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description:
    "Property is the asset. Strategy is the difference. How Dan Lami Real Estate thinks about property as an investment rather than a purchase.",
};

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        eyebrow="Our philosophy"
        title={
          <>
            Property is the asset.
            <br />
            Strategy is the difference.
          </>
        }
      />

      <section className="band">
        <div className="shell shell-narrow stack stack-3">
          <p className="lede" style={{ maxWidth: "none" }}>
            Real estate has always been one of the world&rsquo;s most powerful
            wealth-building vehicles. But not every property is a good
            investment.
          </p>
          <p className="body">
            Our approach is built around identifying assets that hold their
            value and improve on it &mdash; then explaining, in plain terms, why
            we believe that to be the case.
          </p>

          <hr className="divider" style={{ margin: "1.5rem 0" }} />

          <p className="eyebrow">Our brand promise</p>
          <h2 style={{ fontSize: "var(--step-4)" }}>
            We don&rsquo;t just help you buy property. We help you buy with
            purpose.
          </h2>
          <p className="body">Because the right property can become:</p>

          <ul className="stack stack-1" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {[
              "A home.",
              "An income-producing asset.",
              "A capital-growth opportunity.",
              "A family asset.",
              "A portfolio.",
            ].map((line) => (
              <li
                key={line}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--step-3)",
                  lineHeight: 1.3,
                  paddingBlock: ".35rem",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                {line}
              </li>
            ))}
          </ul>

          <p className="body" style={{ marginTop: "1rem" }}>
            And ultimately&hellip;
          </p>
          <p className="pull pull-teal">A legacy.</p>
        </div>
      </section>

      <Cta />
    </>
  );
}
