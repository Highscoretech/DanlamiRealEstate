"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Gentle fade-up on scroll. Wraps a block; adds .is-in once it enters the
 * viewport. `delay` (seconds) staggers siblings. Reduced-motion users see
 * content immediately — handled in globals.css.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}s`, ...style } as CSSProperties}
    >
      {children}
    </div>
  );
}
