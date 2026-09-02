import type { Metadata } from 'next';
import { Geist, Geist_Mono, DM_Sans } from 'next/font/google';
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

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    'Digital Agency Nigeria',
    'Web Development Agency in Lagos',
    'UI/UX Design Abuja',
    'Product Design Kano',
    'Software Development Nigeria',
    'Brand Identity Creators Lagos',
    'CRM Automation Nigeria',
    'Tech Training Hub Nigeria',
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
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable}`}
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
