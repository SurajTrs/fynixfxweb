"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Side = "BUY" | "SELL";

type Position = {
  id: string;
  symbol: string;
  side: Side;
  lots: number;
  contractSize: number; // units per 1 lot
  entry: number; // entry price
  tp?: number;
  sl?: number;
};

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export default function TradePanel() {
  const [symbol, setSymbol] = useState<string>("FX:EURUSD");
  const [side, setSide] = useState<Side>("BUY");
  const [lots, setLots] = useState<number>(0.10);
  const [price, setPrice] = useState<number>(1.1000);
  const [tp, setTp] = useState<number | undefined>();
  const [sl, setSl] = useState<number | undefined>();
  const [contractSize, setContractSize] = useState<number>(100000); // 1 lot = 100k for FX
  const [leverage, setLeverage] = useState<number>(100);
  const [balance, setBalance] = useState<number>(10000);
  const [positions, setPositions] = useState<Position[]>([]);
  const [mark, setMark] = useState<number>(price);

  // Listen to global symbol changes from InstrumentSwitcher
  useEffect(() => {
    const onSymbol = (e: Event) => {
      const detail = (e as CustomEvent).detail as { tv: string };
      if (detail?.tv) {
        setSymbol(detail.tv);
        // shallow defaults by asset guess
        if (detail.tv.startsWith("FX:")) {
          setContractSize(100000);
          setPrice(1.1000);
          setMark(1.1000);
        } else if (detail.tv.includes("GOLD") || detail.tv.includes("XAU") || detail.tv.includes("USOIL") || detail.tv.includes(":SPX") || detail.tv.includes(":DJI") || detail.tv.includes(":DAX")) {
          setContractSize(100);
          setPrice(2000);
          setMark(2000);
        } else {
          setContractSize(1);
          setPrice(100);
          setMark(100);
        }
      }
    };
    window.addEventListener("fx:symbol", onSymbol as EventListener);
    return () => window.removeEventListener("fx:symbol", onSymbol as EventListener);
  }, []);

  const requiredMargin = useMemo(() => {
    const raw = (Math.abs(lots) * contractSize * price) / Math.max(1, leverage);
    return Number(raw.toFixed(2));
  }, [lots, contractSize, price, leverage]);

  const usedMargin = useMemo(() => {
    const sum = positions.reduce((acc, p) => acc + (Math.abs(p.lots) * p.contractSize * p.entry) / Math.max(1, leverage), 0);
    return Number(sum.toFixed(2));
  }, [positions, leverage]);

  const unrealized = useMemo(() => {
    const sum = positions.reduce((acc, p) => {
      const dir = p.side === "BUY" ? 1 : -1;
      const pnl = (mark - p.entry) * p.contractSize * p.lots * dir;
      return acc + pnl;
    }, 0);
    return Number(sum.toFixed(2));
  }, [positions, mark]);

  const equity = useMemo(() => Number((balance + unrealized).toFixed(2)), [balance, unrealized]);
  const freeMargin = useMemo(() => Number((equity - usedMargin).toFixed(2)), [equity, usedMargin]);

  function place(sideIn: Side) {
    if (!price || !lots || lots <= 0) return;
    const pos: Position = {
      id: uid(),
      symbol,
      side: sideIn,
      lots,
      contractSize,
      entry: price,
      tp,
      sl,
    };
    setPositions((arr) => [pos, ...arr]);
  }

  function close(id: string) {
    setPositions((arr) => arr.filter((p) => p.id !== id));
  }

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6 items-start">
        {/* Order ticket */}
        <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-5 shadow-sm">
          <div className="text-sm uppercase tracking-[0.2em] text-neutral-600 font-semibold">Order Ticket</div>
          <div className="mt-2 text-lg font-extrabold text-black">{symbol}</div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <label className="block">
              <div className="text-neutral-700">Lots</div>
              <input type="number" min={0} step={0.01} value={lots} onChange={(e) => setLots(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
            </label>
            <label className="block">
              <div className="text-neutral-700">Contract size</div>
              <input type="number" min={1} step={1} value={contractSize} onChange={(e) => setContractSize(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
            </label>
            <label className="block">
              <div className="text-neutral-700">Leverage</div>
              <input type="number" min={1} step={1} value={leverage} onChange={(e) => setLeverage(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
            </label>
            <label className="block">
              <div className="text-neutral-700">Balance</div>
              <input type="number" min={0} step={1} value={balance} onChange={(e) => setBalance(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
            </label>
            <label className="block">
              <div className="text-neutral-700">Order price</div>
              <input type="number" step={0.0001} value={price} onChange={(e) => setPrice(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
            </label>
            <label className="block">
              <div className="text-neutral-700">Mark price</div>
              <input type="number" step={0.0001} value={mark} onChange={(e) => setMark(Number(e.target.value))} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
            </label>
            <label className="block">
              <div className="text-neutral-700">Take profit (optional)</div>
              <input type="number" step={0.0001} value={tp ?? ""} onChange={(e) => setTp(e.target.value ? Number(e.target.value) : undefined)} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
            </label>
            <label className="block">
              <div className="text-neutral-700">Stop loss (optional)</div>
              <input type="number" step={0.0001} value={sl ?? ""} onChange={(e) => setSl(e.target.value ? Number(e.target.value) : undefined)} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
            </label>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-md bg-neutral-50 p-3 ring-1 ring-neutral-200">
              <div className="text-neutral-600">Req. Margin</div>
              <div className="font-semibold text-black">${requiredMargin}</div>
            </div>
            <div className="rounded-md bg-neutral-50 p-3 ring-1 ring-neutral-200">
              <div className="text-neutral-600">Used Margin</div>
              <div className="font-semibold text-black">${usedMargin}</div>
            </div>
            <div className="rounded-md bg-neutral-50 p-3 ring-1 ring-neutral-200">
              <div className="text-neutral-600">Free Margin</div>
              <div className="font-semibold text-black">${freeMargin}</div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button onClick={() => place("BUY")} className="inline-flex items-center justify-center rounded-md bg-emerald-500 text-white font-semibold px-4 py-2.5 hover:brightness-110">Buy</button>
            <button onClick={() => place("SELL")} className="inline-flex items-center justify-center rounded-md bg-red-500 text-white font-semibold px-4 py-2.5 hover:brightness-110">Sell</button>
          </div>
        </div>

        {/* Positions */}
        <div className="lg:col-span-2 rounded-2xl bg-white ring-1 ring-neutral-200 p-5 shadow-sm overflow-x-auto">
          <div className="flex items-end justify-between gap-3">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-neutral-600 font-semibold">Open Positions</div>
              <div className="text-neutral-600 text-sm">Equity ${equity} • Unrealized PnL ${unrealized}</div>
            </div>
          </div>
          <div className="mt-3 min-w-[720px]">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-neutral-600">
                  <th className="py-2">Symbol</th>
                  <th>Side</th>
                  <th>Lots</th>
                  <th>Entry</th>
                  <th>Mark</th>
                  <th>PnL</th>
                  <th>TP</th>
                  <th>SL</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {positions.map((p) => {
                  const dir = p.side === "BUY" ? 1 : -1;
                  const pnl = ((mark - p.entry) * p.contractSize * p.lots * dir).toFixed(2);
                  return (
                    <tr key={p.id} className="border-t border-neutral-200">
                      <td className="py-2 font-semibold text-black">{p.symbol}</td>
                      <td className={p.side === "BUY" ? "text-emerald-600" : "text-red-500"}>{p.side}</td>
                      <td>{p.lots}</td>
                      <td>{p.entry}</td>
                      <td>{mark}</td>
                      <td className={Number(pnl) >= 0 ? "text-emerald-600" : "text-red-500"}>${pnl}</td>
                      <td>{p.tp ?? "—"}</td>
                      <td>{p.sl ?? "—"}</td>
                      <td>
                        <button onClick={() => close(p.id)} className="inline-flex items-center rounded-md border border-neutral-300 px-3 py-1.5 hover:bg-neutral-50">Close</button>
                      </td>
                    </tr>
                  );
                })}
                {positions.length === 0 && (
                  <tr>
                    <td colSpan={9} className="py-8 text-center text-neutral-600">No open positions. Use the ticket to place your first trade.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
