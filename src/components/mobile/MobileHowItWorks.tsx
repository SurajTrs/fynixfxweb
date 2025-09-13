import Image from "next/image";

export default function MobileHowItWorks() {
  const steps = [
    { n: 1, title: "Download the app", desc: "Install Fynixfx on Android or iOS and sign in." },
    { n: 2, title: "Fund or try demo", desc: "Start with a free demo or deposit to go live." },
    { n: 3, title: "Trade instantly", desc: "Analyze markets, place orders and manage positions." },
  ];
  return (
    <section className="py-14 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="relative">
            <div className="absolute -left-6 -top-6 w-40 h-40 rounded-full bg-[radial-gradient(closest-side,rgba(var(--brand-rgb),0.25),transparent)] blur-xl"/>
            <Image src="/mobile2.png" alt="App phone" width={420} height={820} className="relative z-10 w-full h-auto drop-shadow-2xl" />
          </div>
        </div>
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">How it works</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Start in three simple steps</h2>
          <ol className="mt-6 space-y-4">
            {steps.map((s) => (
              <li key={s.n} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center h-8 w-8 rounded-full bg-gradient-to-r from-brand to-accent text-black text-sm font-semibold ring-1 ring-brand-soft">{s.n}</span>
                  <h3 className="font-semibold text-black">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm text-neutral-700">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
