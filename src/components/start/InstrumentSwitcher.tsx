"use client";

import { useEffect, useRef, useState } from "react";
import { SYMBOL_CATEGORIES } from "@/data/symbols";

export default function InstrumentSwitcher() {
  const [activeCat, setActiveCat] = useState(SYMBOL_CATEGORIES[0].key);
  const [symbol, setSymbol] = useState(SYMBOL_CATEGORIES[0].items[0].tv);

  // Broadcast selected symbol so StartChart/StartNews can react
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("fx:symbol", { detail: { tv: symbol } }));
  }, [symbol]);

  const cat = SYMBOL_CATEGORIES.find((c) => c.key === activeCat)!;

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-4 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            {SYMBOL_CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => {
                  setActiveCat(c.key);
                  setSymbol(c.items[0].tv);
                }}
                className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm ring-1 transition ${
                  activeCat === c.key
                    ? "bg-[color:var(--brand)] text-black ring-[color:var(--brand)]"
                    : "ring-neutral-200 text-neutral-800 hover:bg-neutral-50"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {cat.items.map((i) => (
              <button
                key={i.tv}
                onClick={() => setSymbol(i.tv)}
                className={`w-full text-left rounded-md px-3 py-2 text-sm ring-1 transition ${
                  symbol === i.tv ? "ring-[color:var(--brand)] bg-[rgba(var(--brand-rgb),0.06)]" : "ring-neutral-200 hover:bg-neutral-50"
                }`}
              >
                {i.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
