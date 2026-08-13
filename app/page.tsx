import PartBrand from "@/components/brief/PartBrand";
import PartHomepage from "@/components/brief/PartHomepage";
import PartProjects from "@/components/brief/PartProjects";
import PartData from "@/components/brief/PartData";
import PartRest from "@/components/brief/PartRest";
import PrintButton from "@/components/brief/PrintButton";

/* ------------------------------------------------------------------
   TEMPORARY PAGE — the client brief for danlamirealestate.com.

   This whole route exists to show the client what we need from them.
   When the real build starts, delete this file, components/brief/,
   and the brief styles in app/globals.css. Nothing else depends on it.
   ------------------------------------------------------------------ */

export default function BriefPage() {
  return (
    <>
      <div className="topbar no-print">
        <div className="topbar-in">
          <span className="topbar-mark">
            <b>Danlami Real Estate</b> &middot; website brief
          </span>
          <PrintButton />
        </div>
      </div>

      <div className="wrap">
        <header className="masthead">
          <p className="eyebrow">What we need from you</p>
          <h1>
            Building <em>danlamirealestate.com</em>
          </h1>
          <p className="lede">
            This document is a walk through your future website. It shows each part of the site as we
            propose to build it, and beside each part, exactly what we need from you to fill it in.
          </p>
          <p className="lede">
            You do not need to have every answer ready. Where you are unsure, say so and we will
            either fill the gap ourselves or send you options to choose from. Nothing here should
            stop us getting started.
          </p>
          <div className="masthead-meta">
            <span>
              Domain <b>danlamirealestate.com</b>
            </span>
            <span>
              Prepared <b>13 August 2026</b>
            </span>
            <span className="no-print">
              Press <b>Save as PDF</b> above to keep a copy
            </span>
          </div>
        </header>

        <PartBrand />
        <PartHomepage />
        <PartProjects />
        <PartData />
        <PartRest />

        <footer className="foot">
          <h2>How to send everything</h2>
          <p>
            Put it all in one Google&nbsp;Drive folder and share the link &mdash; logo, photographs
            organised per project, documents, and a spreadsheet or document with the written answers.
            One folder is far easier for both of us than fifty separate messages.
          </p>
          <p>
            <b>Please avoid sending photographs through WhatsApp.</b> It compresses every image it
            touches, and what looks sharp on your phone turns blurry across a website. Google&nbsp;
            Drive, WeTransfer or plain email attachments keep the original quality.
          </p>
          <p>
            <b>Typing is not required.</b> For any written section &mdash; your company story, a
            project description, what you offer investors &mdash; record a voice note instead. We
            will write it up properly and send it back for your approval.
          </p>
          <p className="foot-mark">
            Prepared for Danlami Real Estate &middot; danlamirealestate.com &middot; 13 August 2026
          </p>
        </footer>
      </div>
    </>
  );
}
