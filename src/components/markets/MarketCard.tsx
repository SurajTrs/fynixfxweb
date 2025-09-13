"use client";

import Link from "next/link";
import type { Market } from "@/data/markets";
import { useEffect, useRef, useState } from "react";

export default function MarketCard({ market }: { market: Market }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      id={`market-${market.key}`}
      ref={ref}
      className={`rounded-2xl ring-1 ring-black/10 bg-white p-4 sm:p-6 shadow-sm transition transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } hover:-translate-y-1 hover:shadow-lg`}
    >
      <div className="grid md:grid-cols-5 gap-4 sm:gap-6">
        {/* Left: title + blurb */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-2">
            <div className="text-3xl" aria-hidden>{market.icon}</div>
            <h3 className="text-2xl font-extrabold text-black">{market.title}</h3>
          </div>
          <p className="mt-2 text-base sm:text-lg text-black/70 leading-relaxed">{market.blurb}</p>

          {/* Links + Popular */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {market.links?.map((lnk) => (
              <Link
                key={lnk.label}
                href={lnk.href}
                className="inline-flex items-center rounded-md border border-[rgba(var(--brand-rgb),0.3)] text-[color:var(--brand)] px-3 py-1.5 text-xs font-semibold hover:bg-[rgba(var(--brand-rgb),0.06)] transition"
              >
                {lnk.label}
              </Link>
            ))}
            {market.popular && (
              <span className="ml-auto inline-flex items-center rounded-full bg-[rgba(var(--brand-rgb),0.12)] text-[color:var(--brand)] px-3 py-1.5 text-xs font-semibold">
                Popular Account: {market.popular}
              </span>
            )}
          </div>
        </div>

        {/* Right: stats card */}
        <div className="md:col-span-2">
          <div className="rounded-xl ring-1 ring-black/10 bg-white/70 p-4">
            <ul className="grid grid-cols-2 gap-3 text-sm sm:text-base">
              {market.stats.map((s) => (
                <li key={s.label} className="rounded-lg bg-black/3 p-3">
                  <div className="text-black/60">{s.label}</div>
                  <div className="font-semibold text-black">{s.value}</div>
                  {typeof s.meter === "number" && (
                    <div className="mt-2 h-1.5 w-full rounded-full bg-black/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand to-accent"
                        style={{ width: `${Math.max(0, Math.min(100, s.meter))}%` }}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {market.cta && (
              <div className="mt-4">
                <Link href={market.cta.href} className="inline-flex items-center rounded-md border border-[rgba(var(--brand-rgb),0.35)] text-[color:var(--brand)] font-semibold px-4 py-2 hover:bg-[rgba(var(--brand-rgb),0.06)] transition">
                  {market.cta.label}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer: quick tags */}
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {market.stats.slice(0, 3).map((s) => (
          <span key={s.label} className="inline-flex items-center rounded-md bg-[rgba(var(--brand-rgb),0.06)] text-[color:var(--brand)] px-2.5 py-1 ring-1 ring-[rgba(var(--brand-rgb),0.15)]">
            {s.label}
          </span>
        ))}
      </div>
    </article>
  );
}
