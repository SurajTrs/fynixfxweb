import Image from "next/image";
import Link from "next/link";

export default function MT4Overview() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Trade on MT4</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Trade on the award‑winning MT4 platform</h2>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">Experience institutional pricing, low latency execution and deep liquidity on a platform trusted by millions of traders worldwide.</p>
          <div className="mt-5 flex gap-3">
            <Link href="#download" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-6 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Download MT4</Link>
            <Link href="/accounts/live" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-6 py-3 hover:bg-neutral-50 transition">Open Live</Link>
          </div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <Image src="/mt4-overview.png" alt="MT4 Screens" width={640} height={360} className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
