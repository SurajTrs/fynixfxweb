"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function RTPHowToJoin() {
  const steps = [
    {
      k: 1,
      title: "Open or sign in",
      desc: "Open a live account or log in to your Client Area.",
    },
    {
      k: 2,
      title: "Verify & qualify",
      desc: "Verify your profile and meet the minimum trading criteria.",
    },
    {
      k: 3,
      title: "Apply & earn",
      desc: "Apply for Raw Trader Plus and start receiving rebates.",
    },
  ];

  return (
    <section id="join" className="py-14 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3 justify-center">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">Enrollment</span>
        </div>
        <h3 className="text-center text-3xl font-extrabold tracking-tight text-black">
          How do I sign for <span className="brand-gradient-text">Raw Trader Plus</span>?
        </h3>

        <div className="mt-8 grid sm:grid-cols-3 gap-5">
          {steps.map((s, idx) => (
            <div
              key={s.k}
              className={`group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 animate-fade-up ${idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : ""}`}
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-r from-brand to-accent text-black font-semibold grid place-items-center ring-1 ring-brand-soft">
                  {s.k}
                </div>
                <div className="text-sm font-medium text-neutral-600 uppercase tracking-wide">Step {s.k}</div>
              </div>
              <h4 className="mt-3 text-lg font-semibold text-black">{s.title}</h4>
              <p className="mt-1 text-[15px] leading-7 text-neutral-700">{s.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <FiArrowRight />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <Link
            href="/open-account"
            className="inline-flex items-center gap-2 justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand)] ring-offset-white transition"
          >
            Join Now <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
