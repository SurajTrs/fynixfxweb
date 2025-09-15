export default function ScamTypes() {
  const items = [
    {
      title: "Impersonation & Phishing",
      body:
        "Scammers clone websites, create fake social accounts and send emails or DMs pretending to be support or account managers to steal credentials or funds.",
    },
    {
      title: "Payment Redirection",
      body:
        "You are asked to transfer to a personal wallet/bank or to pay a 'release fee'. We will never ask you to fund outside official payment methods.",
    },
    {
      title: "Account‑management promises",
      body:
        "Unsolicited 'guaranteed returns' offers from so‑called analysts/influencers. We do not provide investment advice or guaranteed profit schemes.",
    },
    {
      title: "Malware & Remote Access",
      body:
        "Fraudsters try to install remote desktop software or mobile profiles. Never grant remote access or install unknown apps.",
    },
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Common scams</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((t) => (
            <div key={t.title} className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-black">{t.title}</h3>
              <p className="mt-2 text-sm leading-7 text-neutral-700">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
