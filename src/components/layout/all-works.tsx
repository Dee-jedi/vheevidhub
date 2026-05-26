'use client';

import { motion, Variants } from 'framer-motion';
import { ALL_WORKS_DATA } from '@/constants/works-data';
import { WorkCategoryCard } from './work-category-card';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export function AllWorks() {
  return (
    <section className="w-full bg-white pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-20">
        {/* Sections */}
        <div className="flex flex-col gap-24 sm:gap-32">
          {ALL_WORKS_DATA.map((section) => (
            <motion.div 
              key={section.id} 
              id={section.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="flex flex-col"
            >
              {/* Centered Section Header */}
              <motion.div variants={fadeUpVariants} className="relative mb-10 sm:mb-16 flex flex-col items-center justify-center text-center w-full">
                <div className="relative inline-block">
                  {/* The red outline corner box */}
                  <div className="absolute top-[-12px] left-[-12px] sm:left-[-24px] w-[calc(100%+24px)] sm:w-[calc(100%+48px)] h-[calc(100%+12px)] border-t border-l border-[#D62500]/40 rounded-tl-2xl rounded-tr-xl rounded-bl-xl pointer-events-none" />
                  
                  <h2 className="text-[26px] sm:text-[36px] font-bold text-[#111111] px-4">
                    {section.title}
                  </h2>
                </div>
              </motion.div>

              {/* Cards Grid / Row */}
              <motion.div 
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

              {/* Mobile pagination dots (decorative) */}
              <div className="flex sm:hidden justify-center items-center gap-2 mt-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D62500]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
