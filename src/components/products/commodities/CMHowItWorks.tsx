import Image from "next/image";

export default function CMHowItWorks() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image src="/mobile2.png" alt="Platforms preview" fill className="object-contain" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight text-black">How do CFDs on Commodities trading work?</h3>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            Commodity CFDs enable you to speculate on the direction of commodity prices without owning the
            underlying asset. You can go long or short and use flexible position sizing to express views or
            hedge exposure in a broader portfolio.
          </p>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            With Fynixfx, trade energies, precious metals and selected soft commodities on professional platforms
            with transparent costs and responsive execution.
          </p>
        </div>
      </div>
    </section>
  );
}
