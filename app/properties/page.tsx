import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import PhotoSlot from "@/components/site/PhotoSlot";
import JsonLd from "@/components/seo/JsonLd";
import { primaryAreas } from "@/content/areas";
import { properties } from "@/content/properties";
import { site } from "@/content/site";
import { itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/properties",
  title: "Property for Sale in Lekki, Lagos — Duplexes & Apartments",
  titleAbsolute: true,
  description:
    "Browse luxury duplexes and apartments for sale in Lekki, Lagos — Osapa London, Ikota Villa and Cowrie Creek. Prices, full specifications and inspection bookings.",
  image: properties.find((p) => p.image)?.image ?? "/og.jpg",
  imageAlt: "Luxury property for sale in Lekki, Lagos",
});

export default function PropertiesPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          properties.map((p) => ({
            name: `${p.title}, ${p.location} — ${p.price}`,
            path: `/properties/${p.slug}`,
          })),
          "Property for sale in Lekki, Lagos"
        )}
      />

      <PageHero
        eyebrow="Properties"
        title="Property for Sale in Lekki, Lagos"
        lede="Carefully selected luxury residential and investment properties across Osapa London, Ikota Villa and Cowrie Creek."
      />

      <section className="band">
        <div className="shell stack stack-4">
          {/* Area links sit above the grid so both people and crawlers reach
              the location pages from the highest-traffic listing page. */}
          <div className="stack stack-2">
            <p className="rule-label">Browse by area</p>
            <div className="btn-row">
              {primaryAreas().map((area) => (
                <Link
                  key={area.slug}
                  href={`/locations/${area.slug}`}
                  className="btn btn-outline"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid-3">
            {properties.map((p, i) => (
              <Link
                key={p.slug}
                href={`/properties/${p.slug}`}
                className="property-card"
              >
                <PhotoSlot
                  src={p.image}
                  alt={`${p.title} for sale in ${p.location}, Lagos`}
                  height="13rem"
                  priority={i < 3}
                  focus="center 22%"
                />
                <div className="property-card-body">
                  <span className="tag">{p.status}</span>
                  <h2 style={{ fontSize: "var(--step-2)" }}>{p.title}</h2>
                  <p className="property-where">{p.location}</p>
                  <p className="property-price">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>

          <p className="disclosure">
            Prices are quoted in Nigerian Naira and are subject to change and
            availability. Payment plans are available on selected properties.
            Speak with an advisor for current terms and title documentation.
          </p>

          <p className="body">
            Not sure where to look? Read our{" "}
            <Link href="/faq">questions on buying property in Lagos</Link>, or
            see how we work with{" "}
            <Link href="/diaspora">buyers outside Nigeria</Link>.
          </p>

          <div className="stack stack-2">
            <p className="body">
              Prefer to see properties in motion? New listings and walkthroughs
              go up on our own channels first.
            </p>
            <div className="btn-row">
              <a
                href={site.social.instagram}
                className="btn btn-outline"
                target="_blank"
                rel="noreferrer"
              >
                More Listings on Instagram
              </a>
              <a
                href={site.social.youtube}
                className="btn btn-outline"
                target="_blank"
                rel="noreferrer"
              >
                Watch Property Tours on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
