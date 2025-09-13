"use client";

import MarketCard from "./MarketCard";
import { MARKETS } from "@/data/markets";

export default function MarketsGrid() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:gap-5">
          {MARKETS.map((m) => (
            <MarketCard key={m.key} market={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
