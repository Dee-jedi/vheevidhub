'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const BENEFITS = [
  '6 weeks of live classes',
  'Direct access to mentors',
  'Lifetime community access',
  'Certificate of completion',
  'Portfolio-ready projects',
];

export function InvestInCareer() {
  const router = useRouter();
  const [showCourseSelector, setShowCourseSelector] = useState(false);

  return (
    <section className="w-full bg-[#FFF8F5] pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 font-[family-name:var(--font-dm-sans)]">
      <div className="mx-auto max-w-[960px] px-5 sm:px-8 lg:px-10">
        
        {/* ================= TITLE & PRICING HEADER ================= */}
        <div className="mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-[36px] sm:text-[54px] lg:text-[64px] font-extrabold text-[#1F1B19] leading-tight tracking-tight mb-2 sm:mb-3"
          >
            Invest in your career.
          </motion.h2>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pt-2">
            {/* Strikethrough Price */}
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold text-[#DDB3A7] line-through tracking-tight"
            >
              ₦50,000
            </motion.span>

            {/* Early Bird Price Highlight */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-baseline gap-1.5 sm:gap-2"
            >
              <span className="text-[18px] sm:text-[24px] font-bold text-[#D62500] tracking-tight">
                Early bird:
              </span>
              <span className="text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold text-[#D62500] tracking-tight">
                ₦30,000
              </span>
            </motion.div>
          </div>
        </div>

        {/* ================= BENEFIT CHECKLIST ================= */}
        <div className="border-t border-[#E5E0DB] mb-10 sm:mb-12">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="py-4 sm:py-5 border-b border-[#E5E0DB] flex items-center gap-3.5 sm:gap-4"
            >
              {/* Checkmark Icon */}
              <div className="w-5 h-5 rounded-full border-[1.5px] border-[#D62500] flex items-center justify-center shrink-0 text-[#D62500]">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <span className="text-[15px] sm:text-[17px] text-[#1F1B19] font-medium tracking-tight">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ================= CTA BUTTON & NOTE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full flex flex-col mb-16 sm:mb-24"
        >
          <button
            onClick={() => setShowCourseSelector(true)}
            className="w-full py-4 sm:py-5 rounded-full bg-[#D62500] text-white text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.18em] hover:bg-[#b81f00] hover:shadow-xl hover:shadow-[#D62500]/25 active:scale-[0.99] transition-all duration-300 cursor-pointer"
          >
            ENROLL NOW
          </button>

          <p className="text-[11.5px] sm:text-[12.5px] text-[#5D4039]/70 font-normal mt-3 text-left">
            Limited spots available. Classes start 23rd September, 2026.
          </p>
        </motion.div>

      </div>

      {/* ================= FULL-WIDTH FOOTER ================= */}
      <footer className="w-full border-t border-[#ECE4E0] pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="mx-auto max-w-[960px] px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start gap-2.5">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/Images/vheevid_logo.svg"
                  alt="Vheevid Hub Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[18px] font-extrabold text-[#1F1B19] tracking-tight">
                Vheevid <span className="text-[#D62500]">Hub</span>
              </span>
            </Link>

            <p className="text-[12px] text-[#5D4039]/70 font-normal">
              &copy; 2026 Vheevid Hub Academy. Built for the bold.
            </p>
          </div>

          {/* Footer Navigation Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-5 sm:gap-8 text-[13px] font-medium text-[#1F1B19]/85">
            <Link href="/privacy" className="hover:text-[#D62500] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#D62500] transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-[#D62500] transition-colors">
              Contact Us
            </Link>
            <a
              href="https://instagram.com/vheevidhub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D62500] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/company/vheevidhub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D62500] transition-colors"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </footer>

      {/* ================= ENROLLMENT COURSE SELECTOR MODAL ================= */}
      <AnimatePresence>
        {showCourseSelector && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setShowCourseSelector(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-[480px] w-full bg-[#FFF8F5] rounded-[24px] p-6 sm:p-8 shadow-2xl border border-[#D5D0CB]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowCourseSelector(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#1F1B19] transition-colors cursor-pointer"
              >
                ✕
              </button>

              <span className="text-[11px] font-bold text-[#5D4039] uppercase tracking-[0.2em] block mb-2">
                SELECT YOUR TRACK
              </span>
              <h3 className="text-[24px] font-extrabold text-[#1F1B19] tracking-tight mb-2">
                Choose a Bootcamp
              </h3>
              <p className="text-[14px] text-[#5D4039]/80 mb-6">
                Early bird offer: ₦30,000 per track (valued at ₦100,000+).
              </p>

              <div className="space-y-4">
                {/* Course 1 */}
                <button
                  onClick={() => {
                    setShowCourseSelector(false);
                    router.push('/academy/graphic-design');
                  }}
                  className="w-full text-left p-4 rounded-[16px] bg-white border border-[#E5E0DB] hover:border-[#D62500] hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-[#D62500] uppercase tracking-wider">
                      COURSE ONE
                    </span>
                    <span className="text-[14px] font-extrabold text-[#D62500]">
                      ₦30,000
                    </span>
                  </div>
                  <h4 className="text-[17px] font-extrabold text-[#1F1B19] group-hover:text-[#D62500] transition-colors">
                    Logo &amp; Brand Identity
                  </h4>
                  <p className="text-[12px] text-[#5D4039]/70 mt-1">
                    Tools: Adobe Illustrator, Photoshop • Starts 23rd Sept
                  </p>
                </button>

                {/* Course 2 */}
                <button
                  onClick={() => {
                    setShowCourseSelector(false);
                    router.push('/academy/automations');
                  }}
                  className="w-full text-left p-4 rounded-[16px] bg-white border border-[#E5E0DB] hover:border-[#D62500] hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-[#D62500] uppercase tracking-wider">
                      COURSE TWO
                    </span>
                    <span className="text-[14px] font-extrabold text-[#D62500]">
                      ₦30,000
                    </span>
                  </div>
                  <h4 className="text-[17px] font-extrabold text-[#1F1B19] group-hover:text-[#D62500] transition-colors">
                    AI Automation
                  </h4>
                  <p className="text-[12px] text-[#5D4039]/70 mt-1">
                    Tools: Airtable, Make • Starts 26th Sept
                  </p>
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
