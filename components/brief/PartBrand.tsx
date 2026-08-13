import { Ask, Part } from "./ui";

/* Part One — brand foundation. Everything visual on the site is derived
   from what arrives here, so it comes before the homepage walkthrough. */

export default function PartBrand() {
  return (
    <Part
      id="brand"
      num="Part one"
      title="Your brand"
      intro={
        <>
          Every colour, every font and every edge on the website comes from this. It is the one part
          we cannot invent for you without seeing something first &mdash; so even a rough version of
          each item below lets us start.
        </>
      }
    >
      <div className="cards">
        <div className="card">
          <h4>The logo</h4>
          <p>Send the best-quality version you have. In order of preference:</p>
          <ul>
            <li>
              The original design file from your designer &mdash; <code>.ai</code>, <code>.svg</code>,{" "}
              <code>.psd</code>, <code>.eps</code> or <code>.cdr</code>
            </li>
            <li>A PNG with a transparent background</li>
            <li>A light version and a dark version, if both exist</li>
            <li>The icon or symbol on its own, if the logo has one</li>
          </ul>
        </div>

        <div className="card">
          <h4>Your colours</h4>
          <p>
            The exact codes if you have them &mdash; hex values like <code>#1A3D2F</code>, or the
            CMYK and Pantone values from your designer.
          </p>
          <ul>
            <li>If you do not have codes, just name the colours</li>
            <li>Tell us any colour you specifically do not want used</li>
          </ul>
        </div>

        <div className="card">
          <h4>Fonts and brand guide</h4>
          <p>
            The fonts used in your logo or existing flyers, and any brand guide or style sheet a
            designer prepared for you. If none exists, we will propose fonts that suit the brand.
          </p>
        </div>

        <div className="card">
          <h4>Tagline</h4>
          <p>
            Any short line you use beside the business name. If you do not have one, we can write
            options for you to choose from.
          </p>
        </div>

        <div className="card">
          <h4>How it should feel</h4>
          <p>
            One sentence is enough &mdash; luxury and exclusive, trustworthy and corporate, warm and
            approachable, modern and bold.
          </p>
        </div>

        <div className="card">
          <h4>Two or three websites you like</h4>
          <p>
            They do not have to be real estate. Send the links and say what you like about each. This
            single item saves more back-and-forth than anything else in this document.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <Ask variant="choice" title="If you have no brand colours yet">
          <p style={{ margin: 0 }}>
            This will not hold anything up. Send the logo and tell us, and we will pull the colours
            out of it and send you three complete palettes &mdash; each shown on a real page rather
            than as swatches &mdash; for you to pick one. The same applies to fonts and the tagline.
          </p>
        </Ask>
      </div>
    </Part>
  );
}
