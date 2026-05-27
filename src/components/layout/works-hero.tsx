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
            Delivers.
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
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.7213 18.9161L21.8371 22.9526C22.888 26.7551 23.4123 28.6574 24.9571 29.5219C26.5019 30.3886 28.4628 29.8772 32.3844 28.8589L36.5445 27.7756C40.4661 26.7572 42.4269 26.2481 43.3196 24.7509C44.2123 23.2516 43.6879 21.3492 42.6349 17.5467L41.5213 13.5124C40.4704 9.70772 39.944 7.80539 38.4013 6.94089C36.8543 6.07422 34.8934 6.58555 30.9718 7.60605L26.8118 8.68505C22.8901 9.70339 20.9293 10.2147 20.0388 11.7141C19.1461 13.2112 19.6705 15.1136 20.7213 18.9161Z" fill="#D62500"/>
              <path d="M4.93391 11.3703C4.99099 11.1645 5.08808 10.972 5.21961 10.8038C5.35115 10.6355 5.51455 10.4949 5.70048 10.3899C5.88642 10.2848 6.09123 10.2175 6.30321 10.1916C6.5152 10.1658 6.73019 10.182 6.93591 10.2393L10.6257 11.262C11.6034 11.5281 12.4955 12.0428 13.2153 12.7558C13.9352 13.4688 14.4583 14.3559 14.7337 15.331L19.3942 32.2006L19.7366 33.3858C21.1184 33.8951 22.2828 34.8644 23.0342 36.131L23.7059 35.923L42.9242 30.9288C43.1308 30.875 43.346 30.8625 43.5574 30.8918C43.7688 30.9212 43.9724 30.9919 44.1565 31.1C44.3406 31.208 44.5016 31.3513 44.6303 31.5215C44.759 31.6918 44.853 31.8857 44.9067 32.0923C44.9605 32.2989 44.9731 32.514 44.9437 32.7254C44.9143 32.9369 44.8436 33.1404 44.7356 33.3245C44.6275 33.5086 44.4843 33.6696 44.314 33.7984C44.1438 33.9271 43.9498 34.021 43.7432 34.0748L24.5964 39.0495L23.8814 39.2705C23.8684 42.0221 21.9682 44.5398 19.0931 45.2851C15.6481 46.1821 12.1056 44.1975 11.1826 40.8565C10.2596 37.5155 12.3049 34.077 15.7499 33.1821C15.9218 33.1388 16.093 33.1013 16.2634 33.0695L11.6007 16.1955C11.4747 15.7622 11.2389 15.3689 10.9163 15.0535C10.5936 14.7381 10.195 14.5112 9.75907 14.395L6.06707 13.3701C5.86133 13.3133 5.66882 13.2164 5.50051 13.0851C5.33221 12.9539 5.19142 12.7907 5.08619 12.605C4.98096 12.4193 4.91335 12.2146 4.88722 12.0028C4.86109 11.7909 4.87696 11.576 4.93391 11.3703Z" fill="#D62500"/>
            </motion.svg>
          </span>
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
