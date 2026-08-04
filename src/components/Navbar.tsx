import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    let animationFrameId: number | null = null;

    const updateActiveSection = () => {
      setScrolled(window.scrollY > 24);

      const allLinks = NAV_LINKS;
      const navbarOffset = 110;

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isAtBottom) {
        setActiveLink('#contact');
        animationFrameId = null;
        return;
      }

      let currentSection = '';

      for (const link of allLinks) {
        const section = document.querySelector<HTMLElement>(link.href);

        if (!section) {
          continue;
        }

        const rectangle = section.getBoundingClientRect();

        if (
          rectangle.top <= navbarOffset &&
          rectangle.bottom > navbarOffset
        ) {
          currentSection = link.href;
          break;
        }
      }

      if (!currentSection) {
        let nearestDistance = Number.POSITIVE_INFINITY;

        for (const link of allLinks) {
          const section = document.querySelector<HTMLElement>(link.href);

          if (!section) {
            continue;
          }

          const distance = Math.abs(
            section.getBoundingClientRect().top - navbarOffset,
          );

          if (distance < nearestDistance) {
            nearestDistance = distance;
            currentSection = link.href;
          }
        }
      }

      setActiveLink(currentSection);
      animationFrameId = null;
    };

    const handleScroll = () => {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId =
        window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const targetSection = document.querySelector<HTMLElement>(href);

    if (!targetSection) {
      console.warn(`Navigation section not found: ${href}`);
      return;
    }

    setActiveLink(href);
    setOpen(false);

    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    window.history.replaceState(null, '', href);
  };

  const handleLogoClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();

    setActiveLink('');
    setOpen(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-black/10 bg-white/80 shadow-sm backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          onClick={handleLogoClick}
          className="flex items-center transition-opacity duration-300 hover:opacity-65"
          aria-label="Return to the top"
        >
          <img
            src="/images/logo.png"
            alt="SCJ logo"
            className="h-8 w-auto object-contain"
            draggable={false}
          />
        </a>

        <ul className="hidden items-center gap-4 md:flex lg:gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) =>
                    handleNavigation(event, link.href)
                  }
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative block py-2 text-[12px] font-medium transition-colors duration-300 lg:text-[13px] ${
                    isActive
                      ? 'text-black'
                      : 'text-black/55 hover:text-black'
                  }`}
                >
                  {link.label}

                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 h-px origin-left bg-black transition-all duration-300 ${
                      isActive
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-40'
                    }`}
                  />

                  <span
                    aria-hidden="true"
                    className={`absolute -right-2 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-black transition-all duration-300 ${
                      isActive
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          onClick={(event) =>
            handleNavigation(event, '#contact')
          }
          aria-current={
            activeLink === '#contact' ? 'page' : undefined
          }
          className={`hidden items-center gap-1.5 rounded-full bg-black px-4 py-2 text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98] md:inline-flex ${
            activeLink === '#contact'
              ? 'scale-[1.03] ring-4 ring-black/10'
              : ''
          }`}
        >
          Let&apos;s Talk

          <ArrowUpRight
            className="h-3.5 w-3.5"
            strokeWidth={2}
            aria-hidden="true"
          />
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-px w-5 bg-black transition-all duration-300 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />

            <span
              className={`h-px w-5 bg-black transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`h-px w-5 bg-black transition-all duration-300 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-black/10 bg-white transition-all duration-500 md:hidden ${
          open
            ? 'max-h-[600px] border-t opacity-100'
            : 'max-h-0 border-t-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-5 py-4">
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) =>
                    handleNavigation(event, link.href)
                  }
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'translate-x-1 bg-black text-white'
                      : 'text-black/70 hover:bg-black/[0.04] hover:text-black'
                  }`}
                >
                  {link.label}

                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'scale-100 bg-white opacity-100'
                        : 'scale-0 bg-black opacity-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}

          <li>
            <a
              href="#contact"
              onClick={(event) =>
                handleNavigation(event, '#contact')
              }
              className={`mt-3 flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-all duration-300 ${
                activeLink === '#contact'
                  ? 'translate-x-1 bg-black text-white'
                  : 'text-black/70 hover:bg-black/[0.04]'
              }`}
            >
              <span className="flex items-center gap-1.5">
                Let&apos;s Talk
                <ArrowUpRight
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                />
              </span>

              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                  activeLink === '#contact'
                    ? 'scale-100 bg-white opacity-100'
                    : 'scale-0 bg-black opacity-0'
                }`}
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}