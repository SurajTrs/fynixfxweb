import { FiBarChart2, FiActivity, FiServer, FiGlobe, FiTool } from "react-icons/fi";

export default function TVIntegrations() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Integrations & tools</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <div className="space-y-10">
          <section className="flex items-start gap-5">
            <span className="mt-0.5 inline-flex rounded-xl bg-[color:var(--brand)]/10 p-3 text-[color:var(--brand)]"><FiBarChart2 className="h-7 w-7" /></span>
            <div>
              <h3 className="text-xl font-extrabold text-black">Fynixfx Insights</h3>
              <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                Access in‑depth market insights covering macro themes, event risks and sentiment so you can plan
                each session with context. Daily briefs and periodic deep dives distill noise into clear watchlist
                focus, helping prioritise setups and scenarios.
              </p>
            </div>
          </section>

          <section className="flex items-start gap-5">
            <span className="mt-0.5 inline-flex rounded-xl bg-[color:var(--brand)]/10 p-3 text-[color:var(--brand)]"><FiActivity className="h-7 w-7" /></span>
            <div>
              <h3 className="text-xl font-extrabold text-black">Trading Central</h3>
              <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                Independent technical research integrated alongside your charts. Levels, bias and scenarios update
                throughout the day, providing a second lens to validate or challenge your plan.
              </p>
            </div>
          </section>

          <section className="flex items-start gap-5">
            <span className="mt-0.5 inline-flex rounded-xl bg-[color:var(--brand)]/10 p-3 text-[color:var(--brand)]"><FiServer className="h-7 w-7" /></span>
            <div>
              <h3 className="text-xl font-extrabold text-black">Virtual Private Server</h3>
              <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                Run strategies 24/5 on low‑latency servers located close to our trading infrastructure. VPS keeps
                algos resilient to local connectivity issues and enables unattended operation during key sessions.
              </p>
            </div>
          </section>

          <section className="flex items-start gap-5">
            <span className="mt-0.5 inline-flex rounded-xl bg-[color:var(--brand)]/10 p-3 text-[color:var(--brand)]"><FiGlobe className="h-7 w-7" /></span>
            <div>
              <h3 className="text-xl font-extrabold text-black">Trading Servers</h3>
              <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                A global execution stack engineered for speed and stability. Redundant connectivity and smart
                routing aim to deliver consistent fills when volatility spikes, keeping tactics dependable under
                load.
              </p>
            </div>
          </section>

          <section className="flex items-start gap-5">
            <span className="mt-0.5 inline-flex rounded-xl bg-[color:var(--brand)]/10 p-3 text-[color:var(--brand)]"><FiTool className="h-7 w-7" /></span>
            <div>
              <h3 className="text-xl font-extrabold text-black">MT4 Advanced Trading Tools</h3>
              <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                Supercharge the MetaTrader workflow with professional add‑ons for order management and analytics.
                Build repeatable processes with toolsets designed for fast iteration and clear feedback.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
