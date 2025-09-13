import Image from "next/image";

const logos = [
  "visa","mastercard","amex","paypal","neteller","skrill","unionpay","bpay","poli","rapidpay","klarna"
];

export default function MobilePayments() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Payments</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Multiple methods of payments with instant deposits</h2>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">Use globally trusted payment options with fast processing and no deposit fees.</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {logos.map(l => (
              <Image key={l} src={`/icons/payments/${l}.svg`} alt={l} width={60} height={24} className="h-6 w-auto rounded ring-1 ring-neutral-200 bg-white" />
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <Image src="/mobile1.png" alt="Payments" width={520} height={520} className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
