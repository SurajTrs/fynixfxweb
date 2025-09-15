export default function PCNumbers() {
  const stats = [
    { label: "Years in markets", value: "10+" },
    { label: "Instruments", value: "200+" },
    { label: "Avg. execution (ms)", value: "<30" },
  ];
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Our Strength is in the Numbers</h3>
        <div className="mt-6 grid sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl font-extrabold">{s.value}</div>
              <div className="mt-1 text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
