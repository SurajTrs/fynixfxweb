import Image from "next/image";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1.5 ring-1 ring-white/15">
      <span className="inline-grid h-4 w-4 place-items-center rounded-full bg-brand text-black text-[10px]">✓</span>
      <span className="text-xs sm:text-sm font-semibold">{children}</span>
    </span>
  );
}

export default function MobileAppPromo() {
  return (
    <section className="relative py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Mobile app promo card */}
        <div className="grid lg:grid-cols-2 gap-6 items-center rounded-3xl bg-black text-white ring-1 ring-white/10 p-6 sm:p-8">
          <div>
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Trade on the go with our mobile app</h3>
            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              <Pill>Easy monitoring</Pill>
              <Pill>24/7 Support</Pill>
              <Pill>Multiple payment methods</Pill>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/apps/mobile#ios" className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/15 hover:bg-white/15 transition" aria-label="Download on the App Store">
                <Image src="/Ios.png" alt="Download on the App Store" width={150} height={46} className="h-10 w-auto" />
              </a>
              <a href="/apps/mobile#android" className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/15 hover:bg-white/15 transition" aria-label="Get it on Google Play">
                <Image src="/GooglePlay.png" alt="Get it on Google Play" width={150} height={46} className="h-10 w-auto" />
              </a>
            </div>
          </div>

          <div className="relative min-h-56">
            <Image src="/globalmarket.png" alt="Mobile app preview" fill priority className="object-contain" />
          </div>
        </div>

        {/* Webinars CTA bar */}
        <div className="mt-6 rounded-3xl bg-black text-white ring-1 ring-white/10 p-5 sm:p-6 grid md:grid-cols-3 items-center">
          <div className="md:col-span-2 text-center md:text-left text-base sm:text-lg">
            Skill up with weekly Fynixfx Global WEBINARS
          </div>
          <div className="mt-3 md:mt-0 text-center md:text-right">
            <a href="/education/tutorials" className="inline-flex items-center justify-center rounded-md border border-brand text-white px-6 py-2.5 font-semibold hover:bg-brand/10 transition">
              Upcoming Webinars
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
