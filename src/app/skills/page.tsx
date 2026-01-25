'use client';

import { useEffect, useRef } from 'react';

export default function Skills() {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="skills-page w-[90vw] lg:w-[80vw] mt-[8rem]">
      <div className="relative z-10 p-6">
        <h2 className="animate-fade-in animation-delay-300 m-auto max-md:mb-20 text-5xl lg:text-8xl">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 md:gap-8 max-lg:text-sm">
            <img ref={(el) => (imageRefs.current[0] = el)} className="lg:mt-[5rem] w-[25rem] lg:w-[30rem] max-md:order-2" src='/skills/aws-certified-solutions-architect-associate.png' alt='AWS Certified Solutions Architect Associate'></img>
            <img ref={(el) => (imageRefs.current[1] = el)} className="mt-[5rem] w-[25rem] lg:w-[30rem] max-md:order-2" src='/skills/databricks-dataengineer-asociate.png' alt='Databricks Data Engineer Associate'></img>
            <img ref={(el) => (imageRefs.current[2] = el)} className="mt-[5rem] w-[25rem] lg:w-[30rem] max-md:order-2" src='/skills/SF-Certified_B2C-Commerce-Cloud-Dev.png' alt='Salesforce Certified B2C Commerce Cloud Developer'></img>
            <img ref={(el) => (imageRefs.current[3] = el)} className="mt-[5rem] w-[25rem] lg:w-[30rem] max-md:order-2" src='/skills/SF-Certified_Platform-Admin.png' alt='Salesforce Certified Platform Admin'></img>
          </div>
      </div>
      <div className="text-center mx-auto">
        <p className="comming-soon mt-8">
          Coming Soon
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </p>
      </div>
    </div>
  );
}
