"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const items = [
  { title: "Forex", content: "Tight spreads across majors, minors and selected exotics with deep, multi‑venue liquidity." },
  { title: "Commodities", content: "Transparent pricing on energies, precious metals and select soft commodities." },
  { title: "Indices", content: "Competitive spreads on leading global equity benchmarks with extended hours on select markets." },
  { title: "Stocks", content: "Popular US, EU and AU listings with clear, competitive pricing." },
  { title: "Cryptocurrency", content: "Popular digital currency instruments with prudent risk controls and responsive execution." },
];

export default function SpreadsAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white ring-1 ring-neutral-200 overflow-hidden">
          {items.map((it, idx) => (
            <div key={it.title} className="border-b last:border-b-0 border-neutral-200">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-neutral-50"
                aria-expanded={open === idx}
              >
                <span className="text-sm font-semibold text-black">{it.title}</span>
                <FiChevronDown className={`h-5 w-5 text-neutral-600 transition-transform ${open === idx ? "rotate-180" : ""}`} />
              </button>
              {open === idx && (
                <div className="px-5 pb-5 text-sm text-neutral-700">{it.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
