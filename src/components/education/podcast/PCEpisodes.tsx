import Image from "next/image";
import Link from "next/link";
import { EPISODES } from "@/data/podcast";

export default function PCEpisodes() {
  const items = EPISODES; // show all
  return (
    <section id="episodes" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Discover Episodes</h2>
          <Link href="#" className="text-sm font-semibold text-[color:var(--brand)] hover:underline">View all episodes</Link>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {items.map((e) => (
            <Link key={e.id} href={e.url} target="_blank" className="group rounded-2xl bg-white ring-1 ring-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-36 w-full">
                <Image src={e.cover} alt="" fill className="object-cover" />
                <div className="absolute bottom-2 right-2 rounded bg-black/70 text-white text-xs px-2 py-0.5">{e.duration}</div>
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-widest text-neutral-600">{e.published}</div>
                <h3 className="mt-1 font-semibold text-black group-hover:underline decoration-dotted">{e.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
