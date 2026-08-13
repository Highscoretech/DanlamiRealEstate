import { Ask, Part, Slot } from "./ui";

/* Part Four — the two pieces of machinery behind the site:
   form submissions landing in Google Sheets, and YouTube videos
   embedded by ID. Both need something from the client's own accounts. */

const PARTNER_FIELDS = [
  "Full name",
  "Phone / WhatsApp",
  "Email address",
  "Residential address",
  "Date of birth",
  "Gender",
  "Occupation",
  "NIN or ID number",
  "ID document upload",
  "Passport photograph",
  "Bank account details",
  "Next of kin",
  "Referred by / referral code",
  "How they heard about you",
  "Years of experience",
  "Social media handles",
  "Agreement to terms",
];

export default function PartData() {
  return (
    <Part
      id="data"
      num="Part four"
      title="Where the information goes"
      intro={
        <>
          Two things on this site are not just pictures and words. When somebody fills a form, that
          answer has to reach you and be kept somewhere you can work with. And when a video plays on
          the page, it is being pulled from your YouTube account. Both need something small from you.
        </>
      }
    >
      {/* ---------------- forms → google sheets ---------------- */}
      <div className="block" style={{ borderTop: 0, paddingTop: 0 }}>
        <div className="block-head">
          <span className="block-idx">A</span>
          <h3>Forms, and the spreadsheet behind them</h3>
        </div>
        <p className="block-what">
          There are two forms on the site: the <b>partner registration form</b> and the{" "}
          <b>contact message box</b>. Both work the same way underneath.
        </p>

        <div className="split">
          <div className="preview">
            <div className="preview-pad">
              <p className="label">What happens when somebody presses send</p>
              <ol style={{ margin: 0, paddingLeft: "1.15rem", fontSize: ".93rem" }}>
                <li style={{ marginBottom: ".6rem" }}>
                  The visitor fills the form on danlamirealestate.com
                </li>
                <li style={{ marginBottom: ".6rem" }}>
                  Their answers are written as a new row in <b>your Google Sheet</b>, instantly
                </li>
                <li style={{ marginBottom: ".6rem" }}>
                  You get an <b>email notification</b> so you know somebody is waiting
                </li>
                <li style={{ marginBottom: ".6rem" }}>
                  The visitor sees a thank-you message and receives a confirmation email
                </li>
                <li>
                  You open the sheet on your phone or laptop and work the leads from there
                </li>
              </ol>
              <p className="note" style={{ marginTop: "1.25rem" }}>
                <b>Why a spreadsheet.</b> No new system to learn, no password to remember, no monthly
                fee. You can sort it, filter it, share it with your sales team, and export it. It is
                the same Google Sheets you already know.
              </p>
            </div>
          </div>

          <Ask>
            <ul>
              <li>
                <b>The Google account</b> that should own the spreadsheet &mdash; a
                <code>@gmail.com</code> address, or a company Google Workspace account. Whoever owns
                it controls the data, so use a company account rather than a staff member&rsquo;s
                personal one.
              </li>
              <li>
                <b>Who gets the email alerts</b> when a form comes in. One address or several.
              </li>
              <li>
                <b>Whether partner registrations and contact messages</b> go into one spreadsheet on
                separate tabs, or two separate spreadsheets.
              </li>
              <li>
                <b>Whether you also want a WhatsApp alert</b> when somebody registers. Possible, but
                it adds a paid service &mdash; tell us if it matters to you.
              </li>
            </ul>
          </Ask>
        </div>

        <h3 style={{ marginTop: "2.5rem" }}>Which fields should the partner form collect?</h3>
        <p className="block-what" style={{ margin: ".4rem 0 1.25rem" }}>
          Below is everything we can collect. Tell us which ones you want &mdash; and anything
          missing. Each one becomes a column in your spreadsheet.
        </p>

        <div className="split">
          <div className="preview">
            <div className="preview-pad">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))",
                  gap: ".5rem",
                }}
              >
                {PARTNER_FIELDS.map((f) => (
                  <div className="mock-field" key={f} style={{ fontSize: ".76rem" }}>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Ask title="Before you tick everything">
            <p style={{ margin: 0 }}>
              Every extra field loses you a few registrations &mdash; people abandon long forms. A
              good approach is to ask for name, phone, email and how they heard about you on the
              website, then collect ID, bank details and next of kin later, once you have decided to
              work with them.
            </p>
            <p>
              <b>One legal note:</b> if you do collect NIN, ID uploads or bank accounts, the site is
              required to have a privacy policy under the Nigeria Data Protection Act, and that data
              must be stored securely. We will handle the technical side. We just need you to confirm
              you want those fields, because they raise the obligation.
            </p>
          </Ask>
        </div>
      </div>

      {/* ---------------- youtube ---------------- */}
      <div className="block">
        <div className="block-head">
          <span className="block-idx">B</span>
          <h3>Your videos</h3>
        </div>
        <p className="block-what">
          Videos are not uploaded to the website. They stay on your YouTube channel and the website
          plays them from there &mdash; which keeps the site fast, costs nothing to host, and means
          your view count still grows on YouTube.
        </p>

        <div className="split">
          <div className="preview">
            <div className="preview-pad">
              <p className="label">All we need is the link</p>
              <p style={{ fontSize: ".93rem", margin: "0 0 1rem" }}>
                Open the video on YouTube, press <b>Share</b>, and copy. The part we use is the ID at
                the end &mdash; but you do not have to find it yourself, just send the whole link.
              </p>
              <div
                className="mock-field"
                style={{ fontFamily: "var(--font-mono)", fontSize: ".74rem", lineHeight: 1.7 }}
              >
                <b>A YouTube link</b>
                <span style={{ color: "var(--muted)" }}>https://www.youtube.com/watch?v=</span>
                <span style={{ color: "var(--clay)", fontWeight: 600 }}>dQw4w9WgXcQ</span>
                <br />
                <span style={{ color: "var(--muted)" }}>https://youtu.be/</span>
                <span style={{ color: "var(--clay)", fontWeight: 600 }}>dQw4w9WgXcQ</span>
                <br />
                <span style={{ color: "var(--faint)", fontSize: ".68rem" }}>
                  The highlighted part is the video ID.
                </span>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <Slot
                  kind="video"
                  height="9rem"
                  spec="Plays inside the page"
                  subject="How it appears on the site"
                />
              </div>
            </div>
          </div>

          <Ask>
            <ul>
              <li>
                <b>One main video link</b> for the homepage &mdash; a company introduction or your
                best project walkthrough.
              </li>
              <li>
                <b>One video link per project</b>, where you have one.
              </li>
              <li>
                <b>A title and one line of description</b> for each video.
              </li>
              <li>
                <b>Your YouTube channel link</b>, for the footer.
              </li>
            </ul>
            <p>
              <b>If your videos are only on Instagram or WhatsApp:</b> upload them to YouTube first.
              Instagram videos cannot be embedded reliably, YouTube ones can &mdash; and an unlisted
              YouTube video works fine if you do not want it public on your channel.
            </p>
          </Ask>
        </div>
      </div>
    </Part>
  );
}
