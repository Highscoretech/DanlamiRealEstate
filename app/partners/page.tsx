import LeadForm, { type Field } from "@/components/site/LeadForm";
import PageHero from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/partners",
  title:
    "Partner With Us — Realtor & Referral Partner Registration",
  titleAbsolute: true,
  description:
    "Register as a realtor, referral partner, landowner, developer or investor with Dan Lami Real Estate in Lagos. Short form, no documents needed to start.",
  image: "/og.jpg",
});

/* Account details were added at the client's request (9 Sep 2026) so
   commissions can be paid to sales partners. They are optional — a partner
   can register without them and supply them during onboarding. Collecting
   bank details makes a privacy policy a legal requirement under the NDPA —
   docs/open-questions.md item 10. */

const fields: Field[] = [
  { name: "name", label: "Full name", type: "text", required: true, half: true },
  { name: "email", label: "Email address", type: "email", required: true, half: true },
  { name: "phone", label: "Phone number", type: "tel", required: true, half: true },
  {
    name: "whatsapp",
    label: "WhatsApp number",
    type: "tel",
    required: true,
    half: true,
    hint: "This is how the team will reach you.",
  },
  { name: "city", label: "City", type: "text", required: true, half: true },
  {
    name: "instagram",
    label: "Instagram handle",
    type: "text",
    required: true,
    half: true,
    hint: "e.g. @danlamirealestate",
  },
  {
    name: "partnerType",
    label: "I want to partner as a",
    type: "select",
    required: true,
    options: [
      "Realtor or sales agent",
      "Affiliate marketer",
      "Referral partner (9–5er)",
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
    required: true,
  },
  {
    name: "accountName",
    label: "Account name",
    type: "text",
    half: true,
    hint: "For commission payments — sales partners only.",
  },
  { name: "bankName", label: "Bank", type: "text", half: true },
  {
    name: "accountNumber",
    label: "Account number",
    type: "text",
    hint: "Optional now — you can also provide this during onboarding.",
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
        eyebrow="Be a Dan Lami partner"
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
              successMessage="Submitted successfully."
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
                <p className="rule-label">About your account details</p>
                <p className="body">
                  Sales partners earn commissions and incentives, and payments
                  are made directly to your bank account. Your account details
                  are optional at registration — you can also provide them
                  during onboarding — and are used only for paying you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
