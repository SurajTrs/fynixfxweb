export default function CTWhy() {
  const reasons = [
    { title: "Advanced DoM", desc: "Full market depth and VWAP for precise execution." },
    { title: "Modern UI", desc: "Clean, intuitive and customizable workspace." },
    { title: "Detachable charts", desc: "Multi‑monitor layouts with templates and hotkeys." },
    { title: "Fast execution", desc: "Low latency routing for active strategies." },
  ];
  return (
    <section className="py-12 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">Why trade cTrader with Fynixfx</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r, idx) => (
            <div key={r.title} className={`group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 animate-fade-up ${idx?`delay-${idx}00`:''}`}>
              <h3 className="font-semibold text-black">{r.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
