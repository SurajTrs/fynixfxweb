"use client";

import Link from "next/link";

export default function FXAdvIntro() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Why foreign exchange?</h2>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            Many foreign exchange advantages stem from liquidity, continuous pricing and flexible directionality.
            Traders can respond to macro data and session flows with rapid order placement and clear risk controls.
          </p>
          <p className="mt-2 text-[15px] leading-7 text-neutral-700">
            With market‑driven pricing, deep multi‑venue liquidity and professional platforms, Fynixfx provides an
            environment designed for dependable connectivity and consistent execution.
          </p>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
            <div className="text-sm font-semibold text-black">Trusted CFD Provider</div>
            <p className="mt-2 text-sm text-neutral-700">Access 200+ markets with transparent costs.</p>
            <Link href="/open-account" className="mt-4 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-4 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Start Trading</Link>
          </div>

          <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
            <div className="text-sm font-semibold text-black">Contact Us</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>Email: support@fynixfx.com</li>
              <li>Live chat: 24/5</li>
            </ul>
            <Link href="/company/contact" className="mt-4 inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-4 py-2.5 hover:bg-neutral-50 transition">Get in touch</Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
