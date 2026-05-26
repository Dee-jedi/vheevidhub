import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCategoryCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
}

export function WorkCategoryCard({ title, description, link, imageSrc }: ServiceCategoryCardProps) {
  const isComingSoon = link === '#' || link === '';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col min-w-[280px] sm:min-w-[300px] w-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-[20px] p-4 sm:p-5"
    >
      {/* Text Info */}
      <div className="flex flex-col flex-1 mb-5">
        <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#111111] mb-2">{title}</h3>
        <p className="text-[13.5px] text-gray-500 leading-[1.6] mb-4 flex-1 line-clamp-3">
          {description}
        </p>
        {isComingSoon ? null : (
          <Link href={link} target="_blank" className="text-[12px] font-medium text-[#D62500] truncate max-w-[90%] hover:underline flex items-center mt-auto">
            {link}
            <span className="w-4 h-4 ml-1.5 bg-[#FFF0EB] text-[#D62500] rounded-sm inline-flex items-center justify-center shrink-0">
              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        )}
      </div>

      {/* Image */}
      <div className="relative w-full aspect-4/3 rounded-[12px] overflow-hidden bg-gray-50 mt-auto shadow-inner">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 33vw, 25vw"
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </motion.div>
  );
}
