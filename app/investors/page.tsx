import Link from "next/link";
import Cta from "@/components/site/Cta";
import InvestorFaq from "@/components/site/InvestorFaq";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { method, realQuestion, thesis } from "@/content/homepage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/investors",
  title: "For Investors — Before We Recommend an Asset, We Ask Better Questions",
  titleAbsolute: true,
  description:
    "Location, infrastructure, demand, income, appreciation, developer, documentation, entry and exit. How Dan Lami Real Estate evaluates an opportunity before you commit capital.",
  image: "/og.jpg",
});

/* Copy: docs/brand-direction-2026.md §5 and §11. */

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow={thesis.eyebrow}
        title={thesis.title}
        lede={realQuestion.turn[1]}
      />

      {/* ---------- the nine factors ---------- */}
      <section className="band">
        <div className="shell">
          <div className="split split-lead">
            <Reveal>
              <div className="stack stack-2">
                <p className="rule-label">What we examine</p>
                <p className="pull pull-teal" style={{ marginTop: "1rem" }}>
                  {thesis.pull[0]}
                  <br />
                  {thesis.pull[1]}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <dl className="thesis-list">
                {thesis.factors.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.question}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- the Dan Lami Method ---------- */}
      <section className="band band-white">
        <div className="shell stack stack-4">
          <Reveal>
            <div className="stack stack-2">
              <p className="eyebrow">{method.eyebrow}</p>
              <h2>{method.title}</h2>
            </div>
          </Reveal>

          <div className="grid-3">
            {method.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div className="method-card">
                  <span className="numbered-idx">{step.n}</span>
                  <h3>{step.name}</h3>
                  <p className="method-headline">{step.headline}</p>

                  {"intro" in step && step.intro ? (
                    <p className="body">{step.intro}</p>
                  ) : null}

                  {"points" in step && step.points ? (
                    <ul className="checks" style={{ gridTemplateColumns: "1fr" }}>
                      {step.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  ) : null}

                  {"close" in step && step.close ? (
                    <p className="body">{step.close}</p>
                  ) : null}

                  {"notAsk" in step && step.notAsk ? (
                    <div className="stack stack-1" style={{ marginTop: ".75rem" }}>
                      <p className="method-aside">We don&rsquo;t ask:</p>
                      <p className="method-quote method-quote-muted">
                        &ldquo;{step.notAsk}&rdquo;
                      </p>
                      <p className="method-aside">We ask:</p>
                      <p className="method-quote">&ldquo;{step.weAsk}&rdquo;</p>
                    </div>
                  ) : null}

                  {"notEnd" in step && step.notEnd ? (
                    <div className="stack stack-1" style={{ marginTop: ".75rem" }}>
                      <p className="method-aside">
                        And the conversation doesn&rsquo;t necessarily end with:
                      </p>
                      <p className="method-quote method-quote-muted">
                        &ldquo;{step.notEnd}&rdquo;
                      </p>
                      <p className="method-aside">The next question can become:</p>
                      <p className="method-quote">
                        &ldquo;{step.nextQuestion}&rdquo;
                      </p>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- questions investors ask ---------- */}
      <section className="band">
        <div className="shell stack stack-4">
          <Reveal>
            <div className="stack stack-2">
              <p className="eyebrow">Before you commit capital</p>
              <h2 style={{ fontSize: "var(--step-4)" }}>
                The questions worth answering first.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <InvestorFaq />
          </Reveal>
        </div>
      </section>

      <section className="band band-sunk">
        <div className="shell shell-narrow stack stack-3">
          <div className="btn-row">
            <Link href="/contact" className="btn btn-primary">
              Book an Investment Consultation
            </Link>
            <Link href="/properties" className="btn btn-outline">
              Explore Investment Opportunities
            </Link>
          </div>
          <p className="disclosure" style={{ marginTop: "1rem" }}>
            Nothing on this website is a guarantee of return. Property values
            and rental income can fall as well as rise, and any figures
            discussed are estimates based on current market conditions.
          </p>
        </div>
      </section>

      <Cta />
    </>
  );
}
