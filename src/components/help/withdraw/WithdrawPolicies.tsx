export default function WithdrawPolicies() {
  const items = [
    {
      title: "Secure Client Area",
      desc: "Submit withdrawal requests from your Secure Client Area for faster processing.",
      href: "/help/secure-client-area",
    },
    {
      title: "Same source policy",
      desc: "Payments must be returned to the original source where possible (e.g., PayPal / Neteller / Skrill).",
      href: "/help/same-source-policy",
    },
    {
      title: "Expired / new cards",
      desc: "Upload your new card. If the number differs, provide a letter from your bank confirming replacement.",
      href: "/help/expired-new-cards",
    },
    {
      title: "Lost / stolen / cancelled cards",
      desc: "Provide a letter from the issuer confirming the old card is no longer valid.",
      href: "/help/lost-stolen-cards",
    },
    {
      title: "Activate new cards",
      desc: "If a newly uploaded card hasn't been used for deposits, make a small deposit to activate withdrawals.",
      href: "/help/activate-new-cards",
    },
    {
      title: "Documentation",
      desc: "We may request supporting documents (receipts or statements) before releasing funds to a new card.",
      href: "/help/withdrawals-documentation",
    },
    {
      title: "First withdrawals",
      desc: "For first wire withdrawals or Vietnamese IB withdrawals, provide a bank statement for your registered bank.",
      href: "/help/first-withdrawals",
    },
    {
      title: "Thai Internet Banking",
      desc: "For Thai IB withdrawals to a Thai bank, upload a clear photo or color scan of your bank book.",
      href: "/help/thai-internet-banking",
    },
    {
      title: "Third‑party payments",
      desc: "We do not process payments to third parties. Joint accounts/cards accepted if you're a named party.",
      href: "/help/third-party-payments",
    },
  ];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Policies</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((i) => (
            <a key={i.title} href={i.href} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand)] ring-offset-white">
              <h3 className="font-semibold text-black">{i.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{i.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
