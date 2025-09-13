"use client";

import { SPREADS_COMMISSIONS } from "@/data/pricing";
import { useEffect, useRef, useState } from "react";
import Copyable from "@/components/Copyable";

export default function SpreadsCommissionDetails() {
  const { mt4, ctrader } = SPREADS_COMMISSIONS;
  const [selected, setSelected] = useState<string>("");
  const rowRefs = useRef<Record<string, HTMLTableRowElement | null>>({});

  // support deep-link via #commission-AUD etc.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    const prefix = "commission-";
    if (hash.startsWith(prefix)) {
      const key = hash.slice(prefix.length).toUpperCase();
      if (mt4.baseCurrencies.some((c) => c.key === key)) {
        setSelected(key);
        setTimeout(() => rowRefs.current[key]?.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
      }
    }
  }, [mt4.baseCurrencies]);

  const handleSelect = (key: string) => {
    setSelected(key);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.hash = `commission-${key}`;
      window.history.replaceState({}, "", url.toString());
    }
    rowRefs.current[key]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* MT4 Section */}
        <div className="rounded-2xl glass-brand ring-1 ring-black/10 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black">{mt4.title}</h3>
              <div className="mt-2 h-1 w-16 bg-gradient-to-r from-brand to-accent rounded-full" />
              <p className="mt-2 text-black/70">Commission schedule by account base currency.</p>
            </div>
            <span className="hidden sm:inline-flex items-center rounded-full bg-[rgba(var(--brand-rgb),0.12)] text-[color:var(--brand)] px-3 py-1 text-xs font-semibold">Raw Spread</span>
          </div>

          {/* Base currencies */}
          <div className="mt-5">
            <div className="font-semibold text-black mb-2">Account Base Currency</div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {mt4.baseCurrencies.map((c) => (
                <li key={c.key}>
                  <button
                    type="button"
                    onClick={() => handleSelect(c.key)}
                    className={`w-full inline-flex items-center justify-between rounded-md px-3 py-2 text-sm ring-1 transition ${
                      selected === c.key
                        ? "bg-[rgba(var(--brand-rgb),0.12)] ring-[rgba(var(--brand-rgb),0.45)] text-[color:var(--brand)]"
                        : "bg-white/70 ring-black/10 text-black hover:ring-[rgba(var(--brand-rgb),0.35)]"
                    }`}
                    aria-label={`Jump to ${c.key} commission row`}
                  >
                    <span className="font-semibold">{c.key}</span>
                    <span className="ml-2 truncate text-black/60">{c.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Combined comparative table */}
          <div className="mt-6">
            {/* Dual header badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
              <span className="inline-flex items-center rounded-full bg-[color:var(--brand)] text-black px-4 py-1.5 text-xs font-semibold shadow-[0_0_0_1px_rgba(0,0,0,0.05)_inset]">Micro Lot Commission (0.01 Lot)</span>
              <span className="inline-flex items-center rounded-full bg-black/5 text-black px-4 py-1.5 text-xs font-semibold ring-1 ring-black/10">Standard Lot Commission (1 Lot)</span>
            </div>

            <div className="overflow-x-auto rounded-xl ring-1 ring-black/10 bg-white">
              <table className="min-w-full text-sm">
                <thead className="sticky top-0 z-10">
                  <tr>
                    <th className="bg-black/5 text-black px-4 py-3 text-left font-semibold w-[34%]">Account Base Currency</th>
                    <th className="bg-black/5 text-black px-4 py-3 text-left font-semibold">Micro Lot Commission <span className="text-black/60 font-normal">(0.01 Lot)</span></th>
                    <th className="bg-black/5 text-black px-4 py-3 text-left font-semibold">Standard Lot Commission <span className="text-black/60 font-normal">(1 Lot)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {mt4.baseCurrencies.map((c) => {
                    const micro = mt4.microLot.find((x) => x.currency === c.key);
                    const std = mt4.standardLot.find((x) => x.currency === c.key);
                    return (
                      <tr
                        key={c.key}
                        ref={(el) => {
                          rowRefs.current[c.key] = el;
                        }}
                        id={`commission-${c.key}`}
                        className={`align-top border-b border-black/5 last:border-b-0 odd:bg-white even:bg-black/[0.02] hover:bg-[rgba(var(--brand-rgb),0.04)] ${
                          selected === c.key ? "ring-1 ring-[rgba(var(--brand-rgb),0.45)]" : ""
                        }`}
                      >
                        <td className="px-4 py-3">
                          <div className="font-semibold text-black">{c.key} Account</div>
                          <div className="text-black/70">{c.name}</div>
                        </td>
                        <td className="px-4 py-3">
                          <Copyable label={micro?.perSide || "—"} note={micro?.roundTurn ? `${micro.roundTurn} round turn` : "—"} />
                        </td>
                        <td className="px-4 py-3">
                          <Copyable label={std?.perSide || "—"} note={std?.roundTurn ? `${std.roundTurn} round turn` : "—"} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-black/60">Note: values shown are indicative and may vary by instrument and region.</p>
          </div>
        </div>

        {/* cTrader / TradingView Section */}
        <div className="rounded-2xl glass-brand ring-1 ring-black/10 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black">{ctrader.title}</h3>
              <div className="mt-2 h-1 w-16 bg-gradient-to-r from-brand to-accent rounded-full" />
              <p className="mt-2 text-black/70 max-w-3xl">{ctrader.description}</p>
            </div>
            <span className="hidden sm:inline-flex items-center rounded-full bg-[rgba(var(--brand-rgb),0.12)] text-[color:var(--brand)] px-3 py-1 text-xs font-semibold">Per 100k USD</span>
          </div>

          <div className="mt-4 overflow-x-auto rounded-xl ring-1 ring-black/10 bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-black/5 text-black/70 sticky top-0 z-10">
                <tr>
                  {ctrader.example.headers.map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ctrader.example.rows.map((row, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-black/[0.02] hover:bg-[rgba(var(--brand-rgb),0.04)]">
                    {row.map((cell, cidx) => (
                      <td key={cidx} className="px-4 py-3">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
