import { PROFILE } from '@/data/portfolio';
import { MapPin, GraduationCap, Cpu, Code2 } from 'lucide-react';

export default function About() {
  const facts = [
    { icon: MapPin, label: 'Based in', value: PROFILE.location },
    {
      icon: GraduationCap,
      label: 'Education',
      value: `${PROFILE.education.degree}, ${PROFILE.education.year}`,
    },
    { icon: Code2, label: 'Focus', value: PROFILE.primaryRole },
    { icon: Cpu, label: 'Also', value: 'Embedded Systems Developer' },
  ];

  return (
    <section
      id="about"
      className="border-t border-black/10 bg-canvas-50/50 py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-[11px] tracking-[0.25em] text-black/45">
              04 / ABOUT
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
              A computer engineer who works across the stack and the bench.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-5 text-[15px] leading-relaxed text-black/70 lg:text-base">
              <p>
                {PROFILE.fullName} is a {PROFILE.primaryRole.toLowerCase()} and
                embedded systems developer from {PROFILE.location}. He studied{' '}
                {PROFILE.education.degree} at {PROFILE.education.school} and
                graduates in {PROFILE.education.year.replace('Graduated ', '')}.
              </p>
              <p>
               I enjoy creating websites, applications, and intelligent systems that solve real problems and 
               connect digital experiences with real-world functionality. I approach every project with curiosity,
                problem-solving, and attention to detail, aiming to develop solutions that are clean, efficient, reliable, 
                accessible, and easy to use.
              </p>
              <p>
                Beyond software development, I also enjoy repairing phones and laptops. 
                This hands-on interest keeps me connected to the hardware side of technology and strengthens 
                my understanding of troubleshooting, system behavior, electronic components, and the technical 
                details behind the devices people use every day.
              </p>
            </div>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 sm:grid-cols-2">
              {facts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label} className="bg-white p-5">
                    <dt className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-black/45">
                      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                      {fact.label}
                    </dt>
                    <dd className="mt-2 text-sm font-medium text-black">
                      {fact.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
