"use client";

import Link from "next/link";
import Image from "next/image";

export default function MobileHero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-32 pb-10 md:pb-14 min-h-[68vh] bg-black flex items-center rounded-b-3xl md:rounded-b-[3rem]">
      <div aria-hidden className="absolute inset-0 -z-30 bg-center bg-cover" style={{ backgroundImage: "url(/commonbg.png)" }} />
      <div aria-hidden className="absolute inset-0 -z-20 bg-black/80" />
      <div aria-hidden className="absolute inset-0 -z-10" style={{
        background:
          "radial-gradient(60% 40% at 70% 40%, rgba(0,163,224,0.25) 0%, rgba(0,0,0,0) 70%)",
      }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <div className="text-xs uppercase tracking-[0.25em] text-white/70 mb-3">Mobile</div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">Trade on the go with <span className="brand-gradient-text">Fynixfx</span> mobile app</h1>
          <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15">
            <span className="text-xs text-white/70">Powered by</span>
            <span className="text-xs font-semibold text-white bg-white/10 px-2 py-1 rounded">MT4</span>
            <span className="text-xs font-semibold text-white bg-white/10 px-2 py-1 rounded">MT5</span>
            <span className="text-xs font-semibold text-white bg-white/10 px-2 py-1 rounded">cTrader</span>
          </div>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85">Discover high‑performance tools to trade global markets on Android & iOS with real‑time pricing and rich charting.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="#apps" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 shadow-[0_0_30px_rgba(var(--brand-rgb),0.45)] hover:brightness-110 transition">Get the App</Link>
            <Link href="/accounts/demo" className="inline-flex items-center justify-center rounded-md border border-white/30 text-white font-semibold px-7 py-3.5 hover:bg-white/10 transition">Try Free Demo</Link>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -right-6 top-10 w-72 h-72 rounded-full bg-[radial-gradient(closest-side,rgba(var(--brand-rgb),0.45),transparent)] blur-2xl opacity-70" />
          <Image src="/mobile1.png" alt="App phone" width={520} height={520} className="relative z-10 w-full h-auto drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
