'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export function WorksHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24">
      {/* Container */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-5xl px-4 sm:px-6 text-center"
      >
        {/* Main Heading */}
        <motion.h1
          variants={fadeDown}
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-[#111111] leading-[1.1] tracking-tight"
        >
          Work That <span className="relative inline-block whitespace-nowrap">
            Delivers,
            {/* Red Underline (Slightly tilted) */}
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-[105%] h-[clamp(10px,2vw,14px)] -rotate-2"
              viewBox="0 0 120 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2 9C20 4 40 2 60 4C80 6 100 8 118 4"
                stroke="#D62500"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            {/* Delivery Cart Icon */}
            <motion.svg
              animate={{
                y: [0, -5, 0],
                x: [0, 5, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-[-15%] sm:top-[-20%] right-[-15%] sm:right-[-18%] w-[clamp(30px,5vw,48px)] h-[clamp(30px,5vw,48px)] z-10"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Speed Lines */}
              <path d="M12 28L4 30M16 34L8 38M8 22C6 22 2 24 2 24" stroke="#D62500" strokeWidth="3" strokeLinecap="round" />
              {/* Hand truck base */}
              <path d="M14 40L20 40L24 16L20 8" stroke="#D62500" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              {/* Wheel */}
              <circle cx="16" cy="42" r="4" fill="#D62500" />
              {/* Tilted Box */}
              <rect x="18" y="14" width="20" height="20" rx="2" transform="rotate(15 18 14)" fill="#D62500" />
            </motion.svg>
          </span>
          <br />
          Not Just Impress.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeDown}
          className="mx-auto max-w-[800px] mt-8 text-[15px] sm:text-[17px] lg:text-[19px] leading-[1.6] text-gray-500 px-2"
        >
          We combine creative design with strong technical skills to build practical solutions that deliver real, measurable results for businesses.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeDown}
          className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 mt-12 px-2"
        >
          {/* Explore More Button */}
          <Link
            href="#explore"
            className="group flex w-auto min-w-[160px] sm:min-w-[180px] items-center justify-center h-12 sm:h-14 px-6 sm:px-8 text-[14px] sm:text-[15px] font-medium text-white bg-[#D62500] rounded-full transition-all duration-200 hover:bg-[#b81f00] hover:shadow-lg hover:shadow-red-500/20 active:scale-95"
          >
            Explore More
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="group flex w-auto min-w-[160px] sm:min-w-[180px] items-center justify-center h-12 sm:h-14 px-6 sm:px-8 text-[14px] sm:text-[15px] font-medium text-[#D62500] bg-transparent border-2 border-[#D62500] rounded-full transition-all duration-200 hover:bg-[#FFF0EB] active:scale-95"
          >
            Contact Us
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
