'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function GiantCTA() {
  return (
    <section className="relative w-full bg-[#111111] overflow-hidden py-32 sm:py-48">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-[#D62500]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[40px] sm:text-[64px] lg:text-[80px] font-bold text-white leading-[1.1] tracking-tight mb-8"
        >
          Ready to bring your idea to <span className="text-[#D62500] italic">life?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[18px] sm:text-[24px] text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Let's build something extraordinary together. Our team is ready to dive into your next big challenge.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center h-16 sm:h-20 px-10 sm:px-14 text-[16px] sm:text-[20px] font-bold text-white bg-[#D62500] rounded-full transition-all duration-300 hover:bg-[#b81f00] hover:scale-105 shadow-[0_0_40px_rgb(214,37,0,0.4)] hover:shadow-[0_0_60px_rgb(214,37,0,0.6)] active:scale-95"
          >
            Let's Talk
            <svg className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
