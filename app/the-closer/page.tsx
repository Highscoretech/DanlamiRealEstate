import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/site/CountUp";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import YouTubeEmbed from "@/components/site/YouTubeEmbed";
import JsonLd from "@/components/seo/JsonLd";
import { founder, trackRecord } from "@/content/homepage";
import { personSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/the-closer",
  title: "Danlami Ojo — Founder & CEO of Dan Lami Real Estate",
  titleAbsolute: true,
  description:
    "Danlami Ojo, known as “The Closer,” is the Founder and CEO of Dan Lami Real Estate in Lagos. Don't just acquire property — acquire assets that make sense.",
  image: "/team/danlami-ojo.jpg",
  imageAlt: "Danlami Ojo, Founder and CEO of Dan Lami Real Estate",
});

/* Copy: docs/brand-direction-2026.md §14. */

export default function TheCloserPage() {
  return (
    <>
      <JsonLd data={personSchema()} />

      <PageHero
        eyebrow={founder.eyebrow}
        title={founder.name}
        lede={`${founder.role} — “${founder.alias}”`}
      />

      <section className="band">
        <div className="shell">
          <div className="split split-lead" style={{ alignItems: "start" }}>
            <Reveal>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 5",
                  background: "var(--surface-sunk)",
                }}
              >
                <Image
                  src="/team/danlami-ojo.jpg"
                  alt="Danlami Ojo, Founder and CEO of Dan Lami Real Estate"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 54rem) 100vw, 40vw"
                />
              </div>
            </Reveal>

            <Reveal delay={0.12} className="stack stack-3">
              {founder.body.map((p) => (
                <p className="body" key={p}>
                  {p}
                </p>
              ))}

              <p className="pull pull-teal">{founder.pull}</p>

              {founder.after.map((p) => (
                <p className="body" key={p}>
                  {p}
                </p>
              ))}

              <hr className="divider" style={{ margin: "1rem 0" }} />

              <p className="rule-label">{founder.philosophyLabel}</p>
              <p className="pull">{founder.philosophy[0]}</p>
              <p className="pull pull-teal">{founder.philosophy[1]}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- track record ----------
           Figures confirmed for publication by the client, 10 Sep 2026. */}
      <section className="band band-sunk">
        <div className="shell stack stack-4">
          <Reveal>
            <div className="stack stack-2">
              <p className="eyebrow">{trackRecord.eyebrow}</p>
              <h2>{trackRecord.title}</h2>
            </div>
          </Reveal>

          <div className="grid-3">
            {trackRecord.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="stat">
                  <span className="stat-value">
                    <CountUp value={s.value} />
                  </span>
                  <span className="stat-label">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="body">{trackRecord.close}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- in his own words ---------- */}
      <section className="band band-white" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="shell shell-narrow stack stack-3">
          <p className="rule-label">In his own words</p>
          <YouTubeEmbed
            videoId="fdQOAQeBE9c"
            title="The Real Estate Broker Changing the Narrative of Real Estate in Lagos, Nigeria — Danlami Ojo"
          />
          <div className="btn-row" style={{ marginTop: ".5rem" }}>
            <Link href="/academy" className="btn btn-outline">
              Dan Lami Academy
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Speak With an Advisor
            </Link>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
