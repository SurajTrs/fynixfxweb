"use client";

const items = [
  { href: "#spreads", label: "Spreads" },
  { href: "#execution", label: "Execution" },
  { href: "#leverage", label: "Margin & Leverage" },
  { href: "#pairs", label: "Currency Pairs" },
  { href: "#swaps", label: "Swap Rates" },
  { href: "#hours", label: "Trading Hours" },
];

export default function ConditionsAnchorNav() {
  return (
    <nav className="sticky top-14 z-10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center gap-3 py-3 text-sm">
          {items.map((i) => (
            <li key={i.href}>
              <a
                href={i.href}
                className="inline-flex items-center rounded-full px-3 py-1.5 text-neutral-700 ring-1 ring-neutral-200 hover:bg-neutral-50"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
