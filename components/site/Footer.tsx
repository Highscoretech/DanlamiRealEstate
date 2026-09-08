import Image from "next/image";
import Link from "next/link";
import { footerNav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Image
              src="/brand/lockup.png"
              alt={site.name}
              width={1280}
              height={319}
            />
            <p className="footer-strap">{site.strapline}</p>
            <p className="body" style={{ marginTop: "1.1rem", fontSize: ".9rem" }}>
              {site.disciplines.join(" · ")}
            </p>
          </div>

          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h5>{heading}</h5>
              <nav>
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="footer-top" style={{ marginTop: "3rem" }}>
          <div>
            <h5>Get in touch</h5>
            <ul>
              <li>{site.location}</li>
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Follow</h5>
            <nav>
              <a href={site.social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={site.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a href={site.social.linkedin}>LinkedIn</a>
              <a href={site.social.youtube}>YouTube</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.legalName}. All Rights Reserved.
          </span>
          <span>{site.authority}</span>
        </div>
      </div>
    </footer>
  );
}
