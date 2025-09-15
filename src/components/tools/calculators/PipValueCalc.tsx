"use client";

import { useMemo, useState } from "react";

// Pip value calculator
// Inputs: lot size, pair pip factor (e.g., 0.0001), quote currency pip per unit conversion
// Simplified for majors where 1 pip on 1 lot ~ $10. Allow override.
export default function PipValueCalc() {
  const [lot, setLot] = useState(1);
  const [pipPerLotUSD, setPipPerLotUSD] = useState(10); // default $10 per pip per 1 lot on majors

  const value = useMemo(() => Number((lot * pipPerLotUSD).toFixed(2)), [lot, pipPerLotUSD]);

  return (
    <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-black">Pip Value</h3>
      <p className="mt-1 text-sm text-neutral-700">Estimate pip value based on lot size and instrument pip value.</p>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <label className="block text-sm">
          <span className="text-neutral-700">Lot size</span>
          <input type="number" value={lot} step={0.01} onChange={(e) => setLot(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
        </label>
        <label className="block text-sm">
          <span className="text-neutral-700">Pip value per 1 lot ($)</span>
          <input type="number" value={pipPerLotUSD} onChange={(e) => setPipPerLotUSD(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
        </label>
      </div>
      <div className="mt-4 rounded-md bg-neutral-50 p-4 text-sm text-neutral-800 ring-1 ring-neutral-200">
        Pip value: <span className="font-semibold">${value} per pip</span>
      </div>
    </div>
  );
}
