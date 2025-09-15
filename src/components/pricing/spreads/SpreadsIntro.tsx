export default function SpreadsIntro() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Spreads</h2>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            Our pricing is market‑driven and streams from multiple venues to seek the best available bid/ask at any
            moment. With Raw accounts, majors can reach from 0.0 pips plus a clear, low commission per lot. Standard
            accounts offer simple all‑in spread pricing for clarity and ease of use.
          </p>
          <p className="mt-2 text-[15px] leading-7 text-neutral-700">
            Transparent costs and reliable execution help keep total trading costs predictable so you can focus on
            strategy, risk and performance.
          </p>
        </div>
        <aside className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
          <div className="text-xs uppercase tracking-widest text-neutral-600">Categories</div>
          <ul className="mt-3 text-sm text-neutral-800 space-y-2">
            <li>Forex</li>
            <li>Commodities</li>
            <li>Indices</li>
            <li>Stocks</li>
            <li>Crypto</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
