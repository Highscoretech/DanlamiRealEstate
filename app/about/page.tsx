import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/about",
  title:
    "About Dan Lami Real Estate — Luxury Property Company in Lagos",
  titleAbsolute: true,
  description:
    "A luxury real estate company in Lagos focused on property sales, investment advisory and strategic development. Our story, mission, vision and values.",
  image: "/og.jpg",
});

const values = [
  {
    name: "Integrity",
    body: "We believe trust is the foundation of every successful property transaction.",
  },
  {
    name: "Excellence",
    body: "We pursue exceptional standards in our properties, partnerships, service and execution.",
  },
  {
    name: "Strategy",
    body: "We don’t recommend property based on appearance alone. We look at the bigger investment picture.",
  },
  {
    name: "Transparency",
    body: "Our clients deserve clarity around the opportunity, the numbers, the process and the risks.",
  },
  {
    name: "Long-term thinking",
    body: "We think beyond today’s transaction and focus on the long-term value of the asset.",
  },
  {
    name: "Legacy",
    body: "We believe the best investments should create value that can be transferred from one generation to another.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Dan Lami Real Estate"
        lede="A luxury real estate company in Lagos, focused on property sales, investment advisory and strategic development."
      />

      <section className="band">
        <div className="shell">
          <div className="split split-lead">
            <div className="stack stack-2">
              <p className="rule-label">Our work sits at the intersection of</p>
              <ul className="stack stack-1" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {[
                  "Luxury Real Estate.",
                  "Investment Strategy.",
                  "Development.",
                  "Wealth Creation.",
                  "Legacy.",
                ].map((line) => (
                  <li
                    key={line}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--step-3)",
                      lineHeight: 1.25,
                    }}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="stack stack-3">
              <p className="body">
                Founded with a vision to transform the way people acquire and
                invest in real estate, we combine market intelligence, strategic
                positioning and relationship-driven service to help clients make
                better property decisions.
              </p>
              <p className="body">
                We serve discerning individuals, high-net-worth clients,
                entrepreneurs, investors and members of the African diaspora
                seeking quality real estate opportunities in Nigeria.
              </p>
              <p className="body">
                We don&rsquo;t believe real estate should simply sit in a
                portfolio. We believe the right real estate asset should have a
                purpose.
              </p>
              <p className="pull pull-teal" style={{ marginTop: ".5rem" }}>
                It should create value. It should preserve wealth.
              </p>
              <p className="body">
                And, where strategically selected, it should become part of a
                legacy that outlives its original owner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band-white">
        <div className="shell">
          <div className="split">
            <div className="stack stack-2">
              <p className="eyebrow">Our mission</p>
              <h2 style={{ fontSize: "var(--step-4)" }}>
                To redefine luxury real estate in Africa.
              </h2>
              <p className="body" style={{ marginTop: ".5rem" }}>
                By helping individuals and investors acquire strategically
                valuable properties that create wealth, preserve capital and
                build lasting legacies.
              </p>
            </div>
            <div className="stack stack-2">
              <p className="eyebrow">Our vision</p>
              <h2 style={{ fontSize: "var(--step-4)" }}>
                Africa&rsquo;s most trusted luxury real estate authority.
              </h2>
              <p className="body" style={{ marginTop: ".5rem" }}>
                Recognised for exceptional property opportunities, intelligent
                investment advisory and landmark developments that stand the
                test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell stack stack-4">
          <div className="stack stack-2">
            <p className="eyebrow">Our core values</p>
            <h2>Six things we hold to</h2>
          </div>
          <div className="grid-3">
            {values.map((v, i) => (
              <Reveal key={v.name} delay={(i % 3) * 0.1}>
                <div className="value-card">
                  <span className="value-card-idx">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4>{v.name}</h4>
                  <p>{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link href="/philosophy" className="link-arrow">
            Read our philosophy &rarr;
          </Link>
        </div>
      </section>

      <Cta />
    </>
  );
}
