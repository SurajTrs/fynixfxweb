import { FiCheckCircle } from "react-icons/fi";

export default function ForexAccountTypes() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Accounts</span>
                <div className="h-px flex-1 bg-neutral-200" />
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight text-black">Forex Account Types</h2>
              <p className="mt-3 text-[15px] leading-7 text-neutral-700">
                Choose between Raw Spread and Standard accounts to get the best fit
                for your style. Enjoy deep institutional liquidity and low-latency
                execution across all major platforms.
              </p>
              <div className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-neutral-800">
                {[
                  "Raw and Standard pricing",
                  "Deep institutional liquidity",
                  "No dealing desk execution",
                  "Platforms: MT5, cTrader, Web",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-black">Account Facts</h3>
              <ul className="mt-4 space-y-3 text-sm text-neutral-800">
                <li className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> Raw spreads from 0.0</li>
                <li className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> Execution under 40ms</li>
                <li className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> 24/7 support and security</li>
                <li className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> No dealing desk</li>
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
