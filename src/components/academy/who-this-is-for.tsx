'use client';

import { motion } from 'framer-motion';

const AUDIENCE_POINTS = [
  'You want a real skill you can earn from, not another certificate.',
  "You're stuck between wanting to learn and not knowing where to start.",
  "You're tired of scattered free content with no structure and no feedback.",
];

export function WhoThisIsFor() {
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
            WHO THIS IS FOR
          </span>
        </motion.div>

        {/* List with Dividers */}
        <div className="border-t border-[#D9D4CF]">
          {AUDIENCE_POINTS.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-7 sm:py-9 lg:py-11 border-b border-[#D9D4CF]"
            >
              <h3 className="text-[20px] sm:text-[26px] lg:text-[32px] font-bold text-[#1F1B19] leading-[1.28] tracking-tight">
                {point}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
