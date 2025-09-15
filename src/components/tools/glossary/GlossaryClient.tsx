"use client";

import { useMemo, useState } from "react";
import { GLOSSARY } from "@/data/glossary";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryClient() {
  const [q, setQ] = useState("");
  const [letter, setLetter] = useState<string | null>(null);

  const items = useMemo(() => {
    let data = GLOSSARY;
    if (letter) data = data.filter((e) => e.term.toUpperCase().startsWith(letter));
    if (q) {
      const lq = q.toLowerCase();
      data = data.filter((e) => e.term.toLowerCase().includes(lq) || e.definition.toLowerCase().includes(lq));
    }
    return data.sort((a, b) => a.term.localeCompare(b.term));
  }, [q, letter]);

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-4 shadow-sm">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search terms..."
            className="w-full rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)] px-4 py-3 text-sm"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {letters.map((l) => (
            <button
              key={l}
              onClick={() => setLetter(letter === l ? null : l)}
              className={`inline-flex items-center rounded-full px-3 py-1.5 ring-1 text-sm transition ${
                letter === l
                  ? "bg-[color:var(--brand)] text-black ring-[color:var(--brand)]"
                  : "text-neutral-800 ring-neutral-200 hover:bg-neutral-50"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {items.map((e) => (
            <div key={e.term} className="rounded-xl ring-1 ring-neutral-200 bg-white p-4">
              <div className="font-semibold text-black">{e.term}</div>
              <div className="mt-1 text-sm text-neutral-700 leading-7">{e.definition}</div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="text-sm text-neutral-600">No results. Try a different letter or search term.</div>
          )}
        </div>
      </div>
    </section>
  );
}
