import React from 'react';

export default function TermsOfServicePage() {
  return (
    <main className="flex-1 bg-white pt-32 pb-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-2 text-black">Terms of Service</h1>
        <p className="text-gray-500 mb-12 text-sm">
          Vheevid Hub Limited <br />
          Last Updated: May 2026
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Introduction</h2>
            <div className="space-y-4">
              <p>
                Welcome to Vheevid Hub Limited.
              </p>
              <p>
                By accessing our website or using our services, you agree to these Terms of Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Services</h2>
            <div className="space-y-4">
              <p>
                Vheevid Hub provides creative and digital services including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Product Design (UI/UX)</li>
                <li>Software & Web Development</li>
                <li>Branding</li>
                <li>Automation Solutions</li>
                <li>Graphic Design</li>
                <li>Video & Content Editing</li>
                <li>Book Editing</li>
                <li>Digital Training & Educational Services</li>
              </ul>
              <p>
                Additional services may be introduced over time.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Project Communication</h2>
            <div className="space-y-4">
              <p>
                Clients are expected to provide clear information, timely feedback, and necessary materials required for project completion.
              </p>
              <p>
                Delays in communication may affect delivery timelines.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Revisions</h2>
            <div className="space-y-4">
              <p>
                Most projects include up to three (3) revisions within the agreed project scope.
              </p>
              <p>
                Additional revisions or changes outside the original scope may attract additional fees. We always aim to communicate such adjustments clearly and professionally before proceeding.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Timelines & Delays</h2>
            <div className="space-y-4">
              <p>
                Project timelines are estimates and may vary depending on:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Client responsiveness</li>
                <li>Scope changes</li>
                <li>Approval delays</li>
                <li>Technical requirements</li>
              </ul>
              <p>
                If communication is paused for an extended period, the project may also be temporarily paused until communication resumes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Payments</h2>
            <div className="space-y-4">
              <p>
                Payment terms will be communicated before project commencement.
              </p>
              <p>
                Depending on the project, work may require:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Full payment upfront</li>
                <li>Milestone payments</li>
                <li>Deposits before commencement</li>
              </ul>
              <p>
                Final deliverables may not be released until agreed payments are completed.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Intellectual Property</h2>
            <div className="space-y-4">
              <p>
                Upon full payment, clients own the final approved deliverables created specifically for their project unless otherwise agreed in writing.
              </p>
              <p>
                Vheevid Hub may retain the right to display completed work in portfolios, presentations, or promotional materials unless confidentiality has been requested.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Cancellation & Termination</h2>
            <div className="space-y-4">
              <p>
                Either party may terminate a project through written notice.
              </p>
              <p>
                If a project is cancelled after work has already begun, payments made up to that stage may be retained to cover completed work and time invested.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Limitation of Liability</h2>
            <div className="space-y-4">
              <p>
                While we strive to deliver high-quality services, Vheevid Hub shall not be held liable for:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Indirect losses</li>
                <li>Business interruptions</li>
                <li>Third-party platform issues</li>
                <li>Delays outside our reasonable control</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Changes to These Terms</h2>
            <div className="space-y-4">
              <p>
                We may update these Terms occasionally to reflect operational or legal changes. Updated versions will be published on our website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-black">Contact</h2>
            <div className="space-y-4">
              <p>
                For questions regarding these Terms, contact: <br /><br />
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
