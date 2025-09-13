import Image from "next/image";

export default function MT5Advanced() {
  const bullets = [
    "Depth of Market (DoM)",
    "21 timeframes & more chart types",
    "Expanded pending orders",
    "Strategy tester & optimization",
    "Hedging supported",
    "Economic calendar",
  ];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Advanced trading</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Professional‑grade tools built‑in</h2>
          <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-neutral-800">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand)] mt-2" /> {b}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <Image src="/mt5-advanced.png" alt="MT5 Advanced" width={640} height={360} className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
