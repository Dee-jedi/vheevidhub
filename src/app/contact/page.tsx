import { ContactForm } from '@/components/layout';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Veevid Hub to build your next digital product.',
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white">
      <ContactForm />
    </main>
  );
}
