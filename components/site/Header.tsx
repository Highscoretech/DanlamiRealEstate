"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer on navigation, otherwise it stays open over the new page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="header">
      <div className="header-in">
        {/* lockup-on-dark.png: blue mark as supplied, wordmark rendered
            white for the navy bar — requested by the client. */}
        <Link href="/" className="header-logo" aria-label="Dan Lami Real Estate — home">
          <Image
            src="/brand/lockup-on-dark.png"
            alt="Dan Lami Real Estate"
            width={1280}
            height={319}
            priority
          />
        </Link>

        <nav className="nav">
          {nav.map((item) =>
            "children" in item && item.children ? (
              <div
                className="nav-drop"
                key={item.label}
                data-active={item.children.some((c) => pathname.startsWith(c.href))}
              >
                <Link href={item.href} data-active={pathname.startsWith(item.href)}>
                  {item.label}
                  <span className="nav-caret" aria-hidden>
                    ▾
                  </span>
                </Link>
                <div className="nav-drop-menu">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                data-active={pathname.startsWith(item.href)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="btn btn-primary">
            Speak With an Advisor
          </Link>
          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="drawer">
          <nav>
            {nav.map((item) => (
              <span key={item.label} style={{ display: "contents" }}>
                <Link href={item.href}>{item.label}</Link>
                {"children" in item && item.children
                  ? item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="drawer-sub">
                        {c.label}
                      </Link>
                    ))
                  : null}
              </span>
            ))}
          </nav>
          <Link href="/contact" className="btn btn-primary">
            Speak With an Advisor
          </Link>
        </div>
      )}
    </header>
  );
}
