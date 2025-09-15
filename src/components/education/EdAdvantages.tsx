"use client";

import Link from "next/link";

export default function EdAdvantages() {
  const tiles = [
    {
      title: "Advantages of Forex",
      body:
        "Learn about liquidity, 24/5 market hours and the role of major currency pairs. Understand practical considerations for position sizing and risk.",
      href: "/education/forex",
    },
    {
      title: "Advantages of CFDs",
      body:
        "Discover how CFDs enable flexibility for both long and short positioning, and how leverage can be applied responsibly.",
      href: "/education/cfds",
    },
    {
      title: "Video Tutorials",
      body:
        "Practical video walkthroughs to set up platforms, place orders, use risk controls and review performance.",
      href: "/education/tutorials",
    },
  ];

  return (
    <section className="py-10 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {tiles.map((t) => (
            <div key={t.title} className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-black">{t.title}</h3>
              <p className="mt-2 text-sm leading-7 text-neutral-700">{t.body}</p>
              <div className="mt-4">
                <Link href={t.href} className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-4 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
