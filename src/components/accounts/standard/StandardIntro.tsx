"use client";

import { FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function StandardIntro() {
  const points = [
    "All-in spread, zero commissions",
    "Deep, multi‑venue liquidity",
    "Fast and reliable execution",
    "Platform choice: MT5, cTrader, Web",
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6 items-start">
        {/* Left copy */}
        <div className="md:col-span-2 space-y-4">
          <div className="text-xs uppercase tracking-[0.25em] text-neutral-600">Account highlight</div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Why Choose Our Standard Account?</h2>
          <p className="text-[15px] leading-7 text-neutral-700">
            The Standard Account offers all‑in‑spread pricing for a streamlined trading experience. With deep
            liquidity and rapid execution on professional platforms, it’s an excellent choice when you prefer
            simple, transparent pricing without separate commissions.
          </p>
          <p className="text-[15px] leading-7 text-neutral-700">
            Enjoy modern tooling, robust connectivity and a clean cost structure that gives you clarity when
            modelling strategies across different market conditions.
          </p>
          <div className="pt-1 flex flex-wrap gap-3">
            <Link href="/open-account" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-6 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Open Account</Link>
            <Link href="/accounts/demo" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-6 py-3 hover:bg-neutral-50 transition">Try Free Demo</Link>
          </div>
        </div>

        {/* Right facts card */}
        <aside className="rounded-2xl bg-white p-6 shadow-sm w-full ring-1 ring-neutral-200">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 text-neutral-700 px-3 py-1 text-xs ring-1 ring-neutral-200">Account Type</div>
          <h3 className="mt-2 text-xl font-extrabold text-black">Standard</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-800">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand)]/10 text-[color:var(--brand)]"><FiCheck /></span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Link href="/accounts/live" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-4 py-2.5 hover:bg-neutral-50 transition">Open live</Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
