import Image from "next/image";

export default function INHowItWorks() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image src="/mobile1.png" alt="Indices platforms" fill className="object-contain" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight text-black">How does indices trading work?</h3>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            Indices CFDs track groups of stocks, allowing you to speculate on the direction of entire markets.
            Go long or short with flexible sizing to express macro views or hedge portfolio exposure.
          </p>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            With Fynixfx, trade leading benchmarks with competitive pricing, responsive execution and
            professional platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
