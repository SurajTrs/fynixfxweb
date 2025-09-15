"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function FXTradingView() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetId = "tv-forex-widget";

  useEffect(() => {
    // Load TradingView script once
    if (typeof window === "undefined") return;
    const existingScript = document.getElementById("tv-script");
    const createWidget = () => {
      // @ts-ignore
      if (window.TradingView && (window as any).TradingView.widget) {
        // @ts-ignore
        new (window as any).TradingView.widget({
          autosize: true,
          symbol: "OANDA:EURUSD",
          interval: "60",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#ffffff",
          enable_publishing: false,
          allow_symbol_change: true,
          hide_side_toolbar: false,
          calendar: true,
          details: false,
          studies: [],
          container_id: widgetId,
        });
      }
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "tv-script";
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = createWidget;
      document.body.appendChild(script);
    } else {
      createWidget();
    }
  }, []);

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-700 px-3 py-1 text-xs ring-1 ring-neutral-200">Trade Forex on TradingView</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2">
              <div className="rounded-xl ring-1 ring-neutral-200 overflow-hidden" style={{ minHeight: 420 }}>
                <div id={widgetId} ref={containerRef} style={{ width: "100%", height: 480 }} />
              </div>
            </div>
            <aside>
              <h3 className="text-lg font-extrabold text-black">Trade EURUSD, GBPUSD and more</h3>
              <p className="mt-2 text-sm leading-7 text-neutral-700">
                Analyse and trade directly from advanced TradingView charts. Access tight pricing, deep liquidity
                and rapid execution through your Fynixfx account.
              </p>
              <div className="mt-4 space-y-2">
                <Link href="/open-account" className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-5 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Open Live Account</Link>
                <Link href="/accounts/demo" className="inline-flex w-full items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-5 py-3 hover:bg-neutral-50 transition">Try Free Demo</Link>
                <Link href="/platforms/tradingview" className="inline-flex w-full items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-5 py-3 hover:bg-neutral-50 transition">Learn more about TradingView</Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
