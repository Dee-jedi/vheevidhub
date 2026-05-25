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
    <motion.div 
      className="flex-shrink-0 w-[300px] sm:w-[380px] md:w-[420px] flex flex-col gap-4 sm:gap-5 snap-center group bg-white rounded-[32px] p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100/80"
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Text Content */}
      <div className="flex flex-col gap-2 px-2 sm:px-4 pt-2 sm:pt-4">
        <h3 className="text-lg sm:text-[20px] font-semibold text-gray-900 tracking-tight">{title}</h3>
        <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed pr-6">
          {description}
        </p>
        <Link href={link} className="flex items-center gap-1.5 text-[12px] text-[#486ff0] font-semibold hover:text-blue-700 transition-colors mt-1 w-max">
          Project Link
          <span className="flex items-center justify-center w-[16px] h-[16px] bg-[#E8EFFF] rounded-[4px] text-[#486ff0]">
            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 16.8V7H7.2" />
            </svg>
          </span>
        </Link>
      </div>

      {/* Image */}
      <div className="w-full h-[220px] sm:h-[280px] relative rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 mt-1">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </motion.div>
  );
}
