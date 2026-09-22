"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type Field =
  | { name: string; label: string; type: "text" | "email" | "tel"; required?: boolean; hint?: string; half?: boolean }
  | { name: string; label: string; type: "textarea"; required?: boolean; hint?: string }
  | { name: string; label: string; type: "select"; options: string[]; required?: boolean; hint?: string; half?: boolean };

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; salesPartner: boolean }
  | { state: "error"; message: string };

export default function LeadForm({
  form,
  fields,
  submitLabel,
  successMessage,
  consent,
}: {
  form: "enquiry" | "partner";
  fields: Field[];
  submitLabel: string;
  successMessage: string;
  consent?: string;
}) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [modalOpen, setModalOpen] = useState(false);

  const groupUrl = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL;

  /* Sales partners are invited into the WhatsApp group the moment they
     register — that is where the client actually runs the sales team. */
  useEffect(() => {
    if (status.state === "sent" && status.salesPartner && groupUrl) {
      setModalOpen(true);
    }
  }, [status, groupUrl]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ state: "sending" });

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

      if (scriptUrl) {
        // Frontend-only submission to Google Apps Script.
        formData.append("form", form);
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          body: formData,
        });
        // With no-cors the response is opaque, so decide locally whether this
        // registration should see the group invitation.
        const type = String(data.partnerType ?? "");
        setStatus({
          state: "sent",
          salesPartner:
            form === "partner" &&
            /realtor|affiliate|referral/i.test(type),
        });
        return;
      }

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, form }),
      });
      const body = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus({
          state: "error",
          message: body?.error ?? "Something went wrong. Please try again.",
        });
        return;
      }
      setStatus({ state: "sent", salesPartner: Boolean(body?.salesPartner) });
    } catch {
      setStatus({
        state: "error",
        message: "We couldn't reach the server. Please check your connection and try again.",
      });
    }
  }

  if (status.state === "sent") {
    return (
      <>
        <div className="stack stack-3">
          <div className="form-status form-status-ok" role="status">
            {successMessage}
          </div>

          <div className="btn-row">
            {status.salesPartner && groupUrl ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setModalOpen(true)}
              >
                Join the WhatsApp Group
              </button>
            ) : null}
            <Link href="/developments" className="btn btn-outline">
              Explore Our Developments
            </Link>
          </div>
        </div>

        {modalOpen && groupUrl ? (
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="group-modal-title"
            onClick={() => setModalOpen(false)}
          >
            <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="modal-close"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >
                ×
              </button>

              <p className="eyebrow">You&rsquo;re registered</p>
              <h2 id="group-modal-title" style={{ fontSize: "var(--step-4)" }}>
                One more step.
              </h2>
              <p className="body">
                Our sales partners work out of a WhatsApp group &mdash; new
                listings, commissions, marketing materials and training are
                shared there first. Join it now so you don&rsquo;t miss the
                next opportunity.
              </p>

              <div className="btn-row" style={{ marginTop: ".5rem" }}>
                <a
                  href={groupUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  onClick={() => setModalOpen(false)}
                >
                  Join the WhatsApp Group
                </a>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setModalOpen(false)}
                >
                  Maybe later
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }

  // Pairs of half-width fields sit side by side; everything else runs full width.
  const rows: Field[][] = [];
  for (const field of fields) {
    const last = rows[rows.length - 1];
    const isHalf = "half" in field && field.half;
    if (isHalf && last?.length === 1 && "half" in last[0] && last[0].half) {
      last.push(field);
    } else {
      rows.push([field]);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from people, tempting to bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
      />

      {rows.map((row, i) => (
        <div key={i} className={row.length === 2 ? "field-row" : undefined}>
          {row.map((field) => (
            <div className="field" key={field.name}>
              <label htmlFor={field.name}>
                {field.label}
                {field.required ? "" : <span className="field-hint"> (optional)</span>}
              </label>

              {field.type === "textarea" ? (
                <textarea id={field.name} name={field.name} required={field.required} />
              ) : field.type === "select" ? (
                <select id={field.name} name={field.name} required={field.required} defaultValue="">
                  <option value="" disabled>
                    Please choose
                  </option>
                  {field.options.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  autoComplete={
                    field.type === "email" ? "email" : field.type === "tel" ? "tel" : "on"
                  }
                />
              )}

              {field.hint ? <span className="field-hint">{field.hint}</span> : null}
            </div>
          ))}
        </div>
      ))}

      {status.state === "error" ? (
        <p className="form-status form-status-err" role="alert">
          {status.message}
        </p>
      ) : null}

      <div className="btn-row" style={{ alignItems: "center", gap: "1.25rem" }}>
        <button type="submit" className="btn btn-primary" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending…" : submitLabel}
        </button>
      </div>

      {consent ? <p className="form-note">{consent}</p> : null}
    </form>
  );
}
