'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BOOTCAMPS } from '@/data/bootcamps';
import { motion } from 'framer-motion';

interface EnrolledData {
  courseId: string;
  title: string;
  whatsappLink: string;
  firstName: string;
  email: string;
}

export function DashboardClient() {
  const [enrolledDataList, setEnrolledDataList] = useState<EnrolledData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('vheevid_academy_success');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setEnrolledDataList(Array.isArray(parsed) ? parsed : [parsed]);
      } catch (e) {
        setEnrolledDataList([]);
      }
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-[#FAFAFA] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#D62500]/20 border-t-[#D62500] rounded-full animate-spin"></div>
      </div>
    );
  }

  const enrolledCourseIds = enrolledDataList.map(d => d.courseId);
  const enrolledCourses = BOOTCAMPS.filter((b) => enrolledCourseIds.includes(b.id));

  const availableCourses = BOOTCAMPS.filter(
    (b) => b.status === 'active' && !enrolledCourseIds.includes(b.id)
  );

  return (
    <div className="min-h-screen pt-[100px] pb-24 bg-[#FAFAFA]">
      <div className="max-w-[900px] mx-auto px-5 sm:px-8">
        
        {/* Welcome Pill */}
        {enrolledDataList.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-end mb-8"
          >
            <div className="px-5 py-2 bg-red-50 text-[#D62500] text-[14px] font-semibold rounded-full border border-red-100 shadow-sm">
              Welcome, {enrolledDataList[0].firstName}
            </div>
          </motion.div>
        )}



        {/* My Bootcamps Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-6 h-6 text-[#D62500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <h2 className="text-[24px] font-bold text-gray-900">My Bootcamps</h2>
          </div>

          {enrolledCourses.length > 0 ? (
            <div className="space-y-6">
              {enrolledCourses.map((enrolledCourse) => (
                <motion.div 
                  key={enrolledCourse.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-[24px] p-6 sm:p-8 shadow-sm border border-gray-100"
                >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-green-50 text-green-600 text-[12px] font-semibold rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Enrolled
                </span>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>

              <h3 className="text-[24px] sm:text-[28px] font-bold text-gray-900 mb-8 tracking-tight">{enrolledCourse.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                <div className="space-y-6">
                  {/* Start Date */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-500">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[13px] text-gray-500 font-medium">Start Date</p>
                      <p className="text-[15px] font-semibold text-gray-900 mt-0.5">{enrolledCourse.dateText.replace('Starts ', '')}</p>
                    </div>
                  </div>

                  {/* Class Time */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-500">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[13px] text-gray-500 font-medium">Class Time</p>
                      <p className="text-[15px] font-semibold text-gray-900 mt-0.5">7:00 PM - 9:00 PM WAT</p>
                      <p className="text-[13px] text-gray-500 mt-0.5">{enrolledCourse.duration || '6 weeks'}</p>
                    </div>
                  </div>

                  {/* Community */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-500">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[13px] text-gray-500 font-medium">Community</p>
                      <a href={enrolledCourse.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[15px] font-semibold text-[#0066FF] hover:underline mt-0.5 inline-flex items-center gap-1">
                        Join WhatsApp
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 flex flex-col justify-between">
                  {/* Platform */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0 text-[#D62500]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[13px] text-gray-500 font-medium">Platform</p>
                      <p className="text-[15px] font-semibold text-gray-900 mt-0.5">{enrolledCourse.location || 'Live on Google Meet'}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4">
                    <a
                      href={enrolledCourse.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-[52px] bg-[#D62500] hover:bg-[#b81f00] text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-red-500/20"
                    >
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      JOIN LIVE →
                    </a>
                    <a href="mailto:academy@vheevidhub.com.ng" className="w-full mt-4 text-[13px] font-medium text-gray-500 hover:text-gray-900 flex items-center justify-center gap-1.5 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact Team
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            ))}
            </div>
          ) : (
            <div className="bg-white rounded-[24px] p-12 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-400">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-gray-900 mb-2">No Enrolled Bootcamps</h3>
              <p className="text-[15px] text-gray-500 mb-6">You haven't enrolled in any bootcamps yet. Explore our available courses below!</p>
              <Link href="/academy" className="px-6 py-3 bg-[#D62500] text-white rounded-full font-semibold hover:bg-[#b81f00] transition-colors">
                Explore Bootcamps
              </Link>
            </div>
          )}
        </div>

        {/* Available Bootcamps Section */}
        {availableCourses.length > 0 && (
          <div>
            <h2 className="text-[20px] font-bold text-gray-900 mb-6">Available Bootcamps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {availableCourses.map((course) => (
                <div 
                  key={course.id} 
                  className="bg-white rounded-[16px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between"
                  style={{ width: '100%', maxWidth: '410px', height: '234px' }}
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 rounded-full mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D62500]"></span>
                      <span className="text-[10px] font-bold text-[#D62500] uppercase tracking-wider">{course.badgeText}</span>
                    </div>
                    <h3 className="text-[18px] font-bold text-gray-900 mb-1 leading-tight">{course.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">Enroll now and start learning</p>
                  </div>
                  <Link 
                    href={`/academy/${course.id}`}
                    className="w-full h-11 bg-[#D62500] hover:bg-[#b81f00] text-white rounded-full font-bold text-[13px] flex items-center justify-center gap-2 transition-colors active:scale-[0.98] mt-4"
                  >
                    VIEW DETAILS →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}
