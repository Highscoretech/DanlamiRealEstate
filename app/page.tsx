import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/site/Cta";
import HeroSlider from "@/components/site/HeroSlider";
import PhotoSlot from "@/components/site/PhotoSlot";
import Reveal from "@/components/site/Reveal";
import { properties } from "@/content/properties";

/* Homepage. Copy is the client's own, section 1 of docs/client-content.md.
   No headline statistics anywhere — the client explicitly asked that no
   unverified numbers go on the site yet. */

/* Feature only listings that already have photography. */
const featured = properties.filter((p) => p.image).slice(0, 4);

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
            <p className="eyebrow">Africa&rsquo;s Luxury Real Estate Authority</p>
            <h1>
              Own More Than Property.
              <br />
              Own an Asset Built to Last.
            </h1>
            <p className="lede">
              At Dan Lami Real Estate, we believe luxury real estate is more
              than a beautiful address. It is about owning the right asset, in
              the right location, at the right time &mdash; with the right
              strategy behind it.
            </p>
            <p className="body">
              We help investors acquire premium real estate opportunities
              designed to create value today and preserve wealth for
              generations to come.
            </p>
            <div className="btn-row" style={{ marginTop: ".5rem" }}>
              <Link href="/developments" className="btn btn-primary">
                Explore Our Developments
              </Link>
              <Link href="/contact" className="btn btn-ghost-dark">
                Speak With an Investment Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- the difference ---------- */}
      <section className="band">
        <div className="shell stack stack-4">
          <Reveal>
            <p className="rule-label">The Dan Lami difference</p>
          </Reveal>

          <div className="split split-lead">
            <Reveal>
              <div className="stack stack-2">
                <h2>
                  We don&rsquo;t just sell property. We help you understand the
                  investment.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.12} className="stack stack-3">
              <p className="body">
                Anyone can show you a property. We go further.
              </p>
              <p className="body">
                Before recommending a real estate asset, we examine the factors
                that can influence its long-term value &mdash; including
                location, development trajectory, demand, rental potential,
                capital appreciation, infrastructure, accessibility and exit
                opportunities.
              </p>
              <p className="body">Because the question isn&rsquo;t simply:</p>
              <p className="pull">&ldquo;Do you like the property?&rdquo;</p>
              <p className="body">The better question is:</p>
              <p className="pull pull-teal">
                &ldquo;Why should you own it?&rdquo;
              </p>
              <p className="body">
                That is the difference between buying property and building a
                real estate portfolio.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- featured properties ---------- */}
      <section className="band band-white">
        <div className="shell stack stack-4">
          <div className="split" style={{ alignItems: "end", gap: "1.5rem" }}>
            <div className="stack stack-2">
              <p className="eyebrow">Currently available</p>
              <h2>Selected properties</h2>
            </div>
            <div style={{ justifySelf: "start" }}>
              <Link href="/properties" className="link-arrow">
                View all properties &rarr;
              </Link>
            </div>
          </div>

          <div className="grid-2">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.1}>
                <Link
                  href={`/properties/${p.slug}`}
                  className="property-card"
                  style={{ height: "100%" }}
                >
                  <PhotoSlot src={p.image} alt={p.title} height="clamp(13rem, 24vw, 18rem)" />
                  <div className="property-card-body">
                    <span className="tag">{p.status}</span>
                    <h3>{p.title}</h3>
                    <p className="property-where">{p.location}</p>
                    <p className="property-price">{p.price}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- what we do ---------- */}
      <section className="band">
        <div className="shell stack stack-4">
          <div className="split split-lead" style={{ alignItems: "start" }}>
            <Reveal>
              <div className="stack stack-2">
                <p className="eyebrow">What we do</p>
                <h2>Four ways we work</h2>
                <Link href="/services" className="link-arrow" style={{ marginTop: ".5rem" }}>
                  All services &rarr;
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              {[
                {
                  n: "01",
                  t: "Luxury real estate sales",
                  d: "Access carefully selected luxury residential and investment properties across premium locations, from apartments and waterfront residences to exclusive land opportunities.",
                },
                {
                  n: "02",
                  t: "Real estate investment advisory",
                  d: "We help clients understand the investment opportunity behind a property before they commit their capital.",
                },
                {
                  n: "03",
                  t: "Strategic development",
                  d: "We work with property owners, developers and strategic partners to bring high-quality developments to market.",
                },
                {
                  n: "04",
                  t: "Property acquisition",
                  d: "For clients who prefer a hands-off approach, we identify and evaluate opportunities against their objectives, budget and investment horizon.",
                },
              ].map((s) => (
                <div className="numbered" key={s.n}>
                  <span className="numbered-idx">{s.n}</span>
                  <div>
                    <h4>{s.t}</h4>
                    <p>{s.d}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- signature developments ---------- */}
      <section className="band band-white">
        <div className="shell">
          <div className="split" style={{ alignItems: "center" }}>
            <Reveal>
              <PhotoSlot
                src="/hero/garelt-court.jpg"
                alt="Garelt Court, Osapa London, Lekki"
                height="clamp(16rem, 34vw, 24rem)"
              />
            </Reveal>
            <Reveal delay={0.12} className="stack stack-3">
              <p className="eyebrow">Signature Developments</p>
              <h2>
                Developments with purpose. Assets designed for the future.
              </h2>
              <p className="body">
                Our Signature Developments represent a new chapter in the Dan
                Lami Real Estate brand. These are not simply projects.
              </p>
              <p className="body">
                They are opportunities to own strategically positioned real
                estate assets designed around lifestyle, demand, location and
                long-term value.
              </p>
              <Link href="/developments" className="link-arrow">
                Explore Signature Developments &rarr;
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- for investors ---------- */}
      <section className="band band-sunk">
        <div className="shell stack stack-4">
          <div className="split split-lead">
            <Reveal>
              <div className="stack stack-2">
                <p className="eyebrow">For investors</p>
                <h2>Your capital deserves a strategy.</h2>
                <p className="body" style={{ marginTop: ".5rem" }}>
                  Real estate investment shouldn&rsquo;t be based solely on
                  emotion. Before committing capital, investors need to
                  understand:
                </p>
                <Link href="/investors" className="link-arrow" style={{ marginTop: "1rem" }}>
                  How we advise investors &rarr;
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
            <ul className="questions">
              {[
                "Where is the property?",
                "Why is the location important?",
                "What is changing around it?",
                "Who is the likely buyer or tenant?",
                "What could drive demand?",
                "What is the potential income?",
                "What is the potential appreciation?",
              ].map((q) => (
                <li key={q}>{q}</li>
              ))}
              <li style={{ color: "var(--teal-deep)" }}>
                And ultimately &mdash; what is the exit?
              </li>
            </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- the closer ---------- */}
      <section className="band band-white">
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
              <p className="eyebrow">The Closer</p>
              <h2>Meet Danlami Ojo</h2>
              <p className="body">
                Danlami Ojo is the Founder and CEO of Dan Lami Real Estate and is
                widely known as <strong>&ldquo;The Closer.&rdquo;</strong> His
                approach to real estate goes beyond closing transactions.
              </p>
              <p className="body">
                He believes the real value of a property professional is not
                simply in selling a property, but in helping clients understand
                the opportunity behind the asset.
              </p>
              <p className="pull pull-teal" style={{ marginTop: ".5rem" }}>
                Don&rsquo;t just acquire property. Acquire assets that make
                sense.
              </p>
              <Link href="/the-closer" className="link-arrow">
                Read more &rarr;
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- brand promise ---------- */}
      <section className="band">
        <div className="shell shell-narrow stack stack-3" style={{ textAlign: "center", alignItems: "center" }}>
          <Reveal>
            <p className="eyebrow">Our brand promise</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 style={{ maxWidth: "20ch" }}>
              We don&rsquo;t just help you buy property. We help you buy with
              purpose.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="body" style={{ textAlign: "center" }}>
              Because the right property can become a home. An income-producing
              asset. A capital-growth opportunity. A family asset. A portfolio.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="pull pull-teal" style={{ maxWidth: "none" }}>
              And ultimately, a legacy.
            </p>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
