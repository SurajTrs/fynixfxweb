"use client";

import Link from "next/link";

export default function AccountsOverviewCards() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-5">
          {/* Raw Spread (cTrader) */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="text-neutral-600 text-xs uppercase tracking-widest">Raw Spread</div>
            <h3 className="mt-2 text-xl font-extrabold text-black">(cTrader)</h3>
            <div className="mt-4 text-neutral-700 text-sm">Commission (per lot)</div>
            <div className="text-3xl font-extrabold text-black">$3.0</div>
            <div className="mt-3 text-sm text-neutral-700">Spread from <span className="font-semibold">0.0</span></div>
            <div className="mt-5">
              <Link href="/accounts/live" className="inline-flex rounded-md bg-black text-white px-4 py-2.5 font-semibold hover:opacity-90">Open a live account</Link>
            </div>
          </div>

          {/* Raw Spread (MT5) */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="text-neutral-600 text-xs uppercase tracking-widest">Raw Spread</div>
            <h3 className="mt-2 text-xl font-extrabold text-black">(MT5)</h3>
            <div className="mt-4 text-neutral-700 text-sm">Commission (per lot)</div>
            <div className="text-3xl font-extrabold text-black">$3.5</div>
            <div className="mt-3 text-sm text-neutral-700">Spread from <span className="font-semibold">0.0</span></div>
            <div className="mt-5">
              <Link href="/accounts/live" className="inline-flex rounded-md bg-black text-white px-4 py-2.5 font-semibold hover:opacity-90">Open a live account</Link>
            </div>
          </div>

          {/* Standard */}
          <div className="rounded-2xl border border-neutral-200 bg-black text-white p-6 shadow-sm hover:shadow-md transition">
            <div className="text-white/70 text-xs uppercase tracking-widest">Standard</div>
            <h3 className="mt-2 text-xl font-extrabold">(All platforms)</h3>
            <div className="mt-4 text-white/85 text-sm">Commission (per lot)</div>
            <div className="text-3xl font-extrabold">$0</div>
            <div className="mt-3 text-sm text-white/85">Spread from <span className="font-semibold">0.8</span></div>
            <div className="mt-5">
              <Link href="/accounts/live" className="inline-flex rounded-md bg-white text-black px-4 py-2.5 font-semibold hover:opacity-90">Open a live account</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
