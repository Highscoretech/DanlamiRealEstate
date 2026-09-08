import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import PhotoSlot from "@/components/site/PhotoSlot";
import { developments } from "@/content/properties";

export const metadata: Metadata = {
  title: "Signature Developments",
  description:
    "Developments with purpose. Assets designed for the future. The in-house development arm of Dan Lami Real Estate.",
};

export default function DevelopmentsPage() {
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
            <div className="stack stack-2">
              <p className="rule-label">Why they exist</p>
            </div>
            <div className="stack stack-3">
              <p className="body">These are not simply projects.</p>
              <p className="body">
                They are opportunities to own strategically positioned real
                estate assets designed around lifestyle, demand, location and
                long-term value.
              </p>
            </div>
          </div>

          <hr className="divider" />

          <div className="grid-3">
            {developments.map((d) => (
              <div key={d.slug} className="property-card" style={{ cursor: "default" }}>
                <PhotoSlot src={d.image} alt={d.title} height="13rem" />
                <div className="property-card-body">
                  <span className="tag">{d.status}</span>
                  <h3>{d.title}</h3>
                  <p className="property-where">{d.location}</p>
                  <p className="body" style={{ fontSize: "var(--step--1)", marginTop: ".5rem" }}>
                    {d.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="stack stack-2" style={{ marginTop: "1rem" }}>
            <p className="body">
              To be notified when a Signature Development opens for
              subscription, speak with an advisor.
            </p>
            <Link href="/contact" className="link-arrow">
              Register your interest &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
