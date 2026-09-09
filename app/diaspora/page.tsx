import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/diaspora",
  title:
    "Buy Property in Lagos From Abroad — Diaspora Services",
  titleAbsolute: true,
  description:
    "Buying Lagos property from the UK, US, Canada or UAE: sourcing, due diligence, developer verification, documentation and management. You need not be in Lagos.",
  image: "/og.jpg",
});

const support = [
  "Property sourcing",
  "Investment advisory",
  "Due diligence coordination",
  "Developer verification",
  "Acquisition support",
  "Documentation",
  "Payment planning",
  "Property management support",
];

export default function DiasporaPage() {
  return (
    <>
      <PageHero
        eyebrow="For diaspora clients"
        title={
          <>
            Invest in home.
            <br />
            Invest in the future.
          </>
        }
        lede="For Africans in the diaspora, investing in Nigerian real estate can be more than returning home."
      />

      <section className="band">
        <div className="shell">
          <div className="split split-lead">
            <div className="stack stack-3">
              <p className="body">
                It can be a strategic way to build an asset base in a market
                they understand emotionally &mdash; but may not always
                understand operationally.
              </p>
              <p className="pull pull-teal">
                You don&rsquo;t have to be physically present to make a
                strategic investment.
              </p>
            </div>

            <div className="stack stack-2">
              <p className="rule-label">How we help</p>
              <ul className="checks">
                {support.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <Link href="/contact" className="link-arrow" style={{ marginTop: "1.25rem" }}>
                Speak with an advisor &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
