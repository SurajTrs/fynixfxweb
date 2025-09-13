import Link from "next/link";
import { SPREADS_CARDS, type PricingCard } from "@/data/pricing";

export default function SpreadsCards({ cards = SPREADS_CARDS }: { cards?: PricingCard[] }) {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black">Low Commission</h3>
        <p className="mt-2 text-black/70">Choose an account type that fits your trading style.</p>
        <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className={`rounded-2xl ring-1 ring-black/10 bg-white p-5 shadow-sm ${c.featured ? "relative overflow-hidden" : ""}`}>
              {c.featured && (
                <div className="absolute right-4 top-4 rounded-full bg-brand/20 text-brand text-xs px-3 py-1 ring-1 ring-brand/30">Most popular</div>
              )}
              <h4 className="text-lg font-extrabold text-black">{c.title}</h4>
              <div className="mt-3 flex items-end gap-1">
                <div className="text-3xl font-extrabold text-black">{c.price}</div>
                <div className="text-black/60">{c.unit}</div>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-black/70">
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand text-black text-[10px]">✓</span>{f}</li>
                ))}
              </ul>
              <div className="mt-5">
                <Link href={c.cta.href} className="inline-flex items-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-5 py-2.5 shadow-[0_0_18px_rgba(var(--brand-rgb),0.35)] hover:brightness-110 transition">{c.cta.label}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
