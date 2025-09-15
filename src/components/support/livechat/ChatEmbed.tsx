"use client";

import { useEffect, useRef } from "react";

// Placeholder for provider embed (e.g., Intercom/Crisp/Tawk/Zendesk).
// Replace contents of useEffect with the provider's script when available.
export default function ChatEmbed() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = "";
    const div = document.createElement("div");
    div.className = "rounded-2xl ring-1 ring-neutral-200 bg-white p-6 text-sm text-neutral-700";
    div.innerHTML = `
      <strong>Live chat embed</strong><br/>
      This is a placeholder. Drop your provider script here to activate chat on this page.
    `;
    ref.current.appendChild(div);
  }, []);

  return (
    <section id="chat" className="py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} />
      </div>
    </section>
  );
}
