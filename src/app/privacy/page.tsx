import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Prime Reception's privacy policy. Learn how we collect, use, and protect your information.",
};

export default function Privacy() {
  return (
    <main>
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-300">
              Last updated: February 19, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none space-y-8 text-sm text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                1. Introduction
              </h2>
              <p>
                Prime Reception (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) provides AI-powered phone answering services
                for businesses. This Privacy Policy explains how we collect,
                use, disclose, and safeguard information when you visit our
                website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                <strong className="text-charcoal">
                  Information you provide directly:
                </strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mb-4">
                <li>
                  Business name, contact name, email address, and phone number
                  when you sign up or contact us
                </li>
                <li>
                  Business details you share during onboarding (hours, services,
                  FAQs, call handling preferences)
                </li>
                <li>Payment information processed through our payment provider</li>
              </ul>
              <p className="mb-3">
                <strong className="text-charcoal">
                  Information collected through our service:
                </strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mb-4">
                <li>
                  Call data: caller phone number, call duration, call
                  recordings or transcripts as configured by you
                </li>
                <li>
                  Messages and information callers provide during calls handled
                  by your AI receptionist
                </li>
              </ul>
              <p className="mb-3">
                <strong className="text-charcoal">
                  Information collected automatically:
                </strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  Website usage data: IP address, browser type, pages visited,
                  and referring URLs
                </li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>To provide, maintain, and improve our AI receptionist service</li>
                <li>To configure and optimize your call handling</li>
                <li>To communicate with you about your account and service</li>
                <li>To process payments</li>
                <li>To respond to inquiries and support requests</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                4. Information Sharing
              </h2>
              <p className="mb-3">
                We do not sell your personal information. We may share
                information with:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-charcoal">Service providers:</strong>{" "}
                  Third-party vendors who help us deliver our service (voice AI
                  platforms, telephony providers, hosting providers)
                </li>
                <li>
                  <strong className="text-charcoal">Legal requirements:</strong>{" "}
                  When required by law, regulation, or legal process
                </li>
                <li>
                  <strong className="text-charcoal">Business transfers:</strong>{" "}
                  In connection with a merger, acquisition, or sale of assets
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                5. Data Retention
              </h2>
              <p>
                We retain your information for as long as your account is active
                or as needed to provide services. Call data is retained
                according to the configuration agreed upon during onboarding.
                You may request deletion of your data by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                6. Sensitive Information &amp; Healthcare Data
              </h2>
              <p>
                Prime Reception is designed to minimize the collection of
                sensitive information during calls. If your business handles
                protected health information (PHI) or other regulated data, we
                configure call handling to limit what is captured and route
                calls appropriately. You remain responsible for your own
                compliance requirements (including HIPAA, if applicable), and we
                will align our configuration to your policies and vendor
                agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                7. Security
              </h2>
              <p>
                We implement reasonable administrative, technical, and physical
                safeguards to protect your information. However, no method of
                transmission over the internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                8. Your Rights
              </h2>
              <p className="mb-3">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict certain processing</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at{" "}
                <a
                  href={`mailto:${CONTACT.supportEmail}`}
                  className="text-teal hover:underline"
                >
                  {CONTACT.supportEmail}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of material changes by posting the updated policy on
                this page with a revised &ldquo;Last updated&rdquo; date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                10. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <p className="mt-2">
                <a
                  href={`mailto:${CONTACT.supportEmail}`}
                  className="text-teal hover:underline"
                >
                  {CONTACT.supportEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
