import { Ask, Part } from "./ui";

/* Part Three — the per-project dataset. This is the single largest
   collection job for the client, so it gets its own part and a table
   they can copy straight into a spreadsheet. */

const FIELDS: Array<[string, string, string]> = [
  ["Project name", "Text", "Danlami Gardens"],
  ["Location", "Text", "Area, town, state"],
  ["Type", "Choose one", "Land · Estate · Apartments · Commercial · Shortlet · Mixed use"],
  ["Status", "Choose one", "Selling · Coming soon · Completed · Sold out"],
  ["Sizes available", "Text", "300sqm, 500sqm, full plot"],
  ["Price per unit", "Number", "From ₦0,000,000"],
  ["Show price publicly?", "Yes / No", "No hides it behind a “Request price” button"],
  ["Payment plans", "Text", "Outright, 3, 6 or 12 months"],
  ["Initial deposit", "Number", "What a buyer pays to start"],
  ["Units remaining", "Number", "Optional — used to show scarcity"],
  ["Title documents", "Text", "C of O · Governor’s Consent · Excision · Gazette · Deed · Survey"],
  ["What the buyer receives", "Text", "Deed of Assignment, receipt, allocation letter, survey"],
  ["Amenities", "Text", "Fencing, gatehouse, drainage, roads, lights, security, water"],
  ["Nearby landmarks", "Text", "Schools, airport, expressway, markets, hospitals"],
  ["Completion date", "Date", "Expected or actual"],
  ["Photographs", "Files", "5–10 per project, original quality, at least 1200 × 800 px"],
  ["Masterplan / layout", "File", "The site layout drawing"],
  ["Brochure", "PDF", "If you have one"],
  ["YouTube link", "Link", "The walkthrough video for this project — see part four"],
];

export default function PartProjects() {
  return (
    <Part
      id="projects"
      num="Part three"
      title="Your projects"
      intro={
        <>
          Each project becomes its own page on the website, and the three you choose also appear on
          the homepage. Below is everything a project page holds. If you have many projects, start
          with your three most important ones &mdash; we will add the rest as they arrive.
        </>
      }
    >
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>What we need</th>
              <th>Format</th>
              <th>Example or options</th>
            </tr>
          </thead>
          <tbody>
            {FIELDS.map(([field, format, example]) => (
              <tr key={field}>
                <td>
                  <b>{field}</b>
                </td>
                <td>
                  <code>{format}</code>
                </td>
                <td style={{ color: "var(--muted)" }}>{example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="cards" style={{ marginTop: "2rem" }}>
        <div className="card">
          <h4>The easiest way to send this</h4>
          <p>
            Copy the table above into a spreadsheet, one project per row, and fill what you can. Put
            each project&rsquo;s photographs in a folder named after the project. Then share the
            whole thing as one Google&nbsp;Drive link.
          </p>
        </div>
        <div className="card">
          <h4>If typing is a chore</h4>
          <p>
            Record a voice note per project going through the list, and send the photographs
            separately. We will type it up and send it back for your approval. Do not let the
            paperwork be the reason the site stalls.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <Ask title="Two things worth saying plainly">
          <ul>
            <li>
              <b>Title documents matter more than photographs.</b> In this market it is the first
              thing a serious buyer checks, so we will give it a prominent, permanent place on every
              project page. Be precise about what each project actually holds.
            </li>
            <li>
              <b>Do not send photographs through WhatsApp.</b> It compresses every image it touches.
              A photo that looks sharp on your phone turns blurry stretched across a website. Use
              Google&nbsp;Drive, WeTransfer, or plain email attachments.
            </li>
          </ul>
        </Ask>
      </div>
    </Part>
  );
}
