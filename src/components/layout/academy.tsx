'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
};

export function Academy() {
  return (
    <section className="w-full bg-white py-20 sm:py-32 overflow-hidden border-t border-gray-100/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-24 px-4 max-w-3xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#111111] leading-tight tracking-tight mb-6">
            {"The ".split("").map((char, i) => (
              <motion.span
                key={`the-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: i * 0.06 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <span className="relative inline-block whitespace-nowrap font-bold">
              {"Academy".split("").map((char, i) => (
                <motion.span
                  key={`academy-${i}`}
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
                  transition={{ duration: 0.8, ease: "easeOut", delay: 11 * 0.06 }}
                  d="M2 7C20 3 40 2 60 3C80 4 100 5 118 3"
                  stroke="#D62500"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[15px] sm:text-[17px] text-gray-500 leading-relaxed"
          >
            Clients trust us to transform their challenges into achievements, with every project reflecting our commitment to excellence and impact.
          </motion.p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">

          {/* Left Text Column */}
          <motion.div
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-[45%] flex flex-col items-start"
          >
            {/* Tag */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D62500]" />
              <span className="text-[12px] sm:text-[13px] font-bold text-[#D62500] uppercase tracking-wider">
                Coming Soon
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-[#111111] leading-[1.15] tracking-tight mb-4 sm:mb-6">
              Vheevid Hub Academy <br className="block" /> Live Classes
            </h3>

            {/* Description */}
            <p className="text-[15px] sm:text-[18px] text-gray-500 leading-[1.6] mb-8 sm:mb-10">
              We are pushing our years of agency experience into trusted, interactive teaching experiences. Master the craft of digital execution with live mentorship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col min-[480px]:flex-row items-center sm:items-start justify-center lg:justify-start gap-3 sm:gap-4 w-full">
              {/* Manifesto Button */}
              <Link
                href="#manifesto"
                className="flex w-full min-[480px]:w-auto items-center justify-center h-12 sm:h-14 px-6 sm:px-8 text-[13.5px] sm:text-[15px] font-medium text-white bg-[#D62500] rounded-full transition-all duration-200 hover:bg-[#b81f00] hover:shadow-lg hover:shadow-red-500/20 active:scale-95"
              >
                Manifesto (Coming Soon)
              </Link>

              {/* Get Notified Button */}
              <Link
                href="/contact"
                className="flex w-full min-[480px]:w-auto items-center justify-center h-12 sm:h-14 px-6 sm:px-8 text-[13.5px] sm:text-[15px] font-medium text-[#D62500] bg-transparent border-2 border-[#D62500] rounded-full transition-all duration-200 hover:bg-[#FFF0EB] active:scale-95"
              >
                Get Notified
              </Link>
            </div>
          </motion.div>

          {/* Right Video Column */}
          <motion.div
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-[55%] relative rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-xl aspect-4/3 sm:aspect-video bg-[#111111] flex items-center justify-center"
          >
            <video
              src="/Videos/live_vid1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
