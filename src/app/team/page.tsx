'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const teamMembers = [
  {
    src: '/Images/team_mem3.jpg',
    name: 'Johnson',
    role: 'Web Developer',
    bio: 'Johnson is the technical powerhouse behind our digital solutions. He transforms designs into functional, high-performance web applications, specializing in modern frontend technologies.'
  },

  {
    src: '/Images/team_mem4.jpg',
    name: 'Peter',
    role: 'Brand & Graphic Designer',
    bio: 'Peter is the creative mind behind our stunning visual identities. He crafts compelling brand stories through graphics, ensuring our clients stand out in their respective markets.'
  },
  {
    src: '/Images/team_mem6.jpg',
    name: 'Treasure',
    role: 'Admin & Project Manager',
    bio: 'Manages day-to-day administrative activities and oversees project follow-through across teams. Ensures tasks are properly coordinated, deadlines are met, and operations stay organized and efficient.'
  },
  {
    src: '/Images/team_mem2.jpg',
    name: 'Sopuruchi',
    role: 'Chief Operating Officer (COO)',
    bio: 'Oversees operations, logistics, and internal coordination across the company. Ensures projects, meetings, and organizational activities run smoothly by managing execution, planning, and operational structure.'
  },
  {
    src: '/Images/team_mem1.jpg',
    name: 'Vivian',
    role: 'Founder & Product Designer',
    bio: 'Vivian leads the vision and product strategy at Vheevid Hub. With a keen eye for design and a passion for solving complex problems, she ensures every product we build is user-centric and impactful.'
  },
];

/* ---------- Individual Team Card with scroll-linked parallax ---------- */
function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const rawY = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const rawScale = useTransform(scrollYProgress, [0, 0.4], [0.92, 1]);
  const rawBlur = useTransform(scrollYProgress, [0, 0.3], [8, 0]);
  const imgScale = useTransform(scrollYProgress, [0.2, 0.8], [1.15, 1]);

  // Spring physics for buttery smooth motion
  const y = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.8 });
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 25 });
  const scale = useSpring(rawScale, { stiffness: 100, damping: 25 });

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale, filter: useTransform(rawBlur, (v) => `blur(${v}px)`) }}
      className="bg-white rounded-[28px] overflow-hidden border border-gray-200/60 flex flex-col will-change-transform"
    >
      {/* Image */}
      <div className="aspect-4/5 relative overflow-hidden bg-[#f5f0ed]">
        <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
          <Image
            src={member.src}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
        {/* Subtle gradient overlay at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white/30 to-transparent pointer-events-none" />
      </div>

      {/* Info */}
      <div className="p-7 sm:p-8 flex flex-col flex-1">
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="text-[22px] sm:text-[24px] font-bold text-[#111] tracking-tight">{member.name}</h3>
          <span className="text-[12px] font-semibold text-[#D62500] bg-red-50 px-3 py-1 rounded-full tracking-wide uppercase whitespace-nowrap ml-3">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <p className="text-[#D62500] font-semibold text-[14px] mb-4 tracking-wide uppercase">{member.role}</p>
        <p className="text-gray-500 leading-[1.7] text-[14px] sm:text-[15px] flex-1">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}

/* ---------- Animated Header ---------- */
const letterReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

const letterChild: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedHeading({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      variants={letterReveal}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap overflow-hidden ${className || ''}`}
      aria-label={text}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={letterChild}
          className="inline-block will-change-transform"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ---------- Page ---------- */
export default function TeamPage() {
  return (
    <main className="flex-1 bg-white">

      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-16 sm:pb-24 px-4 sm:px-12 lg:px-24 relative overflow-hidden">
        {/* Subtle background circles */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none opacity-40 -top-40">
          <div className="w-[600px] h-[600px] rounded-full border border-gray-200" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="overflow-hidden mb-6">
            <h1 className="text-[48px] sm:text-[72px] lg:text-[96px] font-bold tracking-tight text-[#111] leading-[0.95]">
              <AnimatedHeading text="The people" />
              <br />
              <AnimatedHeading text="behind " className="text-gray-400" />
              <AnimatedHeading text="the work." />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-gray-500 text-[16px] sm:text-[18px] leading-[1.7]"
          >
            A diverse group of creatives, strategists, and builders who turn bold ideas into lasting products.
          </motion.p>

          {/* Animated line separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 sm:mt-16 h-px bg-gray-200 origin-left"
          />
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-4 sm:px-12 lg:px-24 pb-32 sm:pb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </section>

    </main>
  );
}
