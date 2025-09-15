export default function FundingInfo() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-black">Payment process</h3>
            <p className="mt-2 text-[15px] leading-7 text-neutral-700">
              For faster processing we recommend that all account holders deposit funds into their trading account from inside their Secure Client Area. From your Secure Client Area you will be able to fund your account in real time using one of the instant funding methods. In certain instances, it may take up to an hour for deposits to be processed into the designated trading account.
            </p>
            <p className="mt-2 text-[13px] text-neutral-600">Such cases are outside of Fynixfx control, and we shall not be held liable for any losses or additional losses.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-black">Security of Funds</h4>
              <p className="mt-2 text-sm text-neutral-700">
                Client money is held in Segregated Client Money Accounts with Top-Tier International Banks. Electronic payments are processed using SSL technology and are encrypted to ensure security.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-black">Bank Fees</h4>
              <p className="mt-2 text-sm text-neutral-700">
                Fynixfx does not charge additional fees for deposits or withdrawals. You may incur intermediary fees depending on your bank. Fynixfx accepts no responsibility for such fees.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-black">Third Party Payments</h4>
              <p className="mt-2 text-sm text-neutral-700">
                We do not accept payments from third parties. Ensure deposits come from an account in your name. Payments from Joint Bank Accounts / Credit Cards are accepted if the trading account holder is one of the parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
