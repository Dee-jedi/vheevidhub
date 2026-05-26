'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const MODELS = [
  {
    title: 'Project-Based',
    description: 'Perfect for clearly defined scopes. We agree on deliverables, timeline, and budget upfront.',
    idealFor: 'MVPs, Website redesigns, Branding',
    icon: (
      <svg className="w-6 h-6 text-[#D62500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Dedicated Team',
    description: 'Embed our experts directly into your workflow. Complete flexibility and rapid scaling as your needs change.',
    idealFor: 'Long-term product development, Staff augmentation',
    icon: (
      <svg className="w-6 h-6 text-[#D62500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Monthly Retainer',
    description: 'Ongoing design and engineering support. A guaranteed block of hours each month for whatever you need.',
    idealFor: 'Continuous optimization, Marketing support',
    icon: (
      <svg className="w-6 h-6 text-[#D62500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
];

export function EngagementModels() {
  return (
    <section className="w-full bg-[#FFF6F3] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
          <h2 className="text-[32px] sm:text-[48px] font-bold text-[#111111] mb-6 tracking-tight">
            How we work with you
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-500 leading-relaxed">
            We offer flexible engagement models tailored to your specific goals, team structure, and velocity requirements.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {MODELS.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[24px] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(214,37,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#FFF0EB] flex items-center justify-center mb-8">
                {model.icon}
              </div>
              <h3 className="text-[22px] font-bold text-[#111111] mb-4">
                {model.title}
              </h3>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-8 min-h-[80px]">
                {model.description}
              </p>
              
              <div className="pt-6 border-t border-gray-100">
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Ideal For
                </p>
                <p className="text-[14px] font-medium text-[#D62500]">
                  {model.idealFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
