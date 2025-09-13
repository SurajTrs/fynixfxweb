import Link from "next/link";
import ChromaImage from "./ChromaImage";

function FeatureItem({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand text-black text-[11px]">✓</span>
      <div>
        <div className="text-base font-semibold text-black">{title}</div>
        <div className="text-sm text-black/60">{subtitle}</div>
      </div>
    </div>
  );
}

export default function MarketsAtFingertips() {
  return (
    <section className="relative py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center rounded-3xl bg-[#f5f5f5] ring-1 ring-black/10 p-6 sm:p-8 shadow-sm">
          {/* Left: Illustration mock */}
          <div className="relative order-2 lg:order-1">
            <div className="group relative aspect-[16/10] w-full overflow-visible">
              <div className="absolute inset-0">
                <ChromaImage src="/globalmarket.png" alt="Global markets at your fingertips" className="w-full h-full p-2 sm:p-4 transition-transform duration-200 ease-out group-hover:scale-[1.05]" tolerance={22} />
              </div>
              {/* Glassy brand overlay pills */}
              <div className="absolute left-4 top-4 rounded-full bg-brand/20 text-brand text-xs px-3 py-1 ring-1 ring-brand/30 backdrop-blur-md">Forex • Indices • Crypto</div>
              <div className="absolute right-4 bottom-4 rounded-full bg-accent/20 text-accent text-xs px-3 py-1 ring-1 ring-accent/30 backdrop-blur-md">CFDs • Commodities</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black">Global Markets at Your Fingertips</h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <FeatureItem title="Forex CFDs" subtitle="61 products" />
              <FeatureItem title="Commodities CFDs" subtitle="24 products" />
              <FeatureItem title="Stocks CFDs" subtitle="2100+ products" />
              <FeatureItem title="Index CFDs" subtitle="25 products" />
              <FeatureItem title="Bond CFDs" subtitle="9 products" />
              <FeatureItem title="Cryptocurrency CFD" subtitle="—" />
            </div>
            <div className="mt-6">
              <Link href="#" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 text-base shadow-[0_0_20px_rgba(var(--brand-rgb),0.35)] hover:brightness-110 transition">
                Explore Markets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
