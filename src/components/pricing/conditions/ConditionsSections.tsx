"use client";

import { FiBarChart2, FiCpu, FiTrendingUp, FiGlobe, FiRotateCw, FiClock } from "react-icons/fi";

export default function ConditionsSections() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="max-w-none">
          <div className="flex items-start gap-6">
            <span className="mt-0.5 inline-flex rounded-2xl bg-[color:var(--brand)]/10 p-5 text-[color:var(--brand)]"><FiBarChart2 className="h-14 w-14" /></span>
            <div>
              <h2 id="spreads" className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Spreads</h2>
              <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                Our spreads are market‑driven and stream from multiple price venues to seek the best available
                bid/ask at any moment. On Raw pricing, major pairs can reach from <strong>0.0 pips</strong> with a
                transparent, low commission per lot. This structure keeps effective costs visible so active
                traders can optimise entries, exits and risk across sessions.
              </p>
              <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                During high‑impact events liquidity may redistribute quickly. Our aggregation aims to maintain
                tight pricing while prioritising quote quality and stability.
              </p>
            </div>
          </div>

          <div className="mt-12 flex items-start gap-6">
            <span className="mt-0.5 inline-flex rounded-2xl bg-[color:var(--brand)]/10 p-5 text-[color:var(--brand)]"><FiCpu className="h-14 w-14" /></span>
            <div>
              <h2 id="execution" className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Execution</h2>
              <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                Orders route through a modern execution stack designed for <strong>low latency</strong> and
                <strong> determinism</strong>. Robust connectivity and infrastructure resilience help reduce
                slippage when volatility spikes, so your strategy behaves consistently under load.
              </p>
              <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                We continuously monitor fill metrics to improve placement logic and maintain dependable
                performance for discretionary, algorithmic and high‑frequency styles.
              </p>
            </div>
          </div>

          <div className="mt-12 flex items-start gap-6">
            <span className="mt-0.5 inline-flex rounded-2xl bg-[color:var(--brand)]/10 p-5 text-[color:var(--brand)]"><FiTrendingUp className="h-14 w-14" /></span>
            <div>
              <h2 id="leverage" className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Margin and Leverage</h2>
              <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                Select leverage appropriate to your risk profile with <strong>flexible position sizing</strong>
                from micro lots upward. Margin usage and risk controls are presented clearly to support
                disciplined position management and scenario testing.
              </p>
            </div>
          </div>

          <div className="mt-12 flex items-start gap-6">
            <span className="mt-0.5 inline-flex rounded-2xl bg-[color:var(--brand)]/10 p-5 text-[color:var(--brand)]"><FiGlobe className="h-14 w-14" /></span>
            <div>
              <h2 id="pairs" className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Currency Pairs</h2>
              <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                Trade a broad universe of FX pairs across majors, minors and selected exotics. Pricing is sourced
                from deep, multi‑venue liquidity with a focus on transparency and stability. Instrument details
                and specifications are available on each product page.
              </p>
            </div>
          </div>

          <div className="mt-12 flex items-start gap-6">
            <span className="mt-0.5 inline-flex rounded-2xl bg-[color:var(--brand)]/10 p-5 text-[color:var(--brand)]"><FiRotateCw className="h-14 w-14" /></span>
            <div>
              <h2 id="swaps" className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Swap Rates</h2>
              <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                Overnight financing reflects prevailing market rates and is published transparently. Review current
                swap rates on the <a href="/pricing/swaps" className="underline decoration-dotted">swap rates page</a>
                before holding positions through rollover. Where applicable, triple swaps are applied mid‑week per
                instrument convention.
              </p>
            </div>
          </div>

          <div className="mt-12 flex items-start gap-6">
            <span className="mt-0.5 inline-flex rounded-2xl bg-[color:var(--brand)]/10 p-5 text-[color:var(--brand)]"><FiClock className="h-14 w-14" /></span>
            <div>
              <h2 id="hours" className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Trading Hours</h2>
              <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                Most FX markets trade continuously from the Asian open Monday to the New York close Friday.
                Product‑specific hours, maintenance windows and holiday schedules are listed on our
                <a href="/pricing/hours" className="underline decoration-dotted"> trading hours page</a>.
                Align strategy logic to session characteristics and expected liquidity conditions.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
