import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import PhotoSlot from "@/components/site/PhotoSlot";
import JsonLd from "@/components/seo/JsonLd";
import { areas } from "@/content/areas";
import { properties } from "@/content/properties";
import { itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/locations",
  title: "Where We Sell — Lekki, Osapa London, Ikota Villa & Cowrie Creek",
  titleAbsolute: true,
  description:
    "The Lagos neighbourhoods Dan Lami Real Estate sells in: Lekki, Osapa London, Ikota Villa and Cowrie Creek. Browse current listings by area.",
  image: "/og.jpg",
});

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          areas.map((a) => ({ name: a.h1, path: `/locations/${a.slug}` })),
          "Areas we cover in Lagos"
        )}
      />

      <PageHero
        eyebrow="Where we sell"
        title="Areas We Cover in Lagos"
        lede="Our portfolio is concentrated on the Lekki peninsula, where most of the city's premium residential stock has been built."
      />

      <section className="band">
        <div className="shell">
          <div className="grid-3">
            {areas.map((area) => {
              const listings = properties.filter((p) =>
                area.locations.includes(p.location)
              );
              const cover = listings.find((p) => p.image)?.image ?? null;

              return (
                <Link
                  key={area.slug}
                  href={`/locations/${area.slug}`}
                  className="property-card"
                >
                  <PhotoSlot
                    src={cover}
                    alt={`Property for sale in ${area.fullName}`}
                    height="13rem"
                    focus="center 22%"
                  />
                  <div className="property-card-body">
                    <h2 style={{ fontSize: "var(--step-2)" }}>{area.name}</h2>
                    <p className="property-where">
                      {listings.length}{" "}
                      {listings.length === 1 ? "property" : "properties"} available
                    </p>
                    <p
                      className="body"
                      style={{ fontSize: "var(--step--1)", marginTop: ".4rem" }}
                    >
                      {area.intro[0]}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
