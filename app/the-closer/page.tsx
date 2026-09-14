import Image from "next/image";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import YouTubeEmbed from "@/components/site/YouTubeEmbed";
import JsonLd from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/the-closer",
  title:
    "Danlami Ojo — Founder & CEO of Dan Lami Real Estate",
  titleAbsolute: true,
  description:
    "Danlami Ojo, known as “The Closer,” is the Founder and CEO of Dan Lami Real Estate in Lagos. His approach to property, investment and long-term value.",
  image: "/team/danlami-ojo.jpg",
  imageAlt: "Danlami Ojo, Founder and CEO of Dan Lami Real Estate",
});

export default function TheCloserPage() {
  return (
    <>
      <JsonLd data={personSchema()} />

      <PageHero
        eyebrow="The Closer"
        title="Meet Danlami Ojo"
        lede="Africa’s Luxury Real Estate Authority"
      />

      <section className="band">
        <div className="shell">
          <div className="split split-lead" style={{ alignItems: "start" }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "4 / 5",
                background: "var(--surface-sunk)",
              }}
            >
              <Image
                src="/team/danlami-ojo.jpg"
                alt="Danlami Ojo, Founder and CEO of Dan Lami Real Estate"
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 54rem) 100vw, 40vw"
              />
            </div>

            <div className="stack stack-3">
              <p className="body">
                Danlami Ojo is the Founder and CEO of Dan Lami Real Estate and is
                widely known as <strong>&ldquo;The Closer.&rdquo;</strong>
              </p>
              <p className="body">
                His approach to real estate goes beyond closing transactions. He
                believes the real value of a property professional is not simply
                in selling a property, but in helping clients understand the
                opportunity behind the asset.
              </p>
              <p className="body">
                Through Dan Lami Real Estate, he is building a brand centred
                around luxury property, strategic investment, development and
                long-term wealth creation.
              </p>

              <hr className="divider" style={{ margin: "1rem 0" }} />

              <p className="rule-label">His philosophy is simple</p>
              <p className="pull">Don&rsquo;t just acquire property.</p>
              <p className="pull pull-teal">
                Acquire assets that make sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band-white" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="shell shell-narrow stack stack-3">
          <p className="rule-label">In his own words</p>
          <YouTubeEmbed
            videoId="fdQOAQeBE9c"
            title="The Real Estate Broker Changing the Narrative of Real Estate in Lagos, Nigeria — Danlami Ojo"
          />
        </div>
      </section>

      <Cta />
    </>
  );
}
