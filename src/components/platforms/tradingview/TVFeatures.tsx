export default function TVFeatures() {
  const items = [
    {
      title: "Best-in-class charts",
      desc: "Interactive and responsive 15+ chart types with 110+ drawing tools and a wide range of customisations.",
    },
    { title: "Technical analysis", desc: "400+ pre-built indicators and thousands more custom-built in the community." },
    { title: "Unmissable alerts", desc: "13 notification conditions on price, indicators, and strategies." },
    { title: "Analytical suite", desc: "Forex screener, financial news, and corporate statements." },
    { title: "Strategy tester", desc: "Simulate trading and test strategies with historical data and detailed reports." },
    { title: "Chat and learn", desc: "Follow top community traders and learn in public — never trade alone again." },
  ];
  return (
    <section className="py-14 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">What makes TradingView great</span>
          <div className="h-px flex-1 bg-white/15" />
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {items.map((i) => (
            <div key={i.title} className="space-y-2">
              <h3 className="text-xl font-semibold leading-snug">{i.title}</h3>
              <p className="text-white/80 text-sm leading-7">{i.desc}</p>
              <div className="h-px w-full bg-white/10 mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
