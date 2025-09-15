export default function SpreadsCommissionTables() {
  const mtRaw = [
    { symbol: "EURUSD", perLot: "$3.00", notes: "Raw Spread" },
    { symbol: "GBPUSD", perLot: "$3.00", notes: "Raw Spread" },
    { symbol: "USDJPY", perLot: "$3.00", notes: "Raw Spread" },
    { symbol: "XAUUSD", perLot: "$3.50", notes: "Metals" },
  ];

  const tvCtrader = [
    { platform: "TradingView", perLot: "$3.50", notes: "Raw Spread" },
    { platform: "cTrader", perLot: "$3.00", notes: "Raw Spread" },
  ];

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <h3 className="text-xl font-extrabold text-black">MetaTrader Raw Spread Commission Rates</h3>
          <div className="mt-3 overflow-auto rounded-2xl ring-1 ring-neutral-200 bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-neutral-50 text-neutral-600">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Symbol</th>
                  <th className="px-4 py-3 text-left font-semibold">Commission (per lot)</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {mtRaw.map((r) => (
                  <tr key={r.symbol} className="border-t border-neutral-200">
                    <td className="px-4 py-3">{r.symbol}</td>
                    <td className="px-4 py-3 font-semibold text-black">{r.perLot}</td>
                    <td className="px-4 py-3 text-neutral-700">{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-extrabold text-black">cTrader and TradingView Commission Rates</h3>
          <div className="mt-3 overflow-auto rounded-2xl ring-1 ring-neutral-200 bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-neutral-50 text-neutral-600">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Platform</th>
                  <th className="px-4 py-3 text-left font-semibold">Commission (per lot)</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {tvCtrader.map((r) => (
                  <tr key={r.platform} className="border-t border-neutral-200">
                    <td className="px-4 py-3">{r.platform}</td>
                    <td className="px-4 py-3 font-semibold text-black">{r.perLot}</td>
                    <td className="px-4 py-3 text-neutral-700">{r.notes}</td>
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
