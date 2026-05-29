'use client';

import { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const COURSES = ['Product Design (UI/UX)', 'Software/Web Development', 'Brand Identity', 'CRM & Automation', 'Book & Video Editing', 'Other'];

const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
};

export function Academy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    otherCourse: '',
    notes: ''
  });

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
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
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const courseOfInterest = formData.course === 'Other' && formData.otherCourse.trim() !== '' 
      ? `Other (${formData.otherCourse})` 
      : (formData.course || 'Not specified');

    const text = `Hello Vheevid Hub Academy,

I would like to join the waitlist. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
Course of Interest: ${courseOfInterest}

Notes:
${formData.notes || 'None'}`;

    const mailtoUrl = `mailto:vheevidhub@gmail.com?subject=${encodeURIComponent("Academy Waitlist: " + formData.name)}&body=${encodeURIComponent(text)}`;
    window.location.href = mailtoUrl;
    setIsModalOpen(false);
  };

  return (
    <section className="w-full bg-white py-20 sm:py-32 overflow-hidden border-t border-gray-100/50 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-24 px-4 max-w-3xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#111111] leading-tight tracking-tight mb-6">
            {"The ".split("").map((char, i) => (
              <motion.span
                key={`the-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: i * 0.06 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <span className="relative inline-block whitespace-nowrap font-bold">
              {"Academy".split("").map((char, i) => (
                <motion.span
                  key={`academy-${i}`}
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
                  transition={{ duration: 0.8, ease: "easeOut", delay: 11 * 0.06 }}
                  d="M2 7C20 3 40 2 60 3C80 4 100 5 118 3"
                  stroke="#D62500"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[15px] sm:text-[17px] text-gray-500 leading-relaxed"
          >
            Clients trust us to transform their challenges into achievements, with every project reflecting our commitment to excellence and impact.
          </motion.p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">

          {/* Left Text Column */}
          <motion.div
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-[45%] flex flex-col items-start"
          >
            {/* Tag */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D62500]" />
              <span className="text-[12px] sm:text-[13px] font-bold text-[#D62500] uppercase tracking-wider">
                Coming Soon
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-[#111111] leading-[1.15] tracking-tight mb-4 sm:mb-6">
              Vheevid Hub Academy <br className="block" /> Live Classes
            </h3>

            {/* Description */}
            <p className="text-[15px] sm:text-[18px] text-gray-500 leading-[1.6] mb-8 sm:mb-10">
              We are pushing our years of agency experience into trusted, interactive teaching experiences. Master the craft of digital execution with live mentorship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col min-[480px]:flex-row items-center sm:items-start justify-center lg:justify-start gap-3 sm:gap-4 w-full">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex w-full min-[480px]:w-auto items-center justify-center h-14 sm:h-16 px-8 sm:px-10 text-[16px] sm:text-[18px] font-medium text-white bg-[#D62500] rounded-full transition-all duration-200 hover:bg-[#b81f00] hover:shadow-lg hover:shadow-red-500/20 active:scale-95 cursor-pointer"
              >
                Join waitlist
              </button>


            </div>
          </motion.div>

          {/* Right Video Column */}
          <motion.div
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-[55%] relative rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-xl aspect-4/3 sm:aspect-video bg-[#111111] flex items-center justify-center"
          >
            <video
              src="/Videos/live_vid1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-contain"
            />
          </motion.div>

        </div>
      </div>

      {/* Waitlist Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#111111]/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-lg bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh] my-auto"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-[#111111] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-[28px] sm:text-[32px] font-bold text-[#111111] mb-2 tracking-tight">Join the Waitlist</h3>
              <p className="text-gray-500 text-[15px] mb-8">Secure your spot early. We'll reach out to you once enrollment opens.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-gray-500 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-200 py-2.5 text-[16px] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#D62500] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-gray-500 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-200 py-2.5 text-[16px] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#D62500] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-gray-500 uppercase tracking-widest">What would you like to learn?</label>
                  <div className="relative">
                    <select
                      required
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className={`w-full bg-transparent border-b border-gray-200 py-2.5 text-[16px] focus:outline-none focus:border-[#D62500] transition-colors appearance-none pr-8 cursor-pointer ${formData.course === '' ? 'text-gray-400' : 'text-[#111111]'}`}
                    >
                      <option value="" disabled className="text-gray-400">Select an option</option>
                      {COURSES.map(course => (
                        <option key={course} value={course} className="text-[#111111]">{course}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {formData.course === 'Other' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-2 overflow-hidden"
                    >
                      <label className="text-[13px] font-bold text-gray-500 uppercase tracking-widest">Please specify</label>
                      <input
                        type="text"
                        required
                        placeholder="E.g. Mobile App Development"
                        value={formData.otherCourse}
                        onChange={(e) => setFormData({ ...formData, otherCourse: e.target.value })}
                        className="w-full bg-transparent border-b border-gray-200 py-2.5 text-[16px] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#D62500] transition-colors"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-gray-500 uppercase tracking-widest">Optional Notes</label>
                  <textarea
                    placeholder="Any specific goals or expectations?"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-[15px] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#D62500] transition-colors resize-none mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 sm:h-14 mt-4 bg-[#D62500] text-white font-medium text-[16px] rounded-full hover:bg-[#b81f00] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 active:scale-[0.98]"
                >
                  Join via Email
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
