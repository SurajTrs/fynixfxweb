export default function WithdrawNotes() {
  const notes = [
    {
      title: "Cut-off time",
      desc: "Withdrawal requests cut off time is 12:00 AEST/AEDT. Requests submitted after this time are processed the following business day.",
    },
    {
      title: "Fees",
      desc: "We do not charge additional fees. Your bank may apply intermediary or beneficiary fees.",
    },
    {
      title: "Trading usage",
      desc: "Funds are intended for trading. A processing fee may apply if deposits were not utilised for trading.",
    },
    {
      title: "International wires",
      desc: "International Bank Wire Transfers may take up to 14 days and incur additional fees.",
    },
    {
      title: "Cards",
      desc: "Card withdrawals are free. Once processed, funds typically arrive within 3–5 business days (up to 10 in rare cases).",
    },
  ];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Important Notes</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((n) => (
            <div key={n.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-semibold text-black">{n.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
