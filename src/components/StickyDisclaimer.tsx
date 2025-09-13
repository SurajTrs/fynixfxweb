"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function StickyDisclaimer() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const lastY = useRef<number>(0);
  const ticking = useRef(false);

  useEffect(() => {
    // Persisted dismissal
    const d = typeof window !== "undefined" && window.localStorage.getItem("stickyDisclaimer:dismiss") === "1";
    setDismissed(!!d);

    lastY.current = window.scrollY;
    // Show on initial load if not dismissed
    if (!d) {
      setTimeout(() => setVisible(true), 250);
    }
    const onScroll: EventListener = () => {
      if (ticking.current) return;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - lastY.current;
        if (dy < -2) setVisible(true); // scrolling up (more sensitive)
        if (dy > 2) setVisible(false); // scrolling down
        lastY.current = y;
        ticking.current = false;
      });
      ticking.current = true;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Also show when the footer is in view
  useEffect(() => {
    if (typeof window === "undefined") return;
    const footer = document.querySelector("footer");
    if (!footer) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisible(true);
        }
      },
      { root: null, threshold: 0.01 }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  const close = () => {
    setVisible(false);
    setDismissed(true);
    try {
      window.localStorage.setItem("stickyDisclaimer:dismiss", "1");
    } catch {}
  };

  if (dismissed) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-50 transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      data-sticky
      aria-hidden={!visible}
    >
      <div className="pointer-events-auto mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-[max(env(safe-area-inset-bottom),1rem)]">
        <div className="rounded-t-2xl bg-white/90 text-black backdrop-blur-md ring-1 ring-black/10 shadow-[0_-6px_30px_rgba(0,0,0,0.15)] px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm text-gray-800 font-medium">Excellent</span>
            <div className="flex items-center gap-1" aria-label="Trustpilot rating">
              <span className="inline-block h-4 w-4 rounded-[2px] bg-brand" />
              <span className="inline-block h-4 w-4 rounded-[2px] bg-brand" />
              <span className="inline-block h-4 w-4 rounded-[2px] bg-brand" />
              <span className="inline-block h-4 w-4 rounded-[2px] bg-brand" />
              <span className="inline-block h-4 w-4 rounded-[2px] bg-brand/60" />
            </div>
            <span className="text-xs sm:text-sm text-gray-700">Trustpilot</span>
            <span className="hidden sm:inline-block h-5 w-px bg-black/10 mx-2" />
            <span className="text-xs sm:text-sm text-gray-700">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Link href="/open-account" className="flex-1 sm:flex-none rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-4 py-2 text-sm shadow-sm hover:brightness-110 transition">
              Open Account
            </Link>
            <Link href="/login" className="flex-1 sm:flex-none rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 transition">
              Client Login
            </Link>
            <button aria-label="Dismiss" onClick={close} className="ml-1 rounded-full border border-gray-300 text-gray-600 hover:text-black hover:bg-gray-100 transition h-8 w-8 grid place-items-center">
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* Reduced motion support */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          div[data-sticky] { transition: none !important; }
        }
      `}</style>
    </div>
  );
}
