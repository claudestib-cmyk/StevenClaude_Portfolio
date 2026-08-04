import { EXPERTISE } from '@/data/portfolio';

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="border-t border-black/10 bg-white py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-14">
          <span className="font-mono text-[11px] tracking-[0.25em] text-black/45">
            03 / EXPERTISE
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Two disciplines, one continuous practice.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-3">
          {EXPERTISE.map((area) => (
            <div
              key={area.title}
              className="flex flex-col bg-white p-7 transition-colors hover:bg-canvas-50/70 lg:p-9"
            >
              <h3 className="text-lg font-bold tracking-tight text-black">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60">
                {area.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3 border-t border-black/10 pt-6">
                {area.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-black/70"
                  >
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-black" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
