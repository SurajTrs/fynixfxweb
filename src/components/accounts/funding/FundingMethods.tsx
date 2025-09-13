"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

type Method = {
  name: string;
  currencies: string[];
  time: string;
  cta?: string;
  category: "Instant" | "Banking" | "Wallets";
  logos: string[]; // file names under /public/icons/payments
};

const methods: Method[] = [
  { name: "Credit and Debit Cards", logos: ["visa","mastercard","amex"], currencies: ["AUD","USD","JPY","EUR","NZD","SGD","GBP","CAD"], time: "INSTANT", category: "Instant" },
  { name: "PayPal", logos: ["paypal"], currencies: ["AUD","USD","JPY","EUR","NZD","SGD","GBP","CAD","HKD","CHF"], time: "INSTANT", category: "Wallets" },
  { name: "Neteller", logos: ["neteller"], currencies: ["USD","AUD","GBP","EUR","CAD","SGD","JPY"], time: "INSTANT", category: "Wallets" },
  { name: "Skrill", logos: ["skrill"], currencies: ["AUD","USD","JPY","EUR","SGD","GBP"], time: "INSTANT", category: "Wallets" },
  { name: "UnionPay", logos: ["unionpay"], currencies: ["RMB"], time: "INSTANT", category: "Instant" },
  { name: "Wire Transfer", logos: ["bank"], currencies: ["AUD","USD","JPY","EUR","NZD","SGD","GBP","CAD","CHF"], time: "2-5 business days", category: "Banking" },
  { name: "Bpay", logos: ["bpay"], currencies: ["AUD"], time: "12 - 48 hr", category: "Banking" },
  { name: "Broker to Broker", logos: ["bank"], currencies: ["AUD","USD","JPY","EUR","NZD","SGD","GBP","CAD","CHF","HKD"], time: "2-5 business days", category: "Banking" },
  { name: "POLI", logos: ["poli"], currencies: ["AUD"], time: "INSTANT", category: "Instant" },
  { name: "Thai Internet Banking", logos: ["thai"], currencies: ["USD"], time: "15 - 30 min", category: "Banking" },
  { name: "Rapidpay", logos: ["rapidpay"], currencies: ["EUR","GBP"], time: "Up to 2 business days", category: "Banking" },
  { name: "Klarna", logos: ["klarna"], currencies: ["EUR","GBP"], time: "Up to 2 business days", category: "Banking" },
  { name: "Vietnamese Internet Banking", logos: ["vn"], currencies: ["USD"], time: "INSTANT", category: "Banking" },
];

export default function FundingMethods() {
  const [tab, setTab] = useState<Method["category"] | "All">("All");
  const [currencyQuery, setCurrencyQuery] = useState("");
  const tabs: (Method["category"] | "All")[] = ["All", "Instant", "Banking", "Wallets"];

  const items = useMemo(() => {
    const base = tab === "All" ? methods : methods.filter((m) => m.category === tab);
    const q = currencyQuery.trim().toUpperCase();
    if (!q) return base;
    return base.filter((m) => m.currencies.some((c) => c.includes(q)));
  }, [tab, currencyQuery]);

  return (
    <section id="methods" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Funding options</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm transition ${tab === t ? "border-[color:var(--brand)] text-[color:var(--brand)] bg-[color:var(--brand)]/10" : "border-neutral-200 text-neutral-700 bg-white hover:bg-neutral-50"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <input
            value={currencyQuery}
            onChange={(e) => setCurrencyQuery(e.target.value)}
            placeholder="Filter by currency (e.g., USD, EUR)"
            className="w-full sm:w-80 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-black shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 ring-offset-white"
          />
          <span className="text-sm text-neutral-600">Showing {items.length} method{items.length !== 1 ? "s" : ""}</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((m, idx) => (
            <div
              key={m.name}
              className={`group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-[color:var(--brand)] focus-within:ring-offset-2 ring-offset-white animate-fade-up ${idx%3===1?"delay-100":idx%3===2?"delay-200":""}`}
            >
              <div className="-mx-5 -mt-5 mb-4 h-1 rounded-t-2xl bg-gradient-to-r from-brand to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-black">{m.name}</h3>
                  <div className="mt-2 flex items-center gap-2">
                    {m.logos.map((logo) => (
                      <Image key={logo} src={`/icons/payments/${logo}.svg`} alt={logo} width={56} height={20} className="h-5 w-auto rounded-[4px] ring-1 ring-neutral-200 bg-white" />
                    ))}
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] font-medium text-neutral-700">{m.time}</span>
              </div>
              <div className="mt-3 text-xs text-neutral-600 uppercase tracking-wide">Accepted Currencies:</div>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {m.currencies.map((c) => (
                  <span key={c} className="inline-flex items-center rounded-md bg-neutral-100 text-neutral-800 text-xs px-2 py-1 ring-1 ring-neutral-200">{c}</span>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/open-account" className="inline-flex items-center gap-2 justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-4 py-2 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand)] ring-offset-white transition">
                  Deposit Now <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
