"use client";

import Link from "next/link";

export default function WTCTA() {
  return (
    <section id="start" className="py-14 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-extrabold tracking-tight text-black">Start trading on WebTrader</h3>
        <p className="mt-2 text-[15px] leading-7 text-neutral-700 max-w-2xl mx-auto">Log in with your Fynixfx account and trade directly from your browser with no downloads. Fast, secure, and always up to date.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/open-account" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Open Live Account</Link>
          <Link href="/accounts/demo" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-7 py-3.5 hover:bg-neutral-50 transition">Try a free demo</Link>
        </div>
      </div>
    </section>
  );
}
