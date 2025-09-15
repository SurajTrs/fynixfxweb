export default function MTFeatures() {
  const features = [
    {
      title: "Familiar charts and tools",
      body:
        "Analyse markets with the classic MetaTrader interface. Use drawing tools, indicators and multiple timeframes directly in your browser.",
    },
    {
      title: "Order management",
      body:
        "Place market, limit and stop orders with clear risk controls. Manage positions and pending orders seamlessly without installs.",
    },
    {
      title: "Secure & synced",
      body:
        "Login securely via your Fynixfx account. Layouts, symbols and settings follow your profile for a consistent experience across devices.",
    },
  ];

  return (
    <section className="py-10 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 sm:p-8">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black text-center">Why use WebTrader</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl ring-1 ring-neutral-200 p-5">
                <h3 className="text-lg font-semibold text-black">{f.title}</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-700">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
