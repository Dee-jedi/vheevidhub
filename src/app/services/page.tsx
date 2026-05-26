import { 
  ServicesHero, 
  CoreCapabilities, 
  TechMarquee, 
  EngagementModels, 
  GiantCTA
} from '@/components/layout';

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
