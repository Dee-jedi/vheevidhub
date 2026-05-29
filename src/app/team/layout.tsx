import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Vheevid Hub',
  description: 'Meet the creative professionals, developers, and designers behind Vheevid Hub dedicated to elevating your brand.',
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
