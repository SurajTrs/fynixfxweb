export default function StandardFlex() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6 items-start">
        {/* Left column content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-lg md:text-xl font-extrabold text-black">No Restrictions on Trading — Scalping Allowed</h3>
            <p className="mt-2 text-sm leading-7 text-neutral-700">
              Execute your strategies without artificial constraints. Hedging, scalping and algorithmic trading are
              supported, with reliable connectivity designed to remain performant during high‑impact market events.
              Maintain control over entries and exits with professional charting and order management.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-extrabold text-black">Level II Pricing — Market Depth</h3>
            <p className="mt-2 text-sm leading-7 text-neutral-700">
              Access transparent price discovery with full Depth of Market (DoM). Depth views and microstructure
              context help inform execution tactics across varying liquidity conditions, giving you greater
              confidence in position sizing and risk.
            </p>
          </div>
        </div>

        {/* Right side notes */}
        <aside className="space-y-4">
          <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-5">
            <h4 className="text-sm font-semibold text-black">Easy, CTC to Connect & fund</h4>
            <p className="mt-1 text-sm text-neutral-700">Open, verify and fund quickly with flexible options. Start trading in minutes once approved.</p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-5">
            <h4 className="text-sm font-semibold text-black">Leverage up to 1:500</h4>
            <p className="mt-1 text-sm text-neutral-700">Choose leverage appropriate to your strategy with prudent risk controls.</p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-5">
            <h4 className="text-sm font-semibold text-black">All major account currencies</h4>
            <p className="mt-1 text-sm text-neutral-700">Fund and trade in popular base currencies to simplify conversion and reporting.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
