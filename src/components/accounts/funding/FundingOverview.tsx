import { FiCheckCircle } from "react-icons/fi";

export default function FundingOverview() {
  const bullets = [
    "15+ flexible funding options",
    "10 base currencies",
    "Instant and free deposits",
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Account Overview</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Account Funding</h2>
            <p className="mt-3 text-[15px] leading-7 text-neutral-700">IC Markets Global offers over 15 flexible funding options in 10 different base currencies. Deposit instantly and for free using a range of methods.</p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-neutral-800">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> {b}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all" id="fund">
            <h3 className="text-lg font-semibold text-black">Base Currencies</h3>
            <p className="mt-3 text-sm text-neutral-700">AUD, USD, EUR, CAD, GBP, SGD, NZD, JPY, HKD, CHF</p>
            <a href="#methods" className="mt-5 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-5 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand)] ring-offset-white transition">Fund your Account</a>
          </div>
        </div>
      </div>
    </section>
  );
}
