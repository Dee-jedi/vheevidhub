import { WorksHero, AllWorks, ExecutionPath, Academy } from '@/components/layout';

export default function WorksPage() {
  return (
    <main className="flex-1">
      <WorksHero />
      
      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-center py-8">
        <div className="w-full sm:w-[80%] md:w-[60%] h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <AllWorks />

      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-center py-8">
        <div className="w-full sm:w-[80%] md:w-[60%] h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <ExecutionPath />

      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-center py-8">
        <div className="w-full sm:w-[80%] md:w-[60%] h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <Academy />
    </main>
  );
}
