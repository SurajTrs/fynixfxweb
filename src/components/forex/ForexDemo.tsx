import { FiCheckCircle } from "react-icons/fi";

export default function ForexDemo() {
  return (
    <section className="py-6 md:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-black">Demo Account Facts</h3>
              <ul className="mt-4 space-y-3 text-sm text-neutral-800">
                <li className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> Real-time pricing</li>
                <li className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> All platforms available</li>
                <li className="flex items-start gap-2"><FiCheckCircle className="mt-[2px] text-[color:var(--brand)]" /> Risk-free environment</li>
              </ul>
              <a
                href="/demo"
                className="mt-5 inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-5 py-2.5 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-300 ring-offset-white transition"
              >
                Open Demo
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Try risk‑free</span>
                <div className="h-px flex-1 bg-neutral-200" />
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight text-black">Forex Demo Accounts</h2>
              <p className="mt-3 text-[15px] leading-7 text-neutral-700">
                Practice trading in a simulated market with virtual funds. Learn
                how our platforms work, test strategies and get comfortable with
                order types before you go live.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
