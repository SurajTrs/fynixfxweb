export default function StatsBar() {
  const items = [
    { value: "0.0", label: "PIP SPREADS*" },
    { value: "1:1000", label: "LEVERAGE" },
    { value: "0.01", label: "MICRO LOT TRADING" },
    { value: "+2250", label: "TRADABLE INSTRUMENTS" },
    { value: "24/7", label: "DEDICATED SUPPORT" },
  ];
  return (
    <section className="relative z-10 -mt-6 sm:-mt-10 bg-black py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 rounded-2xl ring-1 ring-white/10 p-4 sm:p-5">
          {items.map((it, idx) => (
            <div
              key={it.label}
              className={`text-center py-3 ${idx < items.length - 1 ? "border-r border-white/10" : ""}`}
            >
              <div className="text-2xl sm:text-3xl font-semibold text-white drop-shadow">{it.value}</div>
              <div className="mt-1 text-[10px] sm:text-xs tracking-widest text-white/70">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
