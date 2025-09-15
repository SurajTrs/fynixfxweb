"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

export default function StartMode() {
  const params = useSearchParams();
  const router = useRouter();
  const mode = params.get("mode") === "demo" ? "demo" : "live";

  function setMode(next: "live" | "demo") {
    const qs = new URLSearchParams(params.toString());
    if (next === "demo") qs.set("mode", "demo");
    else qs.delete("mode");
    router.push(`/start-trading?${qs.toString()}`.replace(/\?$/, ""));
  }

  return (
    <section className="py-8 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-4 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="inline-flex items-center rounded-md p-1 ring-1 ring-neutral-200 bg-neutral-50">
            <button onClick={() => setMode("live")} className={`px-4 py-2 rounded-md text-sm font-semibold ${mode === "live" ? "bg-[color:var(--brand)] text-black" : "text-neutral-800"}`}>Live</button>
            <button onClick={() => setMode("demo")} className={`px-4 py-2 rounded-md text-sm font-semibold ${mode === "demo" ? "bg-[color:var(--brand)] text-black" : "text-neutral-800"}`}>Demo</button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {mode === "live" ? (
              <>
                <Link href="/open-account" className="inline-flex items-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-5 py-2.5 shadow hover:brightness-110">Open Live Account</Link>
                <Link href="/support/livechat" className="inline-flex items-center rounded-md border border-neutral-300 px-5 py-2.5 font-semibold hover:bg-neutral-50">Need help?</Link>
              </>
            ) : (
              <>
                <Link href="/accounts/demo" className="inline-flex items-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-5 py-2.5 shadow hover:brightness-110">Create Demo Account</Link>
                <Link href="/support/livechat" className="inline-flex items-center rounded-md border border-neutral-300 px-5 py-2.5 font-semibold hover:bg-neutral-50">Need help?</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
