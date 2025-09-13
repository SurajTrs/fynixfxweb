import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

export default function RTPCards() {
  const bullets = [
    "Raw spreads with ultra‑low commission",
    "Deep institutional liquidity",
    "Low latency and reliable connectivity",
    "Optimised for high‑volume strategies",
  ];
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Pricing</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="grid md:grid-cols-5 gap-6 items-stretch">
          <div className="md:col-span-3 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Competitive Pricing</h2>
            <p className="mt-3 text-[15px] leading-7 text-neutral-700">
              Receive raw spreads with ultra‑low commissions for a tighter all‑in
              trading cost. Built to support high‑frequency and high‑volume traders.
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-neutral-800">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm hover:shadow-md transition-shadow flex">
            <Image src="/globalmarket.png" alt="pricing" width={640} height={420} className="w-full h-auto rounded-xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
