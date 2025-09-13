import Link from "next/link";

export default function CompareStrip() {
  const items = [
    { tag: "MT4", title: "MetaTrader 4", href: "/platforms/metatrader" },
    { tag: "MT5", title: "MetaTrader 5", href: "/platforms/metatrader-5" },
    { tag: "cTrader", title: "cTrader", href: "/platforms/ctrader" },
  ];
  return (
    <section className="py-10 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">Compare</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {items.map((i) => (
            <Link key={i.tag} href={i.href} className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="text-xs uppercase tracking-wide text-neutral-600">{i.tag}</div>
              <div className="mt-1 text-lg font-semibold text-black">{i.title}</div>
              <div className="mt-3 inline-flex text-sm font-semibold text-[color:var(--brand)]">Explore →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
