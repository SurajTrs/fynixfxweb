export default function AUValues() {
  const values = [
    {
      title: "Mission Statement",
      points: [
        "Deliver transparent pricing and consistent execution.",
        "Provide dependable connectivity across platforms and devices.",
        "Support traders with professional tools and responsive service.",
      ],
    },
    {
      title: "Core Values",
      points: [
        "Integrity in pricing and communication",
        "Reliability through resilient infrastructure",
        "Client‑first thinking in everything we build",
      ],
    },
    {
      title: "Regulatory Compliance",
      points: [
        "Operate within applicable regulatory frameworks",
        "Maintain robust onboarding and ongoing monitoring",
        "Publish clear disclosures and risk statements",
      ],
    },
    {
      title: "Audit & Confidentiality",
      points: [
        "Periodic reviews of systems and processes",
        "Strict controls for data security and privacy",
        "Segregation of key environments and permissions",
      ],
    },
  ];

  return (
    <section className="py-10 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((group) => (
            <div key={group.title} className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-black">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-800">
                {group.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
