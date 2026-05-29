import { ContactForm } from '@/components/layout';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Hire a Digital Agency | Vheevid Hub',
  description: 'Ready to build your next digital product? Get in touch with Vheevid Hub today for Product Design, Web Development, and Branding services.',
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white">
      <ContactForm />
    </main>
  );
}
