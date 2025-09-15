"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submit
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  };

  return (
    <section className="py-8 bg-neutral-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black text-center">Send us a message</h2>
        <p className="mt-2 text-center text-sm text-neutral-600">We typically respond within one business day.</p>
        <form onSubmit={onSubmit} className="mt-6 rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700">First name</label>
              <input required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">Last name</label>
              <input required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700">Email</label>
              <input type="email" required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">Phone</label>
              <input className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">Your message</label>
            <textarea rows={5} required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
          </div>
          <div className="flex items-center gap-2">
            <input id="consent" type="checkbox" required className="h-4 w-4 rounded border-neutral-300 text-[color:var(--brand)] focus:ring-[color:var(--brand)]" />
            <label htmlFor="consent" className="text-sm text-neutral-700">I agree to the terms and privacy policy.</label>
          </div>
          <div>
            <button disabled={status!=="idle"} type="submit" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-5 py-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:brightness-110 transition">
              {status === "submitting" ? "Sending..." : status === "success" ? "Sent!" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
