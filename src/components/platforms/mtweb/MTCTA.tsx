"use client";

import Link from "next/link";

export default function MTCTA() {
  return (
    <section className="relative mt-10 overflow-hidden rounded-3xl bg-white text-black ring-1 ring-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 text-neutral-700 px-3 py-1 text-xs ring-1 ring-neutral-200">MetaTrader WebTrader</div>
        <h3 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight">Start trading with the MT Web platform</h3>
        <p className="mt-2 text-neutral-600">Fast, secure browser trading with your Fynixfx account</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/accounts/live" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-6 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Open Trading Account</Link>
          <Link href="/accounts/demo" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-6 py-3 hover:bg-neutral-50 transition">Try a Free Demo</Link>
        </div>
      </div>
    </section>
  );
}
