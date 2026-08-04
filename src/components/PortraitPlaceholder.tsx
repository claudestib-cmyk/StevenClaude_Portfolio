import { useEffect, useRef } from 'react';

type Props = {
  className?: string;
};

/**
 * Portrait placeholder for Steven Claude B. Jumao-as.
 *
 * No transparent photo of Steven is available yet, so this renders a clean
 * monochrome bust silhouette cutout that keeps the landing-page composition
 * intact. To use Steven's real portrait:
 *   1. Add the image to /public (e.g. public/portrait.png) — PNG with a
 *      transparent background works best.
 *   2. In src/components/Hero.tsx, set PORTRAIT_SRC to '/portrait.png'.
 *   3. Remove or replace this component with an <img className="portrait-cutout" />.
 */
export default function PortraitPlaceholder({ className = '' }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);

  // Very subtle pointer-follow, desktop only, disabled for reduced motion / touch.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        wrap.style.transform = `translate3d(${dx * 14}px, ${dy * 10}px, 0)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      wrap.style.transform = 'translate3d(0,0,0)';
    };

    window.addEventListener('pointermove', onMove);
    wrap.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      wrap?.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`portrait-cutout pointer-events-none select-none ${className}`}
      aria-label="Portrait placeholder — replace with Steven's professional portrait"
      role="img"
    >
      <svg
        viewBox="0 0 520 640"
        className="h-full w-full"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="bustGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1f1f1f" />
            <stop offset="55%" stopColor="#161616" />
            <stop offset="100%" stopColor="#0d0d0d" />
          </linearGradient>
          <radialGradient id="headShade" cx="50%" cy="38%" r="55%">
            <stop offset="0%" stopColor="#2b2b2b" />
            <stop offset="100%" stopColor="#161616" />
          </radialGradient>
        </defs>
        {/* shoulders / torso in a dark neutral shirt */}
        <path
          d="M80 640 C80 470 180 410 260 410 C340 410 440 470 440 640 L440 660 L80 660 Z"
          fill="url(#bustGrad)"
        />
        {/* neck */}
        <path
          d="M222 430 C222 388 298 388 298 430 L298 470 L222 470 Z"
          fill="#141414"
        />
        {/* head */}
        <circle cx="260" cy="250" r="118" fill="url(#headShade)" />
        {/* soft inner light to give form */}
        <ellipse cx="232" cy="210" rx="46" ry="58" fill="#2f2f2f" opacity="0.55" />
      </svg>
    </div>
  );
}
