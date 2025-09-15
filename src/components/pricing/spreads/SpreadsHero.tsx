"use client";

import Link from "next/link";

export default function SpreadsHero() {
  return (
    <section className="relative isolate overflow-hidden pt-24 md:pt-28 pb-14 md:pb-16 bg-black text-white rounded-b-3xl md:rounded-b-[3rem]">
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-white/70 mb-3">Pricing</div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Spreads</h1>
        <p className="mt-4 max-w-3xl mx-auto text-white/85">
          Transparent, market‑driven spreads with access to deep, multi‑venue liquidity and consistent execution.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link href="/open-account" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 shadow-[0_0_30px_rgba(var(--brand-rgb),0.45)] hover:brightness-110 transition">Start Trading</Link>
          <Link href="/accounts/demo" className="inline-flex items-center justify-center rounded-md border border-white/30 text-white font-semibold px-7 py-3.5 hover:bg-white/10 transition">Try a Free Demo</Link>
        </div>
      </div>
    </section>
  );
}
