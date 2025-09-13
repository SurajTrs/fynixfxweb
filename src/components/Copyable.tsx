"use client";

import { useState } from "react";

export default function Copyable({ label, note }: { label: string; note?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      const text = [label, note].filter(Boolean).join(" — ");
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div>
        <div className="text-black">{label}</div>
        {note && <div className="text-black/60">{note}</div>}
      </div>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center rounded-md border border-[rgba(var(--brand-rgb),0.35)] px-2 py-1 text-xs text-[color:var(--brand)] hover:bg-[rgba(var(--brand-rgb),0.06)] transition"
        aria-label="Copy commission"
        title={copied ? "Copied" : "Copy"}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
