import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { faqs } from "@/content/faqs";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/faq",
  title: "Buying Property in Lagos — Frequently Asked Questions",
  titleAbsolute: true,
  description:
    "Answers on title documents, payment plans, buying from abroad, inspections and investment consultations with Dan Lami Real Estate in Lekki, Lagos.",
  image: "/og.jpg",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <PageHero
        eyebrow="Questions"
        title="Buying Property in Lagos"
        lede="The questions we are asked most often, answered plainly. If yours is not here, ask us directly."
      />

      <section className="band">
        <div className="shell shell-narrow">
          <div className="stack stack-3">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="stack stack-2"
                style={{
                  paddingBottom: "1.75rem",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <h2 style={{ fontSize: "var(--step-3)" }}>{faq.question}</h2>
                <p className="body" style={{ maxWidth: "none" }}>
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="stack stack-2" style={{ marginTop: "2.5rem" }}>
            <p className="body">
              Still deciding where to look? Browse{" "}
              <Link href="/locations/lekki">property for sale in Lekki</Link>, or
              go straight to <Link href="/properties">every current listing</Link>.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ width: "fit-content" }}>
              Ask us something else
            </Link>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
