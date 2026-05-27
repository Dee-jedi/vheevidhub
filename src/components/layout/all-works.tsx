'use client';

import { motion, Variants } from 'framer-motion';
import { ALL_WORKS_DATA } from '@/constants/works-data';
import { WorkCategoryCard } from './work-category-card';
import { useRef, useState, useCallback, useEffect } from 'react';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/**
 * For each section we split 4 cards into 3 indicator groups:
 *   indicator 0 → card 0
 *   indicator 1 → cards 1-2
 *   indicator 2 → card 3
 * Scroll tracking maps the most-visible card index to an indicator.
 */
function cardIndexToIndicator(cardIndex: number, totalCards: number): number {
  if (totalCards <= 1) return 0;
  if (totalCards <= 3) return Math.min(cardIndex, 2);
  // 4+ cards: first → 0, middle → 1, last → 2
  if (cardIndex === 0) return 0;
  if (cardIndex >= totalCards - 1) return 2;
  return 1;
}

function indicatorToCardIndex(indicator: number, totalCards: number): number {
  if (totalCards <= 1) return 0;
  if (totalCards <= 3) return Math.min(indicator, totalCards - 1);
  if (indicator === 0) return 0;
  if (indicator === 2) return totalCards - 1;
  return Math.floor(totalCards / 2); // middle card
}

function SectionRow({ section }: { section: typeof ALL_WORKS_DATA[number] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndicator, setActiveIndicator] = useState(0);
  const totalCards = section.items.length;
  const indicatorCount = Math.min(totalCards, 3);

  // Track which card is most visible
  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    const containerLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const containerCenter = containerLeft + containerWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(childCenter - containerCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    setActiveIndicator(cardIndexToIndicator(closestIndex, totalCards));
  }, [totalCards]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToIndicator = (indicator: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const targetCardIndex = indicatorToCardIndex(indicator, totalCards);
    const children = Array.from(container.children) as HTMLElement[];
    const targetChild = children[targetCardIndex];
    if (!targetChild) return;

    container.scrollTo({
      left: targetChild.offsetLeft - 16,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      key={section.id}
      id={section.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="flex flex-col"
    >
      {/* Left-Aligned Section Header */}
      <motion.div variants={fadeUpVariants} className="relative mb-10 sm:mb-16 flex flex-col items-start justify-start text-left w-full pl-3 sm:pl-6">
        <div className="relative inline-block">
          {/* The red outline corner box */}
          <div className="absolute top-[-6px] left-[-8px] sm:top-[-8px] sm:left-[-12px] w-[calc(100%+16px)] sm:w-[calc(100%+24px)] h-[calc(100%+6px)] sm:h-[calc(100%+8px)] border-t border-l border-[#D62500]/40 rounded-tl-xl rounded-tr-lg rounded-bl-lg pointer-events-none" />

          <h2 className="text-[22px] sm:text-[32px] font-bold text-[#111111] pr-4">
            {section.title}
          </h2>
        </div>
      </motion.div>

      {/* Cards Grid / Row */}
      <motion.div
        ref={scrollRef}
        variants={fadeUpVariants}
        className="flex gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-visible hide-scrollbar pb-8 sm:pb-4"
      >
        {section.items.map((item, i) => (
          <WorkCategoryCard
            key={i}
            title={item.title}
            description={item.description}
            link={item.link}
            imageSrc={item.imageSrc}
          />
        ))}
      </motion.div>

      {/* Mobile scroll indicators — dot · dash · dot */}
      <div className="flex sm:hidden justify-center items-center gap-[6px] mt-5">
        {Array.from({ length: indicatorCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndicator(i)}
            aria-label={`Go to card group ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              activeIndicator === i
                ? 'w-10 h-[4px] bg-[#D62500]'
                : 'w-[7px] h-[7px] bg-gray-300'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function AllWorks() {
  return (
    <section className="w-full bg-white pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-20">
        {/* Sections */}
        <div className="flex flex-col gap-24 sm:gap-32">
          {ALL_WORKS_DATA.map((section) => (
            <SectionRow key={section.id} section={section} />
          ))}
        </div>

      </div>
    </section>
  );
}
