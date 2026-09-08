"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Reveal from "@/components/site/Reveal";

/**
 * Clickable property photo gallery. Rounded thumbnails with a fade-up
 * reveal and hover zoom; clicking opens a full-screen lightbox with
 * arrow / keyboard navigation.
 */
export default function Gallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((i) =>
        i === null ? i : (i + dir + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 0.08}>
            <button
              type="button"
              className="gallery-item"
              onClick={() => setOpen(i)}
              aria-label={`View photo ${i + 1} of ${images.length}`}
            >
              <Image
                src={src}
                alt={`${alt} — photo ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 54rem) 100vw, 33vw"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} photos`}
          onClick={close}
        >
          <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[open]}
              alt={`${alt} — photo ${open + 1} of ${images.length}`}
              fill
              style={{ objectFit: "contain" }}
              sizes="100vw"
              quality={90}
              priority
            />
          </div>

          <button
            type="button"
            className="lightbox-btn lightbox-close"
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>
          {images.length > 1 ? (
            <>
              <button
                type="button"
                className="lightbox-btn lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                type="button"
                className="lightbox-btn lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next photo"
              >
                ›
              </button>
            </>
          ) : null}

          <span className="lightbox-count">
            {open + 1} / {images.length}
          </span>
        </div>
      ) : null}
    </>
  );
}
