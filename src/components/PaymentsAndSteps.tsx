import Link from "next/link";
import { SiApplepay, SiGooglepay, SiVisa, SiMastercard } from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";

function CheckPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-brand/15 text-black px-3.5 py-1.5 ring-1 ring-brand/30">
      <span className="inline-grid h-5 w-5 place-items-center rounded-full bg-brand text-black text-[11px]">✓</span>
      <span className="text-sm sm:text-base font-semibold">{children}</span>
    </span>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-black/10 shadow-sm p-6 sm:p-7">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-black font-bold mr-2">{n}</div>
      <div className="mt-3 text-xl sm:text-2xl font-extrabold text-black">{title}</div>
      <div className="mt-2 text-base text-black/70 leading-relaxed">{children}</div>
    </div>
  );
}

export default function PaymentsAndSteps() {
  return (
    <section id="payments" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top light card */}
        <div className="rounded-3xl bg-[#f5f5f5] ring-1 ring-black/10 shadow-sm p-10 sm:p-12 text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black">Your Money, Your Way</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            <CheckPill>Instant Deposit</CheckPill>
            <CheckPill>Fast Withdrawal</CheckPill>
            <CheckPill>0% Commission</CheckPill>
          </div>
          <div className="mt-6">
            <Link href="/payments" className="inline-flex items-center justify-center rounded-md border border-black/20 bg-white/60 text-black font-semibold px-6 py-3 text-base hover:bg-white transition">
              Payment methods
            </Link>
          </div>
          <p className="mt-4 text-xs text-black/60">
            For more information on deposits, withdrawals and how to fund your trading account,
            <Link href="#" className="font-semibold text-black hover:underline ml-1">Go here</Link>
          </p>
        </div>

        {/* Logo row (real vector icons) */}
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-8 items-center text-center">
          <SiApplepay className="mx-auto h-10 w-auto sm:h-12 text-black hover:opacity-90 transition" title="Apple Pay" />
          <SiGooglepay className="mx-auto h-10 w-auto sm:h-12 text-[#4285F4] hover:brightness-110 transition" title="Google Pay" />
          <span className="mx-auto inline-flex items-center justify-center h-10 sm:h-12 px-4 rounded-md ring-1 ring-[#7A1EA1]/30 text-[#7A1EA1] text-lg font-extrabold bg-[#7A1EA1]/5 hover:bg-[#7A1EA1]/10 transition">Skrill</span>
          <span className="mx-auto inline-flex items-center justify-center h-10 sm:h-12 px-4 rounded-md ring-1 ring-[#00B057]/30 text-[#00B057] text-lg font-extrabold bg-[#00B057]/5 hover:bg-[#00B057]/10 transition">Neteller</span>
          <SiVisa className="mx-auto h-10 w-auto sm:h-12 text-[#1A1F71] hover:brightness-110 transition" title="Visa" />
          <SiMastercard className="mx-auto h-10 w-auto sm:h-12 text-[#EB001B] hover:brightness-110 transition" title="Mastercard" />
        </div>

        {/* Steps */}
        <div className="mt-14 text-center">
          <h3 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black">Open an account in 4 simple steps</h3>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
            <Step n={1} title="Register">Choose an account type and complete a quick sign up.</Step>
            <Step n={2} title="Verify">Use our digital onboarding to verify your identity.</Step>
            <Step n={3} title="Fund">Fund your trading account using your preferred method.</Step>
            <Step n={4} title="Trade">Start trading on your live account once approved.</Step>
          </div>
          <div className="mt-10">
            <Link href="/open-account" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-7 py-3.5 text-lg shadow-[0_0_24px_rgba(var(--brand-rgb),0.45)] hover:brightness-110 transition">
              <span>Get Started</span>
              <FiArrowRight className="h-5 w-5" />
            </Link>
            <div className="mt-3 text-sm">
              <Link href="/fees" className="text-accent hover:opacity-80 underline underline-offset-4">View fees and limits</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
