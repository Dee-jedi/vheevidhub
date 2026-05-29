'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export function Footer() {
  const pathname = usePathname();
  
  if (pathname === '/contact' || pathname === '/services') {
    return null;
  }

  return (
    <footer className="w-full bg-white relative">
      {/* --- Need Help With a Project Section (CTA) --- */}
      <section className="relative py-28 sm:py-48 px-4 sm:px-6 overflow-hidden flex flex-col items-center text-center">
        {/* Concentric Circles (Spiral Effect) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
          <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full border border-[#D62500]/20" />
          <div className="absolute w-[440px] h-[440px] sm:w-[600px] sm:h-[600px] rounded-full border border-[#D62500]/15" />
          <div className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border border-[#D62500]/10" />
          <div className="absolute w-[760px] h-[760px] sm:w-[1000px] sm:h-[1000px] rounded-full border border-[#D62500]/5" />
          <div className="absolute w-[920px] h-[920px] sm:w-[1200px] sm:h-[1200px] rounded-full border border-[#D62500]/5" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.h3
            variants={fadeUpVariants}
            className="text-[18px] sm:text-[24px] lg:text-[28px] font-semibold text-[#111] mb-2 tracking-tight"
          >
            Need help with a project?
          </motion.h3>

          <motion.h2
            variants={fadeUpVariants}
            className="text-[64px] sm:text-[90px] lg:text-[110px] font-bold leading-none mb-10 tracking-tight"
            style={{
              background: 'linear-gradient(90deg, #000 15.05%, #D62500 47.65%, #000 95.12%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Let’s talk
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="text-gray-500 text-[15px] sm:text-[17px] leading-[1.6] mb-12 max-w-[800px] mx-auto"
          >
            Good work happens when design, technology, and storytelling agree. <br className="hidden sm:block" />
            At Vheevid Hub, we bring product design, software, branding, media, and learning together to solve real problems. <br className="hidden sm:block" />
            If you care about building things that last, let’s talk.
          </motion.p>

          <motion.div variants={fadeUpVariants}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#D62500] text-white rounded-full font-medium text-[15px] hover:bg-[#b81f00] transition-colors shadow-[0_8px_20px_rgba(214,37,0,0.2)] hover:shadow-lg hover:shadow-red-500/30 active:scale-95"
            >
              Contact Us <span className="ml-2 font-bold">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --- Main Footer Content --- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="bg-white px-4 sm:px-6 lg:px-12 py-16 sm:py-20 max-w-7xl mx-auto"
      >
        <div className="flex px-4 flex-row justify-between items-center w-full mb-12 sm:mb-16">
          {/* Brand Info */}
          <motion.div variants={fadeUpVariants}>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Images/vheevid_logo.svg"
                alt="VheeVid Hub Logo"
                width={34}
                height={32}
              />
              <span className="flex flex-col justify-center text-[13.5px] sm:text-[15px] font-bold text-gray-900 tracking-tight text-left mt-[5.2px]">
                <span className="leading-none mb-[2px]">Vheevid</span>
                <span className="text-[#D62500] leading-none">Hub</span>
              </span>
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUpVariants} className="flex items-center gap-2 sm:gap-4">
            <a href="#" className="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#D62500] hover:text-white transition-all shadow-sm group">
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#D62500] hover:text-white transition-all shadow-sm group">
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#D62500] hover:text-white transition-all shadow-sm group">
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div variants={fadeUpVariants} className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-gray-500">
            2026 Designed by Vheevid Hub
          </p>
          <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6 text-[12px] text-gray-500">
            <Link href="/privacy" className="hover:text-[#D62500] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#D62500] transition-colors">Terms of Services</Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[#D62500] transition-colors focus:outline-none"
            >
              Go to top
            </button>
          </div>
        </motion.div>
      </motion.section>
    </footer>
  );
}
