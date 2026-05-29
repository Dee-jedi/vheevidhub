import { Metadata } from 'next';
import { WhyUsHero, OurStory, OurServices, Empowering } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Why Us | Vheevid Hub',
  description: 'Learn about the story behind Vheevid Hub, our core values, and meet the creative professionals dedicated to elevating your brand.',
};

export default function WhyUsPage() {
  return (
    <main className="flex-1">
      <WhyUsHero />
      
      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-center py-8">
        <div className="w-full sm:w-[80%] md:w-[60%] h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <OurStory />

      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-center py-8">
        <div className="w-full sm:w-[80%] md:w-[60%] h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <OurServices />

      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-center py-8">
        <div className="w-full sm:w-[80%] md:w-[60%] h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <Empowering />
    </main>
  );
}
