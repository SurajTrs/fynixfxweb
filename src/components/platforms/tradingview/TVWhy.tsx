export default function TVWhy() {
  const bullets = [
    "Real-time forex and CFD quotes",
    "Market leading spreads and low commissions",
    "Micro lot trading – Minimum lot size of 0.01 with no maximum",
    "No restrictions on limit orders",
    "Expanded symbol display",
    "One-click trading",
  ];
  return (
    <section className="py-12 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">Why trade on TradingView with Fynixfx</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-neutral-800">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand)] mt-2" /> {b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
