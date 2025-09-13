import { FaXTwitter, FaYoutube, FaFacebook } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 rounded-t-[60px] md:rounded-t-[70px] overflow-hidden">
      {/* CTA band with background video + gradients (hero-like) */}
      <div className="relative isolate overflow-hidden rounded-t-[60px] md:rounded-t-[70px] ring-1 ring-white/10">
        {/* Background video */}
        <video
          className="absolute inset-0 -z-30 h-full w-full object-cover opacity-70"
          src="/videobg1.mp4"
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
        />
        {/* Dark gradient wash for readability */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/90 via-black/60 to-black/90 pointer-events-none" />
        {/* Subtle brand tint */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-brand/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-6 sm:p-10">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">Instant account opening & funding</h2>
            <p className="mt-3 text-base sm:text-lg text-white/85">Trade within minutes!</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a href="/open-account" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 text-lg shadow-[0_0_28px_rgba(var(--brand-rgb),0.45)] hover:brightness-110 transition">
                Get Started
              </a>
              <a href="/demo" className="inline-flex items-center justify-center gap-2 rounded-md border border-brand/70 text-white font-semibold px-7 py-3.5 text-lg hover:bg-brand/10 transition">
                Try a Free Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* About / brand column */}
          <div>
            <div className="text-2xl font-extrabold"><span className="text-white">Fynix</span><span className="text-brand">fx</span></div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              We aim to deliver the best trading experience for retail and institutional clients alike, with deep
              liquidity and lightning-fast execution.
            </p>
            <div className="mt-4 flex items-center gap-3 text-white/80">
              <a href="#" aria-label="X" className="hover:text-brand"><FaXTwitter className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-brand"><FaYoutube className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-brand"><FaFacebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <div className="font-extrabold text-white text-lg">Forex Trading</div>
            <div className="h-0.5 w-12 bg-brand/70 rounded mt-1.5 mb-3" />
            <ul className="space-y-2.5 text-white/80 text-sm">
              <li>
                <a href="/accounts" className="group inline-flex items-center gap-2 hover:text-brand transition">
                  <span>Accounts Overview</span>
                  <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
              <li>
                <a href="/open-account" className="group inline-flex items-center gap-2 hover:text-brand transition">
                  <span>Open an Account</span>
                  <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
              <li>
                <a href="/webtrader" className="group inline-flex items-center gap-2 hover:text-brand transition">
                  <span>Launch Web Trader</span>
                  <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
              <li>
                <a href="/security" className="group inline-flex items-center gap-2 hover:text-brand transition">
                  <span>Cybersecurity and Scams</span>
                  <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <div className="font-extrabold text-white text-lg">Trading Specifications</div>
            <div className="h-0.5 w-12 bg-brand/70 rounded mt-1.5 mb-3" />
            <ul className="space-y-2.5 text-white/80 text-sm">
              <li>
                <a href="/pricing" className="group inline-flex items-center gap-2 hover:text-brand transition">
                  <span>Spreads and Commissions</span>
                  <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
              <li>
                <a href="/products" className="group inline-flex items-center gap-2 hover:text-brand transition">
                  <span>Range of Products</span>
                  <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
              <li>
                <a href="/hours" className="group inline-flex items-center gap-2 hover:text-brand transition">
                  <span>Trading Hours</span>
                  <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
              <li>
                <a href="/funding" className="group inline-flex items-center gap-2 hover:text-brand transition">
                  <span>Funding</span>
                  <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
              <li>
                <a href="/withdrawal" className="group inline-flex items-center gap-2 hover:text-brand transition">
                  <span>Withdrawal</span>
                  <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <div className="font-extrabold text-white text-lg">About Fynixfx</div>
            <div className="h-0.5 w-12 bg-brand/70 rounded mt-1.5 mb-3" />
            <ul className="space-y-2.5 text-white/80 text-sm">
              <li>
                <a href="/help" className="group inline-flex items-center gap-2 hover:text-brand transition">
                  <span>Help Centre</span>
                  <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
              <li>
                <a href="/why-us" className="group inline-flex items-center gap-2 hover:text-brand transition">
                  <span>Why Fynixfx</span>
                  <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
              <li>
                <a href="/regulation" className="group inline-flex items-center gap-2 hover:text-brand transition">
                  <span>Regulation</span>
                  <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
              <li>
                <a href="/legal" className="group inline-flex items-center gap-2 hover:text-brand transition">
                  <span>Legal Documents</span>
                  <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
              <li>
                <a href="/contact" className="group inline-flex items-center gap-2 hover:text-brand transition">
                  <span>Contact Us</span>
                  <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Risk and legal text */}
        <div className="space-y-4 text-xs text-white/70 leading-relaxed">
          <p>
            <span className="font-semibold text-white">Risk Warning:</span> Trading Forex and CFDs carries a high
            level of risk to your capital and you should only trade with money you can afford to lose. Please ensure
            that you fully understand the risks involved.
          </p>
          <p>
            <span className="font-semibold text-white">Restricted Countries:</span> We do not provide services for
            residents of certain jurisdictions where such distribution or use would be contrary to local law or
            regulation.
          </p>
          <p>
            By using this website, you acknowledge you are registering at your own free will and have read and agreed
            to our <a href="/risk-disclosure" className="text-brand hover:underline">Risk Disclosure</a>.
          </p>
          <p className="text-white/60">© {new Date().getFullYear()} Fynixfx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
