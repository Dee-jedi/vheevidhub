'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] }, // Elegant drop-in bezier
  },
};

const HERO_IMAGES = [
  { src: '/Images/hero_pix1.jpg', alt: 'Creative design work', rotate: 16, zIndex: 1 },
  { src: '/Images/hero_pix2.png', alt: 'Software development', rotate: 16, zIndex: 2 },
  { src: '/Images/hero_pix3.jpg', alt: 'Book and video editing', rotate: 16, zIndex: 3 },
  { src: '/Images/hero_pix4.jpg', alt: 'Brand building', rotate: 16, zIndex: 4 },
  { src: '/Images/hero_pix5.jpg', alt: 'Learning and growth', rotate: 16, zIndex: 5 },
];

const WORDS = ["Edit.", "Brand.", "Learn."];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Content area */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-4xl px-4 sm:px-5 pt-28 sm:pt-36 lg:pt-40 pb-12 text-center"
      >
        {/* Main heading */}
        <motion.h1
          variants={fadeDown}
          className="text-[clamp(2.2rem,8vw,4.5rem)] font-bold text-[#111111] leading-[1.1] tracking-tight mt-6"
        >
          <span className="relative inline-block whitespace-nowrap">
            {/* Exact Provided Star Icon Above 'Design' — Subtle Pulsating & Glowing */}
            <motion.svg
              animate={{
                scale: [1, 1.08, 1],
                filter: [
                  'drop-shadow(0px 0px 0px rgba(214, 37, 0, 0))',
                  'drop-shadow(0px 0px 8px rgba(214, 37, 0, 0.35))',
                  'drop-shadow(0px 0px 0px rgba(214, 37, 0, 0))'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-[-28%] xs:-top-[35%] sm:top-[-35%] left-[38%] -translate-x-1/2 w-[clamp(24px,5vw,52px)] h-[clamp(24px,5vw,52px)]"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3062 0.61636C25.4037 -0.205453 26.5963 -0.205453 26.6939 0.61636L27.5119 7.51063C28.5682 16.413 35.587 23.4318 44.4893 24.4881L51.3836 25.3062C52.2055 25.4037 52.2055 26.5963 51.3836 26.6939L44.4893 27.5119C35.587 28.5682 28.5682 35.587 27.5119 44.4893L26.6939 51.3836C26.5963 52.2055 25.4037 52.2055 25.3062 51.3836L24.4881 44.4893C23.4318 35.587 16.413 28.5682 7.51063 27.5119L0.61636 26.6939C-0.205453 26.5963 -0.205453 25.4037 0.61636 25.3062L7.51063 24.4881C16.413 23.4318 23.4318 16.413 24.4881 7.51063L25.3062 0.61636Z"
                fill="#D62500"
              />
            </motion.svg>
            Design.
            {/* Red Underline Below 'Design' */}
            <svg
              className="absolute -bottom-1 sm:-bottom-2 left-0 w-[105%] h-[clamp(8px,1.5vw,12px)]"
              viewBox="0 0 120 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2 7C20 3 40 2 60 3C80 4 100 5 118 3"
                stroke="#D62500"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          Develop.{' '}
          <br className="sm:hidden" />
          <span className="inline-grid overflow-hidden align-bottom h-[1.1em]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={wordIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="col-start-1 row-start-1"
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeDown}
          className="mx-auto max-w-3xl mt-8 text-[15px] sm:text-[17px] leading-relaxed text-gray-600 px-2"
        >
          We bring ideas to life, designing intuitive products, developing custom software,
          editing books and videos, building memorable brands, and empowering you with new
          skills through our academy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeDown}
          className="flex flex-row justify-center gap-3 sm:gap-4 mt-10 px-2"
        >
          <Link
            href="/services"
            className="group inline-flex flex-1 max-w-[200px] min-w-[130px] whitespace-nowrap items-center justify-center h-11 sm:h-12 px-4 sm:px-8 text-[13px] sm:text-[15px] font-medium text-white bg-[#D62500] rounded-full transition-all duration-200 hover:bg-[#b81f00] hover:shadow-lg hover:shadow-red-500/20 active:scale-[0.97]"
          >
            Explore More
            <svg
              className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1"
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
            className="group inline-flex flex-1 max-w-[200px] min-w-[130px] whitespace-nowrap items-center justify-center h-11 sm:h-12 px-4 sm:px-8 text-[13px] sm:text-[15px] font-medium text-[#D62500] bg-white border-[1.5px] border-[#D62500] rounded-full transition-all duration-200 hover:bg-red-50 active:scale-[0.97]"
          >
            Contact Us
            <svg
              className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1"
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

      {/* Hero Images Row — Uniform right-tilted squares with left-to-right overlap */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative mx-auto max-w-5xl px-2 sm:px-5 pb-20 sm:pb-32 mt-8 sm:mt-12"
      >
        {/* 
          Using a wrapper with left padding/margin offsets if needed, 
          but flex justify-center works well here 
        */}
        <div className="flex items-center justify-center">
          {HERO_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: -80, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: img.rotate }}
              transition={{
                duration: 1.5,
                delay: 0.3 + i * 0.15,
                ease: [0.25, 1, 0.5, 1], // Smooth elegant ease
              }}
              /* 
                1. Make them perfect squares (w == h)
                2. Overlap using negative horizontal margins
              */
              className="relative shrink-0 cursor-pointer 
                         w-20 h-20 -mx-2.5 
                         sm:w-36 sm:h-36 sm:-mx-2 
                         md:w-44 md:h-44 md:-mx-2.5 
                         lg:w-52 lg:h-52 lg:-mx-3"
              style={{ zIndex: img.zIndex }}
            >
              {/* Inner div for continuous levitation and hover effects */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                  delay: 2.5 + i * 0.4, // Delay levitation until AFTER entrance animation completes
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 3,
                  transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
                }}
                className="relative w-full h-full overflow-hidden shadow-2xl shadow-black/15 border-2 sm:border-4 border-white transform-gpu"
                style={{
                  borderRadius: '20%',
                  willChange: 'transform',
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100px, (max-width: 1024px) 160px, 190px"
                  priority={i === 2}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-linear-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
