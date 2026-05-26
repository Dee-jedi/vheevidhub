import { WhyUsHero, OurStory, OurServices, Empowering } from '@/components/layout';

export default function WhyUsPage() {
  return (
    <main className="flex-1">
      <WhyUsHero />
      <OurStory />
      <OurServices />
      <Empowering />
    </main>
  );
}
