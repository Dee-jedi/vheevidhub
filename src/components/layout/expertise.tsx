'use client';

import { motion, Variants } from 'framer-motion';

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

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
  },
};

export function Expertise() {
  return (
    <section className="relative w-full bg-white py-20 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Header Content */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#111111] leading-tight tracking-tight mb-6">
            {"Our ".split("").map((char, i) => (
              <motion.span
                key={`our-exp-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: i * 0.06 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <span className="relative inline-block whitespace-nowrap font-bold">
              {"Expertise".split("").map((char, i) => (
                <motion.span
                  key={`exp-${i}`}
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
                  transition={{ duration: 0.8, ease: "easeOut", delay: 13 * 0.06 }}
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

        {/* Pills Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="relative w-full max-w-[960px] mx-auto h-[120px] sm:h-[300px] mt-10 sm:mt-12 overflow-visible"
        >
          {/* Card 1: Product Design */}
          <motion.div
            variants={pillVariants}
            whileHover={{ scale: 1.05, zIndex: 40 }}
            className="absolute w-[120px] xs:w-[140px] sm:w-[320px] lg:w-[360px] left-0 top-[15px] sm:top-[30px] z-10"
          >
            <div className="w-full rotate-[4deg]">
              <div className="flex items-center justify-center w-full h-[36px] sm:h-[76px] bg-[#FFEAE3] text-gray-900 rounded-[10px] sm:rounded-[20px] font-medium text-[8px] xs:text-[9.5px] sm:text-[16px] lg:text-[18px] shadow-sm hover:shadow-lg transition-shadow cursor-default">
                Product Design (UI/UX)
              </div>
            </div>
          </motion.div>

          {/* Card 2: Software Development */}
          <motion.div
            variants={pillVariants}
            whileHover={{ scale: 1.05, zIndex: 40 }}
            className="absolute w-[120px] xs:w-[140px] sm:w-[320px] lg:w-[360px] left-[calc(50%-60px)] xs:left-[calc(50%-70px)] sm:left-[calc(50%-160px)] lg:left-[calc(50%-180px)] top-[5px] sm:top-[10px] z-20"
          >
            <div className="w-full rotate-[-4deg]">
              <div className="flex items-center justify-center w-full h-[36px] sm:h-[76px] bg-[#D62500] text-white rounded-[10px] sm:rounded-[20px] font-medium text-[8px] xs:text-[9.5px] sm:text-[16px] lg:text-[18px] shadow-xl shadow-red-900/10 hover:shadow-2xl transition-shadow cursor-default">
                Web Development
              </div>
            </div>
          </motion.div>

          {/* Card 3: Branding */}
          <motion.div
            variants={pillVariants}
            whileHover={{ scale: 1.05, zIndex: 40 }}
            className="absolute w-[120px] xs:w-[140px] sm:w-[320px] lg:w-[360px] right-0 top-[20px] sm:top-[40px] z-10"
          >
            <div className="w-full rotate-10">
              <div className="flex items-center justify-center w-full h-[36px] sm:h-[76px] bg-[#FFEAE3] text-gray-900 rounded-[10px] sm:rounded-[20px] font-medium text-[8px] xs:text-[9.5px] sm:text-[16px] lg:text-[18px] shadow-sm hover:shadow-lg transition-shadow cursor-default">
                Branding
              </div>
            </div>
          </motion.div>

          {/* Card 4: UI/UX Design */}
          <motion.div
            variants={pillVariants}
            whileHover={{ scale: 1.05, zIndex: 40 }}
            className="absolute w-[120px] xs:w-[140px] sm:w-[320px] lg:w-[360px] left-[2%] top-[55px] sm:top-[120px] z-20"
          >
            <div className="w-full rotate-[-8deg]">
              <div className="flex items-center justify-center w-full h-[36px] sm:h-[76px] bg-[#D62500] text-white rounded-[10px] sm:rounded-[20px] font-medium text-[8px] xs:text-[9.5px] sm:text-[16px] lg:text-[18px] shadow-xl shadow-red-900/10 hover:shadow-2xl transition-shadow cursor-default">
                Automation
              </div>
            </div>
          </motion.div>

          {/* Card 5: Book/Video Editing */}
          <motion.div
            variants={pillVariants}
            whileHover={{ scale: 1.05, zIndex: 40 }}
            className="absolute w-[120px] xs:w-[140px] sm:w-[320px] lg:w-[360px] left-[calc(50%-60px)] xs:left-[calc(50%-70px)] sm:left-[calc(50%-160px)] lg:left-[calc(50%-180px)] top-[65px] sm:top-[140px] z-10"
          >
            <div className="w-full rotate-[4deg]">
              <div className="flex items-center justify-center w-full h-[36px] sm:h-[76px] bg-[#FFEAE3] text-gray-900 rounded-[10px] sm:rounded-[20px] font-medium text-[8px] xs:text-[9.5px] sm:text-[16px] lg:text-[18px] shadow-sm hover:shadow-lg transition-shadow cursor-default">
                Book/Video Editing
              </div>
            </div>
          </motion.div>

          {/* Card 6: Graphics */}
          <motion.div
            variants={pillVariants}
            whileHover={{ scale: 1.05, zIndex: 40 }}
            className="absolute w-[120px] xs:w-[140px] sm:w-[320px] lg:w-[360px] right-[2%] top-[60px] sm:top-[130px] z-20"
          >
            <div className="w-full rotate-[-8deg]">
              <div className="flex items-center justify-center w-full h-[36px] sm:h-[76px] bg-[#D62500] text-white rounded-[10px] sm:rounded-[20px] font-medium text-[8px] xs:text-[9.5px] sm:text-[16px] lg:text-[18px] shadow-xl shadow-red-900/10 hover:shadow-2xl transition-shadow cursor-default">
                Graphics
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
