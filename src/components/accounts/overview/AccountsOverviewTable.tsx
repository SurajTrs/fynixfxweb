"use client";

import { FiCheck } from "react-icons/fi";

export default function AccountsOverviewTable() {
  const features: { label: string; raw: string | boolean; raw2: string | boolean; standard: string | boolean }[] = [
    { label: "Trading Platform", raw: "cTrader", raw2: "MT5", standard: "cTrader / MT5" },
    { label: "Commission (per lot)", raw: "$3.0", raw2: "$3.5", standard: "$0" },
    { label: "Spread (from)", raw: "0.0", raw2: "0.0", standard: "0.8" },
    { label: "Minimum lot size", raw: "0.01", raw2: "0.01", standard: "0.01" },
    { label: "Max leverage", raw: "1:500", raw2: "1:500", standard: "1:500" },
    { label: "Stop Out level", raw: "50%", raw2: "50%", standard: "50%" },
    { label: "Hedging allowed", raw: true, raw2: true, standard: true },
    { label: "Scalping allowed", raw: true, raw2: true, standard: true },
    { label: "EAs / cBots", raw: true, raw2: true, standard: true },
  ];

  const renderVal = (v: string | boolean) =>
    typeof v === "boolean" ? (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand)]/10 text-[color:var(--brand)]">
        <FiCheck />
      </span>
    ) : (
      v
    );

  return (
    <section className="py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-neutral-50 text-neutral-700">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Key features</th>
                <th className="text-left px-4 py-3 font-semibold">Raw Spread (cTrader)</th>
                <th className="text-left px-4 py-3 font-semibold">Raw Spread (MT5)</th>
                <th className="text-left px-4 py-3 font-semibold">Standard</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.label} className="border-t border-neutral-200">
                  <td className="px-4 py-3 text-neutral-800 font-medium">{f.label}</td>
                  <td className="px-4 py-3 text-neutral-800">{renderVal(f.raw)}</td>
                  <td className="px-4 py-3 text-neutral-800">{renderVal(f.raw2)}</td>
                  <td className="px-4 py-3 text-neutral-800">{renderVal(f.standard)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
