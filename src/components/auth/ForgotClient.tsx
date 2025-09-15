"use client";

import { useState } from "react";

export default function ForgotClient() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: Integrate with your password reset API
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-white/70 mb-3">Security</div>
          <h1 className="text-3xl font-extrabold tracking-tight">Reset your password</h1>
        </div>
        <div className="mt-6 rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20 p-6">
          {!sent ? (
            <form onSubmit={submit} className="space-y-4">
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
              </div>
              <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-4 py-3 shadow-[0_0_30px_rgba(var(--brand-rgb),0.45)] hover:brightness-110 transition disabled:opacity-60">
                {loading ? "Sending..." : "Send reset link"}
              </button>
            </form>
          ) : (
            <div className="text-sm text-white/90">
              If an account exists for <span className="font-semibold">{email}</span>, a reset link has been sent. Please check your inbox and spam folder.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
