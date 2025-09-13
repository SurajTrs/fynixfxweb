export default function TVIntegrations() {
  const items = [
    { title: "IC Insights", desc: "In-depth market insights to inform your trading decisions." },
    { title: "Trading Central", desc: "Independent technical analysis and actionable trade ideas." },
    { title: "Virtual Private Server", desc: "Run your strategies 24/5 on low-latency servers." },
    { title: "Trading Servers", desc: "Robust global infrastructure for fast, stable execution." },
    { title: "MT4 Advanced Trading Tools", desc: "A professional suite to supercharge your MT4 workflow." },
  ];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Integrations & tools</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-semibold text-black">{i.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
