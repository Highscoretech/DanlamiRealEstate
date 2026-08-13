import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   Shared pieces for the client brief pages.
   TEMPORARY — remove with the rest of components/brief/ when the real
   site build starts.
   ------------------------------------------------------------------ */

/* ---------- line art used behind image placeholders ---------- */

export type ArtKind =
  | "aerial"
  | "plan"
  | "skyline"
  | "house"
  | "portrait"
  | "gallery"
  | "video";

export function Art({ kind }: { kind: ArtKind }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1 };

  if (kind === "plan") {
    // Background texture for full-bleed areas. Stretches to any shape and
    // keeps a hairline stroke, so it reads as texture rather than a diagram.
    const line = { vectorEffect: "non-scaling-stroke" as const };
    const cols = Array.from({ length: 15 }, (_, i) => 26 + i * 26);
    const rows = Array.from({ length: 7 }, (_, i) => 24 + i * 26);

    return (
      <svg viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
        <g {...stroke}>
          {cols.map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="200" {...line} />
          ))}
          {rows.map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} {...line} />
          ))}
          <path d="M0 150 L400 94" strokeWidth="16" opacity=".4" {...line} />
        </g>
      </svg>
    );
  }

  if (kind === "aerial") {
    // survey plan: plots divided by an access road
    return (
      <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g {...stroke}>
          <path d="M0 74 L200 46" strokeWidth="7" opacity=".35" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={`t${i}`} x={8 + i * 32} y={14} width={26} height={38} />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={`b${i}`} x={8 + i * 32} y={72} width={26} height={36} />
          ))}
          <circle cx="34" cy="33" r="2.5" />
          <circle cx="162" cy="90" r="2.5" />
        </g>
      </svg>
    );
  }

  if (kind === "skyline") {
    return (
      <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g {...stroke}>
          <path d="M0 108 H200" />
          <rect x="14" y="52" width="30" height="56" />
          <rect x="50" y="30" width="24" height="78" />
          <rect x="80" y="62" width="36" height="46" />
          <rect x="122" y="18" width="28" height="90" />
          <rect x="156" y="46" width="32" height="62" />
          {[0, 1, 2, 3].map((r) =>
            [0, 1].map((c) => (
              <rect key={`w${r}${c}`} x={56 + c * 10} y={40 + r * 14} width={5} height={7} />
            ))
          )}
          {[0, 1, 2, 3, 4].map((r) =>
            [0, 1].map((c) => (
              <rect key={`v${r}${c}`} x={128 + c * 11} y={28 + r * 14} width={5} height={7} />
            ))
          )}
        </g>
      </svg>
    );
  }

  if (kind === "house") {
    return (
      <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g {...stroke}>
          <path d="M0 106 H200" />
          <path d="M40 106 V56 L100 22 L160 56 V106" />
          <rect x="86" y="74" width="28" height="32" />
          <rect x="56" y="66" width="18" height="16" />
          <rect x="126" y="66" width="18" height="16" />
          <path d="M100 22 V10" />
          <rect x="14" y="86" width="14" height="20" />
          <rect x="172" y="86" width="14" height="20" />
        </g>
      </svg>
    );
  }

  if (kind === "portrait") {
    return (
      <svg viewBox="0 0 120 140" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g {...stroke}>
          <circle cx="60" cy="52" r="22" />
          <path d="M18 132 C18 100 34 86 60 86 C86 86 102 100 102 132" />
        </g>
      </svg>
    );
  }

  if (kind === "video") {
    return (
      <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g {...stroke}>
          <rect x="20" y="18" width="160" height="84" rx="6" />
          <path d="M86 46 L118 60 L86 74 Z" />
          <path d="M20 92 H180" opacity=".5" />
        </g>
      </svg>
    );
  }

  // gallery
  return (
    <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g {...stroke}>
        <rect x="16" y="20" width="80" height="80" />
        <rect x="104" y="20" width="80" height="38" />
        <rect x="104" y="62" width="80" height="38" />
        <path d="M16 84 L44 60 L62 76 L78 64 L96 80" />
        <circle cx="72" cy="40" r="6" />
      </g>
    </svg>
  );
}

/* ---------- image placeholder ---------- */

export function Slot({
  kind = "gallery",
  height = "12rem",
  spec,
  subject,
}: {
  kind?: ArtKind;
  height?: string;
  spec?: string;
  subject?: string;
}) {
  // With no caption to show, the frame is decorative only.
  const bare = !spec && !subject;

  return (
    <div className="slot" style={{ height }}>
      <div className="slot-art">
        <Art kind={kind} />
      </div>
      {!bare && (
        <div className="slot-tag">
          <b>Your photo goes here</b>
          {subject}
          {spec ? (
            <>
              <br />
              {spec}
            </>
          ) : null}
        </div>
      )}
    </div>
  );
}

/* ---------- the "what we need from you" panel ---------- */

export function Ask({
  title = "What we need from you",
  variant,
  children,
}: {
  title?: string;
  variant?: "choice";
  children: ReactNode;
}) {
  return (
    <aside className={variant === "choice" ? "ask ask-choice" : "ask"}>
      <p className="ask-title">{title}</p>
      {children}
    </aside>
  );
}

/* ---------- browser-window frame around a homepage mock ---------- */

export function Preview({ children }: { children: ReactNode }) {
  return (
    <div className="preview">
      <div className="preview-chrome" aria-hidden="true">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="preview-url">danlamirealestate.com</span>
      </div>
      <div className="preview-body">{children}</div>
    </div>
  );
}

/* ---------- one homepage section: mock on the left, ask on the right ---------- */

export function Block({
  idx,
  title,
  what,
  preview,
  ask,
}: {
  idx: string;
  title: string;
  what: string;
  preview: ReactNode;
  ask: ReactNode;
}) {
  return (
    <div className="block">
      <div className="block-head">
        <span className="block-idx">{idx}</span>
        <h3>{title}</h3>
      </div>
      <p className="block-what">{what}</p>
      <div className="split">
        <Preview>{preview}</Preview>
        {ask}
      </div>
    </div>
  );
}

/* ---------- a top-level part of the document ---------- */

export function Part({
  id,
  num,
  title,
  intro,
  children,
}: {
  id: string;
  num: string;
  title: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="part" id={id}>
      <div className="part-head">
        <span className="part-num">{num}</span>
        <h2>{title}</h2>
        <p className="part-intro">{intro}</p>
      </div>
      {children}
    </section>
  );
}
