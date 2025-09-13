import React from "react";
import Image from "next/image";

export default function AutomatedEdge() {
  return (
    <section className="relative py-0">
      {/* Edge-to-edge black band */}
      <div className="relative w-full bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 sm:gap-10 items-center py-12 sm:py-16">
          {/* Left: Copy + CTAs */}
          <div className="text-white">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our strength is in the numbers</h2>
            <p className="mt-5 text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
              Fynixfx is one of the largest Forex CFD providers in the world by trading volume.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-brand text-black font-semibold px-6 py-3 border border-brand shadow-[0_0_20px_rgba(var(--brand-rgb),0.35)] hover:brightness-110 transition"
              >
                Start Trading
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-brand text-white font-semibold px-6 py-3 hover:bg-brand/10 transition"
              >
                Try a Free Demo
              </a>
            </div>
          </div>

          {/* Right: Visual with stats */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl bg-[#0b0f12] ring-1 ring-white/5">
              {/* Backdrop visual */}
              <div className="absolute inset-0">
                <Image src="/powerfultrading.png" alt="Trading backdrop" fill priority className="object-cover opacity-25" />
              </div>
              {/* Gradient wash */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent" />

              {/* Stats */}
              <div className="relative px-8 sm:px-12 py-16 sm:py-20 text-white text-center">
                <div className="space-y-10">
                  <div>
                    <div className="text-4xl sm:text-5xl font-extrabold">500,000</div>
                    <div className="mt-2 text-xs tracking-[0.35em] text-brand uppercase">Trades per day</div>
                  </div>
                  <div>
                    <div className="text-4xl sm:text-5xl font-extrabold">Equinix NY4</div>
                    <div className="mt-2 text-xs tracking-[0.35em] text-brand uppercase">Trading hub at New York</div>
                  </div>
                  <div>
                    <div className="text-4xl sm:text-5xl font-extrabold">60%</div>
                    <div className="mt-2 text-xs tracking-[0.35em] text-brand uppercase">Algo trades (% of all trades)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
