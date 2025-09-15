export default function FXExamples() {
  const items = [
    {
      title: "Scalping example",
      body:
        "Take advantage of short‑term price movements around sessions and news releases using tight spreads and low latency execution.",
    },
    {
      title: "Swing example",
      body:
        "Express a multi‑day macro view on majors with clear risk parameters and transparent overnight costs.",
    },
    {
      title: "Hedging example",
      body:
        "Offset currency exposure in a portfolio by opening an opposing position to manage FX risk.",
    },
  ];

  return (
    <section className="py-10 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black text-center">Forex Trading Examples</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-white ring-1 ring-neutral-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-black">{i.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 leading-7">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
