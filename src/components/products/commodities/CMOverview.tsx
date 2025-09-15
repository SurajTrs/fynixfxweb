"use client";

import { FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function CMOverview() {
  const facts = [
    "Energies, precious metals, softs",
    "Transparent, competitive pricing",
    "Deep, multi‑venue liquidity",
    "Fast execution",
    "Flexible sizing",
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6 items-start">
        {/* Left copy card */}
        <div className="md:col-span-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 text-neutral-700 px-3 py-1 text-xs ring-1 ring-neutral-200">Overview</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-black">What are Commodities CFDs?</h2>
          <p className="mt-2 text-[15px] leading-7 text-neutral-700">
            Commodities CFDs let you trade price movements in energies (like Oil), precious metals (such as Gold
            and Silver) and selected soft commodities. Prices are influenced by supply, demand and macro themes
            such as growth and inflation.
          </p>
          <p className="mt-2 text-[15px] leading-7 text-neutral-700">
            With Fynixfx, you can access a curated list of commodity markets on professional platforms with
            transparent costs and responsive execution.
          </p>
        </div>

        {/* Right facts card */}
        <aside className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
          <div className="text-xs uppercase tracking-widest text-neutral-600">Facts</div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-800">
            {facts.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand)]/10 text-[color:var(--brand)]"><FiCheck /></span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Link href="/open-account" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-4 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Open Account</Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
