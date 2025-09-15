"use client";

import { useState } from "react";
import type { Tutorial } from "@/data/tutorials";

const categories: Tutorial["category"][] = [
  "Platform Setup",
  "Order Types",
  "Risk Management",
  "Strategy Basics",
  "Tools",
];

export default function TutFilters({ onChange }: { onChange: (cat: Tutorial["category"] | "All") => void }) {
  const [active, setActive] = useState<Tutorial["category"] | "All">("All");

  const set = (c: Tutorial["category"] | "All") => {
    setActive(c);
    onChange(c);
  };

  return (
    <div className="sticky top-14 z-10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 py-3 text-sm">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              onClick={() => set(c as any)}
              className={`inline-flex items-center rounded-full px-3 py-1.5 ring-1 transition ${
                active === c
                  ? "bg-[color:var(--brand)] text-black ring-[color:var(--brand)]"
                  : "text-neutral-700 ring-neutral-200 hover:bg-neutral-50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
