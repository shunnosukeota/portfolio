'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Logo from './components/Logo';
import About from './components/about';
import Works from './components/works';
import Skills from './components/skills';
import Contact from './components/contact';

const MENU_ITEMS = ['About', 'Works', 'Skills', 'Contact'];

export default function Home() {
  const componentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    componentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      componentRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <div>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pt-20"></div>
        <Logo />
        <main className="m-auto mt-12 mb-8 lg:grid w-[85vw] lg:w-[75vw] lg:mb-0 text-left">
          {MENU_ITEMS.map((item, index) => {
            const isContact = item === 'Contact';
            const Component = item === 'About' ? About : item === 'Works' ? Works : item === 'Skills' ? Skills : item === 'Contact' ? Contact : null;

            return (
              <div 
                key={item} 
                ref={(el) => (componentRefs.current[index] = el)}
                className={`${item === 'About' ? 'mt-10' : ''} component shadow-2xl opacity-0`}
              >
                <h2 className="animate-tracking-in-expand mb-3 text-5xl lg:text-8xl">
                  {isContact ? item : <Link href={`/${item.toLowerCase()}`} rel="noopener noreferrer" className="hover:opacity-30 transition-all duration-500">{item}</Link>}
                </h2>

                {/* Display corresponding component */}
                {Component && <Component />}
                
                {/* Link for non-contact items */}
                {!isContact && (
                  <Link
                    href={`/${item.toLowerCase()}`}
                    rel="noopener noreferrer"
                    className="w-fit opacity-70 text-2xl border-b-2 border-black hover:opacity-30 hover:border-transparent transition-all duration-500"
                  >
                    Go {item}
                  </Link>
                )}
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
}
