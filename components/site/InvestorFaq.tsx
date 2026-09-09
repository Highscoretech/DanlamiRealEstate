"use client";

import { useState } from "react";
import { investorFaqs } from "@/content/investor-faqs";

/**
 * The investor questions from the client's copy (§13), as an interactive
 * accordion. The client supplied the questions only — each answer below is
 * interim copy composed from the client's own advisory wording ("location,
 * development trajectory, demand, rental potential, capital appreciation,
 * infrastructure, accessibility and exit opportunities"). Replace with the
 * client's answers when supplied.
 */

const items = investorFaqs;

export default function InvestorFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="faq-item" key={item.q} data-open={isOpen}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              style={item.accent ? { color: "var(--teal-light)" } : undefined}
            >
              {item.q}
              <span className="faq-icon" aria-hidden>
                +
              </span>
            </button>
            <div className="faq-a">
              <div>
                <p className="body">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
