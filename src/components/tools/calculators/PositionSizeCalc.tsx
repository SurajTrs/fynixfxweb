"use client";

import { useMemo, useState } from "react";

// Position size calculator
// Inputs: account balance, risk %, stop (pips), pip value per lot (or instrument tick value)
// Output: lot size
export default function PositionSizeCalc() {
  const [balance, setBalance] = useState(10000);
  const [riskPct, setRiskPct] = useState(1);
  const [stopPips, setStopPips] = useState(20);
  const [pipValuePerLot, setPipValuePerLot] = useState(10); // $10 per pip per 1.0 lot on most FX majors

  const result = useMemo(() => {
    const riskAmt = (balance * riskPct) / 100;
    const lot = stopPips > 0 && pipValuePerLot > 0 ? riskAmt / (stopPips * pipValuePerLot) : 0;
    return Math.max(0, Number(lot.toFixed(2)));
  }, [balance, riskPct, stopPips, pipValuePerLot]);

  return (
    <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-black">Position Size</h3>
      <p className="mt-1 text-sm text-neutral-700">Estimate lot size based on account risk and stop distance.</p>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <label className="block text-sm">
          <span className="text-neutral-700">Account balance</span>
          <input type="number" value={balance} onChange={(e) => setBalance(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
        </label>
        <label className="block text-sm">
          <span className="text-neutral-700">Risk (%)</span>
          <input type="number" value={riskPct} onChange={(e) => setRiskPct(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
        </label>
        <label className="block text-sm">
          <span className="text-neutral-700">Stop (pips)</span>
          <input type="number" value={stopPips} onChange={(e) => setStopPips(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
        </label>
        <label className="block text-sm">
          <span className="text-neutral-700">Pip value per 1.0 lot ($)</span>
          <input type="number" value={pipValuePerLot} onChange={(e) => setPipValuePerLot(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
        </label>
      </div>
      <div className="mt-4 rounded-md bg-neutral-50 p-4 text-sm text-neutral-800 ring-1 ring-neutral-200">
        Estimated lot size: <span className="font-semibold">{result} lots</span>
      </div>
    </div>
  );
}
