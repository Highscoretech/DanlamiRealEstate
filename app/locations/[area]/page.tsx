import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import PhotoSlot from "@/components/site/PhotoSlot";
import JsonLd from "@/components/seo/JsonLd";
import { areas, findArea } from "@/content/areas";
import { properties } from "@/content/properties";
import { breadcrumbSchema, itemListSchema, placeSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ area: string }> };

export function generateStaticParams() {
  return areas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { area: slug } = await params;
  const area = findArea(slug);
  if (!area) return {};

  const listings = properties.filter((p) => area.locations.includes(p.location));
  const cover = listings.find((p) => p.image)?.image;

  return pageMetadata({
    path: `/locations/${area.slug}`,
    title: area.metaTitle,
    titleAbsolute: true,
    description: area.metaDescription,
    image: cover ?? "/og.jpg",
    imageAlt: `Property for sale in ${area.fullName}`,
  });
}

export default async function AreaPage({ params }: Params) {
  const { area: slug } = await params;
  const area = findArea(slug);
  if (!area) notFound();

  const listings = properties.filter((p) => area.locations.includes(p.location));
  const related = area.related
    .map((s) => findArea(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbSchema([
              { name: "Locations", path: "/locations" },
              { name: area.name, path: `/locations/${area.slug}` },
            ]),
            placeSchema({
              name: area.name,
              description: area.intro[0],
              path: `/locations/${area.slug}`,
            }),
          ],
        }}
      />
      {listings.length > 0 && (
        <JsonLd
          data={itemListSchema(
            listings.map((p) => ({
              name: `${p.title}, ${p.location} — ${p.price}`,
              path: `/properties/${p.slug}`,
            })),
            `Property for sale in ${area.fullName}`
          )}
        />
      )}

      <PageHero
        eyebrow={`${area.name}, Lagos`}
        title={area.h1}
        lede={area.intro[0]}
      />

      <section className="band">
        <div className="shell stack stack-4">
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link href="/locations">Locations</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{area.name}</span>
          </nav>

          <div className="split split-trail">
            <div className="stack stack-3">
              {area.intro.slice(1).map((paragraph) => (
                <p className="body" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* The local detail an aggregator cannot fake, and the reason this
                page can rank for the area rather than only for the listings. */}
            <div className="stack stack-2">
              <p className="rule-label">{area.name} at a glance</p>
              <dl className="facts">
                {area.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {listings.length > 0 ? (
            <>
              <h2 style={{ fontSize: "var(--step-4)" }}>
                {listings.length} {listings.length === 1 ? "property" : "properties"} in{" "}
                {area.name}
              </h2>
              <div className="grid-3">
                {listings.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/properties/${p.slug}`}
                    className="property-card"
                  >
                    <PhotoSlot
                      src={p.image}
                      alt={`${p.title} for sale in ${p.location}`}
                      height="13rem"
                      focus="center 22%"
                    />
                    <div className="property-card-body">
                      <span className="tag">{p.status}</span>
                      <h3>{p.title}</h3>
                      <p className="property-where">{p.location}</p>
                      <p className="property-price">{p.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <p className="body">
              We do not have a listing in {area.name} at this moment. Availability
              here moves quickly &mdash; tell us what you are looking for and we
              will let you know the day something comes up.
            </p>
          )}

          <div className="btn-row">
            <Link href="/contact" className="btn btn-primary">
              Book an inspection in {area.name}
            </Link>
            <Link href="/properties" className="btn btn-outline">
              See every property
            </Link>
          </div>
        </div>
      </section>

      <section className="band band-white">
        <div className="shell stack stack-3">
          <p className="rule-label">Other areas we cover</p>
          <div className="btn-row">
            {related.map((other) => (
              <Link
                key={other.slug}
                href={`/locations/${other.slug}`}
                className="btn btn-outline"
              >
                Property for sale in {other.name}
              </Link>
            ))}
          </div>
          <p className="body" style={{ marginTop: "1rem" }}>
            Before you pay for anything in {area.name}, read what the title
            documents actually mean &mdash;{" "}
            <Link href="/guides/land-titles-in-lagos">
              C of O, Governor&rsquo;s Consent, excision and gazette explained
            </Link>
            . Buying from outside Nigeria? Our{" "}
            <Link href="/guides/buying-property-in-lagos-from-abroad">
              guide for diaspora buyers
            </Link>{" "}
            covers verification, documentation and paying across currencies. If
            you are buying as an investment rather than a home, start with{" "}
            <Link href="/investors">how we advise investors</Link>.
          </p>
        </div>
      </section>

      <Cta />
    </>
  );
}
