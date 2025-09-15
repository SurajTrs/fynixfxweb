"use client";

import { useState } from "react";

export default function OpenAccountForm() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!accepted) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800)); // TODO integrate API
    setDone(true);
    setLoading(false);
  }

  if (done) {
    return (
      <div className="rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20 p-6 text-white/90">
        Thanks! We have received your request. Check your email to complete onboarding.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20 p-6 grid sm:grid-cols-2 gap-4">
      <label className="block text-sm text-white/90">
        First name
        <input value={first} onChange={(e) => setFirst(e.target.value)} required className="mt-1 w-full rounded-md border-0 bg-white/10 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
      </label>
      <label className="block text-sm text-white/90">
        Last name
        <input value={last} onChange={(e) => setLast(e.target.value)} required className="mt-1 w-full rounded-md border-0 bg-white/10 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
      </label>
      <label className="block text-sm text-white/90 sm:col-span-2">
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full rounded-md border-0 bg-white/10 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
      </label>
      <label className="block text-sm text-white/90 sm:col-span-2">
        Country/Region
        <input value={country} onChange={(e) => setCountry(e.target.value)} required className="mt-1 w-full rounded-md border-0 bg-white/10 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
      </label>
      <div className="sm:col-span-2 flex items-start gap-2 text-white/80 text-sm">
        <input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent" />
        I agree to the Terms and Privacy Policy.
      </div>
      <div className="sm:col-span-2">
        <button type="submit" disabled={!accepted || loading} className="w-full inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-4 py-3 shadow-[0_0_30px_rgba(var(--brand-rgb),0.45)] hover:brightness-110 transition disabled:opacity-60">
          {loading ? "Submitting..." : "Create account"}
        </button>
      </div>
    </form>
  );
}
