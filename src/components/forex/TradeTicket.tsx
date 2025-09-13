"use client";

import { useState } from "react";
import { FiAlertCircle, FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";

export type OrderPayload = {
  symbol: string;
  side: "buy" | "sell";
  type: "market" | "limit" | "stop" | "stop_limit";
  quantity: number; // lots or units depending on broker mapping
  price?: number; // for limit/stop
  stopPrice?: number; // for stop-limit
  takeProfit?: number;
  stopLoss?: number;
  timeInForce?: "GTC" | "DAY" | "IOC" | "FOK";
  slippagePips?: number;
  trailingStopPips?: number;
  reduceOnly?: boolean;
  comment?: string;
};

export default function TradeTicket() {
  const symbols = [
    "OANDA:EURUSD",
    "OANDA:GBPUSD",
    "OANDA:USDJPY",
    "OANDA:USDCHF",
    "OANDA:AUDUSD",
    "OANDA:USDCAD",
  ];

  const [symbol, setSymbol] = useState(symbols[0]);
  const [side, setSide] = useState<OrderPayload["side"]>("buy");
  const [type, setType] = useState<OrderPayload["type"]>("market");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState<number | "">("");
  const [stopPrice, setStopPrice] = useState<number | "">("");
  const [tp, setTp] = useState<number | "">("");
  const [sl, setSl] = useState<number | "">("");
  const [tif, setTif] = useState<OrderPayload["timeInForce"]>("GTC");
  const [slippage, setSlippage] = useState<number | "">("");
  const [trailing, setTrailing] = useState<number | "">("");
  const [reduceOnly, setReduceOnly] = useState(false);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!symbol) return setMessage("Please select a symbol.");
    if (!quantity || quantity <= 0) return setMessage("Enter a valid quantity.");
    if ((type === "limit" || type === "stop") && (price === "" || Number(price) <= 0))
      return setMessage("Enter a valid price for limit/stop order.");
    if (type === "stop_limit" && ((price === "" || Number(price) <= 0) || (stopPrice === "" || Number(stopPrice) <= 0)))
      return setMessage("Provide both stop and limit prices for stop-limit order.");

    const payload: OrderPayload = {
      symbol,
      side,
      type,
      quantity: Number(quantity),
      ...(type === "limit" || type === "stop" ? { price: Number(price) } : {}),
      ...(type === "stop_limit" ? { price: Number(price), stopPrice: Number(stopPrice) } : {}),
      ...(tp !== "" ? { takeProfit: Number(tp) } : {}),
      ...(sl !== "" ? { stopLoss: Number(sl) } : {}),
      ...(tif ? { timeInForce: tif } : {}),
      ...(slippage !== "" ? { slippagePips: Number(slippage) } : {}),
      ...(trailing !== "" ? { trailingStopPips: Number(trailing) } : {}),
      ...(reduceOnly ? { reduceOnly } : {}),
      ...(comment ? { comment } : {}),
    };

    try {
      setSubmitting(true);
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Order failed");
      setMessage(`Order accepted: ${data.id}`);
    } catch (err: any) {
      setMessage(err.message || "Order could not be placed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold brand-gradient-text">Trade ticket</h3>
          <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="text-sm">
              <span className="text-neutral-700">Symbol</span>
              <select
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 ring-offset-white"
              >
                {symbols.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>

            <label className="text-sm">
              <span className="text-neutral-700">Order Type</span>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as OrderPayload["type"]) }
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 ring-offset-white"
              >
                <option value="market">Market</option>
                <option value="limit">Limit</option>
                <option value="stop">Stop</option>
                <option value="stop_limit">Stop-Limit</option>
              </select>
            </label>

            <label className="text-sm">
              <span className="text-neutral-700">Quantity</span>
              <input
                type="number"
                min={0}
                step="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 ring-offset-white"
                placeholder="1"
              />
            </label>

            {(type === "limit" || type === "stop" || type === "stop_limit") && (
              <label className="text-sm">
                <span className="text-neutral-700">Price</span>
                <input
                  type="number"
                  min={0}
                  step="0.00001"
                  value={price}
                  onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 ring-offset-white"
                  placeholder="1.08500"
                />
              </label>
            )}

            {type === "stop_limit" && (
              <label className="text-sm">
                <span className="text-neutral-700">Stop Price</span>
                <input
                  type="number"
                  min={0}
                  step="0.00001"
                  value={stopPrice}
                  onChange={(e) => setStopPrice(e.target.value === "" ? "" : Number(e.target.value))}
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 ring-offset-white"
                  placeholder="1.08450"
                />
              </label>
            )}

            <label className="text-sm">
              <span className="text-neutral-700">Take Profit (price)</span>
              <input
                type="number"
                min={0}
                step="0.00001"
                value={tp}
                onChange={(e) => setTp(e.target.value === "" ? "" : Number(e.target.value))}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 ring-offset-white"
                placeholder="1.10000"
              />
            </label>

            <label className="text-sm">
              <span className="text-neutral-700">Stop Loss (price)</span>
              <input
                type="number"
                min={0}
                step="0.00001"
                value={sl}
                onChange={(e) => setSl(e.target.value === "" ? "" : Number(e.target.value))}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 ring-offset-white"
                placeholder="1.07000"
              />
            </label>

            <label className="text-sm">
              <span className="text-neutral-700">Time in Force</span>
              <select
                value={tif}
                onChange={(e) => setTif(e.target.value as OrderPayload["timeInForce"]) }
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 ring-offset-white"
              >
                <option value="GTC">GTC</option>
                <option value="DAY">DAY</option>
                <option value="IOC">IOC</option>
                <option value="FOK">FOK</option>
              </select>
            </label>

            <label className="text-sm">
              <span className="text-neutral-700">Max Slippage (pips)</span>
              <input
                type="number"
                min={0}
                step="0.1"
                value={slippage}
                onChange={(e) => setSlippage(e.target.value === "" ? "" : Number(e.target.value))}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 ring-offset-white"
                placeholder="0.5"
              />
            </label>

            <label className="text-sm">
              <span className="text-neutral-700">Trailing Stop (pips)</span>
              <input
                type="number"
                min={0}
                step="0.1"
                value={trailing}
                onChange={(e) => setTrailing(e.target.value === "" ? "" : Number(e.target.value))}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 ring-offset-white"
                placeholder="5"
              />
            </label>

            <label className="flex items-center gap-2 text-sm pt-2">
              <input type="checkbox" checked={reduceOnly} onChange={(e) => setReduceOnly(e.target.checked)} className="h-4 w-4 rounded border-neutral-300 text-[color:var(--brand)] focus-visible:ring-[color:var(--brand)]" />
              <span className="text-neutral-700">Reduce-only</span>
            </label>

            <label className="text-sm sm:col-span-2">
              <span className="text-neutral-700">Comment</span>
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 ring-offset-white"
                placeholder="Optional note for this order"
              />
            </label>

            <div className="sm:col-span-2 flex items-center gap-3 pt-2">
              <button
                type="submit"
                onClick={() => setSide("buy")}
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-5 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand)] ring-offset-white"
              >
                <FiArrowUpCircle /> Buy
              </button>
              <button
                type="submit"
                onClick={() => setSide("sell")}
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-5 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand)] ring-offset-white"
              >
                <FiArrowDownCircle /> Sell
              </button>
              {message && (
                <p className="text-sm text-neutral-700 flex items-center gap-2"><FiAlertCircle /> {message}</p>
              )}
            </div>

            <p className="sm:col-span-2 text-xs text-neutral-500 pt-1">
              Note: This ticket posts to <code>/api/orders</code>. Wire it to your broker (e.g., OANDA, cTrader, MT5 bridge) on the server to execute real trades.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
