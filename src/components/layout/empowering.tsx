'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  
  const numericMatch = value.match(/(\d+)(.*)/);
  const targetNumber = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? numericMatch[2] : '';

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, targetNumber, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, inView, targetNumber]);

  return (
    <span ref={ref} className="inline-flex items-center justify-center">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function StatCard({ number, label }: { number: string; label: React.ReactNode }) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:scale-105 duration-300 w-[140px] h-[120px] sm:w-[180px] sm:h-[140px]">
      <h3 className="text-white text-3xl sm:text-4xl font-bold mb-2">
        <AnimatedCounter value={number} />
      </h3>
      <div className="text-white/80 text-[10px] sm:text-xs leading-tight font-medium">
        {label}
      </div>
    </div>
  );
}

export function Empowering() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-4xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Images/empowering-bg.png"
              alt="Students learning"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center"
              quality={90}
            />
          </div>

          {/* Dark Overlay - Gradient from left (dark) to right (semi-transparent) */}
          <div className="absolute inset-0 z-10 bg-linear-to-br from-black/95 via-black/80 to-black/40 lg:bg-linear-to-r lg:from-black/95 lg:via-black/70 lg:to-black/30" />

          {/* Content Container */}
          <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12 p-8 sm:p-12 lg:p-20">
            
            {/* Left side: Text Content */}
            <div className="flex-1 max-w-xl">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
              >
                Empowering the <br />
                <span className="text-[#D62500]">Next Generation</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/80 text-sm sm:text-base leading-relaxed mb-10 max-w-md"
              >
                Connecting passionate individuals with the opportunities they need to succeed. Our Academy is dedicated and built to develop the talent pool our economy needs now.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/works#academy"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#D62500] text-white rounded-full font-medium text-[15px] hover:bg-[#b81f00] transition-colors shadow-[0_8px_20px_rgba(214,37,0,0.2)] hover:shadow-lg active:scale-95"
                >
                  Learn More <span className="ml-2 font-bold">→</span>
                </Link>
              </motion.div>
            </div>

            {/* Right side: Staggered Stats Cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto"
            >
              <div className="flex gap-4 sm:gap-6">
                {/* Left Column (Shifted up slightly) */}
                <div className="flex flex-col gap-4 sm:gap-6 mt-0">
                  <StatCard 
                    number="100+" 
                    label="Hours of Learning" 
                  />
                  <StatCard 
                    number="1" 
                    label={<>Clear Goal<br/><span className="text-[9px] sm:text-[10px] font-normal">(Employable Skills)</span></>} 
                  />
                </div>
                
                {/* Right Column (Shifted down for staggered effect) */}
                <div className="flex flex-col gap-4 sm:gap-6 mt-10 sm:mt-16">
                  <StatCard 
                    number="4" 
                    label="Stage Learning Journey" 
                  />
                  <StatCard 
                    number="0" 
                    label={<>Fluff<br/><span className="text-[9px] sm:text-[10px] font-normal">(Practical-First Training)</span></>} 
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
