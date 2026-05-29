'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const CAPABILITIES = [
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'We craft intuitive, user-centric interfaces that not only look stunning but drive conversions and deep engagement. From wireframes to complete design systems, we build digital products people love to use.',
    tags: ['UX Research', 'UI Design', 'Prototyping', 'Design Systems'],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    id: 'software-engineering',
    title: 'Web Development',
    description: 'Our robust engineering team builds scalable, high-performance web and mobile applications. We use cutting-edge modern stacks to ensure your software is fast, secure, and future-proof.',
    tags: ['Web Development', 'Mobile Apps', 'Cloud Architecture', 'API Integrations'],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'We define the soul of your business. Through strategic positioning and striking visual language, we create unforgettable brands that stand out in crowded markets.',
    tags: ['Logo Design', 'Brand Strategy', 'Visual Guidelines', 'Copywriting'],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    )
  },
  {
    id: 'crm-growth',
    title: 'CRM & Automation',
    description: 'Scaling requires systems. We implement and optimize powerful CRM automations and growth marketing strategies that turn leads into loyal customers.',
    tags: ['Marketing Automation', 'SEO Strategy', 'Data Analytics', 'HubSpot'],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: 'academy',
    title: 'Academy',
    description: 'We are pushing our years of agency experience into trusted, interactive teaching experiences. Master the craft of digital execution with live mentorship.',
    tags: ['Live Classes', 'Mentorship', 'Digital Execution', 'Skill Building'],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    )
  }
];

export function CoreCapabilities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Product Design open by default

  return (
    <section id="capabilities" className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D62500]" />
              <span className="text-[13px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                Our Capabilities
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[48px] lg:text-[56px] font-bold text-[#111111] leading-none tracking-tight">
              Core Pillars.
            </h2>
          </div>
          <p className="text-[16px] sm:text-[18px] text-gray-500 max-w-sm md:text-right leading-relaxed">
            The foundational expertise we leverage to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Elite Typography Accordion */}
        <div className="flex flex-col border-t border-gray-100">
          {CAPABILITIES.map((cap, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={i === CAPABILITIES.length - 1 ? "" : "border-b border-gray-100"}
              >

                {/* Accordion Trigger */}
                <button
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  className="w-full py-8 sm:py-12 lg:py-16 flex items-center justify-between text-left group"
                >
                  <div className="flex items-baseline gap-6 sm:gap-12 lg:gap-16">
                    <span className={`text-[16px] sm:text-[20px] font-mono transition-colors duration-300 ${isActive ? 'text-[#D62500]' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      0{i + 1}
                    </span>
                    <h3 className={`text-[32px] sm:text-[56px] lg:text-[80px] font-bold tracking-tight transition-all duration-300 ${isActive ? 'text-[#111111]' : 'text-gray-400 group-hover:text-gray-700'}`}>
                      {cap.title}
                    </h3>
                  </div>

                  {/* Plus/X Icon */}
                  <div className={`shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? 'border-[#D62500] bg-[#D62500]' : 'border-gray-200 group-hover:border-gray-400'}`}>
                    <motion.svg
                      animate={{ rotate: isActive ? 45 : 0 }}
                      className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </motion.svg>
                  </div>
                </button>

                {/* Expanding Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 sm:pb-16 pl-0 sm:pl-[88px] lg:pl-[120px] flex flex-col lg:flex-row gap-10 lg:gap-20">

                        {/* Left: Text Details */}
                        <div className="w-full lg:w-[45%] flex flex-col gap-8">
                          <p className="text-[18px] sm:text-[22px] text-gray-500 leading-relaxed">
                            {cap.description}
                          </p>

                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {cap.tags.map(tag => (
                              <span key={tag} className="px-4 py-2 text-[13px] font-medium text-gray-600 bg-gray-50 rounded-full border border-gray-100">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <Link
                            href={`/works#${cap.id === 'crm-growth' ? 'crm-automation' : cap.id}`}
                            className="inline-flex items-center text-[16px] font-bold text-[#D62500] hover:text-[#b81f00] transition-colors group w-fit mt-4"
                          >
                            View Related Work
                            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>

                        {/* Right: Visual Accent */}
                        <div className="w-full lg:w-[55%]">
                          <div className="w-full aspect-video sm:aspect-21/9 lg:aspect-video rounded-[32px] bg-gray-50 border border-gray-100 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-linear-to-br from-[#D62500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <motion.div
                              animate={{ y: [-10, 10, -10] }}
                              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                              className="w-24 h-24 rounded-3xl bg-white/80 backdrop-blur-xl flex items-center justify-center shadow-lg relative z-10"
                            >
                              {/* Update icon to use red color instead of white for the light theme */}
                              <div className="text-[#D62500]">
                                {cap.icon}
                              </div>
                            </motion.div>

                            {/* Decorative glow */}
                            <div className="absolute w-64 h-64 bg-[#D62500]/10 rounded-full blur-[80px]" />
                          </div>
                        </div>

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
  );
}
