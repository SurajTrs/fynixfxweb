import Link from "next/link";
import ChromaImage from "./ChromaImage";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-black/80">
      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand text-black text-[10px]">✓</span>
      <span>{children}</span>
    </li>
  );
}

function PhoneMock() {
  return (
    <div className="group relative w-full aspect-[4/3] sm:aspect-[3/2]">
      {/* Real image background (white removed at runtime) */}
      <div className="absolute inset-0">
        <ChromaImage src="/spread.png" alt="Spreads from 0.0 pips" className="w-full h-full p-4 sm:p-6 transition-transform duration-200 ease-out group-hover:scale-[1.05]" tolerance={24} />
      </div>

      {/* Glass EURUSD floating card */}
      <div className="absolute right-[12%] top-[18%] min-w-[220px] rounded-xl bg-white/70 backdrop-blur-xl ring-1 ring-black/10 shadow-xl">
        <div className="flex items-center justify-between p-3">
          <span className="font-semibold text-black">EURUSD</span>
          <span className="text-emerald-600 text-sm font-semibold">+0.15%</span>
        </div>
        <div className="grid grid-cols-3 border-t border-black/5 text-xs">
          <div className="p-3">
            <div className="text-black/60">Bid</div>
            <div className="text-lg font-semibold text-black">1.12009</div>
          </div>
          <div className="p-3">
            <div className="text-black/60">Ask</div>
            <div className="text-lg font-semibold text-black">1.12090</div>
          </div>
          <div className="p-3">
            <div className="text-black/60">Spread</div>
            <div className="text-lg font-semibold text-black">0.0</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IcFeatures() {
  return (
    <section className="relative py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Row 1: Unified card containing text + image */}
        <div className="rounded-3xl bg-[#f5f5f5] ring-1 ring-black/10 shadow-sm p-0 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left copy */}
            <div className="p-6 sm:p-8">
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black">Spreads from 0.0 pips</h2>
              <ul className="mt-6 space-y-3 text-lg">
                <CheckItem>Raw spreads means really from 0.0 pips*</CheckItem>
                <CheckItem>Our diverse and proprietary liquidity mix keeps spreads tight 24/5</CheckItem>
              </ul>
              <div className="mt-6">
                <Link href="/pricing" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 text-lg shadow-[0_0_20px_rgba(var(--brand-rgb),0.35)] hover:brightness-110 transition">
                  Pricing Overview
                </Link>
              </div>
            </div>
            {/* Right image with glass quote */}
            <div className="relative">
              <PhoneMock />
            </div>
          </div>
        </div>

        {/* Row 2: Two feature cards */}
        <div className="mt-4 sm:mt-6 grid lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-3xl bg-[#f5f5f5] p-6 sm:p-8 ring-1 ring-black/10 shadow-sm">
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black">Fast Order Execution</h3>
            <ul className="mt-6 space-y-3">
              <CheckItem>Average execution speeds of under 40ms***</CheckItem>
              <CheckItem>Low latency fibre optic and Equinix NY4 server</CheckItem>
              <CheckItem>Free Low latency collocated VPS available</CheckItem>
            </ul>
            <div className="mt-6">
              <Link href="/support/livechat" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 text-lg shadow-[0_0_20px_rgba(var(--brand-rgb),0.35)] hover:brightness-110 transition">
                Get your Free VPS
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-[#f5f5f5] p-6 sm:p-8 ring-1 ring-black/10 shadow-sm">
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black">Institutional Grade Trading</h3>
            <ul className="mt-6 space-y-3">
              <CheckItem>Real, deep and diverse liquidity you can trade on</CheckItem>
              <CheckItem>Reduced slippage</CheckItem>
              <CheckItem>Over 29 Billion USD in FX trades processed daily</CheckItem>
            </ul>
            <div className="mt-6">
              <Link href="/pricing#raw" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 text-lg shadow-[0_0_20px_rgba(var(--brand-rgb),0.35)] hover:brightness-110 transition">
                Raw Pricing Benefits
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
