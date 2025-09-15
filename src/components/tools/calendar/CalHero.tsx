"use client";

export default function CalHero() {
  return (
    <section className="relative isolate overflow-hidden pt-24 md:pt-28 pb-14 md:pb-16 bg-black text-white rounded-b-3xl md:rounded-b-[3rem]">
      <div aria-hidden className="absolute inset-0 -z-30 bg-center bg-cover" style={{ backgroundImage: "url(/commonbg.png)" }} />
      <div aria-hidden className="absolute inset-0 -z-20 bg-black/80" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 35%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.0) 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-white/70 mb-3">Tools</div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Economic Calendar</h1>
        <p className="mt-4 max-w-3xl mx-auto text-white/85">Stay ahead of key event risk and plan your session with live updates.</p>
      </div>
    </section>
  );
}
