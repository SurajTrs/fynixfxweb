import Image from "next/image";
import Link from "next/link";

export default function WTOverview() {
  return (
    <section className="py-14 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">Trade on WebTrader</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Trade from any browser — no downloads</h2>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">Launch instantly, stay always up to date and trade securely from anywhere. WebTrader brings a lightweight, reliable terminal to your browser.</p>
          <div className="mt-5 flex gap-3">
            <Link href="#start" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-6 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Start now</Link>
            <Link href="/accounts/demo" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-6 py-3 hover:bg-neutral-50 transition">Try demo</Link>
          </div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <Image src="/webtrader-overview.png" alt="WebTrader" width={640} height={360} className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
