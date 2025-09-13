export default function WTFeatures() {
  const items = [
    { title: "Instant access", desc: "Launch the terminal in seconds with no downloads or installs." },
    { title: "Always up to date", desc: "Automatic updates ensure you always have the latest features." },
    { title: "Secure by design", desc: "Encrypted connections and robust infrastructure." },
    { title: "Cross‑device", desc: "Trade from any device with session sync and saved layouts." },
    { title: "Order speed", desc: "Fast order entry with one‑click trading and hotkeys." },
    { title: "Charting essentials", desc: "Clean charts, indicators and drawing tools in your browser." },
  ];
  return (
    <section className="py-14 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">Key features</span>
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
