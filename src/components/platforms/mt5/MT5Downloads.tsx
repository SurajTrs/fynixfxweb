import Image from "next/image";

export default function MT5Downloads() {
  return (
    <section id="download" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">Download</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="#" className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
            <div className="text-sm font-semibold text-black">Desktop</div>
            <p className="mt-1 text-sm text-neutral-700">Windows & macOS</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)]">Download →</div>
          </a>
          <a href="#" className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
            <div className="text-sm font-semibold text-black">Android</div>
            <p className="mt-1 text-sm text-neutral-700">Get it on Google Play</p>
            <div className="mt-3"><Image src="/googleplay.png" alt="Google Play" width={140} height={42} className="h-10 w-auto"/></div>
          </a>
          <a href="#" className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
            <div className="text-sm font-semibold text-black">iOS</div>
            <p className="mt-1 text-sm text-neutral-700">Download on the App Store</p>
            <div className="mt-3"><Image src="/appstore.png" alt="App Store" width={140} height={42} className="h-10 w-auto"/></div>
          </a>
        </div>
      </div>
    </section>
  );
}
