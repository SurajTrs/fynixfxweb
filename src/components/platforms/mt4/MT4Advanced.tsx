import Image from "next/image";

export default function MT4Advanced() {
  const bullets = [
    "Depth of Market (DoM)",
    "Multiple chart types & timeframes",
    "Custom indicators & scripts",
    "One‑click trading & hotkeys",
    "Hedging supported",
    "Strategy backtesting",
  ];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Advanced trading</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Feature‑rich platform for professionals</h2>
          <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-neutral-800">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand)] mt-2" /> {b}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <Image src="/mt4-advanced.png" alt="Advanced Trading" width={640} height={360} className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
