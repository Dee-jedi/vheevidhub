import { Hero, Expertise, Works, Inspirations, Team } from '@/components/layout';

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Expertise />
      <Works />
      <Inspirations />

      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-center">
        <div className="w-full sm:w-[80%] md:w-[60%] h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <Team />
    </main>
  );
}
