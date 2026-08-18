'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';

const CheckoutModal = dynamic(
  () => import('./checkout-modal').then(mod => mod.CheckoutModal), 
  { ssr: false }
);

interface CourseData {
  id: string;
  title: string;
  price: number;
  whatsappLink: string;
}

interface JoinButtonProps {
  course: CourseData;
}

export function JoinButton({ course }: JoinButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center w-full h-14 bg-[#D62500] text-white font-semibold rounded-full hover:bg-[#b81f00] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 active:scale-[0.98]"
      >
        Join →
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <CheckoutModal 
            course={course} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
