"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28">
      {/* Dark black background gradient wash */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/95 via-black/70 to-black/95 pointer-events-none" />
      {/* Strong overlay for text contrast */}
      <div className="absolute inset-0 -z-10 overlay-stronger" />

      {/* Neon diagonal streaks */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="neon-streak neon-streak-1 neon-animate" />
        <div className="neon-streak neon-streak-2 neon-animate" />
        <div className="neon-streak neon-streak-3 neon-animate" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand/80 text-xs uppercase tracking-[0.3em] mb-6 text-shadow-sm">Client | Partners | Blog</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white text-shadow-lg">
          Experience Raw Spread Trading with a
          <br className="hidden sm:block" />
          <span className="brand-gradient-text"> Regulated Forex &amp; CFD Broker</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/90 text-shadow">
          Trade Indices, Shares, Commodities, and Crypto with lightning-fast execution and deep liquidity across markets.
        </p>

        <div className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-black/30 backdrop-blur-sm ring-1 ring-white/10 px-4 py-3">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-brand text-black font-semibold px-6 py-3 shadow-[0_0_30px_rgba(var(--brand-rgb),0.6)] hover:brightness-110 transition-colors"
          >
            Start Trading
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-accent text-accent font-semibold px-6 py-3 hover:bg-accent hover:text-black transition-colors"
          >
            Try a Free Demo
          </Link>
        </div>

        {/* Feature pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1.5 ring-1 ring-white/15 backdrop-blur-sm">
            <span className="text-brand">✓</span> Low spreads
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1.5 ring-1 ring-white/15 backdrop-blur-sm">
            <span className="text-brand">✓</span> Deep liquidity
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1.5 ring-1 ring-white/15 backdrop-blur-sm">
            <span className="text-brand">✓</span> 24/7 support
          </span>
        </div>
      </div>
    </section>
  );
}
