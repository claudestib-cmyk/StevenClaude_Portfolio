import { TOOLKIT } from '@/data/portfolio';

export default function TechnicalToolkit() {
  const groups = Array.from(new Set(TOOLKIT.map((t) => t.group)));

  return (
    <section className="border-t border-black/10 bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-14">
          <span className="font-mono text-[11px] tracking-[0.25em] text-black/45">
            05 / TECHNICAL TOOLKIT
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            The tools behind the work.
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                {group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {TOOLKIT.filter((t) => t.group === group).map((tool) => (
                  <li
                    key={tool.name}
                    className="flex items-center gap-2 rounded-full border border-black/12 px-3.5 py-2 text-sm font-medium text-black/75 transition-colors hover:border-black/30 hover:bg-black/[0.03]"
                  >
                    {tool.logo && (
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] object-contain"
                        loading="lazy"
                      />
                    )}
                    {tool.name}
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
