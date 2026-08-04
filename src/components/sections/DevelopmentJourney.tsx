import { JOURNEY } from '@/data/portfolio';

export default function DevelopmentJourney() {
  return (
    <section className="border-t border-black/10 bg-ink-950 py-24 text-white sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-14">
          <span className="font-mono text-[11px] tracking-[0.25em] text-white/45">
            07 / DEVELOPMENT JOURNEY
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            From first circuit to shipping full systems.
          </h2>
        </div>

        <ol className="relative border-l border-white/15">
          {JOURNEY.map((step) => (
            <li key={step.year} className="mb-10 ml-6 last:mb-0">
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-ink-950" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="font-mono text-sm text-white/50">
                  {step.year}
                </span>
                <div className="max-w-xl">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                    {step.detail}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
