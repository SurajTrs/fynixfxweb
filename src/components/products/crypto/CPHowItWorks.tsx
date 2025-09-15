import Image from "next/image";

export default function CPHowItWorks() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image src="/mobile1.png" alt="Crypto platforms" fill className="object-contain" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight text-black">How does crypto CFDs trading work?</h3>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            Crypto CFDs let you speculate on digital asset price movements without managing wallets or custody.
            Take long or short positions with flexible sizing, while keeping costs transparent.
          </p>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">
            With Fynixfx, trade popular instruments with prudent risk controls and responsive execution across
            desktop, web and mobile platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
