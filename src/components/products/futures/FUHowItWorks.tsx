import Image from "next/image";

export default function FUHowItWorks() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image src="/mobile1.png" alt="Futures platforms" fill className="object-contain" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight text-black">How does futures CFDs trading work?</h3>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            Futures CFDs map to underlying futures themes, allowing you to speculate on direction while using
            CFD flexibility for sizing and capital efficiency. Go long or short with transparent costs and
            responsive execution.
          </p>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            With Fynixfx, trade futures themes across asset classes with professional platforms and robust
            connectivity engineered for consistency.
          </p>
        </div>
      </div>
    </section>
  );
}
