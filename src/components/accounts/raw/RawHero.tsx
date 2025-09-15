"use client";

import Link from "next/link";

export default function RawHero() {
  return (
    <section className="relative isolate overflow-hidden pt-24 md:pt-28 pb-14 md:pb-16 bg-black text-white rounded-b-3xl md:rounded-b-[3rem]">
      {/* background */}
      <div aria-hidden className="absolute inset-0 -z-30 bg-center bg-cover" style={{ backgroundImage: "url(/commonbg.png)" }} />
      <div aria-hidden className="absolute inset-0 -z-20 bg-black/80" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 35%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.0) 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-white/70 mb-3">Accounts</div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Raw Spread Account</h1>
          <p className="mt-4 max-w-3xl mx-auto text-white/85">
            Our Raw Spread account offers ultra‑low spreads with institutional‑grade liquidity and fast, reliable
            execution across professional platforms.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/accounts/live" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 shadow-[0_0_30px_rgba(var(--brand-rgb),0.45)] hover:brightness-110 transition">Open Account</Link>
            <Link href="/accounts/demo" className="inline-flex items-center justify-center rounded-md border border-white/30 text-white font-semibold px-7 py-3.5 hover:bg-white/10 transition">Try Free Demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
