import type { Metadata } from "next";
import { CONTACT } from "@/lib/contact";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Demo — AI Receptionist for Your Business",
  description:
    "Book a free demo of PrimeReception's AI receptionist. See how we can answer your calls 24/7. No obligation, no pressure.",
};

export default function Contact() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Book Your Free Demo
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              See how PrimeReception can work for your business. Fill out the
              form below and pick a time that works for you.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + CONTACT INFO */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
              {/* Form */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Tell Us About Your Business
                </h2>
                <ContactForm />
              </div>

              {/* Contact info sidebar */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal shrink-0">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Phone</p>
                      <a
                        href={`tel:${CONTACT.phoneE164}`}
                        className="text-sm text-teal hover:underline"
                      >
                        {CONTACT.phoneDisplay}
                      </a>
                      <p className="text-xs text-gray-400 mt-1">
                        Call to hear our AI receptionist in action
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal shrink-0">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Email</p>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-sm text-teal hover:underline"
                      >
                        {CONTACT.email}
                      </a>
                      <p className="text-xs text-gray-400 mt-1">
                        We typically respond within 2-4 hours
                      </p>
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal shrink-0">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">
                        Demo Duration
                      </p>
                      <p className="text-sm text-gray-600">
                        15-30 minutes
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Quick, focused, and zero pressure
                      </p>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
                <div className="mt-10 rounded-xl bg-gray-bg p-6">
                  <h3 className="text-sm font-semibold text-navy mb-4">
                    What to Expect on Your Demo Call
                  </h3>
                  <ol className="space-y-3">
                    {[
                      "We learn about your business and call handling needs",
                      "We show you a live demo of the AI receptionist",
                      "We discuss which plan fits your call volume",
                      "We answer all your questions — no obligation",
                    ].map((step, i) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal text-xs font-bold text-white shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-sm text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALENDLY EMBED */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Pick a Time That Works for You
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Select a convenient time slot below and we&apos;ll send you a
              calendar invite with all the details.
            </p>
          </div>
          <CalendlyEmbed />
        </div>
      </section>
    </main>
  );
}
