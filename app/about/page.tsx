import Link from "next/link";
import CountUp from "@/components/site/CountUp";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import {
  about,
  coreValues,
  higherPurpose,
  missionVision,
  trackRecord,
} from "@/content/homepage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/about",
  title: "About Dan Lami Real Estate — We Exist to Help People Own Better",
  titleAbsolute: true,
  description:
    "A luxury real estate investment and development company in Lagos. Our story, mission, vision, higher purpose and values.",
  image: "/og.jpg",
});

/* Copy: docs/brand-direction-2026.md §6, §15, §16, §17, §18 and §19. */

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        title={about.title}
        lede={about.intro}
      />

      {/* ---------- who we are ---------- */}
      <section className="band">
        <div className="shell">
          <div className="split split-lead">
            <Reveal>
              <div className="stack stack-2">
                <p className="rule-label">{about.intersectionLabel}</p>
                <ul className="listing-run">
                  {about.intersection.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="stack stack-3">
              {about.body.map((p) => (
                <p className="body" key={p}>
                  {p}
                </p>
              ))}
              <p className="pull pull-teal">{about.pull}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- mission and vision ---------- */}
      <section className="band band-white">
        <div className="shell">
          <div className="split">
            <Reveal>
              <div className="stack stack-2">
                <p className="eyebrow">{missionVision.mission.eyebrow}</p>
                <p className="pull" style={{ fontSize: "var(--step-3)", maxWidth: "none" }}>
                  {missionVision.mission.body}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="stack stack-2">
                <p className="eyebrow">{missionVision.vision.eyebrow}</p>
                <p className="pull" style={{ fontSize: "var(--step-3)", maxWidth: "none" }}>
                  {missionVision.vision.body}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- our higher purpose ---------- */}
      <section className="band">
        <div className="shell stack stack-4">
          <Reveal>
            <div className="stack stack-2">
              <p className="eyebrow">{higherPurpose.eyebrow}</p>
              <h2>{higherPurpose.title}</h2>
            </div>
          </Reveal>

          <div className="split split-lead">
            <Reveal className="stack stack-3">
              {higherPurpose.intro.map((p) => (
                <p className="body" key={p}>
                  {p}
                </p>
              ))}
              <ul className="listing-run">
                {higherPurpose.rise.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="body">{higherPurpose.turn}</p>
            </Reveal>

            <Reveal delay={0.12} className="stack stack-3">
              <p className="pull pull-teal">{higherPurpose.challenge}</p>
              <ul className="listing-run">
                {higherPurpose.steps.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              {higherPurpose.body.map((p) => (
                <p className="body" key={p}>
                  {p}
                </p>
              ))}
              <p className="body">{higherPurpose.close}</p>
              <p className="pull pull-teal">
                {higherPurpose.pull.map((line) => (
                  <span key={line} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- core values ---------- */}
      <section className="band band-white">
        <div className="shell stack stack-4">
          <Reveal>
            <div className="stack stack-2">
              <p className="eyebrow">{coreValues.eyebrow}</p>
              <h2>{coreValues.title}</h2>
            </div>
          </Reveal>

          <div className="grid-3">
            {coreValues.values.map((v, i) => (
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

          <Reveal>
            <div className="btn-row">
              <Link href="/philosophy" className="btn btn-primary">
                Read our philosophy
              </Link>
              <Link href="/the-closer" className="btn btn-outline">
                Meet the founder
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
