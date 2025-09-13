"use client";

import { useState } from "react";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "How do I submit a withdrawal?",
    a: "Log in to your Secure Client Area and submit a withdrawal request. This ensures faster processing and security.",
  },
  {
    q: "How long do card withdrawals take?",
    a: "Typically 3–5 business days after processing, and in rare cases up to 10 business days depending on the issuing bank.",
  },
  {
    q: "Why do I need to withdraw back to the original source?",
    a: "For compliance and anti‑fraud measures, where possible funds must return to the same payment source that funded the account.",
  },
  {
    q: "Are there fees for withdrawals?",
    a: "We don’t charge extra fees, but intermediary banks may. Check with your bank for any applicable charges.",
  },
];

export default function WithdrawFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-12 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">FAQ</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Frequently Asked Questions</h2>
        <div className="mt-6 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          {faqs.map((item, idx) => (
            <div key={item.q}>
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 ring-offset-white"
                aria-expanded={open === idx}
              >
                <span className="font-semibold text-black">{item.q}</span>
                <span className="text-neutral-500 text-xl leading-none">{open === idx ? "–" : "+"}</span>
              </button>
              {open === idx && (
                <div className="px-5 pb-5 text-neutral-700 text-[15px] leading-7">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
