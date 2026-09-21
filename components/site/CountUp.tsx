"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a statistic up to its value when it scrolls into view.
 *
 * Takes the figure as written — "₦20B+", "300+", "8+ years" — and animates
 * only the digits, leaving whatever sits either side of them alone. That way
 * the content file keeps the client's own wording and nothing has to be
 * restated as {prefix, value, suffix}.
 *
 * Reduced-motion users get the final figure immediately, and so does anyone
 * without IntersectionObserver.
 */

const DIGITS = /^(\D*?)(\d[\d,.]*)([\s\S]*)$/;
const DURATION = 1600;

/* Fast at first, easing to a stop — a linear count looks mechanical. */
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const parts = value.match(DIGITS);

  /* Anything without digits is not a number to count. */
  const target = parts ? Number(parts[2].replace(/,/g, "")) : null;
  const decimals = parts?.[2].includes(".")
    ? parts[2].split(".")[1].length
    : 0;

  const [display, setDisplay] = useState(() => (target === null ? null : 0));

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    const settle = () => setDisplay(target);

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      settle();
      return;
    }

    let frame = 0;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);

          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / DURATION, 1);
            setDisplay(target * easeOutExpo(t));
            if (t < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target]);

  if (!parts || target === null || display === null) {
    return <span ref={ref}>{value}</span>;
  }

  const [, prefix, , suffix] = parts;
  const shown = display.toLocaleString("en-NG", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref}>
      {/* The full figure stays in the accessibility tree; the animating
          digits are hidden from it so screen readers hear it once. */}
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {prefix}
        {shown}
        {suffix}
      </span>
    </span>
  );
}
