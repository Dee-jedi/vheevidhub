'use client';

import { motion, Variants } from 'framer-motion';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function ServicesHero() {
  return (
    <section className="relative w-full min-h-svh bg-[#111111] overflow-hidden flex items-center pt-20 pb-20">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-linear-to-br from-[#D62500]/20 to-transparent blur-[80px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-linear-to-tr from-[#D62500]/10 to-transparent blur-[80px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#D62500] animate-pulse" />
            <span className="text-[13px] font-medium text-gray-300 uppercase tracking-widest">
              Our Capabilities
            </span>
          </motion.div>

          <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] font-bold text-white leading-[1.05] tracking-tight mb-8">
            <span className="block">End-to-End Digital</span>
            <span className="relative inline-block text-[#D62500]">
              Capabilities.
              <svg className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-[12px] sm:h-[16px]" viewBox="0 0 120 10" fill="none" preserveAspectRatio="none">
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                  d="M2 7C20 3 40 2 60 3C80 4 100 5 118 3"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="text-[18px] sm:text-[22px] text-gray-400 leading-relaxed max-w-2xl mb-12"
          >
            We partner with ambitious brands to design, build, and scale digital products that drive massive business impact.
          </motion.p>

        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 z-20"
      >
        <a
          href="#capabilities"
          className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
