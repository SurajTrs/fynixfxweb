import Link from "next/link";

export default function LiveCTA() {
  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-[url('/getstaredbg.png')] bg-cover bg-center opacity-5" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Open account</span>
        </div>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-black">
          Start trading with a regulated provider
        </h2>
        <div id="open" className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/open-account"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand)] ring-offset-white transition"
          >
            Open Live Account
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-7 py-3.5 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-300 ring-offset-white transition"
          >
            Try a free demo
          </Link>
        </div>
      </div>
    </section>
  );
}
