import Image from "next/image";

export default function BNHowItWorks() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image src="/mobile2.png" alt="Bonds platforms" fill className="object-contain" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight text-black">How does bonds trading work?</h3>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            Bonds CFDs mirror the price of government debt instruments. Prices move inversely to yields, which are
            driven by interest‑rate expectations and macro data. Trade long or short to express rate views or hedge
            duration risk in a portfolio.
          </p>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            With Fynixfx, access a curated selection of bonds CFDs with competitive pricing and responsive
            execution on professional platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
