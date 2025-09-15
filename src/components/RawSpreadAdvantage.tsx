import Link from "next/link";

function MiniQuote({ pair, bid, ask, change }: { pair: string; bid: string; ask: string; change: string }) {
  return (
    <div className="rounded-lg bg-black/50 ring-1 ring-white/10 p-3 text-xs text-white shadow-sm">
      <div className="flex items-center justify-between text-[11px] mb-2">
        <span className="text-white/80">{pair}</span>
        <span className={change.startsWith("+") ? "text-brand" : "text-red-400"}>{change}</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <div className="text-[10px] text-white/60">Bid</div>
          <div className="text-2xl font-semibold tracking-tight">{bid}</div>
        </div>
        <div>
          <div className="text-[10px] text-white/60">Ask</div>
          <div className="text-2xl font-semibold tracking-tight">{ask}</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <button className="text-[10px] rounded bg-white/10 px-2 py-1">Spread 0.1</button>
        <button className="text-[10px] rounded bg-brand/20 text-brand px-2 py-1">BUY</button>
        <button className="text-[10px] rounded bg-red-500/20 text-red-300 px-2 py-1">SELL</button>
      </div>
    </div>
  );
}

export default function RawSpreadAdvantage() {
  return (
    <section className="relative py-16 bg-black rounded-b-[60px] md:rounded-b-[70px] overflow-hidden ring-1 ring-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: mini quotes grid */}
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <MiniQuote pair="EURUSD" bid="1.17 45" ask="1.17 45" change="+0.09%" />
            <MiniQuote pair="AUDUSD" bid="0.66 63" ask="0.66 63" change="+0.07%" />
            <MiniQuote pair="GBPUSD" bid="1.35 68" ask="1.35 68" change="+0.01%" />
            <MiniQuote pair="XAUUSD" bid="3651.04" ask="3651.15" change="+0.43%" />
          </div>
        </div>

        {/* Right: copy + CTAs */}
        <div className="order-1 lg:order-2 text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">The Raw Spread Advantage</h2>
          <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
            Raw Spreads are the difference you have been waiting for. Trade with spreads from 0.0 pips, no requotes, best possible prices and no restrictions. Fynixfx is the multi-asset trading platform of choice for high volume traders, scalpers and robots.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/start-trading?mode=live" className="inline-flex items-center justify-center rounded-md bg-brand text-black font-semibold px-6 py-3 shadow-[0_0_24px_rgba(var(--brand-rgb),0.5)] hover:brightness-110 transition-colors">Start Trading</Link>
            <Link href="/start-trading?mode=demo" className="inline-flex items-center justify-center rounded-md border border-accent text-accent font-semibold px-6 py-3 hover:bg-accent hover:text-black transition-colors">Try a Free Demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
