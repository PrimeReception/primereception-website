import type { Metadata } from "next";
import Link from "next/link";
import ROICalculator from "@/components/ROICalculator";

export const metadata: Metadata = {
  title: "Pricing — AI Receptionist Plans Starting at $149/mo | PrimeReception",
  description:
    "Simple, transparent AI receptionist pricing. Plans from $149/month. Less than $10/day for 24/7 professional call coverage. No long-term contracts.",
};

const plans = [
  {
    name: "Starter",
    price: "$149",
    setup: "$500",
    desc: "Best for solo practitioners and small offices just getting started.",
    popular: false,
    features: [
      { text: "Up to 100 calls/month", included: true },
      { text: "Business hours coverage (M-F 8am-6pm)", included: true },
      { text: "Message taking + email summaries", included: true },
      { text: "Basic FAQ handling", included: true },
      { text: "1 call forwarding number", included: true },
      { text: "24/7 coverage", included: false },
      { text: "SMS notifications", included: false },
      { text: "Custom script training", included: false },
      { text: "Appointment scheduling", included: false },
      { text: "Monthly analytics report", included: false },
      { text: "Multi-location support", included: false },
      { text: "Dedicated account manager", included: false },
      { text: "Custom integrations", included: false },
    ],
  },
  {
    name: "Professional",
    price: "$299",
    setup: "$2,500",
    desc: "Best for dental offices, med spas, and auto body shops with steady call volume.",
    popular: true,
    features: [
      { text: "Unlimited calls", included: true },
      { text: "24/7 coverage incl. weekends & holidays", included: true },
      { text: "Message taking + real-time email/SMS", included: true },
      { text: "Custom FAQ & script training", included: true },
      { text: "Up to 3 call forwarding numbers", included: true },
      { text: "Appointment scheduling assistance", included: true },
      { text: "Monthly call analytics report", included: true },
      { text: "Custom script training", included: true },
      { text: "Appointment scheduling", included: true },
      { text: "Multi-location support", included: false },
      { text: "Dedicated account manager", included: false },
      { text: "Custom integrations", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "$499",
    setup: "$2,500",
    desc: "Best for multi-location practices and growing businesses.",
    popular: false,
    features: [
      { text: "Everything in Professional", included: true },
      { text: "Multi-location support (up to 5 numbers)", included: true },
      { text: "Priority voice optimization", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom integrations (CRM, calendar, etc.)", included: true },
      { text: "Quarterly business review calls", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-navy text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Less than $10/day for 24/7 professional call coverage. Compare to
              $35,000+/year for a human receptionist.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 relative ${
                  plan.popular
                    ? "border-2 border-teal shadow-lg"
                    : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-navy">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-charcoal">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="mt-2 text-xs text-gray-400">
                  {plan.setup} one-time setup fee
                </p>
                <p className="mt-4 text-sm text-gray-600">{plan.desc}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      className="flex items-start gap-2 text-sm"
                    >
                      {f.included ? (
                        <svg className="h-5 w-5 shrink-0 text-green mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 shrink-0 text-gray-300 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className={f.included ? "text-gray-600" : "text-gray-400"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
                    plan.popular
                      ? "bg-teal text-white hover:bg-teal-dark"
                      : "border border-teal text-teal hover:bg-teal hover:text-white"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE COMPARISON */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Feature Comparison
            </h2>
          </div>
          <div className="mx-auto max-w-4xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-navy">
                    Feature
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-navy">
                    Starter
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-teal">
                    Professional
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-navy">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Monthly price", starter: "$149", pro: "$299", enterprise: "$499" },
                  { feature: "Setup fee", starter: "$500", pro: "$2,500", enterprise: "$2,500" },
                  { feature: "Calls included", starter: "100/mo", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Coverage hours", starter: "Business hours", pro: "24/7", enterprise: "24/7" },
                  { feature: "Message taking", starter: true, pro: true, enterprise: true },
                  { feature: "Email summaries", starter: true, pro: true, enterprise: true },
                  { feature: "SMS notifications", starter: false, pro: true, enterprise: true },
                  { feature: "Custom FAQ training", starter: false, pro: true, enterprise: true },
                  { feature: "Custom scripts", starter: false, pro: true, enterprise: true },
                  { feature: "Appointment scheduling", starter: false, pro: true, enterprise: true },
                  { feature: "Call forwarding numbers", starter: "1", pro: "3", enterprise: "5" },
                  { feature: "Analytics reports", starter: false, pro: "Monthly", enterprise: "Monthly" },
                  { feature: "Multi-location support", starter: false, pro: false, enterprise: true },
                  { feature: "Dedicated account manager", starter: false, pro: false, enterprise: true },
                  { feature: "Custom integrations", starter: false, pro: false, enterprise: true },
                  { feature: "Quarterly business reviews", starter: false, pro: false, enterprise: true },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100">
                    <td className="py-3 pr-4 text-gray-700 font-medium">
                      {row.feature}
                    </td>
                    {[row.starter, row.pro, row.enterprise].map((val, i) => (
                      <td key={i} className="px-4 py-3 text-center">
                        {typeof val === "boolean" ? (
                          val ? (
                            <svg className="h-5 w-5 text-green mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="text-gray-600">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SETUP FEE EXPLANATION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl text-center mb-8">
              About the Setup Fee
            </h2>
            <div className="rounded-2xl bg-gray-bg p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                Your setup fee covers complete configuration — custom voice
                personality, call scripts tailored to your business, FAQ
                training, phone number provisioning, testing, and go-live
                support. <strong>You do nothing. We handle everything.</strong>
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                This is a one-time, non-refundable fee because it covers real
                work already completed by our team. Most competitors charge
                monthly for basic self-serve setup. We invest upfront so your AI
                receptionist is perfectly configured from day one.
              </p>
              <div className="rounded-xl bg-white p-6 border border-gray-100">
                <p className="text-sm font-semibold text-navy mb-3">
                  What&apos;s included:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Custom AI voice configuration",
                    "Call script writing",
                    "FAQ training & programming",
                    "Phone number setup",
                    "Call forwarding integration",
                    "End-to-end testing",
                    "Go-live support",
                    "Unlimited revisions",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NO CONTRACTS */}
      <section className="bg-gray-bg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-green/10 px-4 py-2 mb-4">
              <svg className="h-5 w-5 text-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-green">No Long-Term Contracts</span>
            </div>
            <h2 className="text-2xl font-bold text-navy">
              Cancel Anytime. No Questions Asked.
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We earn your business every month. If PrimeReception isn&apos;t
              delivering value, you can cancel your monthly plan anytime. The
              one-time setup fee is non-refundable as it covers work already
              completed.
            </p>
          </div>
        </div>
      </section>

      {/* ROI SECTION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              PrimeReception Pays For Itself
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If you miss just 5 calls a month and each customer is worth $500,
              that&apos;s $2,500/month in lost revenue. PrimeReception pays for
              itself with the first call we catch.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Stop Missing Calls?
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Book a free demo and see which plan is right for your business.
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
