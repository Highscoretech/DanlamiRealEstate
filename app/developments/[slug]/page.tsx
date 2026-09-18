import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/site/Cta";
import Gallery from "@/components/site/Gallery";
import PhotoSlot from "@/components/site/PhotoSlot";
import Reveal from "@/components/site/Reveal";
import YouTubeEmbed from "@/components/site/YouTubeEmbed";
import { developments } from "@/content/properties";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return developments.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const dev = developments.find((d) => d.slug === slug);
  if (!dev) return {};

  return pageMetadata({
    path: `/developments/${dev.slug}`,
    title: `${dev.title}, ${dev.location} — Dan Lami Signature Development`,
    titleAbsolute: true,
    description: dev.summary,
    image: dev.image ?? "/og.jpg",
    imageAlt: `${dev.title}, ${dev.location}`,
  });
}

export default async function DevelopmentPage({ params }: Params) {
  const { slug } = await params;
  const dev = developments.find((d) => d.slug === slug);
  if (!dev) notFound();

  return (
    <>
      <section className="band band-white" style={{ paddingBottom: 0 }}>
        <div className="shell stack stack-3">
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link href="/developments">Signature Developments</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{dev.title}</span>
          </nav>

          <div className="split split-trail" style={{ alignItems: "start" }}>
            <div className="stack stack-2">
              <span className="tag">{dev.status}</span>
              <h1 style={{ fontSize: "var(--step-5)" }}>{dev.title}</h1>
              <p className="property-where">{dev.location}</p>
              <p className="lede" style={{ marginTop: ".5rem" }}>
                {dev.summary}
              </p>

              <div className="btn-row" style={{ marginTop: "1rem" }}>
                <Link href="/contact" className="btn btn-primary">
                  Register Your Interest
                </Link>
                {/* Becomes a direct download the moment a PDF is supplied;
                    until then it routes the same intent to an advisor. */}
                {dev.brochureUrl ? (
                  <a
                    href={dev.brochureUrl}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noreferrer"
                    {...(dev.brochureIsExternal ? {} : { download: true })}
                  >
                    {dev.brochureIsExternal ? "View the Brochure" : "Download Brochure"}
                  </a>
                ) : (
                  <Link href="/contact" className="btn btn-outline">
                    Request the Brochure
                  </Link>
                )}
                <a
                  href={site.whatsapp}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <PhotoSlot
              src={dev.image}
              alt={`${dev.title}, ${dev.location}`}
              height="clamp(16rem, 38vw, 26rem)"
              priority
            />
          </div>
        </div>
      </section>

      {dev.images?.length ? (
        <section className="band-tight band-white">
          <div className="shell">
            <Gallery
              images={[dev.image, ...dev.images].filter(
                (s): s is string => Boolean(s)
              )}
              alt={`${dev.title}, ${dev.location}`}
            />
          </div>
        </section>
      ) : null}

      <section className="band">
        <div className="shell">
          <div className="split split-lead">
            <Reveal>
              <div className="stack stack-2">
                <p className="rule-label">About this development</p>
                <p className="body">
                  {dev.title} is one of our Signature Developments — projects we
                  bring to market ourselves rather than simply list. Full
                  details, unit mix and payment terms are released to
                  registered buyers first.
                </p>

                {dev.facts?.length ? (
                  <dl
                    style={{
                      margin: "1.5rem 0 0",
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: ".6rem 1.5rem",
                      fontSize: "var(--step--1)",
                    }}
                  >
                    {dev.facts.map((f) => (
                      <div key={f.label} style={{ display: "contents" }}>
                        <dt style={{ color: "var(--faint)" }}>{f.label}</dt>
                        <dd style={{ margin: 0 }}>{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="stack stack-2">
                <p className="rule-label">See it in motion</p>
                {dev.videoId ? (
                  <YouTubeEmbed
                    videoId={dev.videoId}
                    title={`${dev.title}, ${dev.location} — walkthrough`}
                  />
                ) : (
                  <p className="body">
                    Walkthroughs and updates for this development go up on our
                    own channels first.
                  </p>
                )}
                <div className="btn-row" style={{ marginTop: ".75rem" }}>
                  <a
                    href={site.social.instagram}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Instagram
                  </a>
                  <a
                    href={site.social.youtube}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Watch on YouTube
                  </a>
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
