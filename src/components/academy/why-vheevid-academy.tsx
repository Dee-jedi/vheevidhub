'use client';

import { motion } from 'framer-motion';
import { useAcademyCountdown } from '@/hooks/use-academy-countdown';

const WHY_POINTS = [
  {
    title: 'Taught from real client work, not theory.',
    desc: 'Everything you learn here has already been used on a paying project.',
  },
  {
    title: 'Live classes, not pre-recorded videos.',
    desc: 'You show up, you ask questions, you get answered in the moment.',
  },
  {
    title: 'A small cohort, so you actually get seen.',
    desc: 'Your work gets reviewed directly, week by week, with real feedback.',
  },
];

export function WhyVheevidAcademy() {
  const { mounted, timeLeft } = useAcademyCountdown();

  return (
    <div className="w-full font-[family-name:var(--font-dm-sans)]">
      
      {/* ================= CRIMSON / TERRACOTTA TOP BANNER ================= */}
      <section className="w-full bg-[#8E1E07] py-20 sm:py-28 lg:py-32 text-white">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8 lg:px-10">
          
          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-[34px] sm:text-[48px] lg:text-[58px] font-extrabold text-white leading-tight tracking-tight mb-12 sm:mb-16"
          >
            Why Vheevid Hub Academy
          </motion.h2>

          {/* 3 Dividing Rows */}
          <div className="border-t border-white/20">
            {WHY_POINTS.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="py-5 sm:py-6 border-b border-white/20 text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed"
              >
                <span className="font-semibold text-white">{point.title}</span>
                <span className="text-white/80"> — {point.desc}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= BOTTOM COUNTDOWN SECTION ================= */}
      <section className="w-full bg-[#FFF8F5] py-16 sm:py-24">
        <div className="mx-auto max-w-[640px] px-5 sm:px-8 text-center">
          
          <p className="text-[10px] sm:text-[12px] font-bold text-[#5D4039] uppercase tracking-[0.2em] mb-4 sm:mb-6 text-center">
            EARLY BIRD OFFER EXPIRES IN...
          </p>

          <div className="w-full border-y border-[#D5D0CB]">
            <div className="grid grid-cols-4">
              
              {/* DAYS */}
              <div className="flex flex-col items-center justify-center py-4 sm:py-7 px-1 sm:px-2 border-r border-[#E5E0DB]">
                <span className="text-[30px] sm:text-[52px] lg:text-[62px] font-extrabold text-[#1F1B19] leading-none tracking-tight">
                  {mounted ? timeLeft.days : '02'}
                </span>
                <span className="text-[9px] sm:text-[11px] font-semibold text-[#5D4039] uppercase tracking-[0.16em] mt-1.5 sm:mt-2.5">
                  DAYS
                </span>
              </div>

              {/* HOURS */}
              <div className="flex flex-col items-center justify-center py-4 sm:py-7 px-1 sm:px-2 border-r border-[#E5E0DB]">
                <span className="text-[30px] sm:text-[52px] lg:text-[62px] font-extrabold text-[#1F1B19] leading-none tracking-tight">
                  {mounted ? timeLeft.hours : '03'}
                </span>
                <span className="text-[9px] sm:text-[11px] font-semibold text-[#5D4039] uppercase tracking-[0.16em] mt-1.5 sm:mt-2.5">
                  HOURS
                </span>
              </div>

              {/* MINUTES */}
              <div className="flex flex-col items-center justify-center py-4 sm:py-7 px-1 sm:px-2 border-r border-[#E5E0DB]">
                <span className="text-[30px] sm:text-[52px] lg:text-[62px] font-extrabold text-[#1F1B19] leading-none tracking-tight">
                  {mounted ? timeLeft.minutes : '59'}
                </span>
                <span className="text-[9px] sm:text-[11px] font-semibold text-[#5D4039] uppercase tracking-[0.16em] mt-1.5 sm:mt-2.5">
                  MINUTES
                </span>
              </div>

              {/* SECONDS */}
              <div className="flex flex-col items-center justify-center py-4 sm:py-7 px-1 sm:px-2">
                <span className="text-[30px] sm:text-[52px] lg:text-[62px] font-extrabold text-[#1F1B19] leading-none tracking-tight">
                  {mounted ? timeLeft.seconds : '57'}
                </span>
                <span className="text-[9px] sm:text-[11px] font-semibold text-[#5D4039] uppercase tracking-[0.16em] mt-1.5 sm:mt-2.5">
                  SECONDS
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
