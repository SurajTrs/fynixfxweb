"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type Slide = {
  id: number;
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  cta: string;
  video?: string; // optional background video in /public
  badgeLabel?: string; // optional badge label displayed above heading
  highlightSuffix?: string; // optional suffix in titleBottom to render with accent color
  titleStyle?: "gradient" | "accent" | "brand"; // how to color titleBottom when not using highlightSuffix
  bgFrom: string; // tailwind color class token for gradient start
  bgVia: string; // mid
  bgTo: string; // end
};

const SLIDES: Slide[] = [
  {
    id: 0,
    eyebrow: "Client | Partners | Blog",
    titleTop: "Experience Raw Spread Trading with a",
    titleBottom: "Regulated Forex & CFD Broker",
    description:
      "Trade Indices, Shares, Commodities, and Crypto with lightning-fast execution and deep liquidity across markets.",
    cta: "Start Trading",
    video: "/videobg1.mp4",
    titleStyle: "accent",
    bgFrom: "from-[#001e2c]",
    bgVia: "via-[#041923]",
    bgTo: "to-black",
  },
  {
    id: 1,
    eyebrow: "Learn • Improve • Trade",
    badgeLabel: "Fynixfx Academy",
    titleTop: "Master Your",
    titleBottom: "Edge with Fynixfx",
    description:
      "Bite‑size tutorials, platform guides and market insights to level up your process.",
    cta: "Explore Academy",
    video: "/videobg2.mp4",
    titleStyle: "accent",
    bgFrom: "from-[#001a24]",
    bgVia: "via-[#03141c]",
    bgTo: "to-black",
  },
  {
    id: 2,
    eyebrow: "",
    badgeLabel: "TradingView",
    titleTop: "",
    titleBottom: "Chart, Connect, and Trade",
    description:
      "Powerful charts, social ideas, and seamless execution — all in one place.",
    cta: "Join Now",
    video: "/videobg3.mp4",
    titleStyle: "accent",
    bgFrom: "from-[#001620]",
    bgVia: "via-[#021116]",
    bgTo: "to-black",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = SLIDES.length;

  // Autoplay every ~1.5s (faster)
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 1500);
    return () => clearInterval(id);
  }, [total, paused]);

  const goTo = useCallback((i: number) => setIndex((i + total) % total), [total]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const active = useMemo(() => SLIDES[index], [index]);

  return (
    <section
      className="relative z-20 isolate overflow-hidden min-h-screen pt-24 sm:pt-28 pb-0 flex items-center"
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current;
        if (start != null) {
          const dx = e.changedTouches[0].clientX - start;
          if (Math.abs(dx) > 40) {
            if (dx > 0) {
              prev();
            } else {
              next();
            }
          }
        }
        touchStartX.current = null;
        setPaused(false);
      }}
      aria-roledescription="carousel"
      aria-live="polite"
    >
      {/* Background video per slide (if provided). We key the video by index so it restarts on slide change. */}
      {active.video ? (
        <video
          key={index}
          className="absolute inset-0 -z-30 h-full w-full object-cover"
          src={active.video}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
        />
      ) : null}

      {/* Dark black gradient wash over the video */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/95 via-black/70 to-black/95 pointer-events-none" />

      {/* Stronger overlay for text contrast (video still visible beneath) */}
      <div className="absolute inset-0 -z-10 overlay-stronger" />

      {/* Neon diagonal streaks */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="neon-streak neon-streak-1 neon-animate" />
        <div className="neon-streak neon-streak-2 neon-animate" />
        <div className="neon-streak neon-streak-3 neon-animate" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {active.badgeLabel ? (
          <div className="mb-4 flex items-center justify-center gap-3 animate-fade-up">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E90FF] text-white font-bold text-lg shadow-lg">TV</span>
            <span className="text-white/90 font-semibold text-base sm:text-lg">{active.badgeLabel}</span>
          </div>
        ) : (
          <p className="text-brand/80 text-xs uppercase tracking-[0.3em] mb-6 text-shadow-sm">{active.eyebrow}</p>
        )}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white text-shadow-lg">
          {active.titleTop && (
            <>
              {active.titleTop}
              <br className="hidden sm:block" />
            </>
          )}
          {active.highlightSuffix && active.titleBottom.endsWith(active.highlightSuffix) ? (
            <>
              <span className="brand-gradient-text"> {active.titleBottom.slice(0, -active.highlightSuffix.length)}</span>
              <span className="text-accent">{active.highlightSuffix}</span>
            </>
          ) : (
            <span className={`${
              active.titleStyle === "accent"
                ? "text-accent"
                : active.titleStyle === "brand"
                ? "text-brand"
                : "brand-gradient-text"
            }`}> {active.titleBottom}</span>
          )}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/90 text-shadow">
          {active.description}
        </p>

        <div className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-black/30 backdrop-blur-sm ring-1 ring-white/10 px-4 py-3 animate-fade-up">
          <Link
            href="/start-trading?mode=live"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-6 py-3 shadow-[0_0_30px_rgba(var(--brand-rgb),0.6)] hover:brightness-110 transition-colors"
          >
            {active.cta}
          </Link>
          <Link
            href="/start-trading?mode=demo"
            className="inline-flex items-center justify-center rounded-md border border-accent text-accent font-semibold px-6 py-3 hover:bg-accent hover:text-black transition-colors"
          >
            Try a Free Demo
          </Link>
        </div>

        {/* Feature pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1.5 ring-1 ring-white/15 backdrop-blur-sm">
            <span className="text-brand">✓</span> Low spreads
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1.5 ring-1 ring-white/15 backdrop-blur-sm">
            <span className="text-brand">✓</span> Deep liquidity
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1.5 ring-1 ring-white/15 backdrop-blur-sm">
            <span className="text-brand">✓</span> 24/7 support
          </span>
        </div>

        {/* Dots only */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-10 bg-brand shadow-[0_0_12px_rgba(var(--brand-rgb),0.7)]" : "w-4 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
