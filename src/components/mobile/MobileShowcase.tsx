import Image from "next/image";

export default function MobileShowcase() {
  return (
    <section className="py-14 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Trade global markets on the move with <span className="brand-gradient-text">Fynixfx</span></h2>
        <p className="mt-2 text-neutral-700">Experience fast execution, advanced charts and easy account management.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col items-center">
            <div className="w-full h-96 grid place-items-center">
              <Image src="/mobile1.png" alt="Android" width={520} height={520} className="h-96 w-auto object-contain" />
            </div>
            <div className="mt-4 text-sm font-medium text-neutral-800">Android</div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col items-center">
            <div className="w-full h-96 grid place-items-center">
              <Image src="/mobile2.png" alt="iOS" width={520} height={520} className="h-96 w-auto object-contain" />
            </div>
            <div className="mt-4 text-sm font-medium text-neutral-800">iOS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
