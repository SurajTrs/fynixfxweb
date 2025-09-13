import Image from "next/image";

export default function StrengthNumbers() {
  return (
    <section className="relative py-0">
      <div className="w-full bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-6 sm:gap-10 py-12 sm:py-16">
          {/* Left: Dark visual with stats (uses theme brand for captions) */}
          <div className="relative overflow-hidden rounded-xl bg-[#0b0f12] ring-1 ring-white/5">
            <div className="absolute inset-0">
              <Image src="/powerfultrading.png" alt="Trading visual" fill priority className="object-cover opacity-25" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />

            <div className="relative px-8 sm:px-12 py-16 sm:py-20 text-white">
              <div className="space-y-10">
                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold">US$1.64 Trillion</div>
                  <div className="mt-2 text-xs tracking-[0.35em] text-brand uppercase">Trading Volume - April 2024</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold">200,000+</div>
                  <div className="mt-2 text-xs tracking-[0.35em] text-brand uppercase">Active Clients Worldwide</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold">Excellent 4.8/5</div>
                  <div className="mt-2 text-xs tracking-[0.35em] text-brand uppercase">Rating on Trustpilot</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Heading + paragraph (no buttons per reference) */}
          <div className="text-white">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Give your automated trading system the edge</h2>
            <p className="mt-5 text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
              Fynixfx is one of the top choices for automated traders. Our order matching engine located in the New York
              Equinix NY4 data centre processes over 500,000 trades per day with over two thirds of all trades coming
              from automated trading systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
