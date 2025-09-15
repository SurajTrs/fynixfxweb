export default function CMExamples() {
  const items = [
    {
      title: "Energy example",
      body:
        "Express a directional view on Oil around inventory data or macro catalysts, with flexible position sizing and clear risk parameters.",
    },
    {
      title: "Precious metals example",
      body:
        "Trade Gold during rate decisions or inflation prints, using tight risk management and transparent overnight costs.",
    },
    {
      title: "Softs example",
      body:
        "Speculate on agricultural price moves as supply and demand dynamics shift across seasons and regions.",
    },
  ];

  return (
    <section className="py-10 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black text-center">Commodity trading example</h2>
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
