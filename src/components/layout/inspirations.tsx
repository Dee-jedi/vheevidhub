'use client';

import { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
  },
};

const REVIEWS = [
  {
    text: "Vheevid Hub transformed our brand with stunning design that perfectly captured our vision. Their team was professional, creative, and detail-oriented. We couldn't be happier with the results!",
    name: "Stephanie Powell",
    role: "VP of Sales at Facebook",
    company: "facebook",
    image: "/Images/lady_des3.jpg"
  },
  {
    text: "Vheevid Hub delivered exceptional results for our team. The attention to detail and creative solutions provided were exactly what we needed to scale our business to the next level.",
    name: "John Doe",
    role: "CEO at TechCorp",
    company: "TechCorp",
    image: "/Images/hero_pix1.jpg"
  },
  {
    text: "Working with Vheevid Hub was an absolute game-changer. They understood our brand identity perfectly and built a platform that our users absolutely love.",
    name: "Jane Smith",
    role: "Marketing Director",
    company: "Innovate Inc",
    image: "/Images/hero_pix4.jpg"
  },
  {
    text: "A fantastic experience from start to finish. The team is highly responsive, deeply creative, and consistently delivers top-tier work on time.",
    name: "Michael Brown",
    role: "Founder",
    company: "Startup Co",
    image: "/Images/hero_pix5.jpg"
  }
];

