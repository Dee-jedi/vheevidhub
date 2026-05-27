'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
  },
};

const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
  },
};

const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
  },
};

export function OurStory() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-24 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#111111] leading-tight tracking-tight mb-6">
            {"Our ".split("").map((char, i) => (
              <motion.span
                key={`our-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: i * 0.06 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <span className="relative inline-block whitespace-nowrap font-bold">
              {"Story".split("").map((char, i) => (
                <motion.span
                  key={`story-${i}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: (4 + i) * 0.06 }}
                >
                  {char}
                </motion.span>
              ))}
              {/* Red underline */}
              <svg
                className="absolute -bottom-1 left-0 w-full h-[clamp(6px,1vw,10px)]"
                viewBox="0 0 120 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 9 * 0.06 }}
                  d="M2 7C20 3 40 2 60 3C80 4 100 5 118 3"
                  stroke="#D62500"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Story Rows */}
        <div className="flex flex-col gap-24 sm:gap-32">

          {/* Row 1: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRightVariants}
              className="flex-1 relative pr-6 lg:pr-10"
            >
              {/* Subtle Red Timeline Border on Right */}
              <div className="absolute top-[15%] bottom-[15%] right-0 w-px bg-linear-to-b from-transparent via-red-200/50 to-transparent" />
              <div className="absolute top-[35%] bottom-[35%] right-0 w-px bg-linear-to-b from-transparent via-[#D62500]/60 to-transparent" />

              <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#111111] mb-4">How it all began.</h3>
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600">
                Vheevid Hub was born from a desire for trust, reliability, and real value in creative services. Having experienced first-hand the frustration of paying for training and services that were incomplete or unreliable, Determined to do things differently, we created Vheevid Hub, a space where clients and learners could always receive the full value of their investment. From the very first day, the goal was clear: deliver professional design, development, branding, and content services with integrity, while building a foundation for an academy that would train and empower others.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeftVariants}
              className="flex-1 w-full"
            >
              <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Images/story_pic1.png"
                  alt="How it all began"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Row 2: Image Left, Text Right */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRightVariants}
              className="flex-1 w-full"
            >
              <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Images/story_pic2.jpg"
                  alt="Growth and Expansion"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeftVariants}
              className="flex-1 relative pl-6 lg:pl-10"
            >
              {/* Subtle Red Timeline Border on Left */}
              <div className="absolute top-[15%] bottom-[15%] left-0 w-px bg-linear-to-b from-transparent via-red-200/50 to-transparent" />
              <div className="absolute top-[35%] bottom-[35%] left-0 w-px bg-linear-to-b from-transparent via-[#D62500]/60 to-transparent" />

              <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#111111] mb-4">Growth & Expansion</h3>
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600">
                Starting with core design services, Vheevid Hub quickly grew into a multi-service hub. Our offerings expanded to include software development, branding, graphic design, and book & video editing, enabling us to solve a wider range of problems for businesses and individuals. Each project strengthened our approach to trust, creativity, and efficiency, allowing us to consistently deliver high-quality results. Along the way, we learned, adapted, and refined our processes, creating a platform that supports both clients and learners in a seamless, value-driven experience.
              </p>
            </motion.div>
          </div>

          {/* Row 3: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRightVariants}
              className="flex-1 relative pr-6 lg:pr-10"
            >
              {/* Subtle Red Timeline Border on Right */}
              <div className="absolute top-[15%] bottom-[15%] right-0 w-px bg-linear-to-b from-transparent via-red-200/50 to-transparent" />
              <div className="absolute top-[35%] bottom-[35%] right-0 w-px bg-linear-to-b from-transparent via-[#D62500]/60 to-transparent" />

              <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#111111] mb-4">The Hub Ecosystem</h3>
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-600">
                Today, Vheevid Hub is more than just a service provider—it's an ecosystem of creativity, technology, and education. Our hub integrates multiple services under one roof, allowing clients to access design, development, branding, and content solutions in a coordinated, reliable way. At the same time, Vheevid Hub Academy provides live classes for aspiring creatives, ensuring that learning is interactive, practical, and aligned with real-world projects. This ecosystem represents our vision: a trusted, interconnected space where problems are solved, skills are built, and value is always delivered.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeftVariants}
              className="flex-1 w-full"
            >
              <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl bg-[#EBEBEB]">
                <Image
                  src="/Images/story_pic3.png"
                  alt="The Hub Ecosystem"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
