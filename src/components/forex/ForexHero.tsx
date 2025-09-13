"use client";

import Link from "next/link";

export default function ForexHero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20 min-h-[70vh] md:min-h-[78vh] bg-black flex items-center rounded-b-3xl md:rounded-b-[3rem]">
      {/* background image */}
      <div aria-hidden className="absolute inset-0 -z-30 bg-center bg-cover" style={{ backgroundImage: "url(/commonbg.png)" }} />
      {/* dark overlay + subtle vignette for depth */}
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
        <div className="text-xs uppercase tracking-[0.25em] text-white/70 mb-3">Forex Trading</div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          Trade <span className="brand-gradient-text">Forex</span> with Raw Spreads
        </h1>
        <p className="mt-4 sm:mt-5 max-w-3xl mx-auto text-base sm:text-lg text-white/85">
          Access institutional-grade liquidity, lightning-fast execution and 24/7
          support. Start trading major, minor and exotic currency pairs.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-up">
          <Link
            href="/open-account"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 shadow-[0_0_30px_rgba(var(--brand-rgb),0.45)] hover:brightness-110 transition"
          >
            Start Trading
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-md border border-white/30 text-white font-semibold px-7 py-3.5 hover:bg-white/10 transition"
          >
            Try Free Demo
          </Link>
        </div>

        {/* Small metrics strip */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1.5 ring-1 ring-white/15 backdrop-blur-sm"><span className="text-[color:var(--brand)]">✓</span> Raw spreads from 0.0</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1.5 ring-1 ring-white/15 backdrop-blur-sm"><span className="text-[color:var(--brand)]">✓</span> Execution under 40ms</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1.5 ring-1 ring-white/15 backdrop-blur-sm"><span className="text-[color:var(--brand)]">✓</span> 24/7 support</span>
        </div>
      </div>
    </section>
  );
}
