'use client';

import { motion, Variants } from 'framer-motion';
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

export function Inspirations() {
  return (
    <section className="relative w-full bg-white overflow-hidden pb-20 sm:pb-32 pt-16 sm:pt-24">

      {/* Top Section: New designs, New inspirations */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mb-32 sm:mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUpVariants}
            className="hidden sm:block"
          >
            <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] font-bold text-[#111111] leading-[1.1] tracking-tight">
              New designs<br />
              New inspirations
            </h2>
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
                src="/Images/des_1.jpg"
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
                src="/Images/des_2.png"
                alt="We Build Solutions"
                fill
                sizes="(max-width: 640px) 55vw, 50vw"
                className="object-contain object-bottom"
              />
            </motion.div>
          </motion.div>

        </div>
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
          className="flex flex-col md:flex-row items-stretch w-full mx-auto"
        >
          {/* Left Side: Quote & Author Info */}
          <div className="flex flex-col justify-between flex-1 order-2 md:order-1 mt-8 md:mt-0 bg-transparent">

            {/* Quote Area */}
            <motion.div variants={fadeUpVariants} className="flex flex-col gap-6 py-6 md:py-12 pr-4 md:pr-12 lg:pr-16">
              {/* Golden Stars */}
              <div className="flex items-center gap-1.5 text-[#FFC107]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
              <p className="text-[15px] sm:text-[17px] text-[#111] leading-[1.6]">
                &quot;Vheevid Hub transformed our brand with stunning design that perfectly captured our vision. Their team was professional, creative, and detail-oriented. We couldn&apos;t be happier with the results!&quot;
              </p>
            </motion.div>

            {/* Author Info / Black Bar */}
            {/* Minimal & clean on mobile, solid black bar on desktop that seamlessly touches the right image */}
            <motion.div variants={fadeUpVariants} className="flex items-center gap-5 w-full py-5 md:py-0 px-2 md:px-8 lg:px-12 md:bg-[#131313] md:text-white text-gray-900 md:h-[90px] shrink-0 border-t border-gray-100 md:border-none">
              {/* Facebook textual logo */}
              <span className="font-bold text-[22px] tracking-tight shrink-0 text-[#3B5998] md:text-white">facebook</span>
              <div className="flex flex-col justify-center border-l border-gray-300 md:border-white/20 pl-5 md:pl-6">
                <span className="font-semibold text-[14px]">Stephanie Powell</span>
                <span className="text-[12px] text-gray-500 md:text-gray-400">VP of Sales at Facebook</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Portrait Image */}
          <motion.div variants={fadeUpVariants} className="w-full md:w-[360px] lg:w-[420px] h-[400px] md:h-[480px] relative rounded-[24px] sm:rounded-[32px] md:rounded-bl-none overflow-hidden shrink-0 shadow-xl order-1 md:order-2 z-10 md:ml-auto">
            <Image
              src="/Images/lady_des3.jpg"
              alt="Stephanie Powell"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
