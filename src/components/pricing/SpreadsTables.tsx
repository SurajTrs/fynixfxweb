import { SPREADS_TABLES, type TableConfig } from "@/data/pricing";

export default function SpreadsTables({ tables = SPREADS_TABLES }: { tables?: TableConfig[] }) {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {tables.map((t) => (
          <div key={t.title}>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black">{t.title}</h3>
            {t.description && <p className="mt-2 text-black/70 max-w-3xl">{t.description}</p>}
            <div className="mt-4 overflow-x-auto rounded-xl ring-1 ring-black/10 bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-black/5 text-black/70">
                  <tr>
                    {t.headers.map((h) => (
                      <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.rows.map((row, idx) => (
                    <tr key={idx} className="odd:bg-white even:bg-black/[0.02]">
                      {row.map((cell, cidx) => (
                        <td key={cidx} className="px-4 py-3">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
