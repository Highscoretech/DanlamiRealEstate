/**
 * Frequently asked questions.
 *
 * Two jobs: answer what buyers actually ask before they call, and feed
 * FAQPage structured data so these answers can appear directly in Google.
 *
 * Every answer below is grounded in something the client has already said in
 * their own copy (docs/client-content.md) or in what is already published on
 * the site. Nothing here promises a return, a timeline or a legal outcome.
 * Have the client read this page before launch.
 */

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Which areas of Lagos does Dan Lami Real Estate sell in?",
    answer:
      "Our portfolio is concentrated on the Lekki peninsula, principally Osapa London, Ikota Villa and Cowrie Creek. These are the areas where most of Lagos' recent premium residential development has taken place, and where we transact most often.",
  },
  {
    question: "What types of property do you sell?",
    answer:
      "Fully-detached and semi-detached duplexes, and luxury apartments. Current listings run from a two bedroom apartment in Osapa to five bedroom duplexes in Ikota Villa, Cowrie Creek and Osapa. Every listing shows its price, bedroom count and full specification.",
  },
  {
    question: "Can I buy a property in Lagos from abroad?",
    answer:
      "Yes. We work with clients across the African diaspora and support the whole process remotely: property sourcing, investment advisory, due diligence coordination, developer verification, acquisition support, documentation, payment planning and property management afterwards. You do not have to be physically present in Lagos to make a strategic investment.",
  },
  {
    question: "How do I verify the title documents on a property?",
    answer:
      "We provide the title documentation for any property on request, and we coordinate due diligence as part of the acquisition process. We also recommend that every buyer instructs their own solicitor to carry out an independent search before funds are committed. If a document cannot be produced for a property, we will tell you.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Payment plans are available on selected properties. Terms differ by property and by developer, so speak with an advisor for the plan attached to the specific listing you are interested in.",
  },
  {
    question: "What happens in an investment consultation?",
    answer:
      "We work through the questions that determine whether a property is a good asset rather than simply an attractive one: where it is, why the location matters, what is changing around it, who the likely buyer or tenant is, what could drive demand, the potential income, the potential appreciation, and what the exit looks like. You leave with a view on the opportunity, not a brochure.",
  },
  {
    question: "How do I arrange an inspection?",
    answer:
      "Send us a message through the contact form, or reach us directly on WhatsApp or by phone. Tell us which property you want to see and when suits you, and we will confirm a time.",
  },
  {
    question: "Do you work with agents and referral partners?",
    answer:
      "Yes. We work with realtors, referral partners, landowners, developers and investors. Registration takes a minute on the Partner With Us page, and a member of the team follows up to talk through terms before anything is agreed.",
  },
  {
    question: "Do you take on development partnerships?",
    answer:
      "Yes. We partner with property owners, developers, investors, architects and engineers, bringing together capital, strategy, development, brand, sales, marketing and distribution. If you hold land or are planning a development, we would like to hear from you.",
  },
];
