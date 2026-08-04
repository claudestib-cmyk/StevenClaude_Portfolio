import { PROCESS } from '@/data/portfolio';

export default function WorkProcess() {
  return (
    <section className="border-t border-black/10 bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-14">
          <span className="font-mono text-[11px] tracking-[0.25em] text-black/45">
            08 / WORK PROCESS
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            How an idea becomes a working product.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step) => (
            <div key={step.number} className="flex flex-col bg-white p-7 lg:p-8">
              <span className="font-mono text-2xl font-bold text-black/20">
                {step.number}
              </span>
              <h3 className="mt-4 text-base font-bold tracking-tight text-black">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
