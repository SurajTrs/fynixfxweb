import { FiBarChart2, FiZap, FiSliders, FiCpu, FiLayers, FiShield } from "react-icons/fi";

export default function MT5Features() {
  const items = [
    { icon: FiBarChart2, title: "More timeframes", desc: "21 timeframes and advanced charting tools." },
    { icon: FiZap, title: "Fast trading", desc: "One‑click trading and hotkeys for speed." },
    { icon: FiLayers, title: "Order types", desc: "Expanded pending orders and market depth (DoM)." },
    { icon: FiCpu, title: "Strategy tester", desc: "Multi‑threaded tester with optimization." },
    { icon: FiSliders, title: "Custom workspace", desc: "Layouts, templates and saved profiles." },
    { icon: FiShield, title: "Secure & reliable", desc: "Encrypted connections and robust uptime." },
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
