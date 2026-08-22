'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { JoinButton } from './join-button';

interface CourseData {
  id: string;
  title: string;
  price: number;
  usdPrice?: number;
  duration?: string;
  whatsappLink: string;
}

interface Props {
  course: CourseData;
}

export function CourseEnrollmentCard({ course }: Props) {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const successData = localStorage.getItem('vheevid_academy_success');
    if (successData) {
      try {
        const parsed = JSON.parse(successData);
        const dataList = Array.isArray(parsed) ? parsed : [parsed];
        if (dataList.some((d: any) => d.courseId === course.id)) {
          setIsEnrolled(true);
        }
      } catch (e) {
        // Ignore
      }
    }
  }, [course.id]);

  // To prevent hydration mismatch, you could optionally return a skeleton or similar before mounted
  // but since the default is "RECOMMENDED" and "Proceed to checkout", it's usually fine to just render the default on SSR
  // and flip it on the client if enrolled.

  return (
    <div className="border border-gray-100 rounded-[24px] p-6 sm:p-10 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative overflow-hidden">
      {/* Badge */}
      {mounted && isEnrolled ? (
        <div className="absolute top-0 right-0 bg-green-500 text-white text-[11px] font-bold px-4 py-1.5 rounded-bl-[16px] tracking-wider transition-all duration-300">
          ENROLLED
        </div>
      ) : (
        <div className="absolute top-0 right-0 bg-[#D62500] text-white text-[11px] font-bold px-4 py-1.5 rounded-bl-[16px] tracking-wider transition-all duration-300">
          RECOMMENDED
        </div>
      )}

      <div className="text-[13px] font-bold text-[#D62500] uppercase tracking-wider mb-4">
        {course.title}
      </div>
      
      <div className="text-[15px] text-gray-500 mb-6">
        {course.duration || '6 weeks'}
      </div>

      <div className="mb-10">
        <div className="text-[32px] sm:text-[40px] font-bold text-[#111111] leading-none mb-2">
          ₦{course.price.toLocaleString()}
        </div>
        {course.usdPrice && (
          <div className="text-[15px] text-gray-400">
            or ${course.usdPrice}
          </div>
        )}
      </div>

      {mounted && isEnrolled ? (
        <Link
          href="/dashboard"
          className="flex items-center justify-center w-full h-14 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 active:scale-[0.98]"
        >
          Go to Dashboard →
        </Link>
      ) : (
        <JoinButton course={course} />
      )}
    </div>
  );
}
