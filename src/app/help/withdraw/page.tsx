import type { Metadata } from "next";
import WithdrawHero from "@/components/help/withdraw/WithdrawHero";
import WithdrawNotes from "@/components/help/withdraw/WithdrawNotes";
import WithdrawPolicies from "@/components/help/withdraw/WithdrawPolicies";
import WithdrawFAQ from "@/components/help/withdraw/WithdrawFAQ";

export const metadata: Metadata = {
  title: "Funds Withdrawal | Fynixfx",
  description: "Submit withdrawal requests securely from your Client Area and review important notes and policies.",
};

export default function WithdrawPage() {
  return (
    <main className="relative">
      <a href="#withdraw" className="fixed z-30 bottom-6 right-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand to-accent text-black font-semibold px-5 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.15)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand)] ring-offset-white transition">
        Withdrawal Form
      </a>
      <WithdrawHero />
      <WithdrawNotes />
      <WithdrawPolicies />
      <WithdrawFAQ />
    </main>
  );
}
