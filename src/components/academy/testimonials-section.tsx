'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  image: string;
  quote?: string;
  author: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    image: '/Images/test-1.png',
    quote: "“I finally understand how to build a brand identity that isn't just 'pretty' but actually works for the client's goals.”",
    author: 'FREELANCER',
  },
  {
    image: '/Images/test-2.png',
    quote: '“The automation workflows I learned here saved me at least 10 hours a week in my freelance business. Truly life-changing stuff.”',
    author: 'AUTOMATION SPECIALIST',
  },
  {
    image: '/Images/test-3.png',
    quote: '“Connecting Airtable and Make seemed daunting, but the step-by-step approach made it click instantly.”',
    author: 'ANONYMOUS — ENTREPRENEUR',
  },
  {
    image: '/Images/test-4.png',
    quote: '“The feedback sessions were brutal but necessary. My portfolio looks 10x more professional now.”',
    author: 'STUDENT',
  },
  {
    image: '/Images/test-5.png',
    quote: '“The structure of this bootcamp is what makes it. No more jumping between random YouTube tutorials.”',
    author: 'STUDENT',
  },
  {
    image: '/Images/test-6.png',
    quote: "“Best investment I've made this year. The community and the direct access to mentors is worth every penny.”",
    author: 'STUDENT',
  },
  {
    image: '/Images/test-7.png',
    author: 'ALEX R. — FREELANCER',
  },
  {
    image: '/Images/test-8.png',
    author: 'SARAH M. — DESIGNER',
  },
  {
    image: '/Images/test-9.png',
    author: 'JAMES K. — ENTREPRENEUR',
  },
  {
    image: '/Images/test-10.png',
    author: 'ELENA V. — STUDENT',
  },
  {
    image: '/Images/test-11.png',
    author: 'DAVID L. — OPERATIONS MANAGER',
  },
  {
    image: '/Images/test-12.png',
    author: 'MAYA T. — CREATIVE DIRECTOR',
  },
];

export function TestimonialsSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollRef = useState<HTMLDivElement | null>(null)[0];
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const maxScroll = target.scrollWidth - target.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      setCurrentIndex(1);
      return;
    }
    const progress = Math.min(1, Math.max(0, target.scrollLeft / maxScroll));
    setScrollProgress(progress);
    const index = Math.min(
      TESTIMONIALS.length,
      Math.max(1, Math.round((target.scrollLeft / maxScroll) * (TESTIMONIALS.length - 1)) + 1)
    );
    setCurrentIndex(index);
  };

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % TESTIMONIALS.length : null));
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length : null
    );
  }, [selectedIndex]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation & scroll locking
  useEffect(() => {
    if (selectedIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, handleClose, handleNext, handlePrev]);

  const activeItem = selectedIndex !== null ? TESTIMONIALS[selectedIndex] : null;

  return (
    <section className="w-full bg-[#FFF8F5] py-20 sm:py-28 lg:py-32 font-[family-name:var(--font-dm-sans)] overflow-hidden">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-10">
        
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-[32px] sm:text-[46px] lg:text-[54px] font-extrabold text-[#1F1B19] leading-tight tracking-tight mb-10 sm:mb-16"
        >
          What people say after six weeks
        </motion.h2>

        {/* Testimonials Grid & Horizontal Snap-Scroll on Mobile */}
        <div
          onScroll={handleScroll}
          className="-mx-5 px-5 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 overflow-x-auto sm:overflow-visible snap-x snap-mandatory hide-scrollbar no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-3 sm:pb-0"
        >
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="w-[285px] sm:w-auto shrink-0 snap-center flex flex-col group cursor-zoom-in"
              onClick={() => setSelectedIndex(index)}
            >
              {/* Image Card */}
              <div className="relative w-full aspect-[4/4.2] rounded-[16px] sm:rounded-[20px] overflow-hidden border border-[#E5E0DB] shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-neutral-900 group-hover:shadow-xl group-hover:border-[#D5D0CB] transition-all duration-300">
                <Image
                  src={item.image}
                  alt={`Student testimonial - ${item.author}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 285px, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Text / Quote */}
              {item.quote && (
                <p className="text-[13.5px] sm:text-[14.5px] font-medium text-[#1F1B19] leading-relaxed mt-4 mb-2">
                  {item.quote}
                </p>
              )}

              {/* Author / Role */}
              <span className={`text-[10px] sm:text-[11px] font-normal text-[#5D4039] uppercase tracking-[0.14em] ${!item.quote ? 'mt-4' : ''}`}>
                {item.author}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Progress Indicator (01 ——— 12) */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-8">
          <span className="text-[15px] font-bold text-[#1F1B19] tracking-tight w-6 text-right font-mono">
            {String(currentIndex).padStart(2, '0')}
          </span>
          
          <div className="w-24 h-[2px] bg-[#D5D0CB] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-[#D62500] rounded-full transition-all duration-150 ease-out"
              style={{ width: `${Math.max(10, Math.min(100, (scrollProgress * 90) + 10))}%` }}
            />
          </div>

          <span className="text-[15px] font-medium text-[#5D4039]/40 tracking-tight w-6 text-left font-mono">
            {String(TESTIMONIALS.length).padStart(2, '0')}
          </span>
        </div>

      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {selectedIndex !== null && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              aria-label="Close image preview"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Modal Image & Caption Card */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-[480px] w-full max-h-[90vh] flex flex-col items-center bg-[#1F1B19] rounded-[20px] overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Zoomed Screenshot */}
              <div className="relative w-full h-[60vh] sm:h-[65vh] bg-black">
                <Image
                  src={activeItem.image}
                  alt={`Student testimonial - ${activeItem.author}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption Bar */}
              <div className="w-full p-4 sm:p-5 bg-[#1F1B19] border-t border-white/10 flex flex-col">
                {activeItem.quote && (
                  <p className="text-[13px] sm:text-[14px] text-white/90 font-medium leading-relaxed mb-2">
                    {activeItem.quote}
                  </p>
                )}
                <div className="flex items-center justify-between text-white/60 text-[11px] font-normal uppercase tracking-wider">
                  <span>{activeItem.author}</span>
                  <span>
                    {selectedIndex + 1} / {TESTIMONIALS.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
