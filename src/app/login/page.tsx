import type { Metadata } from "next";
import LoginBG from "@/components/auth/LoginBG";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login | Fynixfx",
  description: "Sign in to your Fynixfx account.",
};

export default function LoginPage() {
  return (
    <main className="relative min-h-[100svh] bg-black text-white">
      <LoginBG />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="mx-auto max-w-md">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-white/70 mb-3">Welcome back</div>
            <h1 className="text-3xl font-extrabold tracking-tight">Sign in</h1>
          </div>
          <div className="mt-6 rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20 p-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
