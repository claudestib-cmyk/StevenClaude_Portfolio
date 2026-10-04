import { useEffect } from 'react';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/sections/Introduction';
import SelectedWork from '@/components/sections/SelectedWork';
import Expertise from '@/components/sections/Expertise';
import About from '@/components/sections/About';
import TechnicalToolkit from '@/components/sections/TechnicalToolkit';
import Education from '@/components/sections/Education';
import DevelopmentJourney from '@/components/sections/DevelopmentJourney';
import WorkProcess from '@/components/sections/WorkProcess';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function App() {
  useEffect(() => {
    const root = document.documentElement;

    const animatedElements =
      document.querySelectorAll<HTMLElement>('[data-scroll-fade]');

    let previousScrollPosition = window.scrollY;
    let ticking = false;

    root.dataset.scrollDirection = 'down';

    const updateScrollDirection = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > previousScrollPosition) {
        root.dataset.scrollDirection = 'down';
      } else if (currentScrollPosition < previousScrollPosition) {
        root.dataset.scrollDirection = 'up';
      }

      previousScrollPosition = Math.max(currentScrollPosition, 0);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            element.classList.add('is-visible');
          } else {
            element.classList.remove('is-visible');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      delete root.dataset.scrollDirection;
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black antialiased">
      <Navbar />

      <main>
        {/* HERO */}
        <div
          className="scroll-fade overflow-visible"
          data-scroll-fade
        >
          <Hero />
        </div>

        {/* INTRODUCTION */}
        <div className="scroll-fade" data-scroll-fade>
          <Introduction />
        </div>

        {/* SELECTED WORK */}
        <div className="scroll-fade" data-scroll-fade>
          <SelectedWork />
        </div>

        {/* EXPERTISE */}
        <div className="scroll-fade" data-scroll-fade>
          <Expertise />
        </div>

        {/* ABOUT */}
        <div className="scroll-fade" data-scroll-fade>
          <About />
        </div>

        {/* TECHNICAL TOOLKIT */}
        <div className="scroll-fade" data-scroll-fade>
          <TechnicalToolkit />
        </div>

        {/* EDUCATION */}
        <div className="scroll-fade" data-scroll-fade>
          <Education />
        </div>

        {/* DEVELOPMENT JOURNEY */}
        <div className="scroll-fade" data-scroll-fade>
          <DevelopmentJourney />
        </div>

        {/* WORK PROCESS */}
        <div className="scroll-fade" data-scroll-fade>
          <WorkProcess />
        </div>

        {/* CONTACT */}
        <div className="scroll-fade" data-scroll-fade>
          <Contact />
        </div>
      </main>

      {/* FOOTER */}
      <div className="scroll-fade" data-scroll-fade>
        <Footer />
      </div>
    </div>
  );
}