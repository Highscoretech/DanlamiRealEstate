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
        <Link href="/" className="header-logo" aria-label="Dan Lami Real Estate — home">
          <Image
            src="/brand/lockup.png"
            alt="Dan Lami Real Estate"
            width={1280}
            height={319}
            priority
          />
        </Link>

        <nav className="nav">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={pathname.startsWith(item.href)}
            >
              {item.label}
            </Link>
          ))}
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
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
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
