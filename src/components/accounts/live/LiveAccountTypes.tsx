import { FiCheckCircle } from "react-icons/fi";

export default function LiveAccountTypes() {
  const bullets = [
    "Raw and Standard pricing",
    "Deep liquidity, no dealing desk",
    "Platforms: MT5, cTrader, Web",
    "24/7 specialist support",
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Account Types</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all animate-fade-up">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Choose your account</h2>
            <p className="mt-3 text-[15px] leading-7 text-neutral-700">Pick between Raw Spread and Standard to match your strategy. Enjoy institutional pricing and robust execution on professional platforms.</p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-neutral-800">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> {b}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all animate-fade-up delay-100">
            <h3 className="text-lg font-semibold text-black">Quick facts</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-800">
              <li className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> Raw spreads from 0.0</li>
              <li className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> Execution under 40ms</li>
              <li className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> Free deposits & withdrawals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
