import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — AI Phone Answering Built for Small Business",
  description:
    "Prime Reception gives businesses a reliable AI receptionist that answers calls, handles the basics, and routes the right conversations to the right place.",
};

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Built to stop missed calls.
            </h1>
          </div>
        </div>
      </section>

      {/* COMPANY BIO */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6 text-gray-600 leading-relaxed">
            <p>
              Prime Reception was built because too many small businesses lose
              revenue the same way: calls go unanswered, staff get interrupted,
              and potential customers hang up. When the front desk is stretched
              thin, the phone becomes a constant leak — lost appointments, lost
              quotes, and frustrated callers.
            </p>
            <p>
              Prime Reception gives businesses a reliable AI receptionist that
              answers calls, handles the basics, and routes the right
              conversations to the right place. It&apos;s built for real-world
              operations: busy hours, inconsistent call volume, and teams that
              can&apos;t afford to drop what they&apos;re doing every time the
              phone rings.
            </p>
            <p>
              Two things drive everything we build: making the experience sound
              professional to your customers and making the setup painless for
              your team. Prime Reception is designed to be practical first —
              clear call handling, clean handoffs, and measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Make it effortless for small businesses to capture every call and
              turn more conversations into booked appointments and paying
              customers.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            <div className="rounded-xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-navy">Reliability</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Calls get answered consistently.
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-navy">Clarity</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Simple flows, no gimmicks, obvious handoffs.
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-navy">Speed</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Fast setup, fast iteration, fast fixes.
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-navy">
                Respect for trust
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Conservative claims, transparent limits, no overpromises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl text-center mb-12">
              How We Work
            </h2>
            <div className="space-y-6">
              {[
                "Founder-led implementation and support",
                "Process-driven onboarding (call flows, FAQs, routing, escalation rules)",
                "Built on modern voice AI infrastructure",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <svg
                    className="h-5 w-5 shrink-0 text-green mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Let&apos;s Talk About Your Business
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Book a free demo and see how Prime Reception can work for you.
              No obligation, no pressure.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-lg bg-teal px-8 py-3.5 text-base font-semibold text-white hover:bg-teal-dark transition-colors"
              >
                Book Your Free Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
