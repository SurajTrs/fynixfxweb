"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { TUTORIALS, type Tutorial } from "@/data/tutorials";

export default function TutGrid() {
  const [filter, setFilter] = useState<Tutorial["category"] | "All">("All");

  const items = useMemo(
    () => (filter === "All" ? TUTORIALS : TUTORIALS.filter((t) => t.category === filter)),
    [filter]
  );

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {["All", "Platform Setup", "Order Types", "Risk Management", "Strategy Basics", "Tools"].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c as any)}
              className={`inline-flex items-center rounded-full px-3 py-1.5 ring-1 transition ${
                filter === c
                  ? "bg-[color:var(--brand)] text-black ring-[color:var(--brand)]"
                  : "text-neutral-700 ring-neutral-200 hover:bg-neutral-50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t) => (
            <a key={t.id} href={t.url} target="_blank" className="group rounded-2xl ring-1 ring-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-40 w-full">
                <Image src={t.thumbnail} alt="" fill className="object-cover" />
                <div className="absolute bottom-2 right-2 rounded bg-black/70 text-white text-xs px-2 py-0.5">{t.duration}</div>
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-widest text-neutral-600">{t.category}</div>
                <h3 className="mt-1 font-semibold text-black group-hover:underline decoration-dotted">{t.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
