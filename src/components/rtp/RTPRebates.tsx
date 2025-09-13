export default function RTPRebates() {
  return (
    <section id="benefits" className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Rebates</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all animate-fade-up">
          <h3 className="text-2xl font-extrabold tracking-tight text-black">Exclusive rebates for high‑volume traders</h3>
          <p className="mt-3 text-[15px] leading-7 text-neutral-700">Earn monthly cash rebates based on your trading volume. Rebates are applied automatically when you qualify.</p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-0">
              <thead>
                <tr className="text-neutral-600">
                  <th className="sticky left-0 bg-white py-3 pr-4 font-medium">Tier</th>
                  <th className="py-3 pr-4 font-medium">Monthly Volume</th>
                  <th className="py-3 font-medium">Rebate</th>
                </tr>
              </thead>
              <tbody>
                {[{
                  tier: "Tier 1", vol: "100 – 500 lots", rebate: "$1.50 / lot"
                }, { tier: "Tier 2", vol: "500 – 1,500 lots", rebate: "$2.50 / lot" }, { tier: "Tier 3", vol: "1,500+ lots", rebate: "$3.50 / lot" }].map((r, i) => (
                  <tr key={r.tier} className={`transition-colors ${i % 2 ? "bg-neutral-50" : "bg-white"} hover:bg-neutral-100`}>
                    <td className="py-3 pr-4 font-medium text-neutral-900 rounded-l-lg">{r.tier}</td>
                    <td className="py-3 pr-4 text-neutral-800">{r.vol}</td>
                    <td className="py-3 font-semibold text-[color:var(--brand)] rounded-r-lg">{r.rebate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
