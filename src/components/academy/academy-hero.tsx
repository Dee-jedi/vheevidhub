'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAcademyCountdown } from '@/hooks/use-academy-countdown';

export function AcademyHero() {
  const { mounted, timeLeft } = useAcademyCountdown();

  const scrollToCourses = () => {
    const section = document.getElementById('courses');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[#F5F0EB] pt-32 sm:pt-40 lg:pt-44 pb-14 sm:pb-24 overflow-hidden font-[family-name:var(--font-dm-sans)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= COUNTDOWN TIMER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-[620px] mx-auto text-center mb-6 sm:mb-12"
        >
          <p className="text-[10px] sm:text-[12px] font-bold text-[#5D4039] uppercase tracking-[0.2em] mb-3 sm:mb-5 text-center">
            EARLY BIRD OFFER EXPIRES IN...
          </p>

          <div className="w-full border-y border-[#D5D0CB]">
            <div className="grid grid-cols-4">
              
              {/* DAYS */}
              <div className="flex flex-col items-center justify-center py-3.5 sm:py-6 px-1 sm:px-2 border-r border-[#E5E0DB]">
                <span className="text-[28px] sm:text-[50px] lg:text-[62px] font-extrabold text-[#1F1B19] leading-none tracking-tight">
                  {mounted ? timeLeft.days : '02'}
                </span>
                <span className="text-[9px] sm:text-[11px] font-semibold text-[#5D4039] uppercase tracking-[0.16em] mt-1.5 sm:mt-2">
                  DAYS
                </span>
              </div>

              {/* HOURS */}
              <div className="flex flex-col items-center justify-center py-3.5 sm:py-6 px-1 sm:px-2 border-r border-[#E5E0DB]">
                <span className="text-[28px] sm:text-[50px] lg:text-[62px] font-extrabold text-[#1F1B19] leading-none tracking-tight">
                  {mounted ? timeLeft.hours : '03'}
                </span>
                <span className="text-[9px] sm:text-[11px] font-semibold text-[#5D4039] uppercase tracking-[0.16em] mt-1.5 sm:mt-2">
                  HOURS
                </span>
              </div>

              {/* MINUTES */}
              <div className="flex flex-col items-center justify-center py-3.5 sm:py-6 px-1 sm:px-2 border-r border-[#E5E0DB]">
                <span className="text-[28px] sm:text-[50px] lg:text-[62px] font-extrabold text-[#1F1B19] leading-none tracking-tight">
                  {mounted ? timeLeft.minutes : '59'}
                </span>
                <span className="text-[9px] sm:text-[11px] font-semibold text-[#5D4039] uppercase tracking-[0.16em] mt-1.5 sm:mt-2">
                  MINUTES
                </span>
              </div>

              {/* SECONDS */}
              <div className="flex flex-col items-center justify-center py-3.5 sm:py-6 px-1 sm:px-2">
                <span className="text-[28px] sm:text-[50px] lg:text-[62px] font-extrabold text-[#1F1B19] leading-none tracking-tight">
                  {mounted ? timeLeft.seconds : '57'}
                </span>
                <span className="text-[9px] sm:text-[11px] font-semibold text-[#5D4039] uppercase tracking-[0.16em] mt-1.5 sm:mt-2">
                  SECONDS
                </span>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ================= HERO CONTENT ================= */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* Subtitle & Accent Bar (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden sm:flex flex-col items-center mb-5"
          >
            <p className="text-[15px] font-medium text-[#5D4039] tracking-normal">
              A course by Vheevid Hub — Design &amp; Automation
            </p>
            <div className="w-12 h-[2.5px] bg-[#D62500] rounded-full mt-2" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[26px] sm:text-[42px] lg:text-[60px] font-extrabold text-[#1F1B19] leading-[1.2] sm:leading-[1.12] lg:leading-[66px] tracking-[-0.8px] sm:tracking-[-2px] lg:tracking-[-3.36px] max-w-4xl text-center px-1"
          >
            A 6-week AI Automation and Logo &amp; Brand Identity bootcamp.
          </motion.h1>

          {/* Tagline (Desktop Only) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="hidden sm:block text-[18px] text-[#1F1B19]/80 font-medium mt-5 max-w-2xl leading-relaxed text-center"
          >
            Automate. Design. Get Hired. Live classes, real skill, real outcomes.
          </motion.p>

          {/* Value Proposition / Price Highlight */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-[13.5px] sm:text-[19px] font-bold text-[#1F1B19] mt-3 sm:mt-4 text-center px-2"
          >
            Classes worth over ₦100,000 but packaged to fit your budget!
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-5 sm:mt-10"
          >
            <button
              onClick={scrollToCourses}
              className="inline-flex items-center justify-center px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-[#D62500] text-white text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.14em] hover:bg-[#b81f00] hover:shadow-xl hover:shadow-[#D62500]/25 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              SECURE YOUR SPOT
            </button>
          </motion.div>

        </div>

        {/* ================= SHOWCASE IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-14 max-w-[960px] mx-auto w-full"
        >
          <div className="relative w-full rounded-[1px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-[#D5D0CB] bg-white">
            <Image
              src="/Images/acad-hero-recreated.jpg"
              alt="Vheevid Hub Academy — Master Automation & Design"
              width={1198}
              height={646}
              priority
              className="w-full h-auto object-cover rounded-[1px]"
            />
          </div>
        </motion.div>

        {/* ================= HERO METADATA BAR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 sm:mt-14 max-w-[960px] mx-auto w-full border-y border-[#D5D0CB] py-4 sm:py-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 gap-4 sm:gap-0">

            {/* START DATE */}
            <div className="flex flex-col items-start justify-center sm:px-6 sm:first:pl-2 sm:border-r border-[#E5E0DB]">
              <span className="text-[10.5px] sm:text-[11px] font-bold text-[#5D4039] uppercase tracking-[0.14em] mb-1">
                START DATE
              </span>
              <span className="text-[16px] sm:text-[18px] font-bold text-[#1F1B19] tracking-tight">
                23rd September
              </span>
            </div>

            {/* DURATION */}
            <div className="flex flex-col items-start justify-center sm:px-6 pt-3 sm:pt-0 sm:border-r border-[#E5E0DB]">
              <span className="text-[10.5px] sm:text-[11px] font-bold text-[#5D4039] uppercase tracking-[0.14em] mb-1">
                DURATION
              </span>
              <span className="text-[16px] sm:text-[18px] font-bold text-[#1F1B19] tracking-tight">
                6 weeks
              </span>
            </div>

            {/* FORMAT */}
            <div className="flex flex-col items-start justify-center sm:px-6 pt-3 sm:pt-0 sm:last:pr-2">
              <span className="text-[10.5px] sm:text-[11px] font-bold text-[#5D4039] uppercase tracking-[0.14em] mb-1">
                FORMAT
              </span>
              <span className="text-[16px] sm:text-[18px] font-bold text-[#1F1B19] tracking-tight">
                Live classes via Google Meet
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
