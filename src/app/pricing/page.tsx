import type { Metadata } from "next";
import Link from "next/link";
import ROICalculator from "@/components/ROICalculator";

export const metadata: Metadata = {
  title: "Pricing — AI Receptionist Plans Starting at $249/mo",
  description:
    "Simple, transparent AI receptionist pricing. Two plans, no long-term contracts. Core at $249/month, Pro at $399/month. Less than $14/day for professional call coverage.",
};

const plans = [
  {
    name: "Core",
    price: "$249",
    implementation: "$750",
    desc: "Best for solo practitioners and small offices with moderate call volume.",
    popular: false,
    features: [
      "AI-powered call answering",
      "Business hours coverage (M-F 8am–6pm)",
      "Message taking & lead capture",
      "Basic FAQ handling",
      "Appointment capture",
      "1 call forwarding number",
      "Custom greeting script",
      "1 script revision included",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$399",
    implementation: "$2,000",
    desc: "Best for dental offices, med spas, and busy service businesses with steady call volume.",
    popular: true,
    features: [
      "Everything in Core",
      "24/7 coverage incl. weekends & holidays",
      "Designed for high call volume*",
      "Custom FAQ & script training",
      "Up to 3 call forwarding numbers",
      "SMS call alerts (coming soon)",
      "Priority voice & script optimization",
      "Ongoing script & FAQ refinements",
      "30-day optimization window post-launch",
      "Priority support",
      "Founder-led onboarding & optimization",
    ],
  },
];

export default function Pricing() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Two plans. No long-term contracts. Less than $14/day for
              professional AI call coverage.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
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
                  {plan.implementation} one-time implementation package
                </p>
                <p className="mt-4 text-sm text-gray-600">{plan.desc}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm"
                    >
                      <svg className="h-5 w-5 shrink-0 text-green mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{f}</span>
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
          <p className="mt-6 text-center text-xs text-gray-400">
            *Plans are designed for typical small business call patterns. Excessive or abusive usage may require plan adjustment.
          </p>
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
          <div className="mx-auto max-w-3xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left font-semibold text-navy">
                    Feature
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-navy">
                    Core
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-teal">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Monthly price", core: "$249", pro: "$399" },
                  { feature: "Implementation package", core: "$750", pro: "$2,000" },
                  { feature: "Coverage hours", core: "Business hours", pro: "24/7" },
                  { feature: "Call volume", core: "Standard", pro: "High volume*" },
                  { feature: "AI-powered call answering", core: true, pro: true },
                  { feature: "Message taking & lead capture", core: true, pro: true },
                  { feature: "Basic FAQ handling", core: true, pro: true },
                  { feature: "Appointment capture", core: true, pro: true },
                  { feature: "Custom greeting script", core: true, pro: true },
                  { feature: "Custom FAQ & script training", core: false, pro: true },
                  { feature: "Call forwarding numbers", core: "1", pro: "Up to 3" },
                  { feature: "SMS call alerts (coming soon)", core: false, pro: true },
                  { feature: "Voice & script optimization", core: "Standard voice setup", pro: "Priority voice & script optimization" },
                  { feature: "Script revisions", core: "1 revision included", pro: "Ongoing refinements" },
                  { feature: "Post-launch optimization", core: false, pro: "30-day window" },
                  { feature: "Priority support", core: false, pro: true },
                  { feature: "Onboarding experience", core: "Standard", pro: "Founder-led" },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100">
                    <td className="py-3 pr-4 text-gray-700 font-medium">
                      {row.feature}
                    </td>
                    {[row.core, row.pro].map((val, i) => (
                      <td key={i} className="px-4 py-3 text-center">
                        {typeof val === "boolean" ? (
                          val ? (
                            <svg className="h-5 w-5 text-green mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <span className="text-gray-300">&mdash;</span>
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
            <p className="mt-4 text-xs text-gray-400">
              *Plans are designed for typical small business call patterns. Excessive or abusive usage may require plan adjustment.
            </p>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION PACKAGE EXPLANATION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl text-center mb-8">
              About Your Implementation Package
            </h2>
            <div className="rounded-2xl bg-gray-bg p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                This is a one-time, non-refundable fee because it covers real
                work already completed by our team. Most competitors charge
                monthly for basic self-serve setup. We invest upfront so your
                AI receptionist is perfectly configured from day one.{" "}
                <strong>You do nothing technical. We handle everything.</strong>
              </p>
              <div className="rounded-xl bg-white p-6 border border-gray-100">
                <p className="text-sm font-semibold text-navy mb-4">
                  Included in your Implementation Package:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Workflow review call",
                    "Call logic design",
                    "Intake flow configuration",
                    "Routing & escalation setup",
                    "Voice tone tuning",
                    "Script writing & FAQ training",
                    "Phone number provisioning",
                    "Test scenarios & simulations",
                    "Go-live management",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <svg className="h-4 w-4 text-green shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
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
              No Long-Term Commitments
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Month-to-month. Cancel anytime with 5 days&apos; notice before
              your next billing date. No long-term contracts, no cancellation
              fees. The one-time implementation package fee is non-refundable
              as it covers work already completed.
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
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white py-20">
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
