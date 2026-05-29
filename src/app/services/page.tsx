import { Metadata } from 'next';
import { 
  ServicesHero, 
  CoreCapabilities, 
  TechMarquee, 
  EngagementModels, 
  GiantCTA
} from '@/components/layout';

export const metadata: Metadata = {
  title: 'Our Services | UI/UX, Web Dev, CRM & Automation | Vheevid Hub',
  description: 'Explore Vheevid Hub services including Product Design (UI/UX), Web Development, Brand Identity, CRM Automation, and Book/Video Editing.',
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <ServicesHero />
      <CoreCapabilities />
      <TechMarquee />
      <EngagementModels />
      <GiantCTA />
    </main>
  );
}
