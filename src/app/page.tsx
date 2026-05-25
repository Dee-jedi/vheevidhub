import { Hero, Expertise, Works, Inspirations, Team } from '@/components/layout';

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Expertise />
      <Works />
      <Inspirations />
      <Team />
    </main>
  );
}
