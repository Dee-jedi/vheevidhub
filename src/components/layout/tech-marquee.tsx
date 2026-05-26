'use client';

import { motion } from 'framer-motion';

const TECHNOLOGIES = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS',
  'Figma', 'Framer Motion', 'AWS', 'Vercel', 'HubSpot',
  'Salesforce', 'Stripe', 'GraphQL', 'MongoDB', 'PostgreSQL'
];

export function TechMarquee() {
  return (
    <section className="w-full bg-[#111111] py-16 sm:py-24 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8 sm:mb-12">
        <h3 className="text-center text-[18px] sm:text-[20px] font-medium text-gray-400">
          Powered by industry-leading technologies
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Left Gradient Fade */}
        <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-40 bg-linear-to-r from-[#111111] to-transparent z-10 pointer-events-none" />

        {/* Marquee Content */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
            <div
              key={i}
              className="mx-6 sm:mx-10 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-[24px] sm:text-[32px] font-bold text-transparent bg-clip-text bg-linear-to-r from-gray-300 to-gray-500">
                {tech}
              </span>
            </div>
          ))}
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-40 bg-linear-to-l from-[#111111] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
