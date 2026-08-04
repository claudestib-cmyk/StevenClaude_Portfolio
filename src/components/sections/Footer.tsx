import { PROFILE, NAV_LINKS } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center">
              <img
                src="/images/logo.png"
                alt="SCJ logo"
                className="h-9 w-auto object-contain"
                draggable={false}
              />
            </div>
            <p className="mt-2 text-xs text-black/50">
              {PROFILE.fullName} — {PROFILE.primaryRole}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-black/60 transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] tracking-[0.2em] text-black/40">
            © {new Date().getFullYear()} {PROFILE.fullName.toUpperCase()}
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-black/40">
            BUILT WITH CARE · BOHOL · PH
          </p>
        </div>
      </div>
    </footer>
  );
}
