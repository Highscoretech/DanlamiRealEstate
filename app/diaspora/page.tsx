import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { diaspora } from "@/content/homepage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/diaspora",
  title: "For Diaspora Investors — Buying Nigerian Property From Abroad",
  titleAbsolute: true,
  description:
    "You may live abroad. Your wealth can still own at home. Sourcing, due diligence, developer verification and acquisition support for diaspora investors in Lagos.",
  image: "/og.jpg",
});

/* Copy: docs/brand-direction-2026.md §12. */

export default function DiasporaPage() {
  return (
    <>
      <PageHero
        eyebrow={diaspora.eyebrow}
        title={
          <>
            {diaspora.title[0]}
            <br />
            {diaspora.title[1]}
          </>
        }
        lede={diaspora.intro}
      />

      {/* ---------- the questions distance raises ---------- */}
      <section className="band">
        <div className="shell">
          <div className="split split-lead">
            <Reveal>
              <p className="rule-label">The questions distance raises</p>
            </Reveal>
            <Reveal delay={0.12}>
              <ul className="questions">
                {diaspora.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- how we help ---------- */}
      <section className="band band-white">
        <div className="shell">
          <div className="split split-lead">
            <Reveal>
              <div className="stack stack-2">
                <h2 style={{ fontSize: "var(--step-4)" }}>{diaspora.bridge}</h2>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="stack stack-3">
              <ul className="checks">
                {diaspora.support.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="pull pull-teal">{diaspora.pull}</p>
              <div className="btn-row" style={{ marginTop: ".5rem" }}>
                <Link href="/contact" className="btn btn-primary">
                  Speak With Our Diaspora Team
                </Link>
                <Link
                  href="/guides/buying-property-in-lagos-from-abroad"
                  className="btn btn-outline"
                >
                  Read the diaspora guide
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
