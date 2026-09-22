import Link from "next/link";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/partnerships/sales",
  title: "Sales Partnership — Sell With Dan Lami Real Estate",
  titleAbsolute: true,
  description:
    "Partner with Dan Lami Real Estate as a realtor, affiliate marketer or referral partner. Sell luxury property in Lagos and earn commissions and incentives.",
  image: "/og.jpg",
});

/* Scope and wording set by the client, 9 Sep 2026: sales partnership is for
   realtors, 9-to-5ers and affiliate marketers who sell and earn commissions
   and incentives. Commission rates deliberately not stated — they are agreed
   during onboarding. */

const who = [
  {
    t: "Realtors & sales agents",
    d: "Bring your clients to a portfolio of luxury and investment properties across Lagos, and earn on every completed transaction.",
  },
  {
    t: "9-to-5ers",
    d: "You do not need to work in real estate full-time. Refer serious buyers from your network and earn when a deal closes.",
  },
  {
    t: "Affiliate marketers",
    d: "Put our properties in front of your audience. When your referral becomes a buyer, you earn.",
  },
];

export default function SalesPartnershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Sales Partnership"
        title="Learn. Sell. Earn."
        lede="We work with realtors, 9-to-5ers and affiliate marketers to sell our properties — and earn commissions and incentives."
      />

      <section className="band">
        <div className="shell stack stack-4">
          <Reveal>
            <p className="rule-label">Who this is for</p>
          </Reveal>
          <div className="grid-3">
            {who.map((w, i) => (
              <Reveal key={w.t} delay={(i % 3) * 0.1}>
                <div className="value-card">
                  <span className="value-card-idx">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4>{w.t}</h4>
                  <p>{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-white">
        <div className="shell">
          <div className="split split-lead">
            <Reveal>
              <div className="stack stack-2">
                <p className="eyebrow">How it works</p>
                <h2>Three steps to your first commission.</h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                {[
                  {
                    n: "01",
                    t: "Register as a sales partner",
                    d: "Fill in the partner form and choose the kind of partner you want to come on as.",
                  },
                  {
                    n: "02",
                    t: "Get onboarded",
                    d: "Our team contacts you, agrees terms with you and gives you what you need to start selling.",
                  },
                  {
                    n: "03",
                    t: "Learn, sell & earn",
                    d: "Get access to Dan Lami Academy and learn how to sell luxury real estate. Sell our exclusive developments and earn attractive commissions and incentives on every completed transaction — paid directly to your account.",
                  },
                ].map((s) => (
                  <div className="numbered" key={s.n}>
                    <span className="numbered-idx">{s.n}</span>
                    <div>
                      <h4>{s.t}</h4>
                      <p>{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="band band-tight">
        <div className="shell stack stack-3">
          <Reveal>
            <div className="btn-row">
              <Link href="/partners" className="btn btn-primary">
                Register as a Sales Partner
              </Link>
              <Link href="/partnerships" className="btn btn-outline">
                Looking for Development Partnerships?
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
