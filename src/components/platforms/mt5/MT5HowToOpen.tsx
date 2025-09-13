"use client";

import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function MT5HowToOpen() {
  const steps = [
    { n: 1, title: "Open an account", desc: "Create a live or demo account in minutes." },
    { n: 2, title: "Verify & fund", desc: "Verify your profile and add funds or start with demo." },
    { n: 3, title: "Download MT5", desc: "Install MT5 on desktop or mobile and log in securely." },
  ];
  return (
    <section id="trade" className="py-14 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4 flex items-center gap-3 justify-center">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">Get started</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">How to open an MT5 account with Fynixfx</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-5 text-left">
          {steps.map((s, idx) => (
            <div key={s.n} className={`group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 animate-fade-up ${idx?`delay-${idx}00`:''}`}>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-r from-brand to-accent text-black font-semibold grid place-items-center ring-1 ring-brand-soft">{s.n}</div>
                <div className="text-sm font-medium text-neutral-600 uppercase tracking-wide">Step {s.n}</div>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-black">{s.title}</h3>
              <p className="mt-1 text-[15px] leading-7 text-neutral-700">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/open-account" className="inline-flex items-center gap-2 justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand)] ring-offset-white transition">Open Live Account <FiArrowRight /></Link>
          <Link href="/accounts/demo" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-7 py-3.5 hover:bg-neutral-50 transition">Try a free demo</Link>
        </div>
      </div>
    </section>
  );
}
