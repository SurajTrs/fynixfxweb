import Link from "next/link";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import { MEGA_MENU } from "@/data/menu";

export default function Footer() {
  // Build footer sections from MEGA_MENU
  const tradingAccounts = MEGA_MENU["Trading"].columns.find((c) => c.heading === "Trading Accounts");
  const products = MEGA_MENU["Trading"].columns.find((c) => c.heading === "Products");
  const platforms = MEGA_MENU["Platforms"].columns.flatMap((c) => c.items);
  const help = MEGA_MENU["More"].columns.find((c) => c.heading === "Help & Resources");
  const company = MEGA_MENU["More"].columns.find((c) => c.heading === "Company");

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
              <Link href="/start-trading?mode=live" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 text-lg shadow-[0_0_28px_rgba(var(--brand-rgb),0.45)] hover:brightness-110 transition">
                Get Started
              </Link>
              <Link href="/start-trading?mode=demo" className="inline-flex items-center justify-center gap-2 rounded-md border border-brand/70 text-white font-semibold px-7 py-3.5 text-lg hover:bg-brand/10 transition">
                Try a Free Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-6 gap-10">
          {/* About / brand column */}
          <div>
            <div className="text-2xl font-extrabold"><span className="text-white">Fynix</span><span className="text-brand">fx</span></div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              We aim to deliver the best trading experience for retail and institutional clients alike, with deep
              liquidity and lightning-fast execution.
            </p>
            <div className="mt-4 flex items-center gap-3 text-white/80">
              <a href="https://x.com/DMfynixfx" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-brand transition-colors">
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/fynixfx" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-brand transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61580471138070" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-brand transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Trading Accounts */}
          <div>
            <div className="font-extrabold text-white text-lg">Trading Accounts</div>
            <div className="h-0.5 w-12 bg-brand/70 rounded mt-1.5 mb-3" />
            <ul className="space-y-2.5 text-white/80 text-sm">
              {(tradingAccounts?.items || []).map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className="group inline-flex items-center gap-2 hover:text-brand transition">
                    <span>{it.label}</span>
                    <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <div className="font-extrabold text-white text-lg">Products</div>
            <div className="h-0.5 w-12 bg-brand/70 rounded mt-1.5 mb-3" />
            <ul className="space-y-2.5 text-white/80 text-sm">
              {(products?.items || []).map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className="group inline-flex items-center gap-2 hover:text-brand transition">
                    <span>{it.label}</span>
                    <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <div className="font-extrabold text-white text-lg">Platforms</div>
            <div className="h-0.5 w-12 bg-brand/70 rounded mt-1.5 mb-3" />
            <ul className="space-y-2.5 text-white/80 text-sm">
              {platforms.map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className="group inline-flex items-center gap-2 hover:text-brand transition">
                    <span>{it.label}</span>
                    <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Resources */}
          <div>
            <div className="font-extrabold text-white text-lg">Help & Resources</div>
            <div className="h-0.5 w-12 bg-brand/70 rounded mt-1.5 mb-3" />
            <ul className="space-y-2.5 text-white/80 text-sm">
              {(help?.items || []).map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className="group inline-flex items-center gap-2 hover:text-brand transition">
                    <span>{it.label}</span>
                    <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-extrabold text-white text-lg">Company</div>
            <div className="h-0.5 w-12 bg-brand/70 rounded mt-1.5 mb-3" />
            <ul className="space-y-2.5 text-white/80 text-sm">
              {(company?.items || []).map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className="group inline-flex items-center gap-2 hover:text-brand transition">
                    <span>{it.label}</span>
                    <FiChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
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
            to our <Link href="/risk-disclosure" className="text-brand hover:underline">Risk Disclosure</Link>.
          </p>
          <p className="text-white/60">© {new Date().getFullYear()} Fynixfx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
