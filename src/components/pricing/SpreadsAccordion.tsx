"use client";

import { useMemo, useState } from "react";
import { SPREADS_ACCORDION, SPREADS_TABLES, type AccordionItem, type TableConfig } from "@/data/pricing";

type Props = {
  sections?: AccordionItem[];
  tables?: TableConfig[];
};

type Item = { key: string; title: string } & ({ table: TableConfig } | { content: string });

export default function SpreadsAccordion({ sections, tables = SPREADS_TABLES }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  // Build items: if tables are provided, render those inside the accordion; otherwise fall back to simple text sections
  const items: Item[] = useMemo(() => {
    if (tables && tables.length > 0) {
      return tables.map((t) => ({ key: t.title, title: t.title, table: t }));
    }
    const s = sections ?? SPREADS_ACCORDION;
    return s.map((x) => ({ key: x.key || x.title, title: x.title, content: x.content }));
  }, [sections, tables]);

  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl ring-1 ring-black/10 bg-white overflow-hidden">
          {items.map((it, i) => (
            <details
              key={it.key || it.title}
              open={open === i}
              onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open ? i : null)}
              className="group border-t first:border-t-0 border-black/10"
            >
              <summary className="list-none flex items-center justify-between px-4 sm:px-6 py-4 cursor-pointer select-none hover:bg-[rgba(var(--brand-rgb),0.05)] transition-colors">
                <span className="font-semibold text-black">{it.title}</span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md text-black/60 group-open:text-[color:var(--brand)] transition-transform group-open:rotate-180">▾</span>
              </summary>

              {"table" in it ? (
                <div className="px-0 sm:px-0 pb-6 text-black/70 animate-[fadeIn_180ms_ease]">
                  <div className="px-4 sm:px-6">
                    {it.table.description && (
                      <p className="mb-3 text-black/70 max-w-3xl">{it.table.description}</p>
                    )}
                    {/* Toolbar */}
                    <TableToolbar table={it.table} />
                  </div>
                  <div className="mt-3 overflow-x-auto rounded-none sm:rounded-xl ring-0 sm:ring-1 ring-black/10 bg-white">
                    <table className="min-w-full text-sm">
                      <thead className="bg-black/5 text-black/70 sticky top-0 z-10">
                        <tr>
                          {it.table.headers.map((h: string) => (
                            <th key={h} className="px-4 py-3 text-left font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <FilteredRows table={it.table} />
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="px-4 sm:px-6 pb-4 text-black/70">{"content" in it ? it.content : null}</div>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function TableToolbar({ table }: { table: TableConfig }) {
  const [q, setQ] = useState("");
  const [dense, setDense] = useState(false);
  return (
    <div className="flex flex-wrap items-center gap-3 justify-between">
      <div className="relative">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by symbol or description"
          className="w-72 max-w-full rounded-md border border-[rgba(var(--brand-rgb),0.35)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[rgba(var(--brand-rgb),0.35)]"
        />
      </div>
      <label className="inline-flex items-center gap-2 text-sm text-black/70 select-none">
        <input type="checkbox" checked={dense} onChange={(e) => setDense(e.target.checked)} className="accent-[color:var(--brand)]" />
        Dense rows
      </label>
      {/* propagate state via CSS variable for row padding */}
      <style>{`:root{}`}</style>
      <FilteredContext.Provider value={{ q, dense }} />
    </div>
  );
}

// Simple context to share search/density to FilteredRows
import { createContext, useContext } from "react";
const FilteredContext = createContext<{ q: string; dense: boolean }>({ q: "", dense: false });

function FilteredRows({ table }: { table: TableConfig }) {
  const { q, dense } = useContext(FilteredContext);
  const query = q.trim().toLowerCase();
  const rows = useMemo(() => {
    if (!query) return table.rows;
    const idxSymbol = 0;
    const idxDesc = 1;
    return table.rows.filter((r) =>
      (r[idxSymbol] || "").toLowerCase().includes(query) || (r[idxDesc] || "").toLowerCase().includes(query)
    );
  }, [query, table.rows]);

  return (
    <>
      {rows.map((row, idx) => (
        <tr key={idx} className="odd:bg-white even:bg-black/[0.02]">
          {row.map((cell, cidx) => (
            <td key={cidx} className={dense ? "px-4 py-2" : "px-4 py-3"}>
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
