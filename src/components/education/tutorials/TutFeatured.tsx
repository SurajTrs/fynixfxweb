"use client";

import Image from "next/image";
import Link from "next/link";
import { TUTORIALS } from "@/data/tutorials";

export default function TutFeatured() {
  const featured = TUTORIALS.slice(0, 3);
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 sm:p-8">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black text-center">Featured tutorials</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {featured.map((t) => (
              <Link key={t.id} href={t.url} target="_blank" className="group rounded-xl ring-1 ring-neutral-200 overflow-hidden hover:shadow-md transition">
                <div className="relative h-40 w-full">
                  <Image src={t.thumbnail} alt="" fill className="object-cover" />
                  <div className="absolute bottom-2 right-2 rounded bg-black/70 text-white text-xs px-2 py-0.5">{t.duration}</div>
                </div>
                <div className="p-4">
                  <div className="text-xs uppercase tracking-widest text-neutral-600">{t.category}</div>
                  <h3 className="mt-1 font-semibold text-black group-hover:underline decoration-dotted">{t.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
