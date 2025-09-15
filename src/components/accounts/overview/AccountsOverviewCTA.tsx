"use client";

import Link from "next/link";

export default function AccountsOverviewCTA() {
  return (
    <section className="relative mt-10 overflow-hidden rounded-3xl bg-white text-black ring-1 ring-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 text-neutral-700 px-3 py-1 text-xs ring-1 ring-neutral-200">Trusted & Regulated</div>
        <h3 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight">Trade with a regulated CFD Provider</h3>
        <p className="mt-2 text-neutral-600">Spreads from 0.0 pips with deep liquidity and fast execution</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/accounts/live" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-6 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Open a trading account</Link>
          <Link href="/accounts/demo" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-6 py-3 hover:bg-neutral-50 transition">Try a free demo</Link>
        </div>
      </div>
    </section>
  );
}

