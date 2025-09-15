"use client";

import { useEffect, useRef } from "react";

export default function StartNews() {
  const ref = useRef<HTMLDivElement>(null);
  const currentSymbol = useRef<string>("FX:EURUSD");
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    function mount(symbol: string) {
      if (!ref.current) return;
      ref.current.innerHTML = "";
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        feedMode: "symbol",
        symbol,
        isTransparent: false,
        displayMode: "regular",
        width: "100%",
        height: 500,
        colorTheme: "light",
        locale: "en",
      });
      ref.current.appendChild(script);
    }

    const defer = (cb: () => void) => {
      if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(cb, { timeout: 800 });
      } else {
        setTimeout(cb, 150);
      }
    };

    const node = ref.current;
    const onVisible = () => {
      if (isMounted.current) return;
      isMounted.current = true;
      defer(() => mount(currentSymbol.current));
    };

    if (node && "IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        const e = entries[0];
        if (e?.isIntersecting) {
          onVisible();
          io.disconnect();
        }
      }, { rootMargin: "100px" });
      io.observe(node);
      return () => io.disconnect();
    } else {
      onVisible();
    }

    const onSymbol = (e: Event) => {
      const detail = (e as CustomEvent).detail as { tv: string };
      if (detail?.tv && detail.tv !== currentSymbol.current) {
        currentSymbol.current = detail.tv;
        if (isMounted.current) {
          mount(detail.tv);
        }
      }
    };
    window.addEventListener("fx:symbol", onSymbol as EventListener);
    return () => window.removeEventListener("fx:symbol", onSymbol as EventListener);
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
