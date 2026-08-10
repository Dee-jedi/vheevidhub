'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AcademySuccessPage() {
  const router = useRouter();
  const [data, setData] = useState<{
    courseId: string;
    title: string;
    whatsappLink: string;
    firstName: string;
  } | null>(null);

  useEffect(() => {
    // Retrieve successful payment data from localStorage
    const savedData = localStorage.getItem('vheevid_academy_success');
    if (savedData) {
      setData(JSON.parse(savedData));
      // Optionally clear it so they can't just refresh this page forever
      // localStorage.removeItem('vheevid_academy_success');
    } else {
      // If no data, redirect back to academy
      router.push('/academy');
    }
  }, [router]);

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-[72px]">
      <main className="flex-1 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg bg-white rounded-[24px] shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="h-32 bg-[#D62500] relative flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg absolute -bottom-8">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <div className="pt-14 pb-8 px-8 text-center">
            <h1 className="text-[28px] font-bold text-[#111111] tracking-tight mb-2">
              Welcome, {data.firstName}!
            </h1>
            <p className="text-[16px] text-gray-500 leading-relaxed mb-8">
              Your payment for <span className="font-semibold text-gray-800">{data.title}</span> was successful. We are thrilled to have you!
            </p>

            <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-6 text-left mb-8">
              <h3 className="text-[15px] font-bold text-gray-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Next Steps
              </h3>
              <ol className="space-y-4 text-[14px] text-gray-600">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-semibold flex items-center justify-center shrink-0">1</span>
                  <span><strong>Check your email:</strong> Your Welcome Email containing the Onboarding Handbook has been sent.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-semibold flex items-center justify-center shrink-0">2</span>
                  <span><strong>Join the community:</strong> Click the button below to join your course's official WhatsApp group.</span>
                </li>
              </ol>
            </div>

            <div className="flex flex-col gap-3">
              <a 
                href={data.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-14 rounded-xl bg-[#25D366] text-white font-semibold text-[16px] hover:bg-[#20bd5a] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Join WhatsApp Group
              </a>
              <Link 
                href="/academy"
                className="w-full h-14 rounded-xl border border-gray-200 text-gray-700 font-semibold text-[16px] hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
              >
                Back to Academy
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
