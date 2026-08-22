'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Why Us?', href: '/why-us' },
  { label: 'Our Works', href: '/works' },
  { label: 'Services', href: '/services' },
  { label: 'Academy', href: '/academy' },
];

const MOBILE_NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Why Us?', href: '/why-us' },
  { label: 'Our Works', href: '/works' },
  { label: 'Services', href: '/services' },
  { label: 'Academy', href: '/academy' },
];

// Overlay backdrop animation
const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
};

// Drawer slide-in from right
const drawerVariants: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: '0%',
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
  },
};

// Stagger children in drawer
const drawerContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  exit: { opacity: 0 },
};

const drawerItemVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
  },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);
  const pathname = usePathname();
  const isDarkHeroPage = pathname === '/services' || pathname === '/academy';

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  // Detect scroll for subtle navbar bg change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if user is enrolled
  useEffect(() => {
    const checkEnrollment = () => {
      const successData = localStorage.getItem('vheevid_academy_success');
      if (successData) {
        try {
          const parsed = JSON.parse(successData);
          if (Array.isArray(parsed)) {
            setHasPaid(parsed.length > 0);
          } else if (parsed && typeof parsed === 'object') {
            setHasPaid(true);
          } else {
            setHasPaid(false);
          }
        } catch (e) {
          setHasPaid(false);
        }
      } else {
        setHasPaid(false);
      }
    };

    checkEnrollment();
    
    // Listen for cross-tab storage changes (also helps if you clear storage via console)
    window.addEventListener('storage', checkEnrollment);
    return () => window.removeEventListener('storage', checkEnrollment);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-[0_1px_0_0_rgba(0,0,0,0.05)] ${scrolled
          ? 'bg-white/80 backdrop-blur-xl'
          : 'bg-transparent'
          }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-10">
            <Image
              src="/Images/vheevid_logo.svg"
              alt="VheeVid Hub Logo"
              width={34}
              height={32}
              priority
            />
            <span className={`flex flex-col justify-center text-[13.5px] font-bold tracking-tight mt-[5.2px] ${!scrolled && isDarkHeroPage ? 'text-white' : 'text-gray-900'}`}>
              <span className="leading-none mb-[2px]">Vheevid</span>
              <span className={`leading-none ${!scrolled && isDarkHeroPage ? 'text-white' : 'text-[#D62500]'}`}>Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-[14px] font-medium rounded-lg transition-colors duration-200 ${!scrolled && isDarkHeroPage
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/60'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            {hasPaid && (
              <Link
                href="/dashboard"
                className={`px-4 py-2 text-[14px] font-medium rounded-lg transition-colors duration-200 ${!scrolled && isDarkHeroPage
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/60'
                  } ${pathname === '/dashboard' ? 'text-[#D62500] font-bold' : ''}`}
              >
                Dashboard
              </Link>
            )}
          </nav>

          {/* Desktop Contact Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center h-10 px-6 text-[13px] font-semibold text-white bg-[#D62500] rounded-full transition-all duration-200 hover:bg-[#b81f00] hover:shadow-lg hover:shadow-red-500/20 active:scale-[0.97]"
          >
            Contact Us
          </Link>

          {/* Mobile Hamburger Button — Orizon-inspired rounded icon */}
          <button
            onClick={() => setIsOpen(true)}
            className={`md:hidden relative z-10 flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-sm transition-all duration-200 active:scale-95 ${!scrolled && isDarkHeroPage
              ? 'bg-white/10 border border-white/20 hover:bg-white/20'
              : 'bg-gray-100/80 border border-gray-200/50 hover:bg-gray-200/80'
              }`}
            aria-label="Open menu"
          >
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <span className="block w-[18px] h-[2px] rounded-full bg-[#D62500] transition-all" />
              <span className="block w-[14px] h-[2px] rounded-full bg-[#D62500] transition-all ml-auto" />
            </div>
          </button>
        </div>
      </motion.header>

      {/* ========== MOBILE DRAWER ========== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              key="drawer-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-100 bg-black/40 backdrop-blur-[2px]"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer-panel"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 right-0 w-[85%] max-w-[360px] bg-white shadow-2xl z-100 flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4">
                {/* Logo in drawer */}
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/Images/vheevid_logo.svg"
                    alt="VheeVid Hub Logo"
                    width={30}
                    height={28}
                  />
                  <span className="flex flex-col justify-center text-[12px] font-bold tracking-tight text-left mt-[5.2px] text-gray-900">
                    <span className="leading-none mb-[2px]">Vheevid</span>
                    <span className="text-[#D62500] leading-none">Hub</span>
                  </span>
                </Link>

                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 transition-all duration-200 hover:bg-gray-200 active:scale-95"
                  aria-label="Close menu"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 4L4 14M4 4L14 14"
                      stroke="#D62500"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Divider */}
              <div className="mx-6 h-px bg-gray-100" />

              {/* Navigation Links */}
              <motion.nav
                variants={drawerContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col flex-1 px-6 pt-6"
              >
                {MOBILE_NAV_LINKS.map((link) => (
                  <motion.div key={link.href} variants={drawerItemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between py-5 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-[20px] font-medium text-gray-800 group-hover:text-[#D62500] transition-colors duration-200">
                        {link.label}
                      </span>
                      <svg
                        className="w-4 h-4 text-gray-300 group-hover:text-[#D62500] transition-all duration-200 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Dynamic Dashboard Link for Mobile */}
                {hasPaid && (
                  <motion.div variants={drawerItemVariants}>
                    <Link
                      href="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between py-5 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-[20px] font-bold text-[#D62500]">
                        Dashboard
                      </span>
                      <svg
                        className="w-4 h-4 text-[#D62500] group-hover:translate-x-1 transition-all duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                )}

                {/* Contact Us Button in Drawer */}
                <motion.div variants={drawerItemVariants} className="mt-8">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full h-14 text-[16px] font-semibold text-white bg-[#D62500] rounded-full transition-all duration-200 hover:bg-[#b81f00] active:scale-[0.97]"
                  >
                    Contact Us
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </motion.nav>

              {/* Drawer Footer — subtle branding */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-6 pb-8 pt-4"
              >
                <p className="text-[11px] text-gray-400 text-center">
                  © {new Date().getFullYear()} VheeVid Hub. All rights reserved.
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
