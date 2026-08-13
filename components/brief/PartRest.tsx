import { Ask, Part } from "./ui";

/* Part Five — the remaining decisions and admin. Short by design;
   none of it blocks the build, but all of it is needed before launch. */

export default function PartRest() {
  return (
    <Part
      id="rest"
      num="Part five"
      title="The rest"
      intro={
        <>
          None of this stops us starting, but all of it is needed before the site goes live. Read
          through and answer what you can now.
        </>
      }
    >
      <div className="cards">
        <div className="card">
          <h4>Domain and email</h4>
          <p>
            <code>danlamirealestate.com</code> is already secured. Do you already have email on the
            domain, such as <code>info@danlamirealestate.com</code>? If not, tell us how many
            addresses you want and who they belong to, and we will set them up.
          </p>
        </div>

        <div className="card">
          <h4>Google Business Profile</h4>
          <p>
            Do you have one? It is what puts your office on Google Maps when somebody searches for
            property in your city, and it costs nothing. If not, we will help you create it during
            launch.
          </p>
        </div>

        <div className="card">
          <h4>Anything already online</h4>
          <p>
            An old website, a Linktree, a landing page &mdash; anything we should point at the new
            site or carry content across from.
          </p>
        </div>

        <div className="card">
          <h4>Online payments</h4>
          <p>
            Should a buyer be able to pay a deposit on the website through Paystack or Flutterwave,
            or should all payments stay offline for now? This is easier to build in from the start
            than to add later.
          </p>
        </div>

        <div className="card">
          <h4>Legal pages</h4>
          <p>
            Send your privacy policy and terms of use if they exist. If not, we will prepare standard
            versions for your lawyer to review. Because the site collects personal data through the
            forms, a privacy policy is a legal requirement, not a nicety.
          </p>
        </div>

        <div className="card">
          <h4>Who approves</h4>
          <p>
            One named person who signs off designs and text. Projects slow down most when feedback
            arrives from several people at once and contradicts itself.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <Ask variant="choice" title="One decision that changes what we build">
          <p style={{ margin: "0 0 .75rem" }}>
            <b>After launch, who adds new projects to the site &mdash; you, or us?</b>
          </p>
          <ul>
            <li>
              <b>You do it.</b> We build you a simple admin area where you log in, upload photos,
              type the details and publish. More build time and more cost, but you never wait on
              anybody to put a new estate online.
            </li>
            <li>
              <b>We do it.</b> You send us the details and we update the site. Simpler and cheaper to
              build, but every change goes through us.
            </li>
          </ul>
          <p>
            We need this answer early rather than late &mdash; it is much cheaper to plan for than to
            retrofit.
          </p>
        </Ask>
      </div>
    </Part>
  );
}
