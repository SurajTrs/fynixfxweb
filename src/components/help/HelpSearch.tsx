"use client";

import { useState } from "react";

export default function HelpSearch({ onQuery }: { onQuery: (q: string) => void }) {
  const [q, setQ] = useState("");
  return (
    <section className="py-6 bg-neutral-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-4 shadow-sm">
          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              onQuery(e.target.value);
            }}
            placeholder="Search help articles and FAQs..."
            className="w-full rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)] px-4 py-3 text-sm"
          />
        </div>
      </div>
    </section>
  );
}
