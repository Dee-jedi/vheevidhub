import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface WorkCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
}

export function WorkCard({ title, description, link, imageSrc }: WorkCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="shrink-0 w-[300px] sm:w-[380px] md:w-[420px] snap-center outline-none block">
      <motion.div
        className="flex flex-col gap-4 sm:gap-5 group bg-white rounded-[32px] p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100/80 h-full"
        whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Text Content */}
        <div className="flex flex-col gap-2 px-2 sm:px-4 pt-2 sm:pt-4">
          <h3 className="text-lg sm:text-[20px] font-semibold text-gray-900 tracking-tight flex items-center justify-between">
            {title}
            <span className="flex items-center justify-center w-[24px] h-[24px] bg-[#E8EFFF] rounded-full text-[#486ff0] opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 16.8V7H7.2" />
              </svg>
            </span>
          </h3>
          <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed pr-2">
            {description}
          </p>
        </div>

      {/* Image */}
      <div className="w-full h-[220px] sm:h-[280px] relative rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 mt-1">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 300px, (max-width: 768px) 380px, 420px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      </motion.div>
    </Link>
  );
}
