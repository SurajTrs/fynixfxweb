export default function CFDAdvIntro() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Why trade CFDs?</h2>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            CFDs provide the flexibility to go long or short on a wide range of markets without owning the
            underlying asset. With transparent costs and professional platforms, they enable efficient expression
            of directional, relative value or hedging views.
          </p>
          <p className="mt-2 text-[15px] leading-7 text-neutral-700">
            Fynixfx supports multiple asset classes and account types so you can choose the structure that best
            fits your approach while keeping pricing simple and execution consistent.
          </p>
        </div>
        <aside className="space-y-4">
          <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
            <div className="text-sm font-semibold text-black">Transparent costs</div>
            <p className="mt-2 text-sm text-neutral-700">Raw and Standard account options with clear pricing.</p>
            <a href="/pricing/spreads" className="mt-4 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-4 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">View Spreads</a>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
            <div className="text-sm font-semibold text-black">Contact Us</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li><a className="underline decoration-dotted" href="/help">Help Centre</a></li>
              <li><a className="underline decoration-dotted" href="mailto:support@fynixfx.com">Email Us</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
