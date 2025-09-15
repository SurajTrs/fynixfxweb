export default function OfficeLocations() {
  const offices = [
    {
      country: "Seychelles",
      city: "Port Victoria",
      address: "Example Street 1, Victoria, Mahé, Seychelles",
      hours: "Sunday – Friday (GMT): 22:00 – 22:00",
      phone: "+248 123 4567",
      email: "support@fynixfx.com",
    },
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black text-center">Office Locations</h2>
        <div className="mt-6 space-y-4">
          {offices.map((o) => (
            <div key={o.country} className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm uppercase tracking-widest text-neutral-600">{o.country}</div>
                  <div className="text-lg font-semibold text-black">{o.city}</div>
                  <div className="mt-1 text-sm text-neutral-700">{o.address}</div>
                </div>
                <div className="text-sm text-neutral-700">
                  <div><span className="font-medium text-black">Phone:</span> {o.phone}</div>
                  <div><span className="font-medium text-black">Email:</span> {o.email}</div>
                  <div><span className="font-medium text-black">Hours:</span> {o.hours}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
