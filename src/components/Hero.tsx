import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS } from '@/data/portfolio';

const PORTRAIT_SRC =
  '/images/STEVEN_CLAUDE_JUMAO-AS_GRAD_PIC-removebg-preview copy.png';

export default function Hero() {
  const portraitWrapRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const portraitWrapper = portraitWrapRef.current;

    if (!portraitWrapper) {
      return;
    }

    const hasFinePointer = window.matchMedia(
      '(pointer: fine)',
    ).matches;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    let animationFrame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      const rectangle =
        portraitWrapper.getBoundingClientRect();

      const centerX =
        rectangle.left + rectangle.width / 2;

      const centerY =
        rectangle.top + rectangle.height / 2;

      const horizontalDistance =
        (event.clientX - centerX) / rectangle.width;

      const verticalDistance =
        (event.clientY - centerY) / rectangle.height;

      window.cancelAnimationFrame(animationFrame);

      animationFrame = window.requestAnimationFrame(() => {
        portraitWrapper.style.transform = `translate3d(
          ${horizontalDistance * 14}px,
          ${verticalDistance * 10}px,
          0
        )`;
      });
    };

    const resetPortraitPosition = () => {
      window.cancelAnimationFrame(animationFrame);

      portraitWrapper.style.transform =
        'translate3d(0, 0, 0)';
    };

    window.addEventListener(
      'pointermove',
      handlePointerMove,
    );

    portraitWrapper.addEventListener(
      'pointerleave',
      resetPortraitPosition,
    );

    return () => {
      window.removeEventListener(
        'pointermove',
        handlePointerMove,
      );

      portraitWrapper.removeEventListener(
        'pointerleave',
        resetPortraitPosition,
      );

      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative px-3 pb-4 pt-20 sm:px-5 lg:flex lg:min-h-screen lg:items-center lg:justify-center lg:px-6 lg:pb-6"
    >
      <div
        className={`relative w-full max-w-[1500px] overflow-hidden rounded-[22px] border border-black/10 bg-canvas-50/60 transition-opacity duration-1000 sm:rounded-[26px] ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Mobile and tablet layout */}
        <div className="relative flex flex-col lg:hidden">
          {/* Portfolio label */}
          <div className="flex justify-end px-5 pt-5 sm:px-8 sm:pt-7">
            <span
              className="font-mono text-[9px] tracking-[0.2em] text-black/40 sm:text-[10px]"
              style={{
                animation:
                  'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both',
                animationDelay: '0.2s',
              }}
            >
              SCJ / PORTFOLIO / 2026
            </span>
          </div>

          {/* Mobile name */}
          <div className="relative z-10 px-4 pt-12 text-center sm:px-8 sm:pt-14">
            <h1 className="flex flex-col items-center">
              <span className="reveal-mask">
                <span
                  className="text-outline-lg block whitespace-nowrap text-[16vw] font-extrabold leading-[0.88] tracking-name sm:text-[12vw]"
                  style={{
                    animation:
                      'maskUp 1s cubic-bezier(0.22,1,0.36,1) both',
                    animationDelay: '0.15s',
                  }}
                >
                  STEVEN
                </span>
              </span>

              <span className="reveal-mask mt-3">
                <span
                  className="block whitespace-nowrap text-[14.5vw] font-extrabold leading-[0.88] tracking-name text-black sm:text-[11vw]"
                  style={{
                    animation:
                      'maskUp 1s cubic-bezier(0.22,1,0.36,1) both',
                    animationDelay: '0.28s',
                  }}
                >
                  JUMAO-AS
                </span>
              </span>
            </h1>
          </div>

          {/* Mobile role and button */}
          <div
            className="relative z-20 px-5 pt-10 text-center sm:px-8 sm:pt-12"
            style={{
              animation:
                'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both',
              animationDelay: '0.45s',
            }}
          >
            <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
              {PROFILE.primaryRole}
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-sm font-medium leading-relaxed text-black/55">
              {PROFILE.secondaryRole}
            </p>

            <a
              href="#work"
              className="group mt-5 inline-flex min-h-[46px] items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97]"
            >
              View My Work

              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Mobile portrait */}
          <div className="relative z-10 mt-2 flex justify-center overflow-hidden px-5 sm:mt-4 sm:px-8">
            <div
              className="h-[300px] w-full max-w-[330px] sm:h-[420px] sm:max-w-[420px]"
              style={{
                animation:
                  'clipReveal 1.1s cubic-bezier(0.22,1,0.36,1) both',
                animationDelay: '0.4s',
              }}
            >
              <img
                src={PORTRAIT_SRC}
                alt="Portrait of Steven Claude B. Jumao-as"
                className="h-full w-full scale-[1.08] object-contain object-bottom drop-shadow-lg sm:scale-100"
                draggable={false}
              />
            </div>
          </div>

          {/* Mobile social links */}
          <div className="relative z-20 border-t border-black/10 px-5 py-5 sm:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {SOCIAL_LINKS.map((link, index) => {
                const Icon = link.icon;

                const isExternal =
                  !link.href.startsWith('mailto:') &&
                  !link.href.startsWith('tel:');

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      isExternal ? '_blank' : undefined
                    }
                    rel={
                      isExternal
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-black/12 bg-white px-4 py-2.5 text-xs font-medium text-black transition-all hover:border-black/35 hover:bg-black/[0.03] sm:text-sm"
                    style={{
                      animation:
                        'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both',
                      animationDelay: `${
                        0.65 + index * 0.08
                      }s`,
                    }}
                  >
                    <Icon
                      className="h-4 w-4"
                      strokeWidth={2}
                      aria-hidden="true"
                    />

                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="relative hidden min-h-[calc(100svh-120px)] lg:block">
          {/* Technical label */}
          <div className="pointer-events-none absolute right-7 top-7 z-20">
            <span
              className="font-mono text-[10px] tracking-[0.25em] text-black/40"
              style={{
                animation:
                  'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both',
                animationDelay: '0.6s',
              }}
            >
              SCJ / PORTFOLIO / 2026
            </span>
          </div>

          {/* Desktop name */}
          <div className="absolute inset-x-0 top-[8%] z-0 flex items-start justify-center px-2">
            <h1 className="flex items-baseline justify-center text-center">
              <span className="reveal-mask">
                <span
                  className="text-outline-lg block text-[11.5vw] font-extrabold leading-[0.88] tracking-name xl:text-[10.5vw]"
                  style={{
                    animation:
                      'maskUp 1s cubic-bezier(0.22,1,0.36,1) both',
                    animationDelay: '0.15s',
                  }}
                >
                  STEVEN
                </span>
              </span>

              <span className="reveal-mask ml-7">
                <span
                  className="block text-[11.5vw] font-extrabold leading-[0.88] tracking-name text-black xl:text-[10.5vw]"
                  style={{
                    animation:
                      'maskUp 1s cubic-bezier(0.22,1,0.36,1) both',
                    animationDelay: '0.32s',
                  }}
                >
                  JUMAO-AS
                </span>
              </span>
            </h1>
          </div>

          {/* Desktop portrait */}
          <div className="absolute inset-0 z-10 flex items-end justify-center">
            <div
              ref={portraitWrapRef}
              className="pointer-events-none h-[65vh] max-h-[720px] min-h-[420px] w-[38vw] max-w-[520px] will-change-transform"
              style={{
                animation:
                  'clipReveal 1.1s cubic-bezier(0.22,1,0.36,1) both',
                animationDelay: '0.45s',
              }}
            >
              <img
                src={PORTRAIT_SRC}
                alt="Portrait of Steven Claude B. Jumao-as"
                className="h-full w-full object-contain object-bottom drop-shadow-lg"
                draggable={false}
              />
            </div>
          </div>

          {/* Desktop role and button */}
          <div
            className="absolute bottom-10 left-10 z-20 max-w-[360px]"
            style={{
              animation:
                'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both',
              animationDelay: '0.7s',
            }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-black">
              {PROFILE.primaryRole}
            </h2>

            <p className="mt-1 text-sm font-medium text-black/55">
              {PROFILE.secondaryRole}
            </p>

            <a
              href="#work"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.97]"
            >
              View My Work

              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Desktop social links */}
          <div className="absolute bottom-10 right-10 z-20 flex flex-col items-end gap-2.5">
            {SOCIAL_LINKS.map((link, index) => {
              const Icon = link.icon;

              const isExternal =
                !link.href.startsWith('mailto:') &&
                !link.href.startsWith('tel:');

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    isExternal ? '_blank' : undefined
                  }
                  rel={
                    isExternal
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="group flex items-center gap-2.5 rounded-full border border-black/12 bg-white px-4 py-2.5 text-sm font-medium text-black transition-all hover:-translate-x-[3px] hover:border-black/35 hover:bg-black/[0.03]"
                  style={{
                    animation:
                      'slideInRight 0.7s cubic-bezier(0.22,1,0.36,1) both',
                    animationDelay: `${
                      0.85 + index * 0.09
                    }s`,
                  }}
                >
                  <Icon
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}