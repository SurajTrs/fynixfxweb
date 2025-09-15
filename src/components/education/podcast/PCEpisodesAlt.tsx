"use client";

import Image from "next/image";
import Link from "next/link";
import { EPISODES } from "@/data/podcast";

export default function PCEpisodesAlt() {
  const [first, ...rest] = EPISODES;
  const side = rest.slice(0, 6);
  return (
    <section id="episodes" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Discover Episodes</h2>
          <Link href="#" className="text-sm font-semibold text-[color:var(--brand)] hover:underline">View all episodes</Link>
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {/* Feature card */}
          <Link href={first.url} target="_blank" className="group relative overflow-hidden rounded-3xl ring-1 ring-neutral-200 bg-white lg:col-span-2">
            <div className="relative h-72 w-full">
              <Image src={first.cover} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute left-0 bottom-0 p-6">
                <div className="text-xs uppercase tracking-widest text-white/80">{first.published}</div>
                <h3 className="mt-1 text-2xl font-extrabold text-white group-hover:underline decoration-dotted">{first.title}</h3>
                <div className="mt-2 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20">{first.duration}</div>
              </div>
            </div>
          </Link>

          {/* Side list */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {side.map((e) => (
              <Link key={e.id} href={e.url} target="_blank" className="group rounded-2xl ring-1 ring-neutral-200 bg-white overflow-hidden hover:shadow-md transition">
                <div className="relative h-28 w-full">
                  <Image src={e.cover} alt="" fill className="object-cover" />
                  <div className="absolute right-2 bottom-2 rounded bg-black/70 text-white text-xs px-2 py-0.5">{e.duration}</div>
                </div>
                <div className="p-4">
                  <div className="text-xs uppercase tracking-widest text-neutral-600">{e.published}</div>
                  <h4 className="mt-1 font-semibold text-black group-hover:underline decoration-dotted">{e.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
