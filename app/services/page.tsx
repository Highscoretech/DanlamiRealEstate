import type { Metadata } from "next";
import Cta from "@/components/site/Cta";
import PageHero from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Luxury real estate sales, investment advisory, strategic development, property acquisition, and sales and marketing.",
};

const services = [
  {
    n: "01",
    title: "Luxury real estate sales",
    body: [
      "Access carefully selected luxury residential and investment properties across premium locations.",
      "From luxury apartments and waterfront residences to exclusive land opportunities, we help clients find properties aligned with their lifestyle and investment objectives.",
    ],
  },
  {
    n: "02",
    title: "Real estate investment advisory",
    body: [
      "We help clients understand the investment opportunity behind a property before they commit their capital.",
    ],
    list: {
      label: "Our advisory approach considers",
      items: [
        "Location",
        "Market demand",
        "Development trajectory",
        "Capital appreciation potential",
        "Rental income potential",
        "Short-let / Airbnb potential",
        "Payment structure",
        "Exit strategy",
        "Long-term asset value",
      ],
    },
  },
  {
    n: "03",
    title: "Strategic development",
    body: [
      "We work with property owners, developers and strategic partners to bring high-quality real estate developments to market.",
    ],
    list: {
      label: "Our role can extend across",
      items: [
        "Development strategy",
        "Sales strategy",
        "Marketing",
        "Brand positioning",
        "Investor acquisition",
        "Sales management",
        "Market launch",
        "Distribution",
      ],
    },
  },
  {
    n: "04",
    title: "Property acquisition",
    body: [
      "For clients who prefer a more hands-off approach, we help identify and evaluate suitable property acquisition opportunities based on their objectives, budget and investment horizon.",
    ],
  },
  {
    n: "05",
    title: "Real estate sales & marketing",
    body: [
      "We build and execute sales systems designed to position developments properly, attract qualified buyers and convert market demand into completed transactions.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Our services"
        lede="Five ways we work with buyers, investors, owners and developers."
      />

      <section className="band">
        <div className="shell stack stack-5">
          {services.map((s) => (
            <div className="split split-lead" key={s.n}>
              <div className="stack stack-2">
                <span className="numbered-idx">{s.n}</span>
                <h2 style={{ fontSize: "var(--step-4)" }}>{s.title}</h2>
              </div>
              <div className="stack stack-3">
                {s.body.map((p) => (
                  <p className="body" key={p}>
                    {p}
                  </p>
                ))}
                {s.list ? (
                  <div className="stack stack-2" style={{ marginTop: ".5rem" }}>
                    <p className="rule-label">{s.list.label}</p>
                    <ul className="checks">
                      {s.list.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Cta />
    </>
  );
}
