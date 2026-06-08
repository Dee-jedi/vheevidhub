import { WaitlistForm } from '@/components/layout';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Waitlist | Vheevid Hub Academy',
  description: 'Join the waitlist for Vheevid Hub Academy live classes.',
};

export default function WaitlistPage() {
  return (
    <main className="flex-1 bg-[#FAFAFA] min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-linear-to-b from-gray-100/50 to-transparent pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#D62500]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#111111]/5 blur-[120px] pointer-events-none" />

      {/* Back button */}
      <div className="w-full max-w-lg my-6 relative z-10">
        <Link
          href="/works#academy"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#D62500] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Academy
        </Link>
      </div>

      <div className="w-full relative z-10">
        <WaitlistForm />
      </div>
    </main>
  );
}
