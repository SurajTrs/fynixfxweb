"use client";

import { useEffect, useRef } from "react";

export default function NewsFeed() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      isTransparent: false,
      displayMode: "regular",
      width: "100%",
      height: 600,
      colorTheme: "light",
      locale: "en",
      // You can limit providers or importance if desired
    });
    ref.current.appendChild(script);
  }, []);

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl ring-1 ring-neutral-200 bg-white overflow-hidden">
          <div className="tradingview-widget-container" ref={ref}>
            <div className="tradingview-widget-container__widget" />
          </div>
        </div>
      </div>
    </section>
  );
}
