'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { AcademyVideoPlayer } from './academy-video-player';

const PEOPLE_IMAGES: string[] = [
  '/Images/people-1.png',
  '/Images/people-2.png',
  '/Images/people-3.png',
  '/Images/people-4.png',
  '/Images/people-5.png',
  '/Images/people-6.png',
];

export function CommunityShowcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
      PEOPLE_IMAGES.length,
      Math.max(1, Math.round((target.scrollLeft / maxScroll) * (PEOPLE_IMAGES.length - 1)) + 1)
    );
    setCurrentIndex(index);
  };

  const handleClose = useCallback(() => {
    setSelectedImage(null);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, handleClose]);

  return (
    <section className="w-full bg-[#FFF8F5] py-16 sm:py-24 lg:py-28 font-[family-name:var(--font-dm-sans)] overflow-hidden">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-10">
        
        {/* ================= LARGE FEATURED VIDEO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <div className="relative w-full aspect-[16/7] sm:aspect-[21/8.5] rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#E5E0DB] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <AcademyVideoPlayer
              src="/Videos/acad-large.mp4"
              poster="/Images/test-large.png"
              containerClassName="absolute inset-0 w-full h-full rounded-[18px] sm:rounded-[24px]"
            />
          </div>
          <span className="text-[10px] sm:text-[11px] font-normal text-[#5D4039] uppercase tracking-[0.14em] mt-3">
            GLIMPSE INTO OUR AUTOMATION CLASSES
          </span>
        </motion.div>

        {/* ================= EVENT HEADLINE ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-[28px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#1F1B19] leading-tight tracking-tight mt-14 sm:mt-24 mb-8 sm:mb-12 max-w-4xl"
        >
          Our digital skills enlightenment at Bayero University, Kano
        </motion.h2>

        {/* ================= 6 PEOPLE CARDS (MOBILE HORIZONTAL SCROLL) ================= */}
        <div
          onScroll={handleScroll}
          className="-mx-5 px-5 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory hide-scrollbar no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-3 sm:pb-0"
        >
          {PEOPLE_IMAGES.map((imgSrc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="w-[280px] sm:w-auto shrink-0 snap-center flex flex-col group cursor-zoom-in"
              onClick={() => setSelectedImage(imgSrc)}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-[16px] sm:rounded-[20px] overflow-hidden border border-[#E5E0DB] shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-neutral-900 group-hover:shadow-xl group-hover:border-[#D5D0CB] transition-all duration-300">
                <Image
                  src={imgSrc}
                  alt={`Bayero University community moment ${index + 1}`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Progress Indicator (01 ——— 06) */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-8">
          <span className="text-[15px] font-bold text-[#1F1B19] tracking-tight w-6 text-right font-mono">
            {String(currentIndex).padStart(2, '0')}
          </span>
          
          <div className="w-24 h-[2px] bg-[#D5D0CB] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-[#D62500] rounded-full transition-all duration-150 ease-out"
              style={{ width: `${Math.max(15, Math.min(100, (scrollProgress * 85) + 15))}%` }}
            />
          </div>

          <span className="text-[15px] font-medium text-[#5D4039]/40 tracking-tight w-6 text-left font-mono">
            {String(PEOPLE_IMAGES.length).padStart(2, '0')}
          </span>
        </div>

      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {selectedImage && (
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
              aria-label="Close preview"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image Card */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-[800px] w-full max-h-[90vh] flex flex-col items-center bg-[#1F1B19] rounded-[20px] overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] sm:h-[75vh] bg-black">
                <Image
                  src={selectedImage}
                  alt="Bayero University community moment"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
