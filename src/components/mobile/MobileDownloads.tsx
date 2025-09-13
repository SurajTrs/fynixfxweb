import Image from "next/image";

export default function MobileDownloads() {
  return (
    <section id="apps" className="py-12 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">Get the App</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-black">Download</h3>
            <p className="mt-2 text-sm text-neutral-700">Available for Android & iOS. Scan or tap to install.</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="inline-flex"><Image src="/googleplay.png" alt="Google Play" width={160} height={48} className="h-12 w-auto"/></a>
              <a href="#" className="inline-flex"><Image src="/appstore.png" alt="App Store" width={160} height={48} className="h-12 w-auto"/></a>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-black">Connect your platform</h3>
            <p className="mt-2 text-sm text-neutral-700">Use your existing MT4/MT5/cTrader credentials to log in securely.</p>
            <div className="mt-4 flex items-center gap-2 text-xs">
              <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 ring-1 ring-neutral-200">MT4</span>
              <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 ring-1 ring-neutral-200">MT5</span>
              <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 ring-1 ring-neutral-200">cTrader</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
