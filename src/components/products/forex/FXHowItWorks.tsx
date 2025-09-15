import Image from "next/image";

export default function FXHowItWorks() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image src="/mobile1.png" alt="Platforms preview" fill className="object-contain" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight text-black">How does Forex Trading work?</h3>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            Forex prices quote the value of one currency versus another. Traders speculate on whether one currency
            will strengthen or weaken relative to the other. Positions can be long or short, and can be held for
            seconds, hours or longer depending on your approach.
          </p>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            With Fynixfx, you can trade majors, minors and selected exotics with transparent costs and responsive
            execution across desktop, web and mobile platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
