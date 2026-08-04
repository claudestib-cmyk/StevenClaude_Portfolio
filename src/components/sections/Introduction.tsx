import { useEffect, useRef, useState } from 'react';
import { PROFILE, TOOLKIT } from '@/data/portfolio';

type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

function CountUp({
  end,
  duration = 1600,
  suffix = '',
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const cancelCurrentAnimation = () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    const startAnimation = () => {
      cancelCurrentAnimation();

      if (prefersReducedMotion) {
        setCount(end);
        return;
      }

      setCount(0);

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Smooth ease-out animation.
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.round(end * easedProgress);

        setCount(currentCount);

        if (progress < 1) {
          animationFrameRef.current =
            window.requestAnimationFrame(animate);
        } else {
          setCount(end);
          animationFrameRef.current = null;
        }
      };

      animationFrameRef.current =
        window.requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Restart whenever the number returns to the viewport.
          startAnimation();
        } else {
          // Reset so the animation can replay on re-entry.
          cancelCurrentAnimation();
          setCount(0);
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelCurrentAnimation();
    };
  }, [duration, end]);

  return (
    <div
      ref={elementRef}
      className="text-3xl font-bold tracking-tight text-black"
      aria-label={`${end}${suffix}`}
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function Introduction() {
  return (
   <section
  id="introduction"
  className="scroll-mt-24 border-t border-black/10 bg-white py-24 sm:py-32 lg:py-40"
>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <span className="font-mono text-[11px] tracking-[0.25em] text-black/45">
              01 / INTRODUCTION
            </span>
          </div>

          <div className="lg:col-span-9">
            <p className="text-2xl font-medium leading-snug tracking-tight text-black sm:text-3xl lg:text-[2.6rem] lg:leading-[1.18]">
              I&apos;m {PROFILE.fullName.split(' ').slice(0, 2).join(' ')} — a{' '}
              <span className="text-black/45">
                {PROFILE.primaryRole.toLowerCase()}
              </span>{' '}
              and{' '}
              <span className="text-black/45">
                embedded systems developer
              </span>{' '}
              based in {PROFILE.location}. I build responsive digital products,
              full-stack applications, and embedded systems that connect
              thoughtful software with practical engineering.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div>
                <CountUp
                  end={7}
                  duration={1400}
                  suffix="+"
                />

                <p className="mt-2 text-sm text-black/55">
                  Major projects shipped across software and hardware
                </p>
              </div>

              <div>
                <CountUp
                  end={2}
                  duration={1000}
                />

                <p className="mt-2 text-sm text-black/55">
                  Disciplines — full-stack web and embedded systems
                </p>
              </div>

              <div>
                <CountUp
                  end={TOOLKIT.length}
                  duration={1600}
                  suffix="+"
                />

                <p className="mt-2 text-sm text-black/55">
                  Tools and technologies used across software and hardware
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}