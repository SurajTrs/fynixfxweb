import { FiZap, FiShield, FiCpu, FiTrendingUp } from "react-icons/fi";

export default function RTPBenefitsGrid() {
  const items = [
    { icon: FiZap, title: "VIP Pricing", desc: "Ultra‑low commissions with raw spreads for lower all‑in cost." },
    { icon: FiTrendingUp, title: "Volume Rebates", desc: "Monthly cash rebates that scale with your trading activity." },
    { icon: FiCpu, title: "Premium Tools", desc: "Access to advanced analytics and VPS hosting discounts." },
    { icon: FiShield, title: "Priority Support", desc: "Faster onboarding and dedicated client service." },
  ];
  return (
    <section className="py-12 relative">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Benefits</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <h3 className="text-2xl font-extrabold tracking-tight text-black">Additional Raw Trader Plus Benefits</h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <a
              key={title}
              role="button"
              tabIndex={0}
              className={`group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand)] ring-offset-white animate-fade-up ${idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : idx === 3 ? "delay-300" : ""}`}
            >
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-1 ring-brand-soft bg-neutral-50 group-hover:ring-[color:var(--brand)]/30 transition-colors">
                <Icon className="text-[color:var(--brand)]" />
              </div>
              <h4 className="mt-3 font-semibold text-black">{title}</h4>
              <p className="mt-1 text-sm text-neutral-700">{desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
