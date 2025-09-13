import { SPREADS_INTRO } from "@/data/pricing";

export default function SpreadsIntro({ heading = SPREADS_INTRO.heading, body = SPREADS_INTRO.body }: { heading?: string; body?: string }) {
  return (
    <section id="details" className="py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black">{heading}</h2>
        <p className="mt-3 text-black/70 max-w-3xl">{body}</p>
      </div>
    </section>
  );
}
