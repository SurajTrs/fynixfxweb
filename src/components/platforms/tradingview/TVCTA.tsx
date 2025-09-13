"use client";

import Link from "next/link";

export default function TVCTA() {
  return (
    <section id="connect" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-extrabold tracking-tight text-black">Start trading with Fynixfx</h3>
          <p className="mt-2 text-[15px] leading-7 text-neutral-700 max-w-2xl mx-auto">Connect your Fynixfx account to TradingView and access best‑in‑class charts, alerts and community strategies.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="/open-account" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Open Live Account</Link>
            <Link href="/accounts/demo" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-7 py-3.5 hover:bg-neutral-50 transition">Try a free demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
