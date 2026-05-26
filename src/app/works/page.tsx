import { WorksHero, AllWorks, ExecutionPath, Academy } from '@/components/layout';

export default function WorksPage() {
  return (
    <main className="flex-1">
      <WorksHero />
      <AllWorks />
      <ExecutionPath />
      <Academy />
    </main>
  );
}
