'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const OUTCOMES = [
  'Design a logo that works at every size and on every platform.',
  'Build a brand style guide a client can actually use.',
  'Choose colours and fonts based on the business, not on taste.',
  'Present design work to a client with confidence.',
];

const TOOLS = [
  { name: 'Adobe Illustrator', initial: 'Ai', bg: '#FF9A00', text: '#330000' },
  { name: 'Photoshop', initial: 'Ps', bg: '#31A8FF', text: '#001E36' },
];

export function CourseOne() {
  return (
    <section className="w-full bg-[#FFF8F5] py-16 sm:py-24 lg:py-28 border-t-2 border-b-2 border-[#D62500] font-[family-name:var(--font-dm-sans)]">
      <div className="mx-auto max-w-[960px] px-5 sm:px-8 lg:px-10">
        
        {/* Course Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-3 sm:mb-4"
        >
          <span className="text-[11px] sm:text-[12px] font-bold text-[#5D4039] uppercase tracking-[0.2em] block">
            COURSE ONE
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[32px] sm:text-[46px] lg:text-[54px] font-extrabold text-[#1F1B19] leading-tight tracking-tight mb-3 sm:mb-4"
        >
          Logo &amp; Brand Identity
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[18px] sm:text-[22px] text-[#1F1B19] font-normal mb-8 sm:mb-12 leading-relaxed"
        >
          What you&apos;ll be able to do by week six.
        </motion.p>

        {/* Bullet List */}
        <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-14">
          {OUTCOMES.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-3.5 sm:gap-4"
            >
              <span className="w-2.5 h-2.5 bg-[#D62500] rounded-[1px] shrink-0 mt-2 sm:mt-2.5" />
              <p className="text-[18px] sm:text-[22px] lg:text-[24px] font-normal text-[#1F1B19] leading-snug tracking-tight">
                {outcome}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider & Tools Section */}
        <div className="border-t border-[#E5E0DB] pt-7 sm:pt-9 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-6">
          
          {/* Tools Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <span className="text-[10px] sm:text-[11px] font-bold text-[#5D4039] uppercase tracking-[0.16em] shrink-0">
              TOOLS YOU WILL USE
            </span>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-[2px] bg-[#330000] text-[#FF9A00] border border-[#FF9A00]/40 flex items-center justify-center font-bold text-[10px] select-none shadow-xs shrink-0">
                  Ai
                </span>
                <span className="text-[13px] sm:text-[14.5px] font-bold text-[#1F1B19] whitespace-nowrap">
                  Adobe Illustrator
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-[2px] bg-[#001E36] text-[#31A8FF] border border-[#31A8FF]/40 flex items-center justify-center font-bold text-[10px] select-none shadow-xs shrink-0">
                  Ps
                </span>
                <span className="text-[13px] sm:text-[14.5px] font-bold text-[#1F1B19] whitespace-nowrap">
                  Photoshop
                </span>
              </div>
            </div>
          </div>

          {/* Route CTA Button */}
          <Link
            href="/academy/graphic-design"
            className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#D62500] text-white text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.14em] hover:bg-[#b81f00] hover:shadow-lg hover:shadow-[#D62500]/20 active:scale-95 transition-all duration-300 w-full sm:w-auto text-center"
          >
            VIEW COURSE DETAILS →
          </Link>

        </div>

      </div>
    </section>
  );
}
