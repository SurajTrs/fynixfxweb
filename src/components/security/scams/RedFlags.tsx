export default function RedFlags() {
  const items = [
    {
      title: "Urgency & threats",
      desc: "Messages claiming your account will be closed unless you act immediately.",
    },
    {
      title: "Unverified payment requests",
      desc: "Asked to send funds to personal wallets/banks or unknown links.",
    },
    {
      title: "Too‑good‑to‑be‑true returns",
      desc: "'Guaranteed' profits, secret algorithms, or managed accounts without disclosures.",
    },
    {
      title: "Unusual install/remote access",
      desc: "Requests to install remote desktop apps or configuration profiles.",
    },
  ];
  return (
    <section className="py-10 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Red flags to watch</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6">
              <div className="text-lg font-semibold text-black">{i.title}</div>
              <div className="mt-2 text-sm text-neutral-700 leading-7">{i.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
