'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const CheckoutModal = dynamic(
  () => import('@/components/academy/checkout-modal').then(mod => mod.CheckoutModal), 
  { ssr: false }
);

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const COURSES = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Master visual communication and learn industry-standard design tools to create stunning brand identities.',
    price: 25000,
    features: [
      'Live interactive classes',
      'Hands-on portfolio projects',
      'Certificate of completion',
      'Mentorship from experts'
    ],
    whatsappLink: 'https://chat.whatsapp.com/L51ztWo0EjP0FaJJFUFz0s'
  },
  {
    id: 'automations',
    title: 'Automations & AI',
    description: 'Learn to build powerful workflows, automate repetitive tasks, and leverage AI to scale businesses.',
    price: 25000,
    features: [
      'Live interactive classes',
      'Real-world automation setups',
      'Certificate of completion',
      'Mentorship from experts'
    ],
    whatsappLink: 'https://chat.whatsapp.com/B7itIXpTDWI9pJVUBjfoxe'
  }
];

const FAQS = [
  {
    question: 'Do I need prior experience?',
    answer: 'No, both courses are designed for beginners to intermediate learners. We start from the basics.'
  },
  {
    question: 'Are the classes live or pre-recorded?',
    answer: 'The classes are live and highly interactive to ensure you get the best learning experience.'
  },
  {
    question: 'Will I get a certificate?',
    answer: 'Yes, upon successful completion of your projects, you will receive a verifiable certificate.'
  }
];

export default function AcademyLanding() {
  const [selectedCourse, setSelectedCourse] = useState<typeof COURSES[0] | null>(null);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-white relative">
      
      {/* Dark Hero Section matching other pages */}
      <section className="relative w-full min-h-[90svh] bg-[#111111] overflow-hidden flex items-center pt-28 pb-20">
        {/* Background Image (Using services hero bg as placeholder) */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <Image
            src="/Images/services_hero_bg.png"
            alt="Academy Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none mix-blend-screen">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-linear-to-br from-[#D62500]/20 to-transparent blur-[80px]"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-linear-to-tr from-[#D62500]/10 to-transparent blur-[80px]"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#D62500] animate-pulse" />
              <span className="text-[13px] font-medium text-gray-300 uppercase tracking-widest">
                Enrollment Open
              </span>
            </motion.div>

            <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] font-bold text-white leading-[1.05] tracking-tight mb-8">
              <span className="block">Master Digital</span>
              <span className="relative inline-block text-[#D62500]">
                Craftsmanship.
                <svg className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-[12px] sm:h-[16px]" viewBox="0 0 120 10" fill="none" preserveAspectRatio="none">
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    d="M2 7C20 3 40 2 60 3C80 4 100 5 118 3"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="text-[18px] sm:text-[22px] text-gray-400 leading-relaxed max-w-2xl mb-12"
            >
              Join our intensive live classes designed to transform you from a beginner to a highly sought-after professional in Graphic Design and Automations.
            </motion.p>

          </div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 z-20"
        >
          <a
            href="#courses"
            className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#111111] tracking-tight mb-4">
              Choose Your Path
            </h2>
            <p className="text-gray-500">Select a course to begin your journey.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {COURSES.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white border border-gray-200 rounded-[24px] p-8 sm:p-10 hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col"
              >
                <div className="mb-6 flex-1">
                  <h3 className="text-[24px] font-bold text-[#111111] mb-3">{course.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6">{course.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-[36px] font-bold text-[#111111]">₦{course.price.toLocaleString()}</span>
                  </div>

                  <ul className="space-y-4">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] text-gray-700 font-medium">
                        <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedCourse(course)}
                  className="w-full h-14 rounded-xl bg-[#111111] text-white font-semibold text-[16px] hover:bg-[#D62500] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 active:scale-[0.98]"
                >
                  Enroll Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="w-full bg-gray-50 py-24 sm:py-32 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#111111] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">Everything you need to know about the Academy.</p>
          </div>

          <div className="flex flex-col border-t border-gray-200">
            {FAQS.map((faq, i) => {
              const isActive = activeFaqIndex === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="border-b border-gray-200"
                >
                  <button
                    onClick={() => setActiveFaqIndex(isActive ? null : i)}
                    className="w-full py-6 sm:py-8 flex items-center justify-between text-left group"
                  >
                    <h3 className={`text-[18px] sm:text-[22px] font-semibold tracking-tight transition-all duration-300 ${isActive ? 'text-[#D62500]' : 'text-[#111111] group-hover:text-[#D62500]'}`}>
                      {faq.question}
                    </h3>
                    
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-[#D62500]' : 'bg-white border border-gray-200 group-hover:border-[#D62500]'}`}>
                      <motion.svg
                        animate={{ rotate: isActive ? 45 : 0 }}
                        className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-[#D62500]'}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </motion.svg>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pr-12 text-[16px] text-gray-500 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* White spacer before footer */}
      <div className="w-full h-16 sm:h-24 bg-white" />

      <AnimatePresence>
        {selectedCourse && (
          <CheckoutModal 
            course={selectedCourse} 
            onClose={() => setSelectedCourse(null)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}
