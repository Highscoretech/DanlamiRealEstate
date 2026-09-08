import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="shell stack stack-2">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
        {children}
      </div>
    </section>
  );
}
