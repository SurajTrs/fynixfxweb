"use client";

import Link from "next/link";

export default function EdGettingStarted() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Getting Started</h2>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            Learn core concepts about the foreign exchange market and become familiar with order placement,
            charting and risk controls. Practice by placing trades on a risk‑free demo account while you refine
            your approach. Our education content is practical and focused on workflows used in live markets.
          </p>
          <div className="mt-5">
            <Link href="/education/tutorials" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-5 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Learn More</Link>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
            <div className="text-sm font-semibold text-black">Trusted CFD Provider</div>
            <p className="mt-2 text-sm text-neutral-700">Access over 200 instruments with market‑driven pricing.</p>
            <Link href="/open-account" className="mt-4 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-4 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Start Trading</Link>
          </div>

          <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
            <div className="text-sm font-semibold text-black">Contact Us</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li><a className="underline decoration-dotted" href="/help">Help Centre</a></li>
              <li><a className="underline decoration-dotted" href="mailto:support@fynixfx.com">Email Us</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
