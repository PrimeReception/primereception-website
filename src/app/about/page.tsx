import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About PrimeReception — AI Phone Answering Built for Small Business",
  description:
    "PrimeReception makes enterprise-grade AI phone service accessible to small businesses. Built and run by a real person, not a faceless SaaS platform.",
};

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-navy text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              About PrimeReception
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Making enterprise-grade AI phone service accessible to small
              businesses — built and run by a real person, not a faceless SaaS
              platform.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
              {/* Photo placeholder */}
              <div className="md:col-span-2">
                <div className="aspect-square rounded-2xl bg-gray-bg flex items-center justify-center border border-gray-200">
                  <div className="text-center p-6">
                    <svg className="h-16 w-16 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="mt-3 text-xs text-gray-400">
                      Founder photo placeholder
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-3">
                <h2 className="text-3xl font-bold text-navy">
                  The Founder&apos;s Story
                </h2>
                <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    {/* PLACEHOLDER: Replace with your actual founder story */}
                    I started PrimeReception because I saw a problem that
                    shouldn&apos;t exist in 2025: small businesses losing
                    thousands of dollars every month to missed phone calls.
                  </p>
                  <p>
                    Dental offices missing patient calls during procedures. Auto
                    body shops losing $5,000 jobs because the owner was under a
                    car. Med spas watching high-value clients call their
                    competitors after getting voicemail.
                  </p>
                  <p>
                    The technology to solve this problem exists — natural-sounding
                    AI that can answer calls, take messages, and route urgent
                    matters. But most AI phone services are self-serve platforms
                    that expect business owners to configure everything
                    themselves. That&apos;s backwards. Business owners are busy
                    running their businesses.
                  </p>
                  <p>
                    So I built PrimeReception to be different:{" "}
                    <strong>100% done-for-you.</strong> You tell us about your
                    business. We handle everything else. Custom voice setup,
                    script writing, FAQ training, testing, and ongoing
                    optimization. You do nothing technical.
                  </p>
                  <p>
                    This isn&apos;t a faceless SaaS platform. It&apos;s a
                    service built by a real person who cares about getting it
                    right for your business.
                  </p>
                </div>
                <p className="mt-6 text-sm text-gray-400 italic">
                  {/* PLACEHOLDER: Add your name */}
                  — Founder, PrimeReception
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Make enterprise-grade AI phone service accessible to every small
              business — so no business owner ever loses a customer to a missed
              call again.
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-navy">
                Reliability
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Your phone never stops ringing. Neither do we. 24/7 uptime,
                every single day. Your business depends on it, and we take that
                seriously.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-navy">
                Simplicity
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                No dashboards to learn. No software to install. No technical
                skills required. We believe the best technology is invisible —
                it just works.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-navy">
                No-BS Pricing
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Transparent pricing. No hidden fees. No long-term contracts. You
                know exactly what you&apos;re paying and what you&apos;re
                getting. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              What Makes Us Different
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                title: "Done-For-You, Not DIY",
                desc: "Most AI phone services hand you a dashboard and say \"figure it out.\" We handle 100% of setup, configuration, and ongoing optimization.",
              },
              {
                title: "Built by a Human, Not a Committee",
                desc: "PrimeReception is built and run by a real person who personally ensures your setup is perfect. You're not a ticket number.",
              },
              {
                title: "Enterprise Safety, Small Business Pricing",
                desc: "Our AI has built-in guardrails for sensitive industries like healthcare and legal. No HIPAA data stored. No medical advice given.",
              },
              {
                title: "Natural Voice, Not a Robot",
                desc: "Our AI uses the latest natural voice technology. Most callers can't tell the difference from a human receptionist.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Let&apos;s Talk About Your Business
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Book a free demo and see how PrimeReception can work for you.
              No obligation, no pressure — just a real conversation.
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
