import React from "react";

const PrivacyPolicy = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10 lg:p-16 space-y-10">
                <header>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Privacy Policy</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Your privacy is important to us at <strong className="text-primary">Saeedan Technology</strong>. This Privacy Policy
                        describes how we collect, use, and protect your personal information when you visit our website
                        or use our services.
                    </p>
                </header>

                <section>
                    <h2 className="text-2xl font-semibold text-primary mb-3">1. About Saeedan Technology</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Saeedan Technology is a premier software house specializing in Web Development, App Development,
                        UI/UX Design, CRM solutions, AI Chatbot integrations, and AI/ML-driven products. We aim to deliver
                        cutting-edge digital solutions while respecting and protecting our users’ data.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-primary mb-3">2. What We Collect</h2>
                    <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-2">
                        <li>Personal details (name, email, phone number, company name)</li>
                        <li>Technical data (IP address, browser type, OS, device type)</li>
                        <li>Website usage information (pages visited, time spent, interactions)</li>
                        <li>Cookies and similar technologies (only with consent)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-primary mb-3">3. Why We Collect Your Data</h2>
                    <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-2">
                        <li>To provide, improve, and personalize our services</li>
                        <li>To communicate with you regarding inquiries or support</li>
                        <li>To analyze traffic and usage patterns for optimization</li>
                        <li>To comply with legal obligations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-primary mb-3">4. Data Security</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We implement robust physical, electronic, and managerial procedures to safeguard your personal
                        information against unauthorized access, disclosure, alteration, or destruction.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-primary mb-3">5. Data Sharing</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We do not sell your personal data. We may share information with:
                    </p>
                    <ul className="text-gray-700 leading-relaxed list-disc list-inside mt-2 space-y-2">
                        <li>Trusted partners who assist in delivering our services</li>
                        <li>Government or legal authorities, when legally required</li>
                        <li>Third-party analytics tools (e.g., Google Analytics)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-primary mb-3">6. Your Rights</h2>
                    <p className="text-gray-700 leading-relaxed">
                        You have the right to:
                    </p>
                    <ul className="text-gray-700 leading-relaxed list-disc list-inside mt-2 space-y-2">
                        <li>Access and review your personal data</li>
                        <li>Request correction or deletion of your data</li>
                        <li>Withdraw your consent at any time</li>
                        <li>Opt-out of marketing communications</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-primary mb-3">7. Cookies & Tracking</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We use cookies to enhance your experience and analyze usage. You may choose to disable cookies
                        via your browser, but some site features may not function properly.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-primary mb-3">8. Updates to This Policy</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We may revise this policy periodically. Any changes will be reflected on this page along with the
                        updated revision date. We encourage you to review this page regularly.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-primary mb-3">9. Contact Information</h2>
                    <p className="text-gray-700 leading-relaxed">
                        For any questions, concerns, or feedback related to our Privacy Policy, please contact us at:
                    </p>
                    <div className="mt-2 text-gray-700">
                        <p>Email: <a href="mailto:contact@saeedantechpvt.com" className="text-blue-600 hover:underline">contact@saeedantechpvt.com</a></p>
                        <p>Phone: <a href="+923007861566" className="text-blue-600"> +92 300 7861566 </a></p>
                        <p>Address: <span className="text-blue-600"> Commercial Plaza, B BLOCK Block B Pcsir Employees Phase 2 PCSIR Phase 2, Lahore, 54940</span></p>
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

export default PrivacyPolicy;
