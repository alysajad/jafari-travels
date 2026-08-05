import { trustItems } from "../data/site";

export function TrustBar() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {trustItems.map((item) => (
        <div className="rounded-2xl bg-white p-5 border border-slate-200" key={item.title}>
          <item.icon className="mb-3 h-7 w-7 text-primary" />
          <strong className="block text-sm font-extrabold text-slate-800">{item.title}</strong>
          <span className="mt-1 block text-xs font-semibold text-slate-500">{item.text}</span>
        </div>
      ))}
    </section>
  );
}
