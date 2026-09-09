/**
 * The investor questions from the client's copy (§13).
 *
 * Extracted from InvestorFaq.tsx so a server component can read them: the
 * accordion is a client component, and FAQPage structured data has to be
 * rendered server-side. One source, so the markup and the visible answers
 * cannot drift apart — which is exactly what Google checks for.
 *
 * The client supplied the questions only. Each answer is interim copy composed
 * from their own advisory wording ("location, development trajectory, demand,
 * rental potential, capital appreciation, infrastructure, accessibility and
 * exit opportunities"). Replace with the client's answers when supplied.
 */

export type InvestorFaq = { q: string; a: string; accent?: boolean };

export const investorFaqs: InvestorFaq[] = [
  {
    q: "Where is the property?",
    a: "The exact location comes first — the neighbourhood, the street and what surrounds the asset. We examine this before recommending any property.",
  },
  {
    q: "Why is the location important?",
    a: "Location drives long-term value. Infrastructure, accessibility and the development trajectory of the area all feed into what an asset is worth over time.",
  },
  {
    q: "What is changing around it?",
    a: "New roads, developments and infrastructure can change an area's demand and value. We look at what is planned and under way around the asset.",
  },
  {
    q: "Who is the likely buyer or tenant?",
    a: "Who will rent or buy the asset next determines its income and resale prospects. We consider the likely demand before you commit.",
  },
  {
    q: "What could drive demand?",
    a: "We examine the factors that can influence demand — infrastructure, accessibility and how the surrounding market is developing.",
  },
  {
    q: "What is the potential income?",
    a: "Rental income and short-let potential are considered as part of our advisory on every property we recommend.",
  },
  {
    q: "What is the potential appreciation?",
    a: "We consider the asset's capital appreciation potential in light of its location and the area's development trajectory.",
  },
  {
    q: "And ultimately — what is the exit?",
    a: "Every recommendation considers how you would eventually sell or transfer the asset. The exit strategy is part of the picture from day one.",
    accent: true,
  },
];
