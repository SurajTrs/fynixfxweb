import Image from "next/image";

export default function MobileSupport() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">24/7 Support</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">We’re here around the clock</h2>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">Get help via live chat, email and phone — whenever markets are open. Access a global knowledge base, how‑to guides and platform tips.</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <Image src="/mobile1.png" alt="Support" width={520} height={520} className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
