import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { services } from "@/content/homepage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/services",
  title: "What We Do — Real Estate Built Around Your Objective",
  titleAbsolute: true,
  description:
    "Luxury real estate, investment advisory, property acquisition, development, development partnerships, and sales and marketing in Lagos, Nigeria.",
  image: "/og.jpg",
});

/* Copy: docs/brand-direction-2026.md §7. */

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={services.eyebrow}
        title={services.title}
        lede="Six ways we work with buyers, investors, landowners and developers."
      />

      <section className="band">
        <div className="shell stack stack-5">
          {services.items.map((s) => (
            <div className="split split-lead" key={s.n}>
              <Reveal>
                <div className="stack stack-2">
                  <span className="numbered-idx">{s.n}</span>
                  <h2 style={{ fontSize: "var(--step-4)" }}>{s.name}</h2>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="stack stack-3">
                {s.body.map((p) => (
                  <p className="body" key={p}>
                    {p}
                  </p>
                ))}

                {"list" in s && s.list ? (
                  <div className="stack stack-2" style={{ marginTop: ".5rem" }}>
                    <p className="rule-label">{s.list.label}</p>
                    <ul className="checks">
                      {s.list.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <Link href={s.cta.href} className="link-arrow">
                  {s.cta.label} &rarr;
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <Cta />
    </>
  );
}
