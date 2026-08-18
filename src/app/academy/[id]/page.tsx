import { notFound } from 'next/navigation';
import { BOOTCAMPS } from '@/data/bootcamps';
import Link from 'next/link';
import { Metadata } from 'next';
import { JoinButton } from '@/components/academy/join-button';

export function generateStaticParams() {
  return BOOTCAMPS.filter(b => b.status === 'active').map((bootcamp) => ({
    id: bootcamp.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const bootcamp = BOOTCAMPS.find((b) => b.id === id);
  if (!bootcamp) return { title: 'Not Found' };
  
  return {
    title: `${bootcamp.title} | Vheevid Hub Academy`,
    description: bootcamp.description,
  };
}

export default async function BootcampDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const bootcamp = BOOTCAMPS.find((b) => b.id === id);

  if (!bootcamp) {
    notFound();
  }

  return (
    <main className="w-full bg-white min-h-screen py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto pt-10">
        
        {/* Back Link & Badge */}
        <div className="flex items-center gap-4 mb-10">
          <Link href="/academy#courses" className="flex md:hidden items-center gap-2 text-[14px] font-medium text-gray-500 hover:text-[#111111] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Bootcamps
          </Link>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#D62500]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D62500]" />
            <span className="text-[12px] font-semibold">{bootcamp.badgeText}</span>
          </div>
        </div>

        {/* Header */}
        <h1 className="text-[40px] sm:text-[48px] font-bold text-[#111111] leading-[1.1] mb-6 tracking-tight">
          {bootcamp.title}
        </h1>

        {/* Description */}
        <p className="text-[18px] sm:text-[20px] text-gray-600 leading-relaxed mb-8">
          {bootcamp.fullDescription}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-[15px] font-medium text-gray-500 mb-16">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {bootcamp.dateText}
          </div>
          {bootcamp.location && (
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {bootcamp.location}
            </div>
          )}
        </div>

        <hr className="border-gray-100 mb-16" />

        {/* Register Section */}
        <h2 className="text-[24px] font-bold text-[#111111] mb-6">Register</h2>

        <div className="border border-gray-100 rounded-[24px] p-6 sm:p-10 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative overflow-hidden">
          {/* Recommended Badge */}
          <div className="absolute top-0 right-0 bg-[#D62500] text-white text-[11px] font-bold px-4 py-1.5 rounded-bl-[16px] tracking-wider">
            RECOMMENDED
          </div>

          <div className="text-[13px] font-bold text-[#D62500] uppercase tracking-wider mb-4">
            {bootcamp.title}
          </div>
          
          <div className="text-[15px] text-gray-500 mb-6">
            {bootcamp.duration || '6 weeks'}
          </div>

          <div className="mb-10">
            <div className="text-[32px] sm:text-[40px] font-bold text-[#111111] leading-none mb-2">
              ₦{bootcamp.price.toLocaleString()}
            </div>
            {bootcamp.usdPrice && (
              <div className="text-[15px] text-gray-400">
                or ${bootcamp.usdPrice}
              </div>
            )}
          </div>

          <JoinButton course={bootcamp} />
        </div>

        {/* Curriculum Section */}
        {bootcamp.curriculum && bootcamp.curriculum.length > 0 && (
          <div className="mt-24 pb-10">
            <div className="text-center mb-16">
              <h2 className="text-[32px] sm:text-[40px] font-bold text-[#111111] tracking-tight mb-4">
                Curriculum Roadmap
              </h2>
              {bootcamp.curriculumDescription && (
                <p className="text-[16px] sm:text-[18px] text-gray-500 leading-relaxed max-w-2xl mx-auto">
                  {bootcamp.curriculumDescription}
                </p>
              )}
            </div>

            {/* Track Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#D62500] text-white text-[13px] font-bold tracking-wider shadow-[0_2px_10px_rgba(214,37,0,0.2)]">
                {bootcamp.trackName || 'Bootcamp Track'} ({bootcamp.duration || '6 Weeks'})
              </span>
            </div>

            {/* Modules List */}
            <div className="space-y-4">
              {bootcamp.curriculum.map((module, idx) => {
                const isFirst = idx === 0;
                return (
                  <div 
                    key={idx} 
                    className={`bg-white rounded-[16px] p-6 sm:p-8 flex items-start gap-6 relative shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]`}
                  >
                    {/* Left Border Indicator */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${isFirst ? 'bg-[#D62500]' : 'bg-gray-200'}`} />
                    
                    {/* Week Circle */}
                    <div className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-[13px] sm:text-[14px] ${isFirst ? 'bg-red-50 text-[#D62500]' : 'bg-gray-50 text-gray-400'}`}>
                      {module.week}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-0.5 sm:pt-1">
                      <h3 className="text-[18px] sm:text-[22px] font-bold text-[#111111] mb-3 sm:mb-4">
                        {module.title}
                      </h3>
                      <ul className="space-y-2.5">
                        {module.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <span className={`w-1.5 h-1.5 shrink-0 rounded-full ${isFirst ? 'bg-[#D62500]' : 'bg-gray-300'}`} />
                            <span className={`text-[14px] sm:text-[15px] ${isFirst ? 'text-gray-600' : 'text-gray-500'}`}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
