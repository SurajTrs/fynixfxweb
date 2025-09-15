"use client";

import { useMemo, useState } from "react";
import { HELP_GROUPS, type FAQGroup } from "@/data/help";

export default function HelpFAQGroup({ query, activeKey }: { query: string; activeKey?: string }) {
  const [open, setOpen] = useState<string | null>(null);

  const groups = useMemo<FAQGroup[]>(() => {
    const base = activeKey ? HELP_GROUPS.filter((g) => g.key === activeKey) : HELP_GROUPS;
    if (!query) return base;
    const q = query.toLowerCase();
    return base
      .map((g) => ({
        ...g,
        items: g.items.filter((i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q)),
      }))
      .filter((g) => g.items.length > 0);
  }, [query, activeKey]);

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {groups.map((g) => (
          <div key={g.key} className="rounded-2xl bg-white ring-1 ring-neutral-200 p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg font-bold text-black">{g.title}</h2>
            <div className="mt-4 divide-y divide-neutral-200">
              {g.items.map((i, idx) => {
                const id = `${g.key}-${idx}`;
                const isOpen = open === id;
                return (
                  <details key={id} open={isOpen} onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open ? id : null)} className="group py-3">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-black">
                      <span>{i.q}</span>
                      <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-neutral-300 text-neutral-600 group-open:bg-[color:var(--brand)]/10 group-open:text-[color:var(--brand)]">{isOpen ? "−" : "+"}</span>
                    </summary>
                    <div className="mt-2 pl-1 text-sm text-neutral-700 leading-7">{i.a}</div>
                  </details>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
