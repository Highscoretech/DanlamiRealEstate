import type { Metadata } from "next";
import LeadForm, { type Field } from "@/components/site/LeadForm";
import PageHero from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Register as a partner with Dan Lami Real Estate — realtors, referral partners, developers and landowners.",
};

/* Deliberately short. Every extra field loses registrations, so the website
   collects enough to start a conversation and nothing more. ID documents,
   bank details and next of kin are collected later, off the site, once the
   client has decided to work with someone — which also keeps the site out of
   scope for holding sensitive personal data. */

const fields: Field[] = [
  { name: "name", label: "Full name", type: "text", required: true, half: true },
  { name: "phone", label: "Phone or WhatsApp", type: "tel", required: true, half: true },
  { name: "email", label: "Email address", type: "email", required: true, half: true },
  { name: "city", label: "City", type: "text", half: true },
  {
    name: "partnerType",
    label: "I am a",
    type: "select",
    required: true,
    options: [
      "Realtor or agent",
      "Referral partner",
      "Landowner",
      "Developer",
      "Investor",
      "Other",
    ],
  },
  {
    name: "experience",
    label: "Years in real estate",
    type: "select",
    options: ["Less than 1", "1 – 3", "3 – 5", "5 – 10", "More than 10"],
  },
  {
    name: "heardVia",
    label: "How did you hear about us?",
    type: "text",
  },
  {
    name: "message",
    label: "Tell us what you are bringing",
    type: "textarea",
    hint: "A property, a client base, capital, land — whatever is relevant.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner with us"
        title="Building better real estate together."
        lede="We work with realtors, referral partners, landowners, developers and investors. Register below and our team will come back to you."
      />

      <section className="band">
        <div className="shell">
          <div className="split split-trail" style={{ alignItems: "start" }}>
            <LeadForm
              form="partner"
              fields={fields}
              submitLabel="Register as a partner"
              successMessage="Thank you — your registration has reached us. Our team will review it and come back to you. Nothing further is needed from you right now."
              consent="We use your details only to assess and manage this partnership. We do not sell or share them."
            />

            <div className="stack stack-4">
              <div className="stack stack-2">
                <p className="rule-label">What happens next</p>
                <ol className="stack stack-2" style={{ margin: 0, paddingLeft: "1.1rem" }}>
                  <li className="body">
                    We review your registration and check where you fit.
                  </li>
                  <li className="body">
                    A member of the team contacts you to talk through terms.
                  </li>
                  <li className="body">
                    If we go ahead, we handle onboarding and documentation
                    directly with you.
                  </li>
                </ol>
              </div>

              <div className="stack stack-2">
                <p className="rule-label">Why this form is short</p>
                <p className="body">
                  We do not ask for identification documents or bank details on
                  the website. Those are handled directly with you once we have
                  spoken, so nothing sensitive travels further than it needs to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
