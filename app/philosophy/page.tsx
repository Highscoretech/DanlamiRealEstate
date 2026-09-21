import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { howWeHelp, method, philosophy, problem } from "@/content/homepage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/philosophy",
  title: "Our Philosophy — Property Is the Asset. Strategy Is the Difference.",
  titleAbsolute: true,
  description:
    "The goal isn't to own more property. It's to own better assets. How Dan Lami Real Estate thinks about property as an investment rather than a purchase.",
  image: "/og.jpg",
});

/* Copy: docs/brand-direction-2026.md §2, §3, §4 and §5. */

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        eyebrow={philosophy.eyebrow}
        title={
          <>
            {philosophy.title[0]}
            <br />
            {philosophy.title[1]}
          </>
        }
        lede={philosophy.intro[0]}
      />

      {/* ---------- what a property could be ---------- */}
      <section className="band">
        <div className="shell">
          <div className="split split-lead">
            <Reveal>
              <p className="rule-label">Your property could be</p>
            </Reveal>
            <Reveal delay={0.12} className="stack stack-3">
              <ul className="listing-run">
                {philosophy.couldBe.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="body">{philosophy.bridge}</p>
              <p className="pull pull-teal">
                {philosophy.pull[0]}
                <br />
                {philosophy.pull[1]}
              </p>
              <p className="body">{philosophy.close}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- the problem we exist to solve ---------- */}
      <section className="band band-white">
        <div className="shell stack stack-4">
          <Reveal>
            <p className="rule-label">{problem.eyebrow}</p>
          </Reveal>
          <div className="split split-lead">
            <Reveal>
              <h2>{problem.title}</h2>
            </Reveal>
            <Reveal delay={0.12} className="stack stack-3">
              <ul className="listing-run">
                {problem.truths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {problem.body.map((p) => (
                <p className="body" key={p}>
                  {p}
                </p>
              ))}
              <p className="pull pull-teal">{problem.pull}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- your objective comes first ---------- */}
      <section className="band">
        <div className="shell stack stack-4">
          <Reveal>
            <p className="rule-label">{howWeHelp.eyebrow}</p>
          </Reveal>
          <div className="split split-lead">
            <Reveal>
              <h2>{howWeHelp.title}</h2>
            </Reveal>
            <Reveal delay={0.12} className="stack stack-3">
              <p className="body">{howWeHelp.intro}</p>
              <ul className="listing-run">
                {howWeHelp.objectives.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="body">{howWeHelp.close}</p>
              <p className="pull pull-teal">{howWeHelp.pull}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- the Dan Lami Method ---------- */}
      <section className="band band-sunk">
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
                    <ul className="checks">
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

          <Reveal>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">
                Start Your Investment Journey
              </Link>
              <Link href="/investors" className="btn btn-outline">
                The investment thesis
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
