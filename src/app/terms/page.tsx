import type { Metadata } from "next";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "PrimeReception's terms of service. Review the terms governing use of our AI receptionist service.",
};

export default function Terms() {
  return (
    <main>
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Terms of Service
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
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or using PrimeReception&apos;s website and services,
                you agree to be bound by these Terms of Service. If you do not
                agree, do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                2. Description of Service
              </h2>
              <p>
                PrimeReception provides AI-powered phone answering and call
                handling services for businesses. Our service includes an AI
                receptionist that answers calls, takes messages, captures lead
                information, and routes calls according to rules you define
                during onboarding.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                3. Subscription &amp; Billing
              </h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  Services are billed on a month-to-month basis at the rate
                  corresponding to your selected plan.
                </li>
                <li>
                  A one-time, non-refundable implementation package fee is
                  charged at the start of service. This covers configuration
                  work including workflow review, call logic design, script
                  writing, testing, and go-live management.
                </li>
                <li>
                  Payment is due at the beginning of each billing cycle. Failure
                  to pay may result in suspension or termination of service.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                4. Cancellation
              </h2>
              <p>
                You may cancel your subscription at any time with at least 5
                days&apos; notice before your next billing date. Upon
                cancellation:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>
                  Service continues through the end of your current billing
                  period.
                </li>
                <li>No cancellation fees apply.</li>
                <li>
                  The one-time implementation package fee is non-refundable as
                  it covers work already completed.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                5. Fair Use
              </h2>
              <p>
                Our plans are designed for typical small business call patterns.
                Excessive or abusive usage — including but not limited to
                automated call generation, use for telemarketing, or call
                volumes substantially exceeding normal business patterns — may
                require a plan adjustment or result in service modification.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                6. Your Responsibilities
              </h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  You are responsible for the accuracy of information provided
                  during onboarding (business hours, services, FAQs, call
                  handling rules).
                </li>
                <li>
                  You are responsible for your own regulatory compliance,
                  including HIPAA or other industry-specific requirements that
                  apply to your business.
                </li>
                <li>
                  You agree not to use our service for any unlawful purpose.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                7. Sensitive Information &amp; Compliance
              </h2>
              <p>
                PrimeReception is designed to minimize the collection of
                sensitive information during calls. If your business handles
                protected health information (PHI) or other regulated data, we
                will configure call handling to limit what is captured and route
                calls appropriately. You remain responsible for your own
                compliance obligations, and we will align our configuration to
                your policies and vendor agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                8. Service Availability
              </h2>
              <p>
                We strive to maintain reliable service but do not guarantee
                uninterrupted availability. Our service depends on third-party
                infrastructure including voice AI platforms, telephony
                providers, and cloud hosting. We are not liable for downtime
                caused by third-party service interruptions, force majeure
                events, or scheduled maintenance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                9. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, PrimeReception shall not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages, including but not limited to loss of
                revenue, lost profits, or loss of business opportunities,
                arising from your use of our service. Our total liability for
                any claim shall not exceed the amount you paid us in the 3
                months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                10. Intellectual Property
              </h2>
              <p>
                All content, branding, and technology associated with
                PrimeReception are our property or licensed to us. You retain
                ownership of business information and content you provide to us
                for configuration purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                11. Modifications to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will
                notify you of material changes by posting the updated terms on
                this page. Continued use of our service after changes
                constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                12. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the State of California, without regard to
                conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">
                13. Contact Us
              </h2>
              <p>
                If you have questions about these Terms, contact us at:
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
