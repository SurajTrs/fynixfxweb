import Image from "next/image";

export default function PCHost() {
  return (
    <section className="py-12 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1">
          <div className="relative h-40 w-40 overflow-hidden rounded-full ring-2 ring-white/20">
            <Image src="/commonbg.png" alt="Host portrait" fill className="object-cover" />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="text-[color:var(--brand)] text-xs uppercase tracking-widest">Meet Our Host</div>
          <h3 className="mt-2 text-2xl font-extrabold tracking-tight">Pamela Ambler</h3>
          <p className="mt-2 text-white/80 text-sm">
            Pamela is a markets anchor focused on insights & strategy. In each episode, she distills the day’s key
            developments into actionable themes, interviewing guests from across the industry.
          </p>
        </div>
      </div>
    </section>
  );
}
