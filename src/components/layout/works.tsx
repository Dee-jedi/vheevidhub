'use client';

import { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { WorkCard } from './work-card';

const WORKS = [
  {
    title: 'Tech Agency',
    description: "Redesigned a global fashion retailer's platform, boosting engagement and conversion rates with AI-driven solutions.",
    link: 'https://www.vheevidhub.com.ng/',
    imageSrc: '/Images/pro_des1.png'
  },
  {
    title: 'Real Estate',
    description: "Redesigned a global fashion retailer's platform, boosting engagement and conversion rates with AI-driven solutions.",
    link: 'https://www.behance.net/gallery/236594475/Virtual-InspectionReal-Estate',
    imageSrc: '/Images/pro_des2.png'
  },
  {
    title: 'Workspace',
    description: "Redesigned a global fashion retailer's platform, boosting engagement and conversion rates with AI-driven solutions.",
    link: 'https://avenworkspace.com/',
    imageSrc: '/Images/pro_des3.png'
  },
  {
    title: 'Local Foodstuffs App',
    description: 'Seamless mobile app for local foodstuffs delivery, making ordering faster, easier, and more convenient for customers.',
    link: 'https://www.behance.net/gallery/232950641/Nigerian-Local-Foodstuff-Mobile-App',
    imageSrc: '/Images/pro_des4.png'
  }
];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

export function Works() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll amount roughly equal to a card width + gap
      const scrollAmount = direction === 'left' ? -420 : 420;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[#F3F3F4] py-20 sm:py-32 overflow-hidden">
      <div className="w-full">

        {/* Header Content */}
        <div className="text-center mb-16 sm:mb-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#111111] leading-tight tracking-tight mb-6">
            {"Our ".split("").map((char, i) => (
              <motion.span
                key={`our-works-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: i * 0.06 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <span className="relative inline-block whitespace-nowrap font-bold">
              {"Works".split("").map((char, i) => (
                <motion.span
                  key={`works-${i}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: (4 + i) * 0.06 }}
                >
                  {char}
                </motion.span>
              ))}
              {/* Red underline */}
              <svg
                className="absolute -bottom-1 left-0 w-full h-[clamp(6px,1vw,10px)]"
                viewBox="0 0 120 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 9 * 0.06 }}
                  d="M2 7C20 3 40 2 60 3C80 4 100 5 118 3"
                  stroke="#D62500"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto max-w-3xl text-[15px] sm:text-[17px] leading-relaxed text-gray-500"
          >
            Our blend of creativity and technical finesse ensures bespoke solutions that elevate brands and captivate audiences, leaving an unforgettable imprint on the design landscape.
          </motion.p>
        </div>

        {/* Horizontal Scrolling Cards Wrapper */}
        <div className="relative">
          <motion.div
            ref={scrollRef}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="w-full pl-8 sm:pl-12 md:pl-16 lg:pl-[calc(50vw-480px)] pr-8 sm:pr-12 md:pr-16 lg:pr-[calc(50vw-480px)] flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory pb-16 pt-4 hide-scrollbar cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {WORKS.map((work, index) => (
              <WorkCard key={index} {...work} />
            ))}
            {/* Spacer at the end so the last card doesn't touch the very edge */}
            <div className="w-px shrink-0 sm:w-[24px]" />
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-6 mt-4 sm:mt-8 px-4">
            <button
              onClick={() => scroll('left')}
              className="p-3 sm:p-4 rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-[#D62500] hover:border-[#D62500] hover:text-white transition-all duration-300 focus:outline-none shadow-sm hover:shadow-md"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 sm:p-4 rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-[#D62500] hover:border-[#D62500] hover:text-white transition-all duration-300 focus:outline-none shadow-sm hover:shadow-md"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
