export default function RawPricing() {
  return (
    <section className="py-10 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="prose prose-neutral max-w-none">
          <header className="not-prose rounded-2xl bg-white ring-1 ring-neutral-200 p-6 sm:p-8 mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Raw Pricing</h2>
            <p className="mt-3 text-[15px] leading-7 text-neutral-700">
              Experience spreads from 0.0 pips on major pairs, paired with low commissions and deep multi‑venue
              liquidity. Our execution stack is engineered for stability and low latency during peak sessions,
              helping you maintain precise control over costs and slippage.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-neutral-700">
              Pricing is sourced from multiple liquidity providers to deliver consistent, transparent quotes.
              Whether you scalp, hedge or run algorithmic strategies, the Raw model is designed to keep
              transaction costs predictable and performance‑oriented.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200">AVG EURUSD <span className="text-black">0.1</span> pips</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200">Commission <span className="text-black">$3.0</span> per lot</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200">Spread from <span className="text-black">0.0</span> pips</span>
            </div>
          </header>

          <section>
            <h3 className="text-xl font-extrabold text-black">Built for active traders</h3>
            <p>
              The Raw account is purpose‑built for active traders who value tight spreads and consistent fills.
              By separating spread and commission, you gain clearer visibility into total trading costs and can
              better optimise strategy performance across conditions.
            </p>
            <p>
              Our matching and routing systems prioritise speed and reliability, with connectivity designed to
              remain performant under load. This foundation supports discretionary and systematic approaches
              alike.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
