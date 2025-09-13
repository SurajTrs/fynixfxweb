import Link from "next/link";
import { SPREADS_HERO, type HeroConfig } from "@/data/pricing";

export default function SpreadsHero({ hero = SPREADS_HERO }: { hero?: HeroConfig }) {
  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20 min-h-[60vh] md:min-h-[70vh] bg-black flex items-center rounded-b-3xl md:rounded-b-[3rem]">
      {/* background image (reuse Why hero bg) */}
      <div aria-hidden className="absolute inset-0 -z-30 bg-center bg-cover" style={{ backgroundImage: `url(${hero.bg})` }} />
      {/* dark overlay + subtle vignette for depth */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-black/80" />
      <div aria-hidden className="absolute inset-0 -z-10" style={{
        background: "radial-gradient(60% 40% at 50% 35%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.0) 100%)"
      }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-white/70 mb-3">{hero.eyebrow}</div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">{hero.title}</h1>
        <p className="mt-4 sm:mt-5 max-w-3xl mx-auto text-base sm:text-lg text-white/85">{hero.subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/open-account" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 shadow-[0_0_30px_rgba(var(--brand-rgb),0.45)] hover:brightness-110 transition">
            Start Trading
          </Link>
          <Link href="#details" className="inline-flex items-center justify-center rounded-md border border-white/30 text-white font-semibold px-7 py-3.5 hover:bg-white/10 transition">
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
}
