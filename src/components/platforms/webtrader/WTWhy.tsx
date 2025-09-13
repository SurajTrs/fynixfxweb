export default function WTWhy() {
  const bullets = [
    "Trade instantly from any modern browser",
    "Always on the latest version — no manual updates",
    "Market‑leading pricing and low commissions",
    "One‑click trading and hotkeys",
    "Secure sessions and encrypted connectivity",
    "Sync layouts across devices",
  ];
  return (
    <section className="py-14 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">Why WebTrader</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">A lightweight terminal with pro‑grade execution</h2>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-[15px] leading-7 text-neutral-800">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand)]"/> {b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
