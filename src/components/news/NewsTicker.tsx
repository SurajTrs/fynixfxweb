"use client";

import { useEffect, useRef } from "react";

export default function NewsTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    // Clean previous widgets on re-mount
    containerRef.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "NASDAQ:NDX", title: "Nasdaq 100" },
        { proName: "OANDA:US30USD", title: "Dow 30" },
        { proName: "FX:EURUSD", title: "EUR/USD" },
        { proName: "FX:GBPUSD", title: "GBP/USD" },
        { proName: "FX:USDJPY", title: "USD/JPY" },
        { proName: "TVC:USOIL", title: "WTI Oil" },
        { proName: "TVC:GOLD", title: "Gold" },
        { proName: "CRYPTO:BTCUSD", title: "Bitcoin" },
      ],
      showSymbolLogo: true,
      colorTheme: "light",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en",
    });
    containerRef.current.appendChild(script);
  }, []);

  return (
    <section className="py-6 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="tradingview-widget-container rounded-xl overflow-hidden ring-1 ring-neutral-200 bg-white"
          ref={containerRef}
        >
          <div className="tradingview-widget-container__widget" />
        </div>
      </div>
    </section>
  );
}
