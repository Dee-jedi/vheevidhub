'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[80vh] pt-24 sm:pt-32 px-4 sm:px-6 text-center bg-white relative overflow-hidden">
      
      {/* Background visual flair (subtle spiral/circle) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <div className="absolute w-[300px] h-[300px] rounded-full border-[1.5px] border-[#D62500]" />
        <div className="absolute w-[500px] h-[500px] rounded-full border-[1.5px] border-[#D62500]" />
        <div className="absolute w-[700px] h-[700px] rounded-full border-[1.5px] border-[#D62500]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative"
        >
          {/* Big 404 Text */}
          <h1 
            className="text-[120px] sm:text-[180px] font-black leading-none tracking-tighter"
            style={{
              background: 'linear-gradient(135deg, #111 0%, #444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            404
          </h1>
          {/* Accent Badge */}
          <div className="absolute top-[20%] right-[-10%] sm:right-[-5%] rotate-12 bg-[#D62500] text-white text-[10px] sm:text-[12px] font-bold px-3 py-1 rounded-full shadow-lg">
            Oops!
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[20px] sm:text-[28px] font-semibold text-gray-900 mt-4 mb-3"
        >
          Page Not Found
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-500 text-[14px] sm:text-[16px] max-w-[400px] mx-auto mb-10 leading-relaxed"
        >
          The page you are looking for doesn't exist or has been moved. Let's get you back home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center justify-center px-8 py-3.5 bg-[#111] text-white rounded-full font-medium text-[15px] transition-all duration-200 hover:bg-[#D62500] hover:shadow-lg hover:shadow-red-500/20 active:scale-95"
          >
            Back to Home
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
