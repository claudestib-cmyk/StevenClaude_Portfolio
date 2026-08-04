import { useState } from 'react';
import {
  ArrowUpRight,
  Code2,
  Cpu,
  LayoutGrid,
} from 'lucide-react';
import { PROJECTS } from '@/data/portfolio';

type ProjectFilter = 'all' | 'software' | 'hardware';

const FILTERS: {
  id: ProjectFilter;
  label: string;
  shortLabel: string;
  icon: typeof LayoutGrid;
}[] = [
  {
    id: 'all',
    label: 'All Projects',
    shortLabel: 'All',
    icon: LayoutGrid,
  },
  {
    id: 'software',
    label: 'Web & Software',
    shortLabel: 'Software',
    icon: Code2,
  },
  {
    id: 'hardware',
    label: 'Hardware & Embedded',
    shortLabel: 'Hardware',
    icon: Cpu,
  },
];

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter(
          (project) => project.group === activeFilter,
        );

  const getFilterCount = (filter: ProjectFilter) => {
    if (filter === 'all') {
      return PROJECTS.length;
    }

    return PROJECTS.filter(
      (project) => project.group === filter,
    ).length;
  };

  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-black/10 bg-canvas-50/50 py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] text-black/45">
              SELECTED WORK / 02
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Projects built across software, hardware, and
              intelligent systems.
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-black/55">
            A collection of digital applications, embedded
            prototypes, and engineering systems developed for
            practical use.
          </p>
        </div>

        {/* Project filters */}
        <div className="mb-16 border-y border-black/10 py-4 sm:mb-24">
          <div
            className="no-scrollbar flex gap-2 overflow-x-auto pb-1"
            role="group"
            aria-label="Filter projects by type"
          >
            {FILTERS.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={isActive}
                  className={`group inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'border-black bg-black text-white'
                      : 'border-black/10 bg-white text-black/60 hover:border-black/30 hover:text-black'
                  }`}
                >
                  <Icon
                    className="h-4 w-4"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <span className="hidden sm:inline">
                    {filter.label}
                  </span>

                  <span className="sm:hidden">
                    {filter.shortLabel}
                  </span>

                  <span
                    className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                      isActive
                        ? 'bg-white/15 text-white/80'
                        : 'bg-black/5 text-black/45'
                    }`}
                  >
                    {String(getFilterCount(filter.id)).padStart(
                      2,
                      '0',
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active category label */}
        <div className="mb-10 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.22em] text-black/40">
            {activeFilter === 'all'
              ? 'ALL PROJECTS'
              : activeFilter === 'software'
                ? 'WEB & SOFTWARE'
                : 'HARDWARE & EMBEDDED'}
          </span>

          <span className="h-px flex-1 bg-black/10" />
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-16 sm:gap-24">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
                index % 2 === 1
                  ? 'lg:[&>*:first-child]:order-2'
                  : ''
              }`}
            >
              {/* Project image */}
              <div className="lg:col-span-7">
                <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-canvas-100">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-[0.15]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.03]" />

                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

                  {/* Project type badge */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/70 px-3 py-1.5 font-mono text-[9px] tracking-[0.16em] text-white backdrop-blur-md">
                      {project.group === 'software' ? (
                        <Code2
                          className="h-3 w-3"
                          aria-hidden="true"
                        />
                      ) : (
                        <Cpu
                          className="h-3 w-3"
                          aria-hidden="true"
                        />
                      )}

                      {project.group === 'software'
                        ? 'SOFTWARE'
                        : 'HARDWARE'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project information */}
              <div className="lg:col-span-5">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-black/45">
                  <span>{project.index}</span>

                  <span className="h-px w-6 bg-black/20" />

                  <span>{project.category}</span>

                  <span className="h-px w-6 bg-black/20" />

                  <span>{project.year}</span>
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-black sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-black/65 lg:text-[15px]">
                  {project.summary}
                </p>

                <ul
                  className="mt-6 flex flex-wrap gap-2"
                  aria-label={`${project.title} technologies`}
                >
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-black/12 bg-white px-3 py-1 text-xs font-medium text-black/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {project.link &&
                  project.link !== '#' &&
                  !project.link.includes('localhost') && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-6 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm font-medium text-black transition-all hover:border-black hover:bg-black hover:text-white"
                    >
                      View Project

                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </a>
                  )}
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="rounded-2xl border border-dashed border-black/15 px-6 py-20 text-center">
            <p className="text-sm text-black/50">
              No projects are currently available in this
              category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
