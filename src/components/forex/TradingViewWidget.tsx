"use client";

import { useEffect, useRef } from "react";

// Lightweight wrapper for TradingView Advanced Real-Time Chart widget
// Docs: https://www.tradingview.com/widget/advanced-chart/
export default function TradingViewWidget({
  symbol = "OANDA:EURUSD",
  interval = "60",
  theme = "light",
  studies = ["MACD@tv-basicstudies", "RSI@tv-basicstudies"],
}: {
  symbol?: string;
  interval?: string; // "1", "5", "15", "60", "240", "D", etc.
  theme?: "light" | "dark";
  studies?: string[];
}) {
  const container = useRef<HTMLDivElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;

    const init = () => {
      if (!container.current || !container.current.isConnected) {
        // Defer until the container is actually in the DOM
        setTimeout(init, 50);
        return;
      }
      initializedRef.current = true;

      // Ensure clean container before inserting
      container.current.innerHTML = "";

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol,
        interval,
        timezone: "Etc/UTC",
        theme,
        style: "1",
        locale: "en",
        enable_publishing: false,
        hide_top_toolbar: false,
        withdateranges: true,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: true,
        studies,
        support_host: "https://www.tradingview.com",
      });

      const mountPoint = document.createElement("div");
      mountPoint.className = "tradingview-widget-container__widget";

      const attribution = document.createElement("div");
      attribution.className = "tradingview-widget-copyright";
      attribution.innerHTML =
        '<a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">'+
        '<span class="blue-text">Track all markets on TradingView</span></a>';

      const widgetContainer = document.createElement("div");
      widgetContainer.className = "tradingview-widget-container";
      widgetContainer.appendChild(mountPoint);
      widgetContainer.appendChild(attribution);

      container.current.appendChild(widgetContainer);
      container.current.appendChild(script);
    };

    // Defer to next frame then a short timeout to avoid Fast Refresh races
    requestAnimationFrame(() => setTimeout(init, 0));

    return () => {
      if (container.current) container.current.innerHTML = "";
    };
    // Intentionally run only once on mount to avoid multiple script inits during Fast Refresh
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Live market</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Real‑time Forex chart</h2>
        <p className="mt-2 text-neutral-700 text-[15px]">Analyze price action with professional tools powered by TradingView. Change symbols, intervals and add studies.</p>
        <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-2 md:p-3 shadow-sm overflow-hidden">
          <div ref={container} style={{ height: 560 }} />
        </div>
      </div>
    </section>
  );
}
