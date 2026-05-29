import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from '@/context';
import { Navbar, Footer } from '@/components/layout';
import { APP_NAME, APP_DESCRIPTION } from '@/constants';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    'Digital Agency',
    'Product Design',
    'UI/UX Design',
    'Web Development',
    'Software Development',
    'Brand Identity',
    'CRM Automation',
    'Vheevid Hub'
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://vheevidhub.com.ng'),
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: '/',
    siteName: APP_NAME,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col antialiased bg-white text-gray-900 overflow-x-hidden">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
