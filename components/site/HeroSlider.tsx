"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Crossfading hero slideshow of the client's Garelt Court artwork
 * (assets/brand/hero/). Sits in the hero's image column, so slides can
 * carry their own artwork text without fighting the headline. Add or
 * swap slides here as new campaign images arrive.
 */

/* The artwork is portrait; `focus` sets the vertical crop point so the
   subject — not the sky above it — fills the panel. */
const slides = [
  {
    src: "/hero/garelt-court-day.jpg",
    alt: "Garelt Court, Osapa London, Lekki — a Dan Lami Real Estate Signature Development",
    focus: "center 62%",
  },
  {
    src: "/hero/garelt-court-dusk.jpg",
    alt: "Garelt Court at dusk — Osapa London, Lekki",
    focus: "center 55%",
  },
  {
    src: "/hero/garelt-court-night.jpg",
    alt: "Garelt Court by night — Osapa London, Lekki",
    focus: "center 58%",
  },
  {
    src: "/hero/garelt-court-interior.jpg",
    alt: "Inside a Garelt Court apartment — Osapa London, Lekki",
    focus: "center 60%",
  },
];

const HOLD_MS = 6000;

export default function HeroSlider({ height }: { height: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), HOLD_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hero-slider" style={{ height }}>
      {slides.map((slide, i) => (
        <div key={slide.src} className="hero-slide" data-active={i === active}>
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            style={{ objectFit: "cover", objectPosition: slide.focus }}
            sizes="100vw"
            quality={90}
          />
        </div>
      ))}

      <div className="hero-slider-dots" role="tablist" aria-label="Hero slides">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Slide ${i + 1}`}
            data-active={i === active}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
