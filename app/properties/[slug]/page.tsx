import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/site/Cta";
import Gallery from "@/components/site/Gallery";
import PhotoSlot from "@/components/site/PhotoSlot";
import JsonLd from "@/components/seo/JsonLd";
import { areas } from "@/content/areas";
import { properties } from "@/content/properties";
import { site } from "@/content/site";
import { propertySchema } from "@/lib/schema";
import { pageMetadata, priceShort } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) return {};

  // The estate's own name ("Ikota Villa Estate") is what people search and is
  // shorter than the full listing location, which keeps the title inside what
  // Google renders.
  const areaName =
    areas.find(
      (a) => a.slug !== "lekki" && a.locations.includes(property.location)
    )?.name ?? property.location;

  return pageMetadata({
    path: `/properties/${property.slug}`,
    // Front-loaded with what people actually type: bedroom count, property
    // type, "for sale in", the estate by name. The short price form is how the
    // market writes it and leaves room before Google truncates.
    title: `${property.title} for Sale in ${areaName} — ${priceShort(property.price)}`,
    titleAbsolute: true,
    description: `${priceShort(property.price)}. ${property.summary}`,
    image: property.image ?? "/og.jpg",
    imageAlt: `${property.title} for sale in ${property.location}, Lagos`,
  });
}

export default async function PropertyPage({ params }: Params) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) notFound();

  const others = properties.filter((p) => p.slug !== property.slug).slice(0, 3);
  const area = areas.find(
    (a) => a.slug !== "lekki" && a.locations.includes(property.location)
  );

  return (
    <>
      <JsonLd data={propertySchema(property)} />

      <section className="band band-white" style={{ paddingBottom: "0" }}>
        <div className="shell stack stack-3">
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link href="/properties">Properties</Link>
            <span aria-hidden="true">/</span>
            {area ? (
              <>
                <Link href={`/locations/${area.slug}`}>{area.name}</Link>
                <span aria-hidden="true">/</span>
              </>
            ) : null}
            <span aria-current="page">{property.title}</span>
          </nav>

          <div className="split split-trail" style={{ alignItems: "start" }}>
            <div className="stack stack-2">
              <span className="tag">{property.status}</span>
              <h1 style={{ fontSize: "var(--step-5)" }}>
                {property.title} in {property.location}
              </h1>
              <p className="lede">{property.summary}</p>
              {/* §9: the investment thesis, once the client writes it. */}
              {property.thesis ? (
                <div className="thesis-block" style={{ marginTop: "1rem" }}>
                  <p className="rule-label">Why this opportunity</p>
                  <p>{property.thesis}</p>
                </div>
              ) : null}
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--step-4)",
                  color: "var(--teal-deep)",
                  marginTop: ".5rem",
                }}
              >
                {property.price}
              </p>
              <div className="btn-row" style={{ marginTop: "1rem" }}>
                <Link href="/contact" className="btn btn-primary">
                  Request an Inspection
                </Link>
                <a href={site.whatsapp} className="btn btn-outline" target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <PhotoSlot
              src={property.image}
              alt={`${property.title} for sale in ${property.location}, Lagos`}
              height="clamp(16rem, 38vw, 26rem)"
              note="Photography pending"
              priority
              focus="center 22%"
            />
          </div>
        </div>
      </section>

      {property.images?.length ? (
        <section className="band-tight band-white">
          <div className="shell">
            <Gallery
              images={[property.image, ...property.images].filter(
                (s): s is string => Boolean(s)
              )}
              alt={`${property.title}, ${property.location}`}
            />
          </div>
        </section>
      ) : null}

      <section className="band">
        <div className="shell">
          <div className="split split-lead">
            <div className="stack stack-2">
              <p className="rule-label">About this property</p>
              <p className="body">
                This {property.type.toLowerCase()} is located in{" "}
                {property.location}, on the Lekki peninsula in Lagos. Title
                documentation, payment terms and an inspection can all be
                arranged through an advisor.
                {area ? (
                  <>
                    {" "}
                    See every{" "}
                    <Link href={`/locations/${area.slug}`}>
                      property for sale in {area.name}
                    </Link>
                    .
                  </>
                ) : null}
              </p>

              <dl
                style={{
                  margin: "1.5rem 0 0",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: ".6rem 1.5rem",
                  fontSize: "var(--step--1)",
                }}
              >
                <dt style={{ color: "var(--faint)" }}>Type</dt>
                <dd style={{ margin: 0 }}>{property.type}</dd>
                {property.beds ? (
                  <>
                    <dt style={{ color: "var(--faint)" }}>Bedrooms</dt>
                    <dd style={{ margin: 0 }}>{property.beds}</dd>
                  </>
                ) : null}
                <dt style={{ color: "var(--faint)" }}>Location</dt>
                <dd style={{ margin: 0 }}>{property.location}</dd>
                <dt style={{ color: "var(--faint)" }}>Title documents</dt>
                <dd style={{ margin: 0, color: "var(--faint)" }}>
                  On request
                </dd>
              </dl>
            </div>

            <div className="stack stack-2">
              {property.features.length > 0 ? (
                <>
                  <p className="rule-label">Features</p>
                  <ul className="checks">
                    {property.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <p className="rule-label">Features</p>
                  <p className="body">
                    Full specification available on request. Speak with an
                    advisor for the complete feature list, payment plan and
                    title documentation.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="band band-sunk">
        <div className="shell stack stack-4">
          <h2 style={{ fontSize: "var(--step-4)" }}>Other properties</h2>
          <div className="grid-3">
            {others.map((p) => (
              <Link key={p.slug} href={`/properties/${p.slug}`} className="property-card">
                <PhotoSlot
                  src={p.image}
                  alt={`${p.title} for sale in ${p.location}`}
                  height="11rem"
                  focus="center 22%"
                />
                <div className="property-card-body">
                  <h3 style={{ fontSize: "var(--step-2)" }}>{p.title}</h3>
                  <p className="property-where">{p.location}</p>
                  <p className="property-price">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
