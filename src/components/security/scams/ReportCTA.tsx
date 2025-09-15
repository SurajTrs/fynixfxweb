import Link from "next/link";

export default function ReportCTA() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 sm:p-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-xl font-extrabold text-black">Think you’ve encountered a scam?</h3>
            <p className="mt-1 text-sm text-neutral-700">Report it to our Security team so we can investigate and help protect the community.</p>
          </div>
          <div className="flex flex-wrap items-center justify-start md:justify-end gap-3">
            <Link href="/support/livechat" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-accent text-black font-semibold px-4 py-2.5 hover:brightness-110 transition">Start Live Chat</Link>
            <Link href="/company/contact" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-black font-semibold px-4 py-2.5 hover:bg-neutral-50 transition">Email Security</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
