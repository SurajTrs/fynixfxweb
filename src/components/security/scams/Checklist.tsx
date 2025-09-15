export default function Checklist() {
  const items = [
    "Verify the website URL and SSL (padlock). Only log in via our official domain.",
    "Never share passwords, 2FA codes or seed phrases with anyone.",
    "Do not send funds to personal wallets or bank accounts.",
    "Confirm payment methods from the Client Area before funding.",
    "Enable two‑factor authentication (2FA) on your email and trading accounts.",
    "Update platforms and devices; avoid installing unknown apps or extensions.",
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">Verification checklist</h2>
        <ul className="mt-6 space-y-3">
          {items.map((t, i) => (
            <li key={i} className="flex gap-3 rounded-xl bg-white ring-1 ring-neutral-200 p-4">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--brand)]" />
              <span className="text-sm leading-7 text-neutral-800">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
