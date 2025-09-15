"use client";

import Image from "next/image";
import Link from "next/link";
import { EPISODES } from "@/data/podcast";
import { FiClock, FiPlay } from "react-icons/fi";

export default function PCHero() {
  const latest = EPISODES[0];
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 bg-black text-white rounded-b-[3rem]">
      <div aria-hidden className="absolute inset-0 -z-30 bg-center bg-cover" style={{ backgroundImage: "url(/commonbg.png)" }} />
      <div aria-hidden className="absolute inset-0 -z-20 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-xs text-white/70">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Podcast</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight">Listen to the latest episodes.</h1>

        <div className="mt-8 rounded-[1.5rem] p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/0">
          <div className="rounded-[1.45rem] bg-white/5 backdrop-blur-xl ring-1 ring-white/10 p-5">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                <Image src={latest.cover} alt="Episode cover" fill className="object-cover" />
                <Link href={latest.url} target="_blank" className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-black shadow-xl">
                    <FiPlay className="h-10 w-10" />
                  </span>
                </Link>
                <div className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs ring-1 ring-white/15">
                  <FiClock /> <span>{latest.duration ?? ""}</span>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Latest episode</span>
                  {latest.guest && (
                    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Guest: {latest.guest}</span>
                  )}
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">{latest.title}</h2>
                <p className="mt-3 text-sm text-white/85">{latest.summary}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href={latest.url} target="_blank" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-6 py-3 shadow-[0_0_30px_rgba(var(--brand-rgb),0.45)] hover:brightness-110 transition">Listen now</Link>
                  <Link href="#episodes" className="inline-flex items-center justify-center rounded-md border border-white/30 text-white font-semibold px-6 py-3 hover:bg-white/10 transition">Browse episodes</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
