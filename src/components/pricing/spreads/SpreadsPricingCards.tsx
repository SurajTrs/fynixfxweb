"use client";

import Link from "next/link";

const plans = [
  {
    name: "Raw Spread",
    tag: "Most popular",
    price: "$3",
    unit: "per lot",
    bullets: ["Spreads from 0.0 pips", "Institutional liquidity", "Fast execution"],
    primary: true,
  },
  {
    name: "Standard",
    tag: "All‑in spread",
    price: "$0",
    unit: "commission",
    bullets: ["Simple pricing", "No separate commission", "Fast execution"],
    primary: false,
  },
];

export default function SpreadsPricingCards() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-extrabold text-black text-center">Low Commission</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl ring-1 p-6 shadow-sm ${p.primary ? "bg-white ring-neutral-200" : "bg-neutral-50 ring-neutral-200"}`}>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-black">{p.name}</h4>
                <span className="inline-flex items-center rounded-full bg-[color:var(--brand)]/10 text-[color:var(--brand)] px-2.5 py-1 text-xs ring-1 ring-[color:var(--brand)]/20">{p.tag}</span>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <div className="text-4xl font-extrabold text-black">{p.price}</div>
                <div className="text-sm text-neutral-600">{p.unit}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                {p.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/open-account" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-5 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Open Account</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
