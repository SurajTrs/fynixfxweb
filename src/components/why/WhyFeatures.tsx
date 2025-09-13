export default function WhyFeatures() {
  const features = [
    {
      title: "Low Spreads",
      desc: "Raw spreads really from 0.0 pips with deep, diverse liquidity across sessions.",
      icon: "💹",
    },
    {
      title: "Fast Execution",
      desc: "Ultra‑low latency infrastructure and execution speeds typically under 40ms.",
      icon: "⚡",
    },
    {
      title: "Superior Technology",
      desc: "Modern tech stack, advanced charting, and reliable connectivity for pro traders.",
      icon: "🧠",
    },
    {
      title: "24/7 Support",
      desc: "Specialist support with fast responses via chat and email whenever you need it.",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl ring-1 ring-black/10 bg-white hover:bg-[rgba(var(--brand-rgb),0.04)] transition shadow-sm px-5 py-6"
            >
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-black">{f.title}</h3>
              <p className="mt-2 text-sm text-black/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
