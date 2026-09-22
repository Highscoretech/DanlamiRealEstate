import Link from "next/link";

/* Section 17 of the client's copy document, used as a closing band on
   every page. */

export default function Cta() {
  return (
    <section className="band band-teal">
      <div className="shell stack stack-3">
        <p className="eyebrow">Ready when you are</p>
        <h2 style={{ maxWidth: "16ch" }}>
          Ready to make your next real estate move?
        </h2>
        <p className="body" style={{ fontSize: "1.0625rem" }}>
          Whether you are looking for a luxury residence, an investment
          opportunity or a strategic development partnership, our team is ready
          to help you make your next move with clarity.
        </p>
        <div className="btn-row" style={{ marginTop: ".5rem" }}>
          <Link href="/properties" className="btn btn-on-dark">
            Explore Our Luxury Listings
          </Link>
          <Link href="/developments" className="btn btn-ghost-dark">
            Explore Our Developments
          </Link>
          <Link href="/contact" className="btn btn-ghost-dark">
            Book an Investment Consultation
          </Link>
          <Link href="/partners" className="btn btn-ghost-dark">
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
