'use client';

import { motion, Variants } from 'framer-motion';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const steps = [
  {
    title: 'Discover and Understand',
    description: 'We dive deep into your goals, audience, and challenges, fully understanding context.',
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    // Wait, first icon is a compass. Let's fix.
    actualIcon: (
      <svg className="w-6 h-6 text-[#D62500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.474 16.474L20 4l-12.474 3.526A3.001 3.001 0 004 11.526L4 20l12.474-3.526a3.001 3.001 0 003.526-3.526z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  },
  {
    title: 'Plan and Strategize',
    description: 'We map actionable strategies ensuring every decision aligns with desired outcomes.',
    actualIcon: (
      <svg className="w-6 h-6 text-[#D62500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  },
  {
    title: 'Create and Refine',
    description: 'We craft and iterate solutions, perfecting design, content, or educational materials.',
    actualIcon: (
      <svg className="w-6 h-6 text-[#D62500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    )
  },
  {
    title: 'Deliver and Support',
    description: 'We deliver the final product, provide guidance, and ensure lasting impact.',
    actualIcon: (
      <svg className="w-6 h-6 text-[#D62500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  }
];

// Let's refine icons to match the image closely
const refinedSteps = [
  {
    title: 'Discover and Understand',
    description: 'We dive deep into your goals, audience, and challenges, fully understanding context.',
    icon: (
      <svg className="w-6 h-6 text-[#D62500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l4-4-1 5-4 4 1-5z" />
      </svg>
    )
  },
  {
    title: 'Plan and Strategize',
    description: 'We map actionable strategies ensuring every decision aligns with desired outcomes.',
    icon: (
      <svg className="w-6 h-6 text-[#D62500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    )
  },
  {
    title: 'Create and Refine',
    description: 'We craft and iterate solutions, perfecting design, content, or educational materials.',
    icon: (
      <svg className="w-6 h-6 text-[#D62500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    )
  },
  {
    title: 'Deliver and Support',
    description: 'We deliver the final product, provide guidance, and ensure lasting impact.',
    icon: (
      <svg className="w-6 h-6 text-[#D62500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a8 8 0 00-8 8v4a2 2 0 002 2h2v-5H5a7.978 7.978 0 017-7 7.978 7.978 0 017 7h-3v5h2a2 2 0 002-2v-4a8 8 0 00-8-8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 20h-6" />
      </svg>
    )
  }
];

export function ExecutionPath() {
  return (
    <section className="w-full bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4 max-w-3xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#111111] leading-tight tracking-tight mb-6">
            <span className="relative inline-block whitespace-nowrap font-bold">
              {"Execution".split("").map((char, i) => (
                <motion.span 
                  key={`exec-${i}`} 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.1, delay: i * 0.06 }}
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
                  transition={{ duration: 0.8, ease: "easeOut", delay: 9 * 0.06 }}
                  d="M2 7C20 3 40 2 60 3C80 4 100 5 118 3"
                  stroke="#D62500"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {" "}
            {"Path".split("").map((char, i) => (
              <motion.span 
                key={`path-${i}`} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.1, delay: (9 + i) * 0.06 }}
              >
                {char}
              </motion.span>
            ))}
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

        {/* Steps Container */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#FFF6F3] rounded-t-[40px] sm:rounded-t-[60px] rounded-b-[12px] sm:rounded-b-[20px] px-6 sm:px-12 py-16 sm:py-24"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 relative">
            {refinedSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUpVariants}
                className="relative flex flex-row sm:flex-col items-start gap-5 sm:gap-0"
              >
                {/* Mobile Timeline Connector Line */}
                {idx !== refinedSteps.length - 1 && (
                  <div className="absolute left-[23px] top-[48px] bottom-[-40px] w-[2px] bg-[#FFE4DB] sm:hidden z-0" />
                )}

                {/* Icon Node */}
                <div className="relative w-12 h-12 rounded-full bg-[#FFE4DB] flex items-center justify-center sm:mb-6 shrink-0 z-10">
                  {step.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col pt-1 sm:pt-0">
                  <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#111111] mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed sm:pr-4">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
