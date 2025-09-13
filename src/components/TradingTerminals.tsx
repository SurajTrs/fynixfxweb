import ChromaImage from "./ChromaImage";
import Link from "next/link";

function PlatformBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs ring-1 ring-brand/30">
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand" />
      {label}
    </span>
  );
}

export default function TradingTerminals() {
  return (
    <section className="relative py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center rounded-3xl bg-[#f5f5f5] ring-1 ring-black/10 p-6 sm:p-8 shadow-sm">
          {/* Left: Heading, logos, badges, CTA */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black">Powerful Trading Terminals</h2>

            {/* Platform logos row (placeholder text-based) */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-black/80">
              <span className="inline-flex items-center gap-2 text-base font-semibold"><span className="rounded bg-black/80 text-white px-1.5 py-0.5">MT4</span> MetaTrader 4</span>
              <span className="inline-flex items-center gap-2 text-base font-semibold"><span className="rounded bg-black/80 text-white px-1.5 py-0.5">MT5</span> MetaTrader 5</span>
              <span className="inline-flex items-center gap-2 text-base font-semibold"><span className="rounded bg-black/80 text-white px-1.5 py-0.5">cT</span> cTrader</span>
              <span className="inline-flex items-center gap-2 text-base font-semibold"><span className="rounded bg-black/80 text-white px-1.5 py-0.5">TV</span> TradingView</span>
            </div>

            {/* Badges */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-sm">
              <PlatformBadge label="Windows" />
              <PlatformBadge label="MAC" />
              <PlatformBadge label="Web Browser" />
              <PlatformBadge label="iOS" />
              <PlatformBadge label="Android" />
              <PlatformBadge label="More" />
            </div>

            <div className="mt-6">
              <Link href="#" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 text-base shadow-[0_0_20px_rgba(var(--brand-rgb),0.35)] hover:brightness-110 transition">
                Platforms
              </Link>
            </div>
          </div>

          {/* Right: Real illustration (no inner card) */}
          <div className="relative">
            <div className="group relative aspect-[16/10] w-full overflow-visible">
              <div className="absolute inset-0">
                <ChromaImage src="/powerfultrading.png" alt="Powerful trading terminals" className="w-full h-full p-2 sm:p-4 transition-transform duration-200 ease-out group-hover:scale-[1.05]" tolerance={22} />
              </div>

              {/* Floating quote tag (glassy) */}
              <div className="absolute right-8 top-8 min-w-[180px] rounded-xl bg-white/80 backdrop-blur-md ring-1 ring-black/10 shadow-lg">
                <div className="flex items-center justify-between p-3">
                  <span className="font-semibold text-black">GBPUSD</span>
                  <span className="text-red-600 text-sm font-semibold">-0.11%</span>
                </div>
                <div className="grid grid-cols-3 border-t border-black/5 text-xs">
                  <div className="p-3">
                    <div className="text-black/60">Bid</div>
                    <div className="text-lg font-semibold text-black">1.2890</div>
                  </div>
                  <div className="p-3">
                    <div className="text-black/60">Ask</div>
                    <div className="text-lg font-semibold text-black">1.2893</div>
                  </div>
                  <div className="p-3">
                    <div className="text-black/60">Spread</div>
                    <div className="text-lg font-semibold text-black">0.3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
