"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { sheetFor } from "@/lib/lead-routing";

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
  const [modal, setModal] = useState<"group" | "explore" | null>(null);
  const modalOpen = modal !== null;
  const setModalOpen = (open: boolean) => {
    if (!open) setModal(null);
  };

  const groupUrl = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL;
  const joinsGroup = status.state === "sent" && status.salesPartner && Boolean(groupUrl);

  /* Every successful submission gets a next step. Sales partners are invited
     into the WhatsApp group, which is where the client runs the sales team.
     Everyone else — landowners, developers, investors, enquiries — is pointed
     at the properties while they wait to hear back. */
  useEffect(() => {
    if (status.state !== "sent") return;
    setModal(status.salesPartner && groupUrl ? "group" : "explore");
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
      /* Two destinations, deliberately. The Apps Script writes the row into
         the client's spreadsheet; our own route sends the confirmation and
         the office notification. Earlier this was either/or, which meant
         turning the spreadsheet on silently turned the emails off.

         The Apps Script call is fire-and-forget: `no-cors` makes its response
         opaque, so there is nothing to check, and a spreadsheet problem must
         not fail a submission the visitor has completed. */
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (scriptUrl) {
        formData.append("form", form);
        // The tab depends on what they picked, not which page they were on.
        formData.append(
          "sheet",
          sheetFor(form, {
            partnerType: String(data.partnerType ?? ""),
            interest: String(data.interest ?? ""),
          })
        );
        void fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }).catch((error) => console.error("[leads] sheet write failed", error));
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
            {joinsGroup ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setModal("group")}
              >
                Join the WhatsApp Group
              </button>
            ) : (
              <Link href="/properties" className="btn btn-primary">
                Explore Our Properties
              </Link>
            )}
            <Link href="/developments" className="btn btn-outline">
              Explore Our Developments
            </Link>
          </div>
        </div>

        {modal === "explore" ? (
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="explore-modal-title"
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

              <p className="eyebrow">Received</p>
              <h2 id="explore-modal-title" style={{ fontSize: "var(--step-4)" }}>
                Thank you. We&rsquo;ll be in touch.
              </h2>
              <p className="body">
                While our team reviews your details, take a look at what is
                available now &mdash; every listing shows its price and full
                specification.
              </p>

              <div className="btn-row" style={{ marginTop: ".5rem" }}>
                <Link href="/properties" className="btn btn-primary">
                  Explore Our Properties
                </Link>
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

        {modal === "group" && groupUrl ? (
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
    /* Browser validation is left on: `required` on a field has to actually
       stop the submission, and the native messages are accessible and
       translated for free. */
    <form className="form" onSubmit={handleSubmit}>
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
