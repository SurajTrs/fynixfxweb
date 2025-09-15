import type { Metadata } from "next";
import OpenAccountHero from "@/components/auth/OpenAccountHero";
import OpenAccountForm from "@/components/auth/OpenAccountForm";

export const metadata: Metadata = {
  title: "Open Account | Fynixfx",
  description: "Create your Fynixfx trading account in minutes.",
};

export default function OpenAccountPage() {
  return (
    <main className="relative min-h-[100svh] bg-black text-white">
      <div className="absolute inset-0 -z-10 bg-[url('/commonbg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 -z-10 bg-black/80" />
      <OpenAccountHero />
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <OpenAccountForm />
          </div>
        </div>
      </section>
    </main>
  );
}
