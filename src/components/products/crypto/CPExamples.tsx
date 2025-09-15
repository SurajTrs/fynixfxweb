export default function CPExamples() {
  const items = [
    {
      title: "Momentum example",
      body:
        "Trade breakouts on BTCUSD during macro catalysts or session opens with tight risk management and clear cost visibility.",
    },
    {
      title: "Mean‑reversion example",
      body:
        "Fade extended moves on liquid pairs like ETHUSD when conditions support reversion, using disciplined position sizing.",
    },
    {
      title: "Hedging example",
      body:
        "Offset exposure in a digital‑asset portfolio by opening an opposing CFD position to manage directional risk.",
    },
  ];

  return (
    <section className="py-10 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black text-center">Crypto trading examples</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-white ring-1 ring-neutral-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-black">{i.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 leading-7">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
