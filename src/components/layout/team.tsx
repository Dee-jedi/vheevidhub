'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const teamImages = [
  { src: '/Images/team_member_1_1779712869072.png', classes: 'max-sm:absolute max-sm:left-[calc(50%-42px)] max-sm:top-[20px] sm:-translate-y-4 lg:-translate-y-8' },
  { src: '/Images/team_member_2_1779712885889.png', classes: 'max-sm:absolute max-sm:left-[calc(50%+72px)] max-sm:top-[86px] sm:translate-y-8 lg:translate-y-12' },
  { src: '/Images/team_member_3_1779712899847.png', classes: 'max-sm:absolute max-sm:left-[calc(50%+72px)] max-sm:top-[218px] sm:-translate-y-4 lg:-translate-y-8' },
  { src: '/Images/team_member_4_1779712915516.png', classes: 'max-sm:absolute max-sm:left-[calc(50%-42px)] max-sm:top-[284px] sm:translate-y-8 lg:translate-y-12' },
  { src: '/Images/team_member_5_1779712928929.png', classes: 'max-sm:absolute max-sm:left-[calc(50%-156px)] max-sm:top-[218px] sm:-translate-y-4 lg:-translate-y-8' },
  { src: '/Images/team_member_6_1779712942970.png', classes: 'max-sm:absolute max-sm:left-[calc(50%-156px)] max-sm:top-[86px] sm:translate-y-8 lg:translate-y-12' },
];

export function Team() {
  return (
    <div className="w-full bg-white relative">

      {/* --- Meet Our Team Section --- */}
      <section className="pt-24 pb-32 sm:pt-32 sm:pb-56 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeUpVariants}
            className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold text-[#111] mb-6 tracking-tight"
          >
            Meet <span className="relative inline-block font-bold">
              Our Team?
              {/* Red underline */}
              <svg
                className="absolute -bottom-1 left-0 w-full h-[clamp(6px,1vw,10px)]"
                viewBox="0 0 120 10"
                fill="none"
              >
                <path d="M2 7C20 3 40 2 60 3C80 4 100 5 118 3" stroke="#D62500" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="max-w-[800px] text-gray-500 text-[15px] sm:text-[17px] leading-[1.6] mb-10 px-2"
          >
            Our success is driven by the dedication and expertise of our exceptional team. Each member brings a wealth of knowledge, passion, and commitment to providing the highest standard of care and service.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="mb-16 sm:mb-24 lg:mb-32">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#D62500] text-white rounded-full font-medium text-[15px] hover:bg-[#b81f00] transition-colors shadow-sm hover:shadow-lg hover:shadow-red-500/20 active:scale-95"
            >
              Learn More <span className="ml-2 font-bold">→</span>
            </Link>
          </motion.div>

          {/* Team Images Wavy/Circle */}
          <motion.div
            className="relative flex items-center justify-center w-full max-w-[1000px] mx-auto px-2 mt-8 md:mt-0 h-[440px] sm:h-auto sm:gap-4 lg:gap-6"
          >
            {teamImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariants}
                className={`relative w-[84px] sm:w-full min-h-[126px] sm:min-h-[150px] sm:flex-1 aspect-2/3 sm:aspect-3/4 sm:max-w-[150px] ${img.classes}`}
              >
                {/* Soft pink glow behind */}
                <div className="absolute inset-0 bg-[#FFEAE3] sm:translate-y-3 scale-110 rounded-[100px] blur-xl opacity-80" />

                {/* Main Image Container with Soft Pink Border effect */}
                <div className="absolute inset-0 rounded-[100px] overflow-hidden shadow-sm border-2 sm:border-4 border-[#FFF0EB] bg-[#FFF0EB]">
                  <Image
                    src={img.src}
                    alt={`Team Member ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 33vw, 150px"
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
