export default function AUIntro() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Who we are</h2>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            Fynixfx is a multi‑asset trading provider offering access to global markets via professional platforms.
            Our focus is transparent pricing, consistent execution and dependable connectivity across devices so you
            can concentrate on strategy and risk.
          </p>
          <p className="mt-2 text-[15px] leading-7 text-neutral-700">
            We combine deep market experience with an engineering mindset. From liquidity aggregation to routing
            and platform integrations, our stack is built to be robust under varied market conditions.
          </p>

          <h3 className="mt-8 text-xl font-bold text-black">When were we founded?</h3>
          <p className="mt-2 text-[15px] leading-7 text-neutral-700">
            Our team has operated in markets for over a decade, building tools and infrastructure for both
            discretionary and systematic traders. Fynixfx brings that capability together in a client‑first
            brokerage.
          </p>

          <h3 className="mt-8 text-xl font-bold text-black">Why was Fynixfx founded?</h3>
          <p className="mt-2 text-[15px] leading-7 text-neutral-700">
            To provide an environment where pricing and execution quality are clear, tools are modern, and support
            is responsive. We believe this combination enables better decision‑making and sustainable performance.
          </p>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
            <div className="text-sm font-semibold text-black">Refer and earn with a trusted CFD provider</div>
            <p className="mt-2 text-sm text-neutral-700">Invite friends and earn rewards when they start trading.</p>
            <a href="/referrals" className="mt-4 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-4 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">Learn more</a>
          </div>

          <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
            <div className="text-sm font-semibold text-black">Contact Us</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>Email: support@fynixfx.com</li>
              <li>Live chat: 24/5</li>
              <li>Phone: +1 (000) 000‑0000</li>
            </ul>
            <a href="/company/contact" className="mt-4 inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-4 py-2.5 hover:bg-neutral-50 transition">Get in touch</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
