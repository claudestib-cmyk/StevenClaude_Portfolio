import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
} from 'lucide-react';
import {
  PROFILE,
  SOCIAL_LINKS,
} from '@/data/portfolio';

export default function Contact() {
  const cvPath =
    '/files/Steven-Claude-Jumao-as-CV.pdf';

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-black/10 bg-canvas-50/50 py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main contact information */}
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] tracking-[0.25em] text-black/45">
              09 / CONTACT
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
              Let&apos;s build something{' '}
              <span className="text-black/40">
                that works.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-black/65">
              Open to full-stack and embedded systems
              roles, collaborations, and project work. For
              formal inquiries, contact me through email or
              download my CV to learn more about my
              experience and technical background.
            </p>

            {/* Main action buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${PROFILE.email}`}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-black px-6 py-4 text-base font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
              >
                <Mail
                  className="h-5 w-5"
                  strokeWidth={2}
                  aria-hidden="true"
                />

                <span>Send an Email</span>

                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>

              <a
                href={cvPath}
                download="Steven-Claude-Jumao-as-CV.pdf"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-black/20 bg-white px-6 py-4 text-base font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white hover:shadow-md active:translate-y-0 active:scale-[0.98]"
              >
                <Download
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5"
                  strokeWidth={2}
                  aria-hidden="true"
                />

                <span>Download CV</span>
              </a>
            </div>

            {/* Email address */}
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-6 inline-block break-all text-sm text-black/55 transition-colors hover:text-black"
            >
              {PROFILE.email}
            </a>

            {/* Location */}
            <div className="mt-4 flex items-center gap-2 text-sm text-black/55">
              <MapPin
                className="h-4 w-4"
                strokeWidth={2}
                aria-hidden="true"
              />

              {PROFILE.location}
            </div>
          </div>

          {/* Social links */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
              Elsewhere
            </h3>

            <ul className="mt-5 flex flex-col gap-2.5">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;

                const isExternal =
                  !link.href.startsWith('mailto:') &&
                  !link.href.startsWith('tel:');

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        isExternal
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        isExternal
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="group flex items-center justify-between rounded-xl border border-black/12 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/30 hover:bg-black/[0.03] hover:shadow-sm"
                    >
                      <span className="flex items-center gap-3 text-sm font-medium text-black">
                        <Icon
                          className="h-4 w-4"
                          strokeWidth={2}
                          aria-hidden="true"
                        />

                        {link.label}
                      </span>

                      <ArrowUpRight
                        className="h-4 w-4 text-black/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Secondary CV card */}
            <a
              href={cvPath}
              download="Steven-Claude-Jumao-as-CV.pdf"
              className="group mt-5 flex items-center justify-between rounded-xl border border-black bg-black px-5 py-4 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex items-center gap-3 text-sm font-medium">
                <Download
                  className="h-4 w-4"
                  strokeWidth={2}
                  aria-hidden="true"
                />

                Download My CV
              </span>

              <span className="font-mono text-[10px] tracking-[0.15em] text-white/55">
                PDF
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}