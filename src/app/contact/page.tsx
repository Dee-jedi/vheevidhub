import { ContactForm } from '@/components/layout';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Hire a Digital Agency in Nigeria | Vheevid Hub',
  description: 'Ready to build your next digital product? Get in touch with Vheevid Hub today for Product Design, Web Development, and Branding services in Lagos, Abuja, Kano, and beyond.',
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white">
      <ContactForm />
    </main>
  );
}
