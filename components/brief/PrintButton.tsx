"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      className="btn"
      onClick={() => window.print()}
      title="Opens your browser print dialog — choose “Save as PDF” as the destination"
    >
      Save as PDF
    </button>
  );
}
