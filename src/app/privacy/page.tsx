import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-white pt-32 pb-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-2 text-black">Privacy Policy</h1>
        <p className="text-gray-500 mb-12 text-sm">
          Vheevid Hub Limited <br />
          Last Updated: May 2026
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Introduction</h2>
            <div className="space-y-4">
              <p>
                Vheevid Hub Limited values your privacy. This Privacy Policy explains how we collect, use, and protect information you share with us when using our website, contacting us, or working with us.
              </p>
              <p>
                By using our website or services, you agree to the practices described in this policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Information We Collect</h2>
            <div className="space-y-4">
              <p>
                We only collect information necessary to communicate with you and provide our services. This may include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Any information you voluntarily submit through contact forms, consultation requests, or project inquiries</li>
              </ul>
              <p>
                We do not intentionally collect sensitive personal information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">How We Use Your Information</h2>
            <div className="space-y-4">
              <p>
                We use the information you provide to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Respond to inquiries</li>
                <li>Communicate about projects or services</li>
                <li>Provide customer support</li>
                <li>Improve our services and client experience</li>
                <li>Send project-related updates</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Third-Party Sharing</h2>
            <div className="space-y-4">
              <p>
                We do not share your information with third parties except where necessary to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Deliver requested services</li>
                <li>Comply with legal obligations</li>
                <li>Protect our rights or business operations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Data Security</h2>
            <div className="space-y-4">
              <p>
                We take reasonable steps to protect the information you share with us from unauthorized access, misuse, or disclosure.
              </p>
              <p>
                However, no online transmission or storage system can be guaranteed to be completely secure.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">International Clients</h2>
            <div className="space-y-4">
              <p>
                Because we work with clients both within and outside Nigeria, your information may be communicated across international platforms or services where necessary for project delivery.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Your Rights</h2>
            <div className="space-y-4">
              <p>
                You may request to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
              </ul>
              <p>
                To make a request, contact us at: <br />
                Email: <a href="mailto:vheevidhub@gmail.com" className="underline hover:text-black">vheevidhub@gmail.com</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Cookies & Tracking</h2>
            <div className="space-y-4">
              <p>
                At this time, we do not actively use analytics tools, advertising trackers, or advanced cookies for behavioral tracking.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Changes to This Policy</h2>
            <div className="space-y-4">
              <p>
                We may update this Privacy Policy occasionally to reflect operational, legal, or service changes. Updates will be posted on this page with a revised effective date.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Contact Us</h2>
            <div className="space-y-4">
              <p>
                If you have any questions about this Privacy Policy, you may contact: <br /><br />
                Vheevid Hub Limited <br />
                Email: <a href="mailto:vheevidhub@gmail.com" className="underline hover:text-black">vheevidhub@gmail.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
