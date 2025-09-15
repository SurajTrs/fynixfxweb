export default function CFDAdvTiles() {
  const tiles = [
    { title: "Long and short flexibility", body: "Express directional views or hedge exposure by going long or short with equal ease." },
    { title: "Multi‑asset access", body: "Trade FX, indices, commodities, bonds, crypto and equities from one account." },
    { title: "Capital efficiency", body: "Use leverage appropriate to your risk profile to deploy capital efficiently." },
    { title: "Transparent pricing", body: "Choose Raw or Standard pricing. Keep costs visible for accurate performance review." },
    { title: "Risk controls", body: "Manage exposure with stops, limits and precise position sizing from micro lots upward." },
    { title: "Platform choice", body: "Trade on MetaTrader, cTrader or TradingView with synced settings across devices." },
    { title: "Considerations", body: "Leverage can amplify losses. Volatility and gaps may increase slippage—use prudent risk." },
  ];

  return (
    <section className="py-10 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((t) => (
            <div key={t.title} className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-black">{t.title}</h3>
              <p className="mt-2 text-sm leading-7 text-neutral-700">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
