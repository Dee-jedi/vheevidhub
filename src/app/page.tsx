import { Metadata } from 'next';
import { Hero, Expertise, Works, Inspirations, Team } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Home | Vheevid Hub - Top Digital Agency in Nigeria',
  description: 'Vheevid Hub is a premier digital agency in Nigeria dedicated to helping businesses in Lagos, Abuja, and globally grow through exceptional Product Design, Web Development, and Brand Identity.',
};

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      
      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-center py-8">
        <div className="w-full sm:w-[80%] md:w-[60%] h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      </div>
      
      <Expertise />
      <Works />
      <Inspirations />

      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-center py-8">
        <div className="w-full sm:w-[80%] md:w-[60%] h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <Team />
    </main>
  );
}
