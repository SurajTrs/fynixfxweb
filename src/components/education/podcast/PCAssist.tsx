import Link from "next/link";

export default function PCAssist() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-extrabold tracking-tight text-black">Assisting you through market changes.</h2>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700 max-w-2xl">
            This series explores current market themes and focuses on the decisions investors face. Through these
            episodes, we examine the shifting landscape and what it might mean for traders with informed choices as
            their north star.
          </p>
        </div>
        <div className="md:col-span-1">
          <Link href="/education/podcast" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-6 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Learn more</Link>
        </div>
      </div>
    </section>
  );
}
