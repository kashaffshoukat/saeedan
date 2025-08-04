import React from "react";

const TermsCondition = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10 lg:p-16 space-y-10">
        <header>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            These terms and conditions ("Terms") govern your access to and use of the website and services provided by <strong className="text-primary">Saeedan Technology</strong>. By accessing or using our site, you agree to be bound by these Terms.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3">1. Services Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Saeedan Technology offers software development services including web development, mobile apps, UI/UX design, CRM systems, AI chatbots, and AI/ML solutions. These services are provided subject to the terms outlined here.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3">2. User Responsibilities</h2>
          <ul className="text-gray-700 list-disc list-inside leading-relaxed space-y-2">
            <li>Provide accurate and up-to-date information when using our services.</li>
            <li>Use our services for lawful purposes only.</li>
            <li>Do not misuse or attempt to disrupt or hack our services.</li>
            <li>You are responsible for maintaining the confidentiality of your credentials (if any).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3">3. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content, code, designs, and branding created by Saeedan Technology remain our intellectual property unless otherwise agreed in writing. You may not reproduce, reuse, or redistribute our content without explicit permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3">4. Payments and Refunds</h2>
          <p className="text-gray-700 leading-relaxed">
            All payments for our services must be made in accordance with agreed-upon project terms. Once a project is initiated, refunds may not be possible except in cases of service failure as per written agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3">5. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            Saeedan Technology shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services, including any data loss or business disruption.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3">6. Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party sites. We are not responsible for the content, privacy practices, or terms of those sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3">7. Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to suspend or terminate your access to our services at any time, with or without cause, and without liability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3">8. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms from time to time. Changes will be posted on this page, and your continued use of the site or services constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3">9. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed by and interpreted in accordance with the laws of Pakistan. Any disputes arising shall be subject to the jurisdiction of courts located in Lahore.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3">10. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">For any questions regarding these Terms, contact us at:</p>
          <div className="mt-2 text-gray-700">
            <p>Email: <a href="mailto:contact@saeedantechpvt.com" className="text-blue-600 hover:underline">contact@saeedantechpvt.com</a></p>
            <p>Phone: <a href="tel:+923007861566" className="text-blue-600">+92 300 7861566</a></p>
            <p>Address: <span className="text-blue-600">Commercial Plaza, B BLOCK, PCSIR Phase 2, Lahore, 54940</span></p>
          </div>
        </section>

        <footer className="pt-8 border-t text-sm text-primary">
          Last updated: {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </footer>
      </div>
    </section>
  );
};

export default TermsCondition;
