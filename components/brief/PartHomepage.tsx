import { Art, Ask, Block, Part, Slot, type ArtKind } from "./ui";

/* Part Two — the homepage walked through section by section.
   Each block shows a rough mock of the section beside the exact
   information we need in order to build it for real. */

export default function PartHomepage() {
  return (
    <Part
      id="homepage"
      num="Part two"
      title="Your homepage, section by section"
      intro={
        <>
          Below is the homepage laid out the way we propose to build it. Each block shows roughly
          what that part of the page will look like, and beside it, exactly what we need from you to
          fill it. Where you see a dashed frame, that is a photograph we need from you.
          <br />
          <br />
          If you want a section removed, moved, or added, say so &mdash; this is a proposal, not a
          finished decision.
        </>
      }
    >
      {/* 01 ---------------------------------------------------------- */}
      <Block
        idx="01"
        title="Header and navigation"
        what="The bar that stays at the top of every page. It carries your logo, the menu, and one button that we want most visitors to press."
        preview={
          <div className="mock-nav">
            <span className="mock-logo">
              <span className="mock-logo-box">LOGO</span>
              Danlami Real Estate
            </span>
            <span className="mock-links">
              <span>Home</span>
              <span>Projects</span>
              <span>Invest</span>
              <span>Partners</span>
              <span>About</span>
              <span>Contact</span>
            </span>
            <span className="mock-cta">Book an inspection</span>
          </div>
        }
        ask={
          <Ask>
            <ul>
              <li>
                <b>Your logo</b> &mdash; the original design file from your designer if you have it
                (<code>.ai</code>, <code>.svg</code>, <code>.psd</code>, <code>.cdr</code>), or a PNG
                with a transparent background. Please not a screenshot.
              </li>
              <li>
                <b>The business name</b> exactly as it should be written, e.g. &ldquo;Danlami Real
                Estate Ltd&rdquo;.
              </li>
              <li>
                <b>Your menu items.</b> We have proposed six above. Tell us which to keep, rename, or
                remove.
              </li>
              <li>
                <b>The one button.</b> What single action matters most &mdash; book an inspection,
                request a brochure, speak to an agent, or chat on WhatsApp?
              </li>
            </ul>
          </Ask>
        }
      />

      {/* 02 ---------------------------------------------------------- */}
      <Block
        idx="02"
        title="The hero"
        what="The first thing a visitor sees. One large photograph, one strong line, and two buttons. This section decides whether somebody keeps scrolling or leaves."
        preview={
          <div className="mock-hero">
            <div className="mock-hero-art">
              <Art kind="plan" />
            </div>
            <div className="mock-hero-scrim" />
            <span className="mock-hero-tag">
              Your hero photograph
              <br />
              1600 &times; 900 px
            </span>
            <div className="mock-hero-in">
              <h4>Your headline goes here — one line, about eight words</h4>
              <p>
                A supporting sentence underneath. Usually what you offer, where, and why somebody
                should trust you with it.
              </p>
              <div className="mock-btns">
                <span className="mock-btn">View our projects</span>
                <span className="mock-btn mock-btn-ghost">Book an inspection</span>
              </div>
            </div>
          </div>
        }
        ask={
          <Ask>
            <ul>
              <li>
                <b>One outstanding photograph</b> &mdash; your best estate, an aerial or drone shot,
                or a completed building. Landscape orientation, at least 1600&nbsp;&times;&nbsp;900
                pixels, original quality.
              </li>
              <li>
                <b>Your headline.</b> One sentence describing what you do. If you would rather not
                write it, send us three things you want people to believe about Danlami Real Estate
                and we will write options for you to choose from.
              </li>
              <li>
                <b>A supporting sentence</b> underneath the headline.
              </li>
              <li>
                <b>Your two buttons</b> &mdash; what should they say and where should they lead?
              </li>
            </ul>
            <p>
              A short background video instead of a photograph is possible. If you have drone
              footage, send it and we will advise whether it suits.
            </p>
          </Ask>
        }
      />

      {/* 03 ---------------------------------------------------------- */}
      <Block
        idx="03"
        title="Proof strip"
        what="A thin band of numbers directly under the hero. It answers the visitor's first silent question — is this company real, and how big are they?"
        preview={
          <div className="mock-stats">
            <div className="mock-stat">
              <b>12</b>
              <span>Projects delivered</span>
            </div>
            <div className="mock-stat">
              <b>1,400+</b>
              <span>Plots sold</span>
            </div>
            <div className="mock-stat">
              <b>9</b>
              <span>Years in business</span>
            </div>
            <div className="mock-stat">
              <b>100%</b>
              <span>Verified titles</span>
            </div>
          </div>
        }
        ask={
          <Ask>
            <ul>
              <li>
                <b>Four numbers you are comfortable publishing.</b> Suggestions: projects delivered,
                plots or units sold, clients served, years in business, hectares in your land bank.
              </li>
              <li>
                <b>Your accreditations</b> &mdash; REDAN, NIESV, ARELA, state government approvals.
                Send the certificates or the association logos.
              </li>
              <li>
                <b>Your CAC / RC number.</b> Displaying it quietly does a lot of work with a cautious
                buyer.
              </li>
            </ul>
            <p>
              These figures must be accurate. If you would rather not publish numbers at all, we can
              replace this strip with your accreditation logos instead.
            </p>
          </Ask>
        }
      />

      {/* 04 ---------------------------------------------------------- */}
      <Block
        idx="04"
        title="Featured projects"
        what="Three projects pulled forward onto the homepage, each opening into its own full page. This is the section your investors came for."
        preview={
          <div className="preview-pad">
            <div className="mock-grid">
              {[
                { pill: "Selling", cls: "pill-on", name: "Project name", where: "Area, State" },
                { pill: "Coming soon", cls: "pill-soon", name: "Project name", where: "Area, State" },
                { pill: "Selling", cls: "pill-on", name: "Project name", where: "Area, State" },
              ].map((p, i) => (
                <div className="mock-card" key={i}>
                  <Slot
                    kind={i === 1 ? "house" : "aerial"}
                    height="7rem"
                    spec="1200 × 800 px"
                    subject="Project photo"
                  />
                  <div className="mock-card-body">
                    <span className={`pill ${p.cls}`}>{p.pill}</span>
                    <h5>{p.name}</h5>
                    <p className="where">{p.where}</p>
                    <span className="price">From ₦0,000,000</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
        ask={
          <Ask>
            <ul>
              <li>
                <b>Which three projects</b> should sit on the homepage.
              </li>
              <li>
                <b>Full details for each</b> &mdash; the complete list is in{" "}
                <a href="#projects">part three</a> below.
              </li>
              <li>
                <b>Five to ten photographs per project</b>, at original quality.
              </li>
              <li>
                <b>A decision on prices:</b> shown openly on the card, or hidden behind a
                &ldquo;Request price&rdquo; button that captures the visitor&rsquo;s contact details?
              </li>
            </ul>
          </Ask>
        }
      />

      {/* 05 ---------------------------------------------------------- */}
      <Block
        idx="05"
        title="Video"
        what="A YouTube video embedded straight into the page. Nothing sells land like watching somebody walk it. This section only needs a video ID from you — see part four for how to find it."
        preview={
          <div className="preview-pad">
            <Slot
              kind="video"
              height="12rem"
              spec="Pulled live from YouTube"
              subject="Your project walkthrough"
            />
          </div>
        }
        ask={
          <Ask>
            <ul>
              <li>
                <b>The YouTube link</b> for each video you want on the site. We will pull out the ID
                ourselves &mdash; just send the links.
              </li>
              <li>
                <b>Which video belongs where</b> &mdash; one main video for the homepage, and
                optionally one per project page.
              </li>
              <li>
                <b>A title and one line of description</b> for each.
              </li>
            </ul>
            <p>
              If your videos are currently only on Instagram, upload them to YouTube first &mdash;
              Instagram videos cannot be embedded reliably, YouTube ones can.
            </p>
          </Ask>
        }
      />

      {/* 06 ---------------------------------------------------------- */}
      <Block
        idx="06"
        title="Who you are"
        what="A short section about the company, with a photograph. Placed after the projects, because by now the visitor is interested and wants to know who they would be dealing with."
        preview={
          <div className="preview-pad">
            <div className="split" style={{ gap: "1.25rem" }}>
              <div>
                <p className="label">About Danlami Real Estate</p>
                <h3>A sentence about what the company stands for</h3>
                <p style={{ fontSize: ".9rem", color: "var(--muted)", margin: "0 0 .8rem" }}>
                  Two short paragraphs about how the company started, what it has delivered, and how
                  it works with buyers. Written by us from your notes, approved by you.
                </p>
                <span className="mock-btn" style={{ display: "inline-block" }}>
                  More about us
                </span>
              </div>
              <Slot
                kind="portrait"
                height="11rem"
                spec="1000 × 1200 px"
                subject="Team, office or MD"
              />
            </div>
          </div>
        }
        ask={
          <Ask>
            <ul>
              <li>
                <b>The company story.</b> Two or three paragraphs. A voice note is completely fine
                &mdash; we will write it up properly and send it back for your approval.
              </li>
              <li>
                <b>Year the company started</b>, and your mission or vision if written down.
              </li>
              <li>
                <b>A photograph</b> &mdash; your office, your team at work, or the MD.
              </li>
              <li>
                <b>Profiles for anyone appearing on the site</b>: name, title, a clear headshot, two
                or three sentences of background, and a LinkedIn link if any.
              </li>
            </ul>
          </Ask>
        }
      />

      {/* 07 ---------------------------------------------------------- */}
      <Block
        idx="07"
        title="For investors"
        what="A distinct, darker band aimed squarely at investors rather than end-buyers. Different language, different promise, its own page behind it."
        preview={
          <div
            className="mock-hero"
            style={{ minHeight: "13rem", background: "var(--deep-soft)" }}
          >
            <div className="mock-hero-in">
              <p className="label" style={{ color: "var(--on-deep-muted)" }}>
                Investment
              </p>
              <h4>What you offer investors, in one line</h4>
              <p>
                Minimum entry, expected return, and how the process works from first enquiry to
                allocation.
              </p>
              <div className="mock-btns">
                <span className="mock-btn">Request the investor pack</span>
              </div>
            </div>
          </div>
        }
        ask={
          <Ask>
            <ul>
              <li>
                <b>What exactly you are offering</b> &mdash; land banking, co-investment in a
                development, rental yield, buy-and-resell, a diaspora plan. Describe it your own way.
              </li>
              <li>
                <b>Minimum investment</b>, if there is one, and the returns you are comfortable
                publishing, over what period.
              </li>
              <li>
                <b>The process, step by step</b>, from enquiry to allocation.
              </li>
              <li>
                <b>Track record</b> &mdash; what a plot sold for then against what it is worth now.
                Nothing convinces an investor faster than a number that already came true.
              </li>
              <li>
                <b>Any document</b> investors should be able to download: fact sheet, prospectus,
                subscription form.
              </li>
              <li>
                <b>Risk wording</b> your lawyer wants included.
              </li>
            </ul>
          </Ask>
        }
      />

      {/* 08 ---------------------------------------------------------- */}
      <Block
        idx="08"
        title="Testimonials"
        what="Three short quotes from people who have already bought from you, each with a name and a face. In this market, a real face beats any claim you make about yourself."
        preview={
          <div className="preview-pad">
            <div className="mock-grid">
              {[0, 1, 2].map((i) => (
                <div className="mock-card" key={i} style={{ padding: "1rem" }}>
                  <p style={{ fontSize: ".85rem", margin: "0 0 .8rem", color: "var(--muted)" }}>
                    &ldquo;What your buyer actually said about working with you.&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: ".55rem" }}>
                    <div style={{ width: "2.1rem", flex: "none" }}>
                      <Slot kind="portrait" height="2.1rem" />
                    </div>
                    <div>
                      <div style={{ fontSize: ".8rem", fontWeight: 600 }}>Buyer name</div>
                      <div style={{ fontSize: ".72rem", color: "var(--faint)" }}>Project bought</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
        ask={
          <Ask>
            <ul>
              <li>
                <b>Three to six testimonials</b> &mdash; the person&rsquo;s name, their photograph,
                which project they bought, and what they said.
              </li>
              <li>
                <b>Their permission</b> to use name and photo on a public website. A WhatsApp reply
                saying yes is enough, but please get it.
              </li>
            </ul>
            <p>
              Video testimonials are stronger than written ones, even filmed on a phone. If you have
              any, send them and we will use them here instead.
            </p>
          </Ask>
        }
      />

      {/* 09 ---------------------------------------------------------- */}
      <Block
        idx="09"
        title="Instagram"
        what="A row of your recent Instagram posts, so a visitor can see the work is ongoing and follow you without leaving the site."
        preview={
          <div className="preview-pad">
            <p className="label">Follow @yourhandle</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: ".5rem" }}>
              {(["gallery", "house", "aerial", "skyline"] as ArtKind[]).map((k, i) => (
                <Slot key={i} kind={k} height="5.5rem" subject="Recent post" />
              ))}
            </div>
          </div>
        }
        ask={
          <Ask variant="choice" title="A choice for you">
            <ul>
              <li>
                <b>Link only</b> &mdash; a button that opens Instagram in a new tab. Free, nothing to
                maintain.
              </li>
              <li>
                <b>Live feed</b> &mdash; your latest posts appear here and update themselves. Needs
                your account to be a <b>Business or Creator</b> account, and may carry a small
                monthly cost.
              </li>
              <li>
                <b>Hand-picked</b> &mdash; we embed a few of your best posts. Free, but they stay
                fixed until you ask us to change them.
              </li>
            </ul>
            <p>
              Send us your Instagram handle, tell us which of the three you want, and list any other
              accounts &mdash; Facebook, LinkedIn, TikTok, YouTube, X.
            </p>
          </Ask>
        }
      />

      {/* 10 ---------------------------------------------------------- */}
      <Block
        idx="10"
        title="Become a partner"
        what="An invitation to agents and referral partners, leading to the registration form. Full details of that form are in part four."
        preview={
          <div className="preview-pad">
            <div className="split" style={{ gap: "1.25rem" }}>
              <div>
                <p className="label">Partners</p>
                <h3>Sell with Danlami Real Estate</h3>
                <p style={{ fontSize: ".9rem", color: "var(--muted)", margin: 0 }}>
                  Two or three sentences on what a partner gets, then a button to the registration
                  form.
                </p>
              </div>
              <div className="mock-form">
                <div className="mock-field">
                  <b>Full name</b>Enter your name
                </div>
                <div className="mock-field">
                  <b>Phone</b>WhatsApp number
                </div>
                <span className="mock-btn" style={{ textAlign: "center" }}>
                  Register as a partner
                </span>
              </div>
            </div>
          </div>
        }
        ask={
          <Ask>
            <ul>
              <li>
                <b>What a partner actually gets</b> &mdash; commission, training, leads, materials.
                Two or three sentences.
              </li>
              <li>
                <b>Whether the commission structure is published</b> on the site or kept private
                until after registration.
              </li>
              <li>
                <b>Your partner terms and conditions</b>, if they exist.
              </li>
            </ul>
          </Ask>
        }
      />

      {/* 11 ---------------------------------------------------------- */}
      <Block
        idx="11"
        title="Contact and message box"
        what="The form where a visitor writes to you, beside your office details and a map. Every message also lands in your inbox and in a spreadsheet — see part four."
        preview={
          <div className="preview-pad">
            <div className="split" style={{ gap: "1.25rem" }}>
              <div className="mock-form">
                <div className="mock-field">
                  <b>Name</b>Your full name
                </div>
                <div className="mock-field">
                  <b>Phone / email</b>How we reach you
                </div>
                <div className="mock-field">
                  <b>I am interested in</b>Buying land ▾
                </div>
                <div className="mock-field" style={{ paddingBottom: "1.6rem" }}>
                  <b>Message</b>Tell us what you need
                </div>
                <span className="mock-btn" style={{ textAlign: "center" }}>
                  Send message
                </span>
              </div>
              <div>
                <p className="label">Visit us</p>
                <p style={{ fontSize: ".88rem", color: "var(--muted)", margin: "0 0 .8rem" }}>
                  Office address
                  <br />
                  Phone number
                  <br />
                  Opening hours
                </p>
                <Slot kind="aerial" height="7rem" spec="Google Maps" subject="Your office location" />
              </div>
            </div>
          </div>
        }
        ask={
          <Ask>
            <ul>
              <li>
                <b>The email address</b> enquiries should be delivered to, e.g.{" "}
                <code>info@danlamirealestate.com</code>. We can create this on your domain if it does
                not exist yet.
              </li>
              <li>
                <b>WhatsApp number</b> for the chat button, and any phone numbers to display.
              </li>
              <li>
                <b>Full office address</b> for the map, plus confirmation that you want it shown
                publicly, and your opening hours.
              </li>
              <li>
                <b>The enquiry categories</b> for the dropdown. We propose: buying land &middot;
                investing &middot; becoming a partner &middot; booking an inspection &middot; general.
                Tell us what to keep and what to add.
              </li>
              <li>
                <b>Whether visitors can book an inspection</b> by choosing a date and time, or
                whether that stays a phone conversation.
              </li>
            </ul>
          </Ask>
        }
      />

      {/* 12 ---------------------------------------------------------- */}
      <Block
        idx="12"
        title="Footer"
        what="The bottom of every page. Quiet, but it is where a careful buyer looks for proof that you are a registered company."
        preview={
          <div
            className="preview-pad"
            style={{ background: "var(--deep)", color: "var(--on-deep)" }}
          >
            <div className="mock-grid" style={{ gap: "1.5rem" }}>
              <div>
                <span className="mock-logo-box" style={{ marginBottom: ".5rem" }}>
                  LOGO
                </span>
                <p style={{ fontSize: ".78rem", color: "var(--on-deep-muted)", margin: 0 }}>
                  One line about the company. RC number. Registered address.
                </p>
              </div>
              <div style={{ fontSize: ".78rem", color: "var(--on-deep-muted)" }}>
                Projects
                <br />
                Invest
                <br />
                Partners
                <br />
                Contact
              </div>
              <div style={{ fontSize: ".78rem", color: "var(--on-deep-muted)" }}>
                Privacy policy
                <br />
                Terms of use
                <br />
                Instagram
                <br />
                Facebook
              </div>
            </div>
          </div>
        }
        ask={
          <Ask>
            <ul>
              <li>
                <b>Registered company name, RC number and registered office address.</b>
              </li>
              <li>
                <b>Your privacy policy and terms of use</b>, if they exist. If not, we will prepare
                standard versions for your lawyer to review &mdash; see{" "}
                <a href="#rest">part five</a>, this one is not optional.
              </li>
              <li>
                <b>Any disclaimer</b> you want attached to prices, projected returns or completion
                dates.
              </li>
            </ul>
          </Ask>
        }
      />
    </Part>
  );
}
