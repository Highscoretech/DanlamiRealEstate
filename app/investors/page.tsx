import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/investors",
  title:
    "Real Estate Investment in Lagos — Advisory for Investors",
  titleAbsolute: true,
  description:
    "Real estate investment advisory in Lagos. We assess location, market demand, rental income, capital appreciation and exit strategy before you commit capital.",
  image: "/og.jpg",
});

const questions = [
  "Where is the property?",
  "Why is the location important?",
  "What is changing around it?",
  "Who is the likely buyer or tenant?",
  "What could drive demand?",
  "What is the potential income?",
  "What is the potential appreciation?",
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="For investors"
        title="Your capital deserves a strategy."
        lede="Real estate investment shouldn’t be based solely on emotion."
      />

      <section className="band">
        <div className="shell">
          <div className="split split-lead">
            <div className="stack stack-2">
              <p className="rule-label">Before committing capital</p>
              <p className="body">
                Investors need to understand what they are actually buying into
                &mdash; not only what it looks like today, but what surrounds it,
                who wants it, and how they would leave it.
              </p>
            </div>

            <ul className="questions">
              {questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
              <li style={{ color: "var(--teal-deep)" }}>
                And ultimately &mdash; what is the exit?
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="band band-white">
        <div className="shell shell-narrow stack stack-3">
          <h2 style={{ fontSize: "var(--step-4)" }}>
            At Dan Lami Real Estate, we help investors answer these questions
            before they make a decision.
          </h2>
          <p className="body">
            That work is our investment advisory service. We look at location,
            market demand, development trajectory, capital appreciation
            potential, rental and short-let income, payment structure, exit
            strategy and long-term asset value &mdash; and we tell you what we
            find.
          </p>
          <div className="btn-row" style={{ marginTop: ".5rem" }}>
            <Link href="/contact" className="btn btn-primary">
              Book an Investment Consultation
            </Link>
            <Link href="/properties" className="btn btn-outline">
              See what is available
            </Link>
          </div>
          <p className="disclosure" style={{ marginTop: "1.5rem" }}>
            Nothing on this website is a guarantee of return. Property values
            and rental income can fall as well as rise, and any figures
            discussed are estimates based on current market conditions.
          </p>
        </div>
      </section>

      <Cta />
    </>
  );
}
