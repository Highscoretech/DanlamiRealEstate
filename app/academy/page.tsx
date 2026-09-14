import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import PhotoSlot from "@/components/site/PhotoSlot";
import Reveal from "@/components/site/Reveal";
import { academy } from "@/content/academy";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/academy",
  title: "Dan Lami Academy — Learn Luxury Real Estate Sales From The Closer",
  titleAbsolute: true,
  description:
    "Courses by Danlami Ojo — \"The Closer\" — on pitching and selling luxury real estate. Pitch Like a Closer and The Blueprint to Selling Luxury Real Estate, available on Selar.",
  image: "/team/danlami-ojo.jpg",
});

/* Courses are sold and delivered on Selar, not on this site — every card
   links out to the storefront. See content/academy.ts for sourcing. */

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Dan Lami Academy"
        title="Learn to sell luxury real estate from The Closer."
        lede="Courses by Danlami Ojo on pitching and selling luxury property — built from the same approach behind Dan Lami Real Estate."
      />

      <section className="band">
        <div className="shell stack stack-4">
          <Reveal>
            <p className="rule-label">Courses</p>
          </Reveal>
          <div className="grid-2">
            {academy.courses.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.1}>
                <div className="property-card" style={{ height: "100%" }}>
                  <PhotoSlot
                    src={c.image}
                    alt={c.title}
                    height="16rem"
                    focus={"imageFocus" in c ? c.imageFocus : "center"}
                  />
                  <div className="property-card-body">
                    <h3>{c.title}</h3>
                    <p className="body" style={{ fontSize: "var(--step--1)" }}>
                      {c.summary}
                    </p>
                    <p className="property-price">{c.priceRange}</p>
                    <a
                      href={academy.storeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                      style={{ marginTop: ".75rem", alignSelf: "flex-start" }}
                    >
                      Buy on Selar
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
