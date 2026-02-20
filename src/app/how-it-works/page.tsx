import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works — 100% Done-For-You AI Receptionist Implementation",
  description:
    "See how PrimeReception sets up your AI receptionist in 5 business days. We handle everything — voice setup, scripts, FAQ training, and go-live support.",
};

export default function HowItWorks() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              How It Works
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              From sign-up to live calls in as few as 5 business days. You do
              nothing technical — we handle every detail.
            </p>
          </div>
        </div>
      </section>

      {/* 3-STEP OVERVIEW */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "You Sign Up & Share Your Details",
                desc: "Fill out a short onboarding form with your business info. We need your business name, hours, services offered, common FAQs, and your preferred call forwarding number. This takes about 15 minutes.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "We Build Everything",
                desc: "Our team configures your AI voice personality, writes custom call scripts, programs your FAQs, provisions your phone number, sets up call forwarding, and runs thorough testing.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                step: "3",
                title: "Go Live & Start Capturing Calls",
                desc: "After testing and your approval, we flip the switch. Your AI receptionist starts answering calls immediately — 24/7 if you choose the Pro plan.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                  {item.icon}
                </div>
                <div className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THE IMPLEMENTATION PACKAGE COVERS */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              What Your Implementation Package Covers
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Your one-time implementation package covers complete, end-to-end
              configuration. Here&apos;s exactly what we do for you.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                title: "Custom Voice Personality",
                desc: "We select and configure a natural-sounding AI voice that matches your brand tone — professional, warm, or friendly.",
              },
              {
                title: "Call Script Writing",
                desc: "Our team writes custom greeting scripts, call handling flows, and response patterns specific to your business.",
              },
              {
                title: "FAQ Training",
                desc: "We program your most common questions and answers so the AI handles routine inquiries without any human involvement.",
              },
              {
                title: "Phone Number Provisioning",
                desc: "We set up a dedicated phone number (or port your existing one) and configure all routing rules.",
              },
              {
                title: "Call Forwarding Setup",
                desc: "Urgent calls get forwarded to you or your team instantly based on rules you define. Everything else becomes a message.",
              },
              {
                title: "Testing & Quality Assurance",
                desc: "We run dozens of test calls covering different scenarios before going live — so your first real call is perfect.",
              },
              {
                title: "Go-Live Support",
                desc: "We monitor your first week of calls closely, making real-time adjustments to ensure everything runs smoothly.",
              },
              {
                title: "Script Revisions Included",
                desc: "Not happy with a script or FAQ response? Every plan includes revisions during implementation. Pro plan customers get ongoing refinements post-launch.",
              },
              {
                title: "Ongoing Optimization",
                desc: "We review call patterns and continuously improve your AI receptionist's performance over time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <svg className="h-5 w-5 text-green shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-base font-semibold text-navy">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Your Timeline to Going Live
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Most businesses are live within 5 business days. Here&apos;s the
              typical schedule.
            </p>
          </div>
          <div className="mx-auto max-w-2xl">
            {[
              {
                day: "Day 1",
                title: "Onboarding Call & Information Gathering",
                desc: "We hop on a quick call (or you fill out our onboarding form) to collect everything we need: business details, hours, services, FAQs, and call handling preferences.",
              },
              {
                day: "Day 2-3",
                title: "Build & Configure",
                desc: "We set up your AI voice personality, write call scripts, program FAQ responses, provision your phone number, and configure call forwarding rules.",
              },
              {
                day: "Day 4",
                title: "Internal Testing",
                desc: "Our team runs dozens of test calls — greetings, FAQ queries, transfer requests, edge cases — to make sure everything works perfectly.",
              },
              {
                day: "Day 5",
                title: "Your Review & Go-Live",
                desc: "We walk you through a demo of your AI receptionist. Once you approve, we flip the switch and your phone starts getting answered 24/7.",
              },
            ].map((item, i) => (
              <div key={item.day} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-sm font-bold text-white shrink-0">
                    {i + 1}
                  </div>
                  {i < 3 && (
                    <div className="w-px flex-1 bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                    {item.day}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU NEED TO PROVIDE */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              What We Need From You
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Just a few details about your business. That&apos;s it — we handle
              everything else.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {[
              { item: "Business name & location", icon: "🏢" },
              { item: "Business hours & days of operation", icon: "🕐" },
              { item: "Services you offer", icon: "📋" },
              { item: "Common questions callers ask (FAQs)", icon: "❓" },
              { item: "How you want urgent calls handled", icon: "🚨" },
              { item: "Your call forwarding number(s)", icon: "📱" },
            ].map((item) => (
              <div
                key={item.item}
                className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium text-charcoal">
                  {item.item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAY IN THE LIFE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              A Day in the Life with PrimeReception
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Here&apos;s how a typical day looks when your AI receptionist is
              handling calls.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                time: "8:15 AM",
                event: "New patient calls to ask about teeth whitening services",
                result: "AI answers with your service details and pricing, offers to schedule a consultation. The lead's contact info is captured for your team to follow up.",
              },
              {
                time: "10:30 AM",
                event: "Existing patient calls to reschedule their appointment",
                result: "AI confirms their identity, takes the reschedule request, and sends you a notification so your front desk can update the calendar.",
              },
              {
                time: "12:45 PM",
                event: "Sales caller trying to sell office supplies",
                result: "AI politely takes a message and flags it as a vendor call. You don't get interrupted during lunch.",
              },
              {
                time: "3:20 PM",
                event: "Patient calls with an urgent dental issue",
                result: "AI recognizes the urgency, immediately transfers the call to your emergency line. Patient gets help fast.",
              },
              {
                time: "7:45 PM",
                event: "Potential new patient calls after hours about dental implants",
                result: "AI answers professionally, explains your implant services, captures the lead, and books a callback for the next morning. You see the message when you check your phone.",
              },
              {
                time: "End of Day",
                event: "Daily summary delivered",
                result: "You get a recap: 12 calls handled, 3 new leads captured, 1 urgent transfer, 2 appointment requests. Zero missed calls.",
              },
            ].map((item) => (
              <div
                key={item.time}
                className="rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-teal/30 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-lg bg-navy px-3 py-1.5 text-xs font-bold text-white">
                    {item.time}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      {item.event}
                    </p>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Book a free demo and we&apos;ll show you exactly how
              PrimeReception will work for your business.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-lg bg-teal px-8 py-3.5 text-base font-semibold text-white hover:bg-teal-dark transition-colors text-center"
              >
                Book Your Free Demo
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto rounded-lg border border-white/25 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
