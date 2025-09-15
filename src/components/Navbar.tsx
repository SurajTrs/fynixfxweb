"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MEGA_MENU, type MenuConfig } from "@/data/menu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const keys = Object.keys(MEGA_MENU);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenKey(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-shadow ${
        scrolled ? "shadow-[0_6px_20px_rgba(0,0,0,0.08)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 h-full" onMouseEnter={() => setOpenKey(null)}>
          <Image 
            src="/logo.png" 
            alt="Fynixfx" 
            width={80} 
            height={80} 
            className="h-full w-auto no-scale" 
            style={{ transform: 'none !important' }}
            priority 
          />
          <span className="sr-only">Fynixfx</span>
        </Link>

        {/* Desktop nav with mega dropdowns */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-base md:text-lg text-black/70 relative" onMouseLeave={scheduleClose} onMouseEnter={cancelClose}>
          {keys.map((key) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => {
                cancelClose();
                setOpenKey(key);
              }}
              onFocus={() => setOpenKey(key)}
            >
              <button
                className={`relative py-2 font-semibold transition-colors hover:text-[color:var(--brand)] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[color:var(--brand)] after:transition-all hover:after:w-full ${
                  openKey === key ? "text-black after:w-full" : ""
                }`}
                aria-expanded={openKey === key}
                aria-haspopup="true"
              >
                {key}
              </button>

              {openKey === key && (
                <MegaPanel config={MEGA_MENU[key]} onMouseEnter={cancelClose} onMouseLeave={scheduleClose} />
              )}
            </div>
          ))}
        </nav>

        {/* CTAs + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden lg:inline-flex px-4 py-2 rounded-md border border-brand text-brand hover:bg-brand hover:text-black transition-colors">Client Login</Link>
          <Link href="/open-account" className="hidden sm:inline-flex px-4 py-2 rounded-md bg-gradient-to-r from-brand to-accent text-black font-medium shadow-[0_0_20px_rgba(var(--brand-rgb),0.35)] hover:brightness-110 transition-colors">Open Account</Link>
          <button onClick={() => setMobileOpen((s) => !s)} aria-label="Toggle menu" className="inline-flex md:hidden px-3 py-2 rounded-md border border-black/10 text-black/70">Menu</button>
        </div>
      </div>

      {/* Mobile menu (accordion) */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="px-4 py-4 space-y-3 text-base text-black/80">
            {keys.map((key) => (
              <details key={key} className="group">
                <summary className="cursor-pointer list-none py-2 font-semibold flex items-center justify-between">
                  <span>{key}</span>
                  <span className="text-black/40 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <div className="pl-2 pb-3 space-y-3">
                  {MEGA_MENU[key].promo && (
                    <div className="rounded-xl bg-black/5 p-3">
                      <div className="text-sm font-semibold">{MEGA_MENU[key].promo!.title}</div>
                      <div className="mt-2 flex gap-2">
                        {MEGA_MENU[key].promo!.primaryCta && (
                          <Link href={MEGA_MENU[key].promo!.primaryCta!.href} className="inline-flex px-3 py-1.5 rounded-md bg-brand text-black text-sm">{MEGA_MENU[key].promo!.primaryCta!.label}</Link>
                        )}
                        {MEGA_MENU[key].promo!.secondaryCta && (
                          <Link href={MEGA_MENU[key].promo!.secondaryCta!.href} className="inline-flex px-3 py-1.5 rounded-md border border-black/10 text-sm">{MEGA_MENU[key].promo!.secondaryCta!.label}</Link>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3">
                    {MEGA_MENU[key].columns.map((col) => (
                      <div key={col.heading}>
                        <div className="text-xs uppercase tracking-wide text-black/50 mb-1">{col.heading}</div>
                        <ul className="space-y-1">
                          {col.items.map((it) => (
                            <li key={it.label}>
                              <Link href={it.href} className="block py-1 hover:text-black">
                                {it.label}
                                {it.badge && (
                                  <span className="ml-2 inline-flex items-center rounded-full bg-brand/10 text-brand px-2 py-0.5 text-[10px] align-middle">{it.badge}</span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <Link href="/login" className="flex-1 px-4 py-2 rounded-md border border-brand text-brand text-center">Client Login</Link>
              <Link href="/open-account" className="flex-1 px-4 py-2 rounded-md bg-gradient-to-r from-brand to-accent text-black font-medium text-center">Open Account</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaPanel({ config, onMouseEnter, onMouseLeave }: { config: MenuConfig; onMouseEnter?: () => void; onMouseLeave?: () => void }) {
  return (
    <div
      className="fixed inset-x-0 top-16 md:top-20 z-40 px-4 sm:px-6 lg:px-8"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mega-enter mx-auto w-full max-w-[72rem] rounded-2xl bg-white text-black ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)] overflow-hidden max-h-[70vh] overflow-auto overscroll-contain">
        <div className="grid lg:grid-cols-12 gap-0">
          {/* Promo area */}
          {config.promo && (
            <div className="lg:col-span-5 p-6 sm:p-8 bg-gradient-to-b from-black/90 to-black text-white">
              <h3 className="text-2xl font-extrabold tracking-tight">{config.promo.title}</h3>
              {config.promo.subtitle && (
                <p className="mt-3 text-sm text-white/85">{config.promo.subtitle}</p>
              )}
              <div className="mt-5 flex flex-wrap gap-3">
                {config.promo.primaryCta && (
                  <Link href={config.promo.primaryCta.href} className="inline-flex items-center rounded-md bg-brand text-black font-semibold px-4 py-2 shadow hover:brightness-110">{config.promo.primaryCta.label}</Link>
                )}
                {config.promo.secondaryCta && (
                  <Link href={config.promo.secondaryCta.href} className="inline-flex items-center rounded-md border border-white/20 text-white px-4 py-2 hover:bg-white/10">{config.promo.secondaryCta.label}</Link>
                )}
              </div>
            </div>
          )}

          {/* Columns */}
          <div className={`${config.promo ? "lg:col-span-7" : "lg:col-span-12"} p-6 sm:p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {config.columns.map((col) => (
              <div key={col.heading}>
                <div className="text-xs uppercase tracking-[0.2em] text-black/60 font-semibold mb-3">{col.heading}</div>
                <ul className="space-y-2">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        href={it.href}
                        className="group inline-flex items-center justify-between w-full rounded-md px-3 py-2 ring-1 ring-transparent hover:ring-[rgba(var(--brand-rgb),0.25)] hover:bg-[rgba(var(--brand-rgb),0.06)] focus:outline-none focus:ring-[rgba(var(--brand-rgb),0.35)] focus:bg-[rgba(var(--brand-rgb),0.08)] transition"
                      >
                        <span className="text-sm text-black/80 group-hover:text-[color:var(--brand)]">{it.label}</span>
                        {it.badge && (
                          <span className="ml-3 inline-flex items-center rounded-full bg-[rgba(var(--brand-rgb),0.12)] text-[color:var(--brand)] px-2 py-0.5 text-[10px]">{it.badge}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}