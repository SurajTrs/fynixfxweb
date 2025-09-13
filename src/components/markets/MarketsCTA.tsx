import Link from "next/link";

export default function MarketsCTA() {
  return (
    <section className="relative isolate overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[rgba(var(--brand-rgb),0.08)] to-[rgba(var(--accent-rgb),0.08)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl glass-brand ring-1 ring-black/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black">Start trading the markets</h3>
            <p className="mt-1.5 text-black/70">Open a live account in minutes, or try a risk‑free demo.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/open-account" className="inline-flex items-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-6 py-3 shadow-[0_0_24px_rgba(var(--brand-rgb),0.35)] hover:brightness-110 transition">Open Account</Link>
            <Link href="/demo" className="inline-flex items-center rounded-md border border-[rgba(var(--brand-rgb),0.35)] text-[color:var(--brand)] font-semibold px-6 py-3 hover:bg-[rgba(var(--brand-rgb),0.06)] transition">Try Demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
