import LeadForm, { type Field } from "@/components/site/LeadForm";
import PageHero from "@/components/site/PageHero";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/contact",
  title:
    "Contact — Speak With a Property Advisor in Lagos",
  titleAbsolute: true,
  description:
    "Contact Dan Lami Real Estate in Lagos. Book an inspection, request title documentation, or speak with an investment advisor by phone, WhatsApp or email.",
  image: "/og.jpg",
});

const fields: Field[] = [
  { name: "name", label: "Full name", type: "text", required: true, half: true },
  { name: "phone", label: "Phone or WhatsApp", type: "tel", required: true, half: true },
  { name: "email", label: "Email address", type: "email", required: true },
  {
    name: "interest",
    label: "I am interested in",
    type: "select",
    required: true,
    options: [
      "Buying a property",
      "Investment advisory",
      "A Signature Development",
      "Booking an inspection",
      "A development partnership",
      "Something else",
    ],
  },
  { name: "message", label: "Your message", type: "textarea", required: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with an advisor"
        lede="Tell us what you are looking for and we will come back to you with something specific, not a brochure."
      />

      <section className="band">
        <div className="shell">
          <div className="split split-trail" style={{ alignItems: "start" }}>
            <LeadForm
              form="enquiry"
              fields={fields}
              submitLabel="Send message"
              successMessage="Thank you — your message has reached us. We will be in touch shortly. If it is urgent, call or WhatsApp us on the number on this page."
              consent="We use your details only to respond to this enquiry. We do not sell or share them."
            />

            <div className="stack stack-4">
              <div className="stack stack-2">
                <p className="rule-label">Get in touch</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }} className="stack stack-1">
                  <li>
                    <a href={site.phoneHref} className="link-arrow">
                      {site.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`} className="link-arrow">
                      {site.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.whatsapp}
                      className="link-arrow"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chat on WhatsApp &rarr;
                    </a>
                  </li>
                </ul>
              </div>

              <div className="stack stack-2">
                <p className="rule-label">Where we are</p>
                <p className="body">{site.location}</p>
                <p className="disclosure">
                  Office address and opening hours to be confirmed by the
                  client before launch.
                </p>
              </div>

              <div className="stack stack-2">
                <p className="rule-label">Follow</p>
                <a
                  href={site.social.instagram}
                  className="link-arrow"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
