export default function FXAdvTiles() {
  const tiles = [
    {
      title: "24 Hour Market",
      body:
        "The FX market trades continuously from the Asian open Monday to the New York close Friday. Session overlaps can provide increased liquidity and opportunity.",
    },
    {
      title: "Transparency",
      body:
        "Market‑driven pricing from multiple venues with tight spreads on major pairs. Clear costs support reliable strategy evaluation.",
    },
    {
      title: "Trade Both Rising and Falling Markets",
      body:
        "Go long or short with equal ease. Express directional views or hedge exposure with flexible position sizing.",
    },
    {
      title: "Accessibility",
      body:
        "Low barriers to start with micro lot sizing and professional platforms available on web, desktop and mobile.",
    },
    {
      title: "Leverage",
      body:
        "Use leverage appropriate to your risk profile. Manage exposure precisely with disciplined sizing and risk limits.",
    },
    {
      title: "Liquidity",
      body:
        "Deep, multi‑venue liquidity on major pairs supports consistent execution across varied market conditions.",
    },
    {
      title: "Low Cost of Trading",
      body:
        "Raw accounts can access spreads from 0.0 pips plus a transparent commission; Standard accounts offer all‑in pricing.",
    },
    {
      title: "Disadvantages",
      body:
        "Leverage can amplify losses as well as gains. Volatility and gaps may increase slippage; trade with prudent risk controls.",
    },
    {
      title: "Non‑Standardised Contract Sizes",
      body:
        "Contract sizing flexibility enables granular exposure management from micro lots upward.",
    },
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
