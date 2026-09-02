'use client';

import { motion } from 'framer-motion';

const PERKS = [
  'Find Internship Opportunities',
  'Work on projects for your Portfolio',
  'Job seeking tips',
  'Hands on mentorship from the bests',
  'Comprehensive courses on AI Automation and Logo & Brand Identity',
  '6 weeks intensive training',
  'Learn top tools (Adobe Illustrator, Photoshop, Airtable, Make & Professionalism)',
];

export function WhatsInItForYou() {
  return (
    <section className="w-full bg-[#FFF8F5] py-16 sm:py-24 lg:py-28 font-[family-name:var(--font-dm-sans)]">
      <div className="mx-auto max-w-[960px] px-5 sm:px-8 lg:px-10">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <span className="text-[11px] sm:text-[12px] font-bold text-[#5D4039] uppercase tracking-[0.2em] block">
            WHAT&apos;S IN IT FOR YOU
          </span>
        </motion.div>

        {/* Top Border */}
        <div className="border-t border-[#D9D4CF] pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pt-10 border-b border-[#D9D4CF]">
          <ul className="space-y-5 sm:space-y-6 lg:space-y-7">
            {PERKS.map((perk, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-3.5 sm:gap-4.5"
              >
                <span className="text-[#D62500] font-bold text-[20px] sm:text-[24px] lg:text-[28px] leading-none select-none shrink-0 mt-[2px]">
                  +
                </span>
                <span className="text-[18px] sm:text-[22px] lg:text-[26px] font-semibold text-[#1F1B19] leading-[1.35] tracking-tight">
                  {perk}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
