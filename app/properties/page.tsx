import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import PhotoSlot from "@/components/site/PhotoSlot";
import { properties } from "@/content/properties";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Luxury residential and investment properties across Lekki, Lagos — Osapa, Ikota Villa and Cowrie Creek.",
};

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Properties"
        title="Currently available"
        lede="Carefully selected luxury residential and investment properties across premium Lagos locations."
      />

      <section className="band">
        <div className="shell stack stack-4">
          <div className="grid-3">
            {properties.map((p) => (
              <Link
                key={p.slug}
                href={`/properties/${p.slug}`}
                className="property-card"
              >
                <PhotoSlot src={p.image} alt={p.title} height="13rem" />
                <div className="property-card-body">
                  <span className="tag">{p.status}</span>
                  <h3>{p.title}</h3>
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
        </div>
      </section>

      <Cta />
    </>
  );
}
