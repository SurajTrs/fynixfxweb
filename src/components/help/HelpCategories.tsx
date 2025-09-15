"use client";

import { HELP_CATEGORIES } from "@/data/help";

export default function HelpCategories({ onSelect }: { onSelect: (key: string) => void }) {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2">
          {HELP_CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => onSelect(c.key)}
              className="inline-flex items-center rounded-full px-3 py-1.5 ring-1 ring-neutral-200 text-sm text-neutral-800 hover:bg-neutral-50"
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
