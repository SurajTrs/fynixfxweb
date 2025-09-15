"use client";

import { FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function RawIntro() {
  const points = [
    "Ultra‑low spreads from 0.0 pips",
    "Average EURUSD spread ~0.1 pips",
    "Low commission per lot",
    "Institutional‑grade liquidity",
    "Fast and reliable execution",
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6 items-start">
        {/* Left copy */}
        <div className="md:col-span-2 space-y-4">
          <div className="text-xs uppercase tracking-[0.25em] text-neutral-600">Account highlight</div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Our Raw Spread account</h2>
          <p className="text-[15px] leading-7 text-neutral-700">
            Designed for precision and efficiency, the Raw Spread account pairs ultra‑tight spreads with low
            commissions and deep, multi‑venue liquidity. It’s engineered to perform consistently across sessions
            so you can focus on execution, risk and strategy—without surprises.
          </p>
          <p className="text-[15px] leading-7 text-neutral-700">
            Whether you scalp, hedge or automate, transparent pricing and reliable connectivity help keep total
            trading costs predictable while preserving speed and control in fast markets.
          </p>
          <div className="pt-1 flex flex-wrap gap-3">
            <Link href="/open-account" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-6 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Open Account</Link>
            <Link href="/accounts/live" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-6 py-3 hover:bg-neutral-50 transition">Open live</Link>
          </div>
        </div>

        {/* Right facts card */}
        <aside className="rounded-2xl bg-white p-6 shadow-sm w-full ring-1 ring-neutral-200">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 text-neutral-700 px-3 py-1 text-xs ring-1 ring-neutral-200">Account Type</div>
          <h3 className="mt-2 text-xl font-extrabold text-black">Raw Spread</h3>
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
