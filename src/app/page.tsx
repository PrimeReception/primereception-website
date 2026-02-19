import Link from "next/link";
import ROICalculator from "@/components/ROICalculator";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <main>
      {/* ====== 1. HERO ====== */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Stop Losing Customers to{" "}
              <span className="text-teal">Missed Calls</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed sm:text-xl">
              PrimeReception answers every call 24/7 with natural AI — so you
              never miss a lead, even when you&apos;re busy.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-lg bg-teal px-8 py-3.5 text-base font-semibold text-white hover:bg-teal-dark transition-colors text-center"
              >
                Book a Demo
              </Link>
              <Link
                href="/how-it-works"
                className="w-full sm:w-auto rounded-lg border border-white/25 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors text-center"
              >
                See How It Works
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Try it now:{" "}
              <a href="tel:+14242588729" className="text-teal hover:underline font-medium">
                (424) 258-8729
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ====== 2. TRUST BAR ====== */}
      <section className="border-b border-gray-100 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500">
            Trusted by dental offices, med spas, and service businesses across
            the United States
          </p>
        </div>
      </section>

      {/* ====== 3. THE PROBLEM ====== */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Every Missed Call Is a Missed Customer
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Small businesses lose thousands every month to unanswered phones.
              The numbers tell the story.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <p className="text-5xl font-extrabold text-teal">62%</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                of calls to small businesses go unanswered
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <p className="text-5xl font-extrabold text-teal">85%</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                of callers who don&apos;t get through never call back
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <p className="text-5xl font-extrabold text-teal">$2,500+</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                lost per month from just 5 missed calls at $500 each
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 4. SERVICES OVERVIEW ====== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Everything You Need to Capture Every Call
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A professional AI receptionist that works around the clock — no
              breaks, no sick days, no missed opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: "24/7 Call Answering",
                desc: "Every call answered professionally, day or night, weekends and holidays included.",
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Message Taking",
                desc: "Detailed messages delivered instantly via email and SMS — never miss context.",
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Appointment Scheduling",
                desc: "Handles booking requests, confirms appointments, and manages your calendar.",
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Lead Capture",
                desc: "Qualifies leads, collects contact info, and sends you everything you need to close.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 5. HOW IT WORKS ====== */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Live in 3 Simple Steps
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We handle everything. You just tell us about your business.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "You Sign Up",
                desc: "Tell us about your business, hours, services, and how you want calls handled. Takes about 15 minutes.",
              },
              {
                step: "2",
                title: "We Build Everything",
                desc: "We configure your AI voice, write custom scripts, train FAQs, set up your phone number, and test everything.",
              },
              {
                step: "3",
                title: "Go Live in Days",
                desc: "Your AI receptionist starts answering calls. You get messages, leads, and analytics — while you focus on your business.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="text-sm font-semibold text-teal hover:underline"
            >
              Learn more about our process &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ====== 6. INDUSTRY CARDS ====== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Built for Businesses Like Yours
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We specialize in industries where every missed call means lost
              revenue.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🦷",
                title: "Dental Offices",
                desc: "Never miss a patient call during procedures. We take messages, confirm appointments, and keep your front desk running — no HIPAA data stored.",
              },
              {
                icon: "💆",
                title: "Med Spas & Aesthetic Clinics",
                desc: "Capture high-value bookings ($200-$2,000+) around the clock. Premium service for premium clients.",
              },
              {
                icon: "🔧",
                title: "Auto Body Shops",
                desc: "You're in the shop all day. Every missed call is a $1,500-$5,000 repair job walking to your competitor.",
              },
              {
                icon: "⚖️",
                title: "Law Offices",
                desc: "Every call could be a $5,000+ case. Professional call handling without the cost of a full-time receptionist.",
              },
              {
                icon: "🏠",
                title: "HVAC & Home Services",
                desc: "On job sites all day? Emergency calls get triaged immediately. Routine calls become detailed messages.",
              },
              {
                icon: "🏗️",
                title: "Architecture Firms",
                desc: "Maintain a professional image with reliable call handling, even when your small team is focused on projects.",
              },
            ].map((industry) => (
              <div
                key={industry.title}
                className="rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">{industry.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-navy">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/industries"
              className="text-sm font-semibold text-teal hover:underline"
            >
              See all industries we serve &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ====== 7. DONE-FOR-YOU ====== */}
      <section className="bg-navy text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              100% Done-For-You Setup
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              You do zero technical work. We handle everything from start to
              finish — all you do is tell us about your business.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {[
              "Custom AI voice personality",
              "Call script writing & training",
              "FAQ programming",
              "Phone number configuration",
              "Call forwarding setup",
              "Integration & testing",
              "Go-live support",
              "Unlimited revisions",
              "Ongoing optimization",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <svg
                  className="h-5 w-5 shrink-0 text-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 8. ROI CALCULATOR ====== */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              See How Much Missed Calls Cost You
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Use our calculator to find out what unanswered calls are really
              costing your business.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* ====== 9. PRICING PREVIEW ====== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Less than $10/day for 24/7 professional call coverage. Compare to
              $35,000+/year for a human receptionist.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <h3 className="text-lg font-semibold text-navy">Starter</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-charcoal">$149</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="mt-2 text-xs text-gray-400">$500 one-time setup fee</p>
              <p className="mt-4 text-sm text-gray-600">
                Best for solo practitioners and small offices just getting started.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Up to 100 calls/month",
                  "Business hours coverage",
                  "Message taking + email summaries",
                  "Basic FAQ handling",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="h-5 w-5 shrink-0 text-green mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-lg border border-teal py-3 text-center text-sm font-semibold text-teal hover:bg-teal hover:text-white transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Professional */}
            <div className="rounded-2xl border-2 border-teal p-8 relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal px-4 py-1 text-xs font-semibold text-white">
                Most Popular
              </div>
              <h3 className="text-lg font-semibold text-navy">Professional</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-charcoal">$299</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="mt-2 text-xs text-gray-400">$2,500 one-time setup fee</p>
              <p className="mt-4 text-sm text-gray-600">
                Best for dental offices, med spas, and auto body shops with steady call volume.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Unlimited calls",
                  "24/7 coverage incl. weekends",
                  "Real-time email/SMS notifications",
                  "Custom FAQ & script training",
                  "Appointment scheduling",
                  "Monthly analytics report",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="h-5 w-5 shrink-0 text-green mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-lg bg-teal py-3 text-center text-sm font-semibold text-white hover:bg-teal-dark transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <h3 className="text-lg font-semibold text-navy">Enterprise</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-charcoal">$499</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="mt-2 text-xs text-gray-400">$2,500 one-time setup fee</p>
              <p className="mt-4 text-sm text-gray-600">
                Best for multi-location practices and growing businesses.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Everything in Professional",
                  "Multi-location support (5 numbers)",
                  "Priority voice optimization",
                  "Dedicated account manager",
                  "Custom integrations (CRM, etc.)",
                  "Quarterly business reviews",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="h-5 w-5 shrink-0 text-green mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-lg border border-teal py-3 text-center text-sm font-semibold text-teal hover:bg-teal hover:text-white transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="text-sm font-semibold text-teal hover:underline"
            >
              See full pricing details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ====== 10. TESTIMONIALS ====== */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              What Business Owners Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "We were missing 10+ calls a week during procedures. PrimeReception catches every single one now.",
                name: "Dr. Sarah M.",
                role: "Dental Office Owner",
              },
              {
                quote:
                  "The setup was completely hands-off. They had us live in 4 days and the AI sounds incredibly natural.",
                name: "James R.",
                role: "Auto Body Shop Owner",
              },
              {
                quote:
                  "Our after-hours bookings increased 40% in the first month. The ROI was immediate.",
                name: "Lisa K.",
                role: "Med Spa Director",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="flex gap-1 text-teal mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-navy">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-gray-400">
            * Placeholder testimonials — will be updated with real client reviews
          </p>
        </div>
      </section>

      {/* ====== 11. FAQ ACCORDION ====== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ====== 12. CTA / DEMO BOOKING ====== */}
      <section className="bg-navy text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Stop Missing Calls?
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Book a free demo and see how PrimeReception can work for your
              business. No obligation, no pressure — just a quick conversation
              about your needs.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-lg bg-teal px-8 py-3.5 text-base font-semibold text-white hover:bg-teal-dark transition-colors text-center"
              >
                Book Your Free Demo
              </Link>
              <a
                href="tel:+14242588729"
                className="w-full sm:w-auto rounded-lg border border-white/25 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors text-center"
              >
                Call (424) 258-8729
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Most businesses are live within 5 business days
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
