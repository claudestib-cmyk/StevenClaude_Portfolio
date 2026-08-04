import {
  GraduationCap,
  MapPin,
  School,
} from 'lucide-react';

import { PROFILE } from '@/data/portfolio';

const educationItems = [
  {
    id: 'college',
    title: PROFILE.education.degree,
    school: PROFILE.education.school,
    year: '2021–2026',
    location: 'Tagbilaran City, Bohol, Philippines',
    icon: GraduationCap,
  },
  {
    id: 'secondary',
    title: 'Junior and Senior High School Education',
    school: 'Holy Spirit School of Tagbilaran',
    year: '2015–2021',
    location: 'Tagbilaran City, Bohol, Philippines',
    icon: School,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-black/10 bg-canvas-50/50 py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-[11px] tracking-[0.25em] text-black/45">
              06 / EDUCATION
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Formal grounding, hands-on practice.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-black/60">
              My academic journey developed a strong foundation in technology,
              engineering, problem-solving, software development, and embedded
              systems through both formal study and hands-on projects.
            </p>
          </div>

          <div className="space-y-5 lg:col-span-7">
            {educationItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.id}
                  className="rounded-2xl border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg sm:p-9"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-black text-white">
                        <Icon
                          className="h-5 w-5"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-black">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-black/60">
                          {item.school}
                        </p>
                      </div>
                    </div>

                    <span className="w-fit flex-none rounded-full border border-black/12 px-3 py-1 text-xs font-medium text-black/70">
                      {item.year}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-black/10 pt-5 text-sm text-black/55">
                    <MapPin
                      className="h-4 w-4 flex-none"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span>{item.location}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}