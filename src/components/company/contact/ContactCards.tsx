export default function ContactCards() {
  const cards = [
    {
      title: "Call Us",
      lines: [
        "General: +000 000 0000",
        "Mon–Fri 24/5 (UTC)",
        "Support in multiple languages",
      ],
    },
    {
      title: "Email Enquiries",
      lines: [
        "support@fynixfx.com",
        "We aim to reply within 24 hours",
        "Priority for account-related issues",
      ],
    },
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-black">{c.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {c.lines.map((l) => (
                <li key={l}>• {l}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
