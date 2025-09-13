import { FiCheckCircle } from "react-icons/fi";

export default function ForexCFD() {
  return (
    <section className="py-6 md:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">CFD Trading</span>
                <div className="h-px flex-1 bg-neutral-200" />
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight text-black">Forex CFD Trading</h2>
              <p className="mt-3 text-neutral-700">
                Go long or short on 40+ currency pairs including majors, minors
                and exotics. Benefit from our best-in-class pricing, deep
                liquidity and ultra-fast execution.
              </p>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-black">Facts</h3>
              <ul className="mt-4 space-y-3 text-sm text-neutral-800">
                <li className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> Over 40 currency pairs</li>
                <li className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> Tight spreads, deep liquidity</li>
                <li className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> Pro leverage (where eligible)</li>
              </ul>
              <a
                href="/open-account"
                className="mt-5 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-5 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand)] ring-offset-white transition"
              >
                Open Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
