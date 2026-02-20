import Link from "next/link";
import { CONTACT } from "@/lib/contact";
import ROICalculator from "@/components/ROICalculator";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <main>
      {/* ====== 1. HERO ====== */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white">
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
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-teal px-8 py-3.5 text-base font-semibold text-white hover:bg-teal-dark hover:shadow-lg hover:shadow-teal/25 transition-all duration-200 text-center"
              >
                Book a Demo
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Prefer to talk? Call us:{" "}
              <a href={`tel:${CONTACT.phoneE164}`} className="text-teal hover:underline font-medium">
                {CONTACT.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>


      {/* ====== 2. WHAT HAPPENS AFTER YOU BOOK ====== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-navy text-center sm:text-3xl">
              What Happens After You Book a Demo
            </h2>
            <ol className="mt-10 space-y-5">
              {[
                "30-minute workflow discovery call",
                "We review your intake process and call patterns",
                "We design your custom call logic",
                "We configure, test, and simulate real scenarios",
                "You go live — typically within 5\u20137 business days",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal/10 text-sm font-bold text-teal">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700 leading-relaxed pt-1">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
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
            <div className="rounded-xl bg-white p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <p className="text-5xl font-extrabold text-teal">62%</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                of calls to small businesses go unanswered
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <p className="text-5xl font-extrabold text-teal">85%</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                of callers who don&apos;t get through never call back
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
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
                desc: "Detailed messages captured from every call so you never miss context.",
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Appointment Capture",
                desc: "AI collects caller details, preferred times, and reason for visit so your team can confirm and book.",
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
                className="rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-teal/30 hover:-translate-y-0.5 transition-all duration-200"
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
                desc: "Your AI receptionist starts answering calls. You get messages and leads — while you focus on your business.",
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
                desc: "Never miss a patient call during procedures. We take messages, capture appointment requests, and keep your front desk running smoothly.",
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
                className="rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-teal/30 hover:-translate-y-0.5 transition-all duration-200"
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
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              100% Done-For-You Implementation
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
              "Script revisions included",
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
              Two plans. No long-term contracts. Less than $14/day for
              professional AI call coverage.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Core */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <h3 className="text-lg font-semibold text-navy">Core</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-charcoal">$249</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="mt-2 text-xs text-gray-400">$750 one-time implementation package</p>
              <p className="mt-4 text-sm text-gray-600">
                Best for solo practitioners and small offices with moderate call volume.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "AI-powered call answering",
                  "Business hours coverage (M-F)",
                  "Message taking & lead capture",
                  "Appointment capture",
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

            {/* Pro */}
            <div className="rounded-2xl border-2 border-teal p-8 relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal px-4 py-1 text-xs font-semibold text-white">
                Most Popular
              </div>
              <h3 className="text-lg font-semibold text-navy">Pro</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-charcoal">$399</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="mt-2 text-xs text-gray-400">$2,000 one-time implementation package</p>
              <p className="mt-4 text-sm text-gray-600">
                Best for dental offices, med spas, and busy service businesses.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Everything in Core",
                  "24/7 coverage incl. weekends & holidays",
                  "Designed for high call volume",
                  "Custom FAQ & script training",
                  "SMS call alerts (coming soon)",
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

      {/* ====== 10. PILOT AVAILABILITY ====== */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Pilot Availability
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Now onboarding a limited number of pilot customers.
            </p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Direct founder support included. Discounted implementation.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-teal px-8 py-3.5 text-base font-semibold text-white hover:bg-teal-dark transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
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
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white py-20">
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
                href={`tel:${CONTACT.phoneE164}`}
                className="w-full sm:w-auto rounded-lg border border-white/25 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors text-center"
              >
                Call {CONTACT.phoneDisplay}
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
