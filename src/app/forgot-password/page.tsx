import type { Metadata } from "next";
import ForgotClient from "@/components/auth/ForgotClient";

export const metadata: Metadata = {
  title: "Forgot Password | Fynixfx",
  description: "Reset your password securely.",
};

export default function ForgotPasswordPage() {
  return (
    <main className="relative min-h-[100svh] bg-black text-white">
      <div className="absolute inset-0 -z-10 bg-[url('/commonbg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 -z-10 bg-black/80" />
      <ForgotClient />
    </main>
  );
}
