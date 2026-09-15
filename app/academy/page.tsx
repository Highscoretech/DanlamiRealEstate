import Image from "next/image";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
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

/* Courses are sold and delivered on Selar — each card links straight to its
   own checkout page, not the storefront. See content/academy.ts. */

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
                <a
                  href={c.buyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="course-card"
                >
                  {/* Every poster is cropped to the same shape so the row
                      lines up; `imageFocus` picks the crop point per poster. */}
                  <div className="course-card-art">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(max-width: 54rem) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: c.imageFocus }}
                    />
                  </div>
                  <div className="course-card-body">
                    <h3>{c.title}</h3>
                    <p className="body" style={{ fontSize: "var(--step--1)" }}>
                      {c.summary}
                    </p>
                    <p className="property-price">{c.priceRange}</p>
                    <span
                      className="btn btn-primary"
                      style={{ marginTop: ".75rem", alignSelf: "flex-start" }}
                    >
                      Buy on Selar
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
