'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export function WhyUsHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Content area */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-4xl px-4 sm:px-5 pt-32 sm:pt-40 lg:pt-48 pb-20 text-center"
      >
        {/* Main heading */}
        <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-[#111111] leading-[1.1] tracking-tight mt-6 flex justify-center flex-wrap gap-x-4">
          <span className="relative inline-block whitespace-nowrap">
            {/* Trust Icon Above 'Trust' */}
            <motion.svg
              animate={{
                scale: [1, 1.05, 1],
                filter: [
                  'drop-shadow(0px 0px 0px rgba(214, 37, 0, 0))',
                  'drop-shadow(0px 0px 6px rgba(214, 37, 0, 0.3))',
                  'drop-shadow(0px 0px 0px rgba(214, 37, 0, 0))'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-[-30%] sm:top-[-40%] left-[66%] -translate-x-1/2 w-[clamp(28px,6vw,48px)] h-[clamp(28px,6vw,48px)] z-10"
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path d="M9.09961 10.0667L27.9996 4V46C14.4989 40.4 9.09961 29.6667 9.09961 23.6V10.0667ZM46.8996 10.0667L27.9996 4V46C41.5003 40.4 46.8996 29.6667 46.8996 23.6V10.0667Z" fill="#D62500" />
            </motion.svg>
            {"Trust".split("").map((char, i) => (
              <motion.span
                key={`trust-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: i * 0.06 }}
              >
                {char}
              </motion.span>
            ))}
            {/* Red Underline Below 'Trust' */}
            <svg
              className="absolute -bottom-1 sm:-bottom-2 left-[-5%] w-[110%] h-[clamp(8px,1.5vw,12px)]"
              viewBox="0 0 120 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 24 * 0.06 }}
                d="M2 7C20 3 40 2 60 3C80 4 100 5 118 3"
                stroke="#D62500"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="inline">
            {" is Our Foundation.".split("").map((char, i) => (
              <motion.span
                key={`fnd-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: (5 + i) * 0.06 }}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeDown}
          className="mx-auto max-w-4xl mt-8 text-[15px] sm:text-[17px] leading-relaxed text-gray-600 px-2"
        >
          At Vheevid Hub, trust isn't just a word, it's the cornerstone of everything we do. We take the time to understand your goals, listen to your challenges, and deliver solutions with integrity and consistency.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeDown}
          className="flex flex-row justify-center gap-4 sm:gap-6 mt-10 px-2"
        >
          <Link
            href="/services"
            className="group inline-flex min-w-[150px] whitespace-nowrap items-center justify-center h-12 px-6 sm:px-8 text-[15px] font-medium text-white bg-[#D62500] rounded-full transition-all duration-200 hover:bg-[#b81f00] hover:shadow-lg hover:shadow-red-500/20 active:scale-[0.97]"
          >
            Explore More
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="group inline-flex min-w-[150px] whitespace-nowrap items-center justify-center h-12 px-6 sm:px-8 text-[15px] font-medium text-[#D62500] bg-white border-[1.5px] border-[#D62500] rounded-full transition-all duration-200 hover:bg-red-50 active:scale-[0.97]"
          >
            Contact Us
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
