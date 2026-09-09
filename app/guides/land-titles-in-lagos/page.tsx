import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { findGuide } from "@/content/guides";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const guide = findGuide("land-titles-in-lagos")!;
const path = `/guides/${guide.slug}`;

export const metadata = pageMetadata({
  path,
  title: guide.metaTitle,
  titleAbsolute: true,
  description: guide.metaDescription,
  image: "/og.jpg",
});

/* Questions lifted from what buyers actually ask, answered from the body of
   the guide so the FAQ markup and the visible page never drift apart. */
const faqs = [
  {
    question: "What is the difference between a C of O and Governor's Consent?",
    answer:
      "A Certificate of Occupancy is issued once, to the first legal owner of a piece of land, and records that the state has granted them a right of occupancy — normally for 99 years. Governor's Consent is what validates a later transfer of that same land to somebody else. The C of O establishes the title; the Consent is what makes a subsequent sale of it recognised by the state.",
  },
  {
    question: "Do I still need Governor's Consent if the property already has a C of O?",
    answer:
      "Yes. When a property that already carries a C of O is resold, the buyer needs Governor's Consent for the transfer to be legally recognised. Without it the state does not recognise the new buyer as the owner, whatever the receipts say.",
  },
  {
    question: "What does it mean when land is excised?",
    answer:
      "Excision is the government releasing a portion of land from its own control back to the original community or landowners. Excised land is eligible to progress to a Certificate of Occupancy. Excision on its own is not the same as holding a C of O.",
  },
  {
    question: "What is a gazette?",
    answer:
      "A gazette is the official government publication that records excisions. It lists the community, the details and boundaries of the land released, and its size. It is the public record that an excision actually happened, which is why buyers ask to see it.",
  },
  {
    question: "Is a survey plan enough on its own?",
    answer:
      "No. A survey plan establishes where a piece of land is and what its boundaries are. It does not establish who owns it. It is a necessary document, not a title.",
  },
];

export default function LandTitlesGuide() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbSchema([
              { name: "Guides", path: "/guides" },
              { name: guide.title, path },
            ]),
            articleSchema({
              path,
              headline: guide.title,
              description: guide.metaDescription,
              datePublished: guide.updated,
            }),
          ],
        }}
      />
      <JsonLd data={faqSchema(faqs)} />

      <PageHero
        eyebrow="Guide"
        title="Land Titles in Lagos, Explained"
        lede="A Certificate of Occupancy is not the same thing as Governor's Consent, and an excision is not a title. Here is what each document does, and which one your purchase actually needs."
      />

      <section className="band">
        <div className="shell shell-narrow prose">
          <p className="lede" style={{ maxWidth: "none" }}>
            In Lagos the title matters more than the house. A beautiful building
            on a document you cannot defend is not an asset; it is a dispute
            waiting for a date.
          </p>

          <h2>What you are actually buying</h2>
          <p>
            The Land Use Act of 1978 vested all land in each state in that
            state&rsquo;s governor, to be held in trust for the people. Absolute
            ownership in the way people often imagine it does not exist. What
            changes hands is a <strong>right of occupancy</strong> &mdash; in
            practice a long lease, commonly for a term of 99 years.
          </p>
          <p>
            Every document below exists inside that framework. Knowing which one
            you are being offered is the difference between owning something and
            believing you do.
          </p>

          <h2>Certificate of Occupancy (C of O)</h2>
          <p>
            The most recognised statutory title. A C of O is issued{" "}
            <strong>once</strong>, to the first legal owner of the land, and
            records that the state has granted them a right of occupancy for a
            term of 99 years. It is the government&rsquo;s own documentation of
            that grant, which is why it carries the weight it does and why it
            lifts a property&rsquo;s value.
          </p>

          <h2>Governor&rsquo;s Consent</h2>
          <p>
            Because the governor holds the land in trust, a transfer of interest
            in it requires the governor&rsquo;s consent. It is normally sought
            after the deed of assignment has been executed.
          </p>
          <p>
            This is the point most buyers miss. When a property that{" "}
            <em>already has</em> a C of O is resold, the new buyer must obtain
            Governor&rsquo;s Consent for the transfer to be legally binding.
            Without it, the state does not recognise the new buyer as the
            rightful owner &mdash; no matter how complete the paperwork between
            buyer and seller looks.
          </p>

          <h2>Excision</h2>
          <p>
            Excision is the government releasing a portion of land from its own
            control back to the original community or landowners. Once land has
            been excised, the grantees hold authority over it within the law.
          </p>
          <p>
            Excised land is <strong>eligible</strong> to progress to a
            Certificate of Occupancy. Eligible is not the same as issued, and a
            seller describing land as excised has not told you it has a C of O.
          </p>

          <h2>Gazette</h2>
          <p>
            The gazette is the official government publication in which
            excisions are recorded &mdash; the community name, the details and
            boundaries of the land released, its size. It is the public proof
            that an excision happened. Asking for the gazette is how you check
            that a claimed excision is real rather than asserted.
          </p>

          <h2>Deed of assignment and survey plan</h2>
          <p>
            A deed of assignment is the instrument that transfers the seller&rsquo;s
            interest to you, and is what Governor&rsquo;s Consent is sought
            against. A survey plan establishes where the land is and what its
            boundaries are.
          </p>
          <p>
            Neither is a substitute for title. A survey plan tells you what you
            are standing on; it does not tell you that it is yours.
          </p>

          <h2>What to ask before you pay</h2>
          <ul className="checks" style={{ marginBlock: "1.25rem" }}>
            <li>Which title does this property hold, exactly?</li>
            <li>May I see the document itself, not a description of it?</li>
            <li>If it is excised, where is the gazette entry?</li>
            <li>If it has a C of O, whose name is on it?</li>
            <li>Has Governor&rsquo;s Consent been obtained for previous transfers?</li>
            <li>What will I receive at completion, and in whose name?</li>
            <li>Who is conducting the search, and may my own solicitor do one?</li>
          </ul>
          <p>
            A seller who cannot answer these plainly has told you something
            useful.
          </p>

          <h2>How we handle it</h2>
          <p>
            We state the title documentation a property holds on the listing
            itself, produce the documents on request, and coordinate due
            diligence as part of the purchase. Where a document cannot be
            produced, we say so rather than moving past it.
          </p>

          <p className="disclosure" style={{ marginTop: "2rem" }}>
            This guide is general information about how land titles work in
            Lagos. It is not legal advice, and it is not a substitute for your
            own solicitor conducting an independent search before you commit
            funds. We coordinate due diligence; we do not replace your lawyer.
          </p>
        </div>
      </section>

      <section className="band band-white">
        <div className="shell shell-narrow stack stack-3">
          <h2 style={{ fontSize: "var(--step-4)" }}>Common questions</h2>
          {faqs.map((faq) => (
            <div key={faq.question} className="stack stack-1">
              <h3 style={{ fontSize: "var(--step-2)" }}>{faq.question}</h3>
              <p className="body" style={{ maxWidth: "none" }}>
                {faq.answer}
              </p>
            </div>
          ))}
          <p className="body" style={{ marginTop: "1rem" }}>
            Buying from outside Nigeria? Read{" "}
            <Link href="/guides/buying-property-in-lagos-from-abroad">
              buying property in Lagos from abroad
            </Link>
            . Ready to look? See{" "}
            <Link href="/properties">what we currently have</Link>.
          </p>
        </div>
      </section>

      <Cta />
    </>
  );
}
