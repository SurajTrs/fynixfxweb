import Image from "next/image";

export default function STHowItWorks() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image src="/mobile2.png" alt="Stocks platforms" fill className="object-contain" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight text-black">How does stocks trading work?</h3>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            Stocks CFDs mirror the price of listed companies. You can go long or short to speculate on earnings,
            momentum or macro themes without owning the underlying shares.
          </p>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            With Fynixfx, trade popular US, EU and AU equities with transparent costs, flexible sizing and
            responsive execution across desktop, web and mobile platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
