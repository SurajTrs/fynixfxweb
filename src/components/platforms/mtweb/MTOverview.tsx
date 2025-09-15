"use client";

import { FiCheck } from "react-icons/fi";

export default function MTOverview() {
  const facts = [
    "No installs — trade in your browser",
    "Secure login via your Fynixfx account",
    "All core MT order types",
    "Works on desktop and mobile browsers",
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Trade MetaTrader in your browser</h2>
          <p className="text-[15px] leading-7 text-neutral-700">
            MetaTrader WebTrader gives you the familiar MT experience without downloads. Place and manage orders,
            analyse charts and monitor positions from any modern browser with secure account access.
          </p>
          <p className="text-[15px] leading-7 text-neutral-700">
            Perfect for quick access on shared devices, corporate machines, or when you prefer not to install
            software. Your layouts, watchlists and settings follow your account.
          </p>
        </div>
        <aside className="rounded-2xl bg-white p-6 shadow-sm w-full ring-1 ring-neutral-200">
          <div className="text-xs uppercase tracking-widest text-neutral-600">Highlights</div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-800">
            {facts.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand)]/10 text-[color:var(--brand)]"><FiCheck /></span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
