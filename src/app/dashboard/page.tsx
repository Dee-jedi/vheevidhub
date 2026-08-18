import { Metadata } from 'next';
import { DashboardClient } from './dashboard-client';

export const metadata: Metadata = {
  title: 'Dashboard | Vheevid Hub Academy',
  description: 'Your enrolled bootcamps and active courses.',
};

export default function DashboardPage() {
  return <DashboardClient />;
}
