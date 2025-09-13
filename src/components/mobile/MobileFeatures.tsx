import { FiTrendingUp, FiBell, FiShield, FiBarChart2 } from "react-icons/fi";

export default function MobileFeatures() {
  const items = [
    { icon: FiBarChart2, title: "Advanced charts", desc: "Multi‑timeframe charts with indicators and drawings." },
    { icon: FiTrendingUp, title: "Real‑time pricing", desc: "Deep liquidity for tighter spreads and instant updates." },
    { icon: FiBell, title: "Smart alerts", desc: "Price and news alerts to stay on top of markets." },
    { icon: FiShield, title: "Secure login", desc: "Industry‑grade security and encryption." },
  ];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Features</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">High‑performance mobile trading</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className={`group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 animate-fade-up ${idx ? `delay-${idx}00` : ""}`}>
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-1 ring-brand-soft bg-neutral-50">
                <Icon className="text-[color:var(--brand)]" />
              </div>
              <h3 className="mt-3 font-semibold text-black">{title}</h3>
              <p className="mt-1 text-sm text-neutral-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
