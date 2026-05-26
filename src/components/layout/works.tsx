'use client';

import { motion, Variants } from 'framer-motion';
import { WorkCard } from './work-card';

const WORKS = [
  {
    title: 'Tech Agency Website',
    description: "Redesigned a global fashion retailer's platform, boosting engagement and conversion rates with AI-driven solutions.",
    link: '#',
    imageSrc: '/Images/work_card1.png'
  },
  {
    title: 'Tech Agency Website',
    description: "Redesigned a global fashion retailer's platform, boosting engagement and conversion rates with AI-driven solutions.",
    link: '#',
    imageSrc: '/Images/work_card2.png'
  },
  {
    title: 'Tech Agency Website',
    description: "Redesigned a global fashion retailer's platform, boosting engagement and conversion rates with AI-driven solutions.",
    link: '#',
    imageSrc: '/Images/work_card3.png'
  },
  {
    title: 'Tech Agency Website',
    description: "Redesigned a global fashion retailer's platform, boosting engagement and conversion rates with AI-driven solutions.",
    link: '#',
    imageSrc: '/Images/work_card4.png'
  },
  {
    title: 'Tech Agency Website',
    description: "Redesigned a global fashion retailer's platform, boosting engagement and conversion rates with AI-driven solutions.",
    link: '#',
    imageSrc: '/Images/work_card5.png'
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

        {/* Horizontal Scrolling Cards */}
        <motion.div
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

      </div>
    </section>
  );
}