export function Inspirations() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden pb-20 sm:pb-32 pt-16 sm:pt-24">

      {/* Featured Works Header (Visible on Mobile and Desktop) */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mb-12 sm:mb-20 text-center">
        <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#111111] leading-tight tracking-tight">
          <span className="relative inline-block">
            Featured
            {/* Red underline */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-[clamp(6px,1vw,10px)]"
              viewBox="0 0 120 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                d="M2 7C20 3 40 2 60 3C80 4 100 5 118 3"
                stroke="#D62500"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Works
        </h2>
      </div>

      {/* Top Section: New designs, New inspirations */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUpVariants}
            className="hidden sm:block"
          >
            <div className="relative inline-block">
              {/* Top Left Star */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
                className="absolute -top-6 -left-12 sm:-top-8 sm:-left-16"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" className="w-10 h-10 sm:w-[52px] sm:h-[52px]">
                  <path d="M25.3062 0.61636C25.4037 -0.205453 26.5963 -0.205453 26.6939 0.61636L27.5119 7.51063C28.5682 16.413 35.587 23.4318 44.4893 24.4881L51.3836 25.3062C52.2055 25.4037 52.2055 26.5963 51.3836 26.6939L44.4893 27.5119C35.587 28.5682 28.5682 35.587 27.5119 44.4893L26.6939 51.3836C26.5963 52.2055 25.4037 52.2055 25.3062 51.3836L24.4881 44.4893C23.4318 35.587 16.413 28.5682 7.51063 27.5119L0.61636 26.6939C-0.205453 26.5963 -0.205453 25.4037 0.61636 25.3062L7.51063 24.4881C16.413 23.4318 23.4318 16.413 24.4881 7.51063L25.3062 0.61636Z" fill="#D62500" />
                </svg>
              </motion.div>

              <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] font-bold text-[#111111] leading-[1.1] tracking-tight relative z-10">
                New designs<br />
                New inspirations
              </h2>

              {/* Bottom Right Star */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: "backOut" }}
                className="absolute -bottom-4 -right-12 sm:-bottom-8 sm:-right-16"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" className="w-10 h-10 sm:w-[52px] sm:h-[52px]">
                  <path d="M25.3062 0.61636C25.4037 -0.205453 26.5963 -0.205453 26.6939 0.61636L27.5119 7.51063C28.5682 16.413 35.587 23.4318 44.4893 24.4881L51.3836 25.3062C52.2055 25.4037 52.2055 26.5963 51.3836 26.6939L44.4893 27.5119C35.587 28.5682 28.5682 35.587 27.5119 44.4893L26.6939 51.3836C26.5963 52.2055 25.4037 52.2055 25.3062 51.3836L24.4881 44.4893C23.4318 35.587 16.413 28.5682 7.51063 27.5119L0.61636 26.6939C-0.205453 26.5963 -0.205453 25.4037 0.61636 25.3062L7.51063 24.4881C16.413 23.4318 23.4318 16.413 24.4881 7.51063L25.3062 0.61636Z" fill="#D62500" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Images Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
            className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0"
          >
            {/* Image 1: The Book Cover */}
            <motion.div
              variants={imageVariants}
              whileHover={{ y: -10 }}
              className="absolute left-0 top-[5%] w-[65%] sm:w-[55%] h-[75%] overflow-hidden z-10"
            >
              <Image
                src="/Images/des_2.jpg"
                alt="We Build Solutions"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

            {/* Image 2: The Arch Overlay */}
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              className="absolute right-0 sm:right-[10%] bottom-0 w-[55%] sm:w-[50%] h-[60%] z-20 rounded-t-[100px] overflow-hidden bg-black"
            >
              <Image
                src="/Images/des_1.jpg"
                alt="We Build Solutions"
                fill
                sizes="(max-width: 640px) 55vw, 50vw"
                className="object-cover object-bottom"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-center mb-16 sm:mb-24">
        <div className="w-full sm:w-[80%] md:w-[60%] h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* Bottom Section: Real Successes */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Header Content */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#111111] leading-tight tracking-tight mb-6">
            {"Real ".split("").map((char, i) => (
              <motion.span
                key={`real-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: i * 0.06 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <span className="relative inline-block whitespace-nowrap font-bold">
              {"Successes".split("").map((char, i) => (
                <motion.span
                  key={`success-${i}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: (5 + i) * 0.06 }}
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
                  transition={{ duration: 0.8, ease: "easeOut", delay: 14 * 0.06 }}
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
            Clients trust us to transform their challenges into achievements, with every project reflecting our commitment to excellence and impact.
          </motion.p>
        </div>

        {/* Testimonial Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="relative w-full max-w-4xl mx-auto mt-10 md:mt-16"
        >
          <div className="relative z-10 flex flex-col p-8 sm:p-12 pb-16 sm:pb-20 bg-white rounded-[32px] shadow-2xl shadow-black/5 border border-gray-100 transition-all duration-500 hover:shadow-black/10 overflow-hidden min-h-[380px] sm:min-h-[420px]">

            {/* Quote Icon watermark */}
            <div className="absolute top-4 -left-2 sm:top-6 sm:left-6 text-gray-100 opacity-50 pointer-events-none z-0">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10 flex flex-col gap-8 sm:gap-10 h-full flex-1"
              >
                {/* Stars */}
                <div className="flex items-center gap-1.5 text-[#FFC107]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>

                {/* Quote Text */}
                <p className="text-[18px] sm:text-[22px] md:text-[25px] font-medium text-gray-600 leading-[1.6] tracking-tight min-h-[140px]">
                  &quot;{REVIEWS[activeIndex].text}&quot;
                </p>

                {/* Avatar & Info Flex */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 sm:pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-5">
                    {/* Circle Avatar */}
                    <div className="relative w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full overflow-hidden shrink-0 border border-gray-100 shadow-sm">
                      <Image
                        src={REVIEWS[activeIndex].image}
                        alt={REVIEWS[activeIndex].name}
                        fill
                        sizes="72px"
                        className="object-cover object-top hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    {/* Details */}
                    <div className="flex flex-col justify-center">
                      <span className="font-bold text-[16px] sm:text-[18px] text-gray-900 tracking-tight">{REVIEWS[activeIndex].name}</span>
                      <span className="text-[14px] text-gray-500 mt-0.5">{REVIEWS[activeIndex].role}</span>
                    </div>
                  </div>

                  <div className="hidden sm:block">
                    <span className="font-bold text-[20px] tracking-tight text-gray-400 uppercase">{REVIEWS[activeIndex].company}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-[#D62500]' : 'w-1.5 bg-gray-200 hover:bg-gray-300'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
