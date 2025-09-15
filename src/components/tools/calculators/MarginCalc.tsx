"use client";

import { useMemo, useState } from "react";

// Margin calculator (simplified)
// required margin = (lot size * contract size * price) / leverage
// For FX, contract size for 1 lot is typically 100,000 units
export default function MarginCalc() {
  const [lot, setLot] = useState(1);
  const [price, setPrice] = useState(1.10); // e.g., EURUSD
  const [leverage, setLeverage] = useState(500); // 1:500 default
  const [contractSize, setContractSize] = useState(100000);

  const margin = useMemo(() => {
    const raw = (lot * contractSize * price) / (leverage || 1);
    return Math.max(0, Number(raw.toFixed(2)));
  }, [lot, price, leverage, contractSize]);

  return (
    <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-black">Required Margin</h3>
      <p className="mt-1 text-sm text-neutral-700">Estimate margin for a position given price and leverage.</p>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <label className="block text-sm">
          <span className="text-neutral-700">Lot size</span>
          <input type="number" value={lot} step={0.01} onChange={(e) => setLot(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
        </label>
        <label className="block text-sm">
          <span className="text-neutral-700">Instrument price</span>
          <input type="number" value={price} step={0.0001} onChange={(e) => setPrice(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
        </label>
        <label className="block text-sm">
          <span className="text-neutral-700">Leverage</span>
          <input type="number" value={leverage} onChange={(e) => setLeverage(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
        </label>
        <label className="block text-sm">
          <span className="text-neutral-700">Contract size (units)</span>
          <input type="number" value={contractSize} onChange={(e) => setContractSize(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
        </label>
      </div>
      <div className="mt-4 rounded-md bg-neutral-50 p-4 text-sm text-neutral-800 ring-1 ring-neutral-200">
        Required margin: <span className="font-semibold">${margin}</span>
      </div>
    </div>
  );
}
