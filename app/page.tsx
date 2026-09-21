import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/site/CountUp";
import HeroSlider from "@/components/site/HeroSlider";
import PhotoSlot from "@/components/site/PhotoSlot";
import Reveal from "@/components/site/Reveal";
import YouTubeEmbed from "@/components/site/YouTubeEmbed";
import { primaryAreas } from "@/content/areas";
import {
  finalCta,
  hero,
  howWeHelp,
  method,
  philosophy,
  problem,
  realQuestion,
  signature,
  testimonials,
  thesis,
  trackRecord,
  whyUs,
} from "@/content/homepage";
import { developments, properties } from "@/content/properties";
import { site } from "@/content/site";

/**
 * Homepage — "Website Brand & Content Direction 2026" (client, 10 Sep 2026).
 *
 * The narrative order is the point of this rewrite: you → what you're building
 * → what stands in your way → our philosophy → how we guide you → the right
 * asset → ownership → legacy. Copy lives in content/homepage.ts.
 */

/* Featured opportunities: listings with photography, priciest first. Three on
   the homepage — the client's call, 9 Sep 2026. */
const featured = properties
  .filter((p) => p.image)
  .sort((a, b) => Number(b.price.replace(/\D/g, "")) - Number(a.price.replace(/\D/g, "")))
  .slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="home-hero">
        <div className="home-hero-media">
          <HeroSlider height="100%" />
        </div>
        <div className="shell home-hero-inner">
          <div className="stack stack-3">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>
              {hero.title[0]}
              <br />
              {hero.title[1]}
            </h1>
            <p className="lede">{hero.lede}</p>
            <p className="body">{hero.body}</p>
            <div className="btn-row" style={{ marginTop: ".5rem" }}>
              <Link href="/properties" className="btn btn-primary">
                Explore Investment Opportunities
              </Link>
              <Link href="/contact" className="btn btn-ghost-dark">
                Speak With an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- the real question ---------- */}
      <section className="band">
        <div className="shell stack stack-4">
          <Reveal>
            <p className="rule-label">{realQuestion.eyebrow}</p>
          </Reveal>

          <div className="split split-lead">
            <Reveal>
              <h2>{realQuestion.title}</h2>
            </Reveal>

            <Reveal delay={0.12} className="stack stack-3">
              {realQuestion.intro.map((p) => (
                <p className="body" key={p}>
                  {p}
                </p>
              ))}

              <ul className="listing-run">
                {realQuestion.inventory.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {realQuestion.turn.map((p) => (
                <p className="body" key={p}>
                  {p}
                </p>
              ))}

              <ul className="questions">
                {realQuestion.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>

              {realQuestion.close.map((p) => (
                <p className="body" key={p}>
                  {p}
                </p>
              ))}
              <p className="pull pull-teal">{realQuestion.pull}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- our philosophy ---------- */}
      <section className="band band-white">
        <div className="shell stack stack-4">
          <Reveal>
            <p className="rule-label">{philosophy.eyebrow}</p>
          </Reveal>

          <div className="split split-lead">
            <Reveal>
              <h2>
                {philosophy.title[0]}
                <br />
                {philosophy.title[1]}
              </h2>
            </Reveal>

            <Reveal delay={0.12} className="stack stack-3">
              {philosophy.intro.map((p) => (
                <p className="body" key={p}>
                  {p}
                </p>
              ))}

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
      <section className="band">
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

      {/* ---------- how we help you ---------- */}
      <section className="band band-white">
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
            <Link href="/contact" className="btn btn-primary">
              Start Your Investment Journey
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- signature developments ---------- */}
      <section className="band band-white">
        <div className="shell stack stack-4">
          <div className="split" style={{ alignItems: "center" }}>
            <Reveal>
              <Link href={`/developments/${developments[0].slug}`}>
                <PhotoSlot
                  src="/hero/garelt-court.jpg"
                  alt="Garelt Court, Osapa London, Lekki"
                  height="clamp(16rem, 34vw, 24rem)"
                />
              </Link>
            </Reveal>

            <Reveal delay={0.12} className="stack stack-3">
              <p className="eyebrow">{signature.eyebrow}</p>
              <h2>
                {signature.title[0]}
                <br />
                {signature.title[1]}
              </h2>
              {signature.body.map((p) => (
                <p className="body" key={p}>
                  {p}
                </p>
              ))}
              <p className="pull pull-teal">{signature.pull}</p>
              <ul className="checks">
                {signature.principles.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {signature.close.map((p) => (
                <p className="body" key={p}>
                  {p}
                </p>
              ))}
              <p className="pull pull-teal">{signature.closePull}</p>
              <Link href="/developments" className="link-arrow">
                Explore Signature Developments &rarr;
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- featured opportunities ---------- */}
      <section className="band">
        <div className="shell stack stack-4">
          <div className="split" style={{ alignItems: "end", gap: "1.5rem" }}>
            <div className="stack stack-2">
              <p className="eyebrow">Featured opportunities</p>
              <h2>Opportunities worth understanding</h2>
            </div>
            <div style={{ justifySelf: "start" }}>
              <Link href="/properties" className="link-arrow">
                View all opportunities &rarr;
              </Link>
            </div>
          </div>

          <div className="grid-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.1}>
                <Link
                  href={`/properties/${p.slug}`}
                  className="property-card"
                  style={{ height: "100%" }}
                >
                  <PhotoSlot
                    src={p.image}
                    alt={p.title}
                    height="clamp(13rem, 24vw, 18rem)"
                    focus="center 22%"
                  />
                  <div className="property-card-body">
                    <span className="tag">{p.status}</span>
                    <h3>{p.title}</h3>
                    <p className="property-where">{p.location}</p>
                    <p className="property-price">{p.price}</p>
                    <span className="link-arrow" style={{ marginTop: ".75rem" }}>
                      Understand the investment &rarr;
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <p className="body">
            More listings and walkthroughs go up on Instagram first &mdash;{" "}
            <a href={site.social.instagram} target="_blank" rel="noreferrer">
              follow @danlamirealestate
            </a>
            .
          </p>
        </div>
      </section>

      {/* ---------- why Dan Lami Real Estate ---------- */}
      <section className="band band-white">
        <div className="shell stack stack-4">
          <Reveal>
            <div className="stack stack-2">
              <p className="eyebrow">{whyUs.eyebrow}</p>
              <h2>{whyUs.title}</h2>
            </div>
          </Reveal>

          <div className="grid-3">
            {whyUs.reasons.map((r, i) => (
              <Reveal key={r.n} delay={(i % 3) * 0.1}>
                <div className="value-card">
                  <span className="value-card-idx">{r.n}</span>
                  <h4>{r.name}</h4>
                  <p>{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- the investment thesis ---------- */}
      <section className="band">
        <div className="shell stack stack-4">
          <div className="split split-lead">
            <Reveal>
              <div className="stack stack-2">
                <p className="eyebrow">{thesis.eyebrow}</p>
                <h2>{thesis.title}</h2>
                <p className="pull pull-teal" style={{ marginTop: "1.5rem" }}>
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

      {/* ---------- testimonials ----------
           Real client messages from the company's own Instagram REVIEWS
           highlight. Attribution and republication consent still to be
           confirmed — see content/homepage.ts. */}
      <section className="band band-white">
        <div className="shell stack stack-4">
          <Reveal>
            <div className="stack stack-2">
              <p className="eyebrow">{testimonials.eyebrow}</p>
              <h2>{testimonials.title}</h2>
            </div>
          </Reveal>

          <div className="grid-2">
            {testimonials.items.map((t, i) => (
              <Reveal key={t.quote} delay={(i % 2) * 0.1}>
                <figure className="quote-card">
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>{t.attribution}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="disclosure">
              {testimonials.note}{" "}
              <a href={site.social.instagram} target="_blank" rel="noreferrer">
                See more on Instagram
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- where we sell ---------- */}
      <section className="band band-tight band-white">
        <div className="shell stack stack-3">
          <div className="split" style={{ alignItems: "end", gap: "1.5rem" }}>
            <div className="stack stack-2">
              <p className="eyebrow">Where we sell</p>
              <h2 style={{ fontSize: "var(--step-4)" }}>
                Lekki. Ikoyi. Victoria Island.
              </h2>
            </div>
            <div style={{ justifySelf: "start" }}>
              <Link href="/locations" className="link-arrow">
                All areas we cover &rarr;
              </Link>
            </div>
          </div>

          {/* Homepage keeps the three headline areas; the full browse list,
              including Ajah, is on /properties. */}
          <div className="btn-row">
            {primaryAreas()
              .filter((a) => a.slug !== "ajah")
              .map((area) => (
                <Link
                  key={area.slug}
                  href={`/locations/${area.slug}`}
                  className="btn btn-outline"
                >
                  Property for sale in {area.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ---------- meet the founder ---------- */}
      <section className="band">
        <div className="shell">
          <div className="split split-lead" style={{ alignItems: "center" }}>
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
                  alt="Danlami Ojo, Founder and CEO"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 54rem) 100vw, 40vw"
                />
              </div>
            </Reveal>

            <Reveal delay={0.12} className="stack stack-3">
              <p className="eyebrow">Meet the founder</p>
              <h2>Danlami Ojo</h2>
              <p className="property-where">Founder &amp; CEO &mdash; &ldquo;The Closer&rdquo;</p>
              <p className="body">
                Danlami Ojo is the Founder and CEO of Dan Lami Real Estate and
                the real estate professional behind The Closer.
              </p>
              <p className="body">
                His career in real estate began with selling property. But years
                of working with buyers, investors and developers revealed a
                bigger problem:
              </p>
              <p className="pull pull-teal">
                People didn&rsquo;t simply need more properties to choose from.
                They needed help understanding which properties were worth
                owning.
              </p>
              <p className="body">
                That insight has shaped the evolution of Dan Lami Real Estate
                from brokerage into a luxury real estate investment and
                development company.
              </p>
              <Link href="/the-closer" className="link-arrow">
                Read more &rarr;
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- property tour ---------- */}
      <section className="band band-white">
        <div
          className="shell shell-narrow stack stack-3"
          style={{ textAlign: "center", alignItems: "center" }}
        >
          <Reveal>
            <p className="eyebrow">Property tour</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 style={{ fontSize: "var(--step-4)" }}>
              Step inside a Lagos mega mansion.
            </h2>
          </Reveal>
          <Reveal delay={0.16} style={{ width: "100%" }}>
            <YouTubeEmbed
              videoId="SyFNP_qwAEk"
              title="Inside a ₦1.6B Mega Mansion in Ikate Elegushi — Live in Burna Boy's Estate"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- final call to action ---------- */}
      <section className="band band-teal">
        <div className="shell stack stack-3">
          <p className="eyebrow">{finalCta.eyebrow}</p>
          <h2 style={{ maxWidth: "18ch" }}>
            {finalCta.title[0]}
            <br />
            {finalCta.title[1]}
          </h2>
          <p className="body" style={{ fontSize: "1.0625rem" }}>
            {finalCta.body}
          </p>
          <p className="pull pull-teal" style={{ maxWidth: "34ch" }}>
            {finalCta.pull[0]}
            <br />
            {finalCta.pull[1]}
          </p>
          <div className="btn-row" style={{ marginTop: ".5rem" }}>
            <Link href="/contact" className="btn btn-on-dark">
              Speak With an Investment Advisor
            </Link>
            <Link href="/properties" className="btn btn-ghost-dark">
              Explore Investment Opportunities
            </Link>
            <Link href="/developments" className="btn btn-ghost-dark">
              Explore Our Developments
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
