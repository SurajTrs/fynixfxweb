"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [remember, setRemember] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  // Load remembered email
  useEffect(() => {
    try {
      const saved = localStorage.getItem("fx_remember_email");
      if (saved) {
        setEmail(saved);
        setRemember(true);
      }
    } catch {}
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    // Simple validation
    const nextErrors: { email?: string; password?: string } = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address";
    }
    if (password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setLoading(false);
      return;
    }
    try {
      // Placeholder: integrate with your auth API here
      await new Promise((r) => setTimeout(r, 800));
      setMessage("Signed in successfully (demo)");
      try {
        if (remember) localStorage.setItem("fx_remember_email", email);
        else localStorage.removeItem("fx_remember_email");
      } catch {}
    } catch (err) {
      setMessage("Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-white/90">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border-0 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-md ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]"
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-white/90">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-md border-0 bg-white/10 px-4 py-3 pr-12 text-white placeholder-white/50 backdrop-blur-md ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]"
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute inset-y-0 right-2 top-1/2 -translate-y-1/2 text-xs text-white/80 hover:text-white"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && <p className="mt-1 text-xs text-red-300">{errors.password}</p>}
      </div>
      <div className="flex items-center justify-between text-sm">
        <label className="inline-flex items-center gap-2 text-white/80">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 rounded border-white/30 bg-transparent"
          />
          Remember me
        </label>
        <div className="flex gap-4">
          <Link href="/forgot-password" className="text-[color:var(--brand)] hover:underline">Forgot password?</Link>
          <Link href="/support/livechat" className="text-[color:var(--brand)] hover:underline">Need help?</Link>
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-4 py-3 shadow-[0_0_30px_rgba(var(--brand-rgb),0.45)] hover:brightness-110 transition disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
      {message && (
        <div className="rounded-md bg-black/40 ring-1 ring-white/10 px-3 py-2 text-sm text-white/90">{message}</div>
      )}
      <p className="text-center text-sm text-white/80">
        Don&apos;t have an account? <Link href="/open-account" className="text-[color:var(--brand)] hover:underline">Create one</Link>
      </p>
    </form>
  );
}
