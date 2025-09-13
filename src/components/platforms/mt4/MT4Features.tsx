import { FiZap, FiBarChart2, FiShield, FiLayers, FiCpu, FiSliders } from "react-icons/fi";

export default function MT4Features() {
  const items = [
    { icon: FiBarChart2, title: "Advanced charting", desc: "30+ built‑in indicators, multi‑timeframe and templates." },
    { icon: FiZap, title: "One‑click trading", desc: "Fast order entry directly from the chart or Market Watch." },
    { icon: FiCpu, title: "Expert Advisors", desc: "Automate strategies with EAs and backtesting." },
    { icon: FiLayers, title: "Multiple order types", desc: "Market, pending, stop and trailing stops supported." },
    { icon: FiSliders, title: "Customizable UI", desc: "Detachable panels, saved layouts and workspaces." },
    { icon: FiShield, title: "Secure & reliable", desc: "Stable infrastructure and encrypted connections." },
  ];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Key features</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className={`group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 animate-fade-up ${idx?`delay-${idx}00`:''}`}>
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
