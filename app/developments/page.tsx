import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/site/Cta";
import Gallery from "@/components/site/Gallery";
import PageHero from "@/components/site/PageHero";
import PhotoSlot from "@/components/site/PhotoSlot";
import Reveal from "@/components/site/Reveal";
import { developments } from "@/content/properties";

export const metadata: Metadata = {
  title: "Signature Developments",
  description:
    "Developments with purpose. Assets designed for the future. The in-house development arm of Dan Lami Real Estate.",
};

/* Copy is the client's own — docs/client-content.md §8 and §9. */

export default function DevelopmentsPage() {
  const garelt = developments[0];

  return (
    <>
      <PageHero
        eyebrow="Signature Developments"
        title={
          <>
            Developments with purpose.
            <br />
            Assets designed for the future.
          </>
        }
        lede="Our Signature Developments represent a new chapter in the Dan Lami Real Estate brand."
      />

      <section className="band">
        <div className="shell stack stack-4">
          <div className="split split-lead">
            <Reveal>
              <p className="rule-label">Why they exist</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="stack stack-3">
                <p className="body">These are not simply projects.</p>
                <p className="body">
                  They are opportunities to own strategically positioned real
                  estate assets designed around lifestyle, demand, location and
                  long-term value.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Garelt Court ---------- */}
      <section className="band band-white" style={{ borderBlock: "1px solid var(--line)" }}>
        <div className="shell stack stack-4">
          <Reveal>
            <p className="rule-label">Current Signature Development</p>
          </Reveal>

          <div className="split" style={{ alignItems: "center" }}>
            <Reveal>
              <PhotoSlot
                src={garelt.image}
                alt={`${garelt.title}, ${garelt.location}`}
                height="clamp(18rem, 38vw, 28rem)"
              />
            </Reveal>
            <Reveal delay={0.12}>
              <div className="stack stack-2">
                <span className="tag">{garelt.status}</span>
                <h2>{garelt.title}</h2>
                <p className="property-where" style={{ marginTop: ".25rem" }}>
                  {garelt.location}
                </p>
                <p className="body" style={{ marginTop: ".75rem" }}>
                  {garelt.summary}
                </p>
                <Link href="/contact" className="link-arrow" style={{ marginTop: "1rem" }}>
                  Register your interest &rarr;
                </Link>
              </div>
            </Reveal>
          </div>

          <Gallery
            images={[
              "/hero/garelt-court-dusk.jpg",
              "/hero/garelt-court-night.jpg",
              "/hero/garelt-court-interior.jpg",
            ]}
            alt={`${garelt.title}, ${garelt.location}`}
          />
        </div>
      </section>

      {/* ---------- partnerships teaser (§9) ---------- */}
      <section className="band">
        <div className="shell">
          <div className="split split-lead">
            <Reveal>
              <div className="stack stack-2">
                <p className="eyebrow">Strategic Development Partnerships</p>
                <h2>Building better real estate together.</h2>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="stack stack-3">
                <p className="body">
                  We partner with property owners, developers, investors,
                  architects, engineers and other strategic stakeholders to
                  transform opportunities into commercially viable real estate
                  developments.
                </p>
                <ul className="checks">
                  {[
                    "Capital",
                    "Strategy",
                    "Development",
                    "Brand",
                    "Sales",
                    "Marketing",
                    "Distribution",
                  ].map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                <div className="btn-row" style={{ marginTop: ".5rem" }}>
                  <Link href="/partnerships" className="btn btn-outline">
                    About Development Partnerships
                  </Link>
                  <Link href="/partners" className="btn btn-primary">
                    Partner With Us
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
