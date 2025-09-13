export default function WhyBenefits() {
  const rows = [
    {
      title: "The Ultimate in Trading Conditions",
      desc:
        "Tight spreads, deep liquidity, and reliable connectivity across multiple asset classes — designed to support any strategy from scalping to swing trading.",
    },
    {
      title: "Better Fills",
      desc:
        "Institutional-grade liquidity and smart order routing aim to reduce slippage and deliver consistent execution quality.",
    },
    {
      title: "Unrivalled Customer Service",
      desc:
        "Our support specialists are available around the clock to help with onboarding, platforms, and trading-related questions.",
    },
    {
      title: "Trust and Transparency",
      desc:
        "Security-first architecture, clear pricing, and straight-through processing help keep trading fair and transparent.",
    },
  ];

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {rows.map((r) => (
            <div key={r.title} className="grid md:grid-cols-5 gap-4 sm:gap-6 items-start">
              <h3 className="md:col-span-2 text-xl sm:text-2xl font-extrabold tracking-tight text-black">{r.title}</h3>
              <p className="md:col-span-3 text-black/70 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
