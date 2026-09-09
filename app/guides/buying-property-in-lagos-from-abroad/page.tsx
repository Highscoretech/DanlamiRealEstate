import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { findGuide } from "@/content/guides";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const guide = findGuide("buying-property-in-lagos-from-abroad")!;
const path = `/guides/${guide.slug}`;

export const metadata = pageMetadata({
  path,
  title: guide.metaTitle,
  titleAbsolute: true,
  description: guide.metaDescription,
  image: "/og.jpg",
});

const faqs = [
  {
    question: "Can Nigerians living abroad legally buy property in Lagos?",
    answer:
      "Yes. Nigerians in the diaspora can acquire property in Lagos. What is granted under the Land Use Act is a right of occupancy rather than absolute ownership — in practice a long lease, commonly for 99 years, carrying the right to occupy, develop, transfer or sell.",
  },
  {
    question: "Do I have to travel to Lagos to complete a purchase?",
    answer:
      "No. A purchase can be completed without you being physically present. What cannot be skipped is verification on the ground — someone must physically inspect the property, and a solicitor must search the title. The question is not whether you are in Lagos, but whether the people acting for you are competent and accountable.",
  },
  {
    question: "What is the biggest risk when buying from abroad?",
    answer:
      "Not outright fraud, which is what most people brace for. The more common failure is assuming that being shown documents is the same as those documents being verified. Title verification before any money moves is the step that protects the purchase.",
  },
  {
    question: "How do diaspora buyers usually pay?",
    answer:
      "Arrangements vary and should be agreed in writing before funds move. A common structure in larger transactions is a contract denominated in dollars but settled in naira at the official rate on the settlement date; some developers also hold domiciliary accounts that can receive foreign currency directly. Exchange-rate exposure is a real cost and belongs in the contract, not in an assumption.",
  },
  {
    question: "Can you manage the property after I buy it?",
    answer:
      "Yes. Property management support is part of what we offer diaspora clients, alongside sourcing, advisory, due diligence coordination, developer verification, acquisition support, documentation and payment planning.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell us what the money is for",
    body: "A home you will eventually move into, a rental asset, and a resale play are three different briefs. They point at different areas, different configurations and different budgets. Getting this wrong at the start is expensive to correct later.",
  },
  {
    n: "02",
    title: "We shortlist against that brief",
    body: "Not everything currently available — the two or three that fit. We tell you why each one is on the list, and what the argument against it is.",
  },
  {
    n: "03",
    title: "Physical inspection",
    body: "Someone stands on the property, walks the building, and sends you what a camera actually saw rather than what a brochure rendered. If you have family or a representative in Lagos, they are welcome to come.",
  },
  {
    n: "04",
    title: "Title verification and due diligence",
    body: "The documents are produced and searched. We coordinate this, and we recommend your own solicitor runs an independent search in parallel. This is the step that protects the purchase, and it happens before money moves.",
  },
  {
    n: "05",
    title: "Developer verification",
    body: "Who is building it, what have they delivered before, and did those projects complete. A track record is checkable, and we check it.",
  },
  {
    n: "06",
    title: "Documentation and payment planning",
    body: "What you sign, what you receive, in whose name, and on what schedule — agreed in writing, including how currency conversion is handled, before the first payment.",
  },
  {
    n: "07",
    title: "Handover, then management",
    body: "Allocation and documents to you. If it is an income asset or will sit empty until you return, property management support continues from there.",
  },
];

export default function DiasporaGuide() {
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
        title="Buying Property in Lagos From Abroad"
        lede="You can complete a Lagos purchase without being in Lagos. The part people skip is verification — and that, not outright fraud, is where most money is lost."
      />

      <section className="band">
        <div className="shell shell-narrow prose">
          <h2>What you can actually own</h2>
          <p>
            Nigerians living abroad can buy property in Lagos. Under the Land Use
            Act, what is granted is a <strong>right of occupancy</strong> rather
            than absolute ownership &mdash; in practice a long lease, commonly
            for a term of 99 years, carrying the right to occupy, develop,
            transfer or sell. That is the same thing a resident buyer gets. Being
            abroad does not weaken what you hold.
          </p>
          <p>
            What being abroad changes is not your rights. It is your ability to
            check things yourself.{" "}
            <Link href="/guides/land-titles-in-lagos">
              Our guide to Lagos land titles
            </Link>{" "}
            covers what each document means.
          </p>

          <h2>The risk nobody braces for</h2>
          <p>
            Most diaspora buyers arrive worried about being defrauded outright.
            That does happen, but it is not the common failure.
          </p>
          <p className="pull pull-teal" style={{ marginBlock: "1.5rem" }}>
            The usual mistake is assuming that being shown documents is the same
            as those documents being verified.
          </p>
          <p>
            A seller producing a file is not evidence. A search is. The gap
            between those two things is where money is lost, and it closes for
            the price of a solicitor and a little patience.
          </p>

          <h2>How the process runs</h2>
        </div>
      </section>

      <section className="band band-white">
        <div className="shell shell-narrow">
          {steps.map((step) => (
            <div className="numbered" key={step.n}>
              <span className="numbered-idx">{step.n}</span>
              <div>
                <h3 style={{ fontSize: "var(--step-2)" }}>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="shell shell-narrow prose">
          <h2>Paying across currencies</h2>
          <p>
            Arrangements differ by seller and by project, and they belong in the
            contract rather than in a verbal understanding. A common structure in
            larger transactions is a price denominated in dollars but settled in
            naira at the official rate on the settlement date. Some developers
            also hold domiciliary accounts able to receive foreign currency
            directly, which removes a conversion step.
          </p>
          <p>
            Whichever applies, agree in writing which rate is used, on what date
            it is fixed, and who carries the movement between contract and
            settlement. Exchange-rate exposure on a purchase of this size is not
            a rounding error.
          </p>

          <h2>Who you need on the ground</h2>
          <ul className="checks" style={{ marginBlock: "1.25rem" }}>
            <li>Your own solicitor, instructed by you and reporting to you</li>
            <li>Someone who will physically inspect and be honest about it</li>
            <li>A firm accountable for the transaction end to end</li>
            <li>Someone to manage the property once it is yours</li>
          </ul>
          <p>
            You do not have to be physically present to make a strategic
            investment. You do have to be represented by people who are.
          </p>

          <p className="disclosure" style={{ marginTop: "2rem" }}>
            This guide is general information for buyers outside Nigeria. It is
            not legal, tax or financial advice, and nothing here is a guarantee
            of return. Instruct your own solicitor before committing funds.
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
            See how we work with{" "}
            <Link href="/diaspora">buyers outside Nigeria</Link>, or go straight
            to <Link href="/properties">current listings in Lekki</Link>.
          </p>
        </div>
      </section>

      <Cta />
    </>
  );
}
