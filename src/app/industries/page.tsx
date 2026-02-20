import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Industries We Serve — AI Receptionist for Dental, Med Spa, Auto & More",
  description:
    "PrimeReception serves dental offices, med spas, auto body shops, law offices, HVAC, and more. See how AI phone answering solves your industry's biggest challenges.",
};

const industries = [
  {
    id: "dental",
    icon: "🦷",
    name: "Dental Offices",
    tagline: "Never miss a patient call during procedures",
    painPoints: [
      "Front desk is overwhelmed — answering phones, checking in patients, and handling insurance all at once",
      "Missed calls during procedures mean patients go elsewhere",
      "After-hours callers looking for emergency info get voicemail and never call back",
      "Hiring another front desk person costs $30,000-$40,000/year",
    ],
    solution:
      "PrimeReception answers every call — during procedures, at lunch, after hours, and on weekends. We take messages, answer common questions about services and insurance, and capture new patient leads. Call handling is configured to minimize sensitive information collection and route appropriately.",
    scenario: {
      caller: "New patient calling about teeth whitening pricing",
      ai: "Thanks for calling Bright Smile Dental! I'd be happy to help. Our professional teeth whitening starts at $350 for in-office treatment. Would you like me to schedule a free consultation with Dr. Miller? I have openings this Thursday at 2pm or Friday at 10am.",
    },
    stat: "Average dental practice loses $150,000+/year from missed calls",
  },
  {
    id: "medspa",
    icon: "💆",
    name: "Med Spas & Aesthetic Clinics",
    tagline: "Capture high-value bookings around the clock",
    painPoints: [
      "High-value bookings ($200-$2,000+) come in after hours when no one is available",
      "Clients expect premium, responsive service — voicemail feels cheap",
      "Staff are busy with treatments and can't always answer the phone",
      "Competitors with better phone availability steal your potential clients",
    ],
    solution:
      "PrimeReception provides the premium experience your clients expect. We answer after-hours inquiries about treatments and pricing, capture booking requests, and make sure every potential client feels valued from the first interaction.",
    scenario: {
      caller: "Potential client calling at 8pm about Botox pricing",
      ai: "Thank you for calling Glow Aesthetics! Our Botox treatments start at $12 per unit, and most clients use 20-40 units depending on the treatment area. We'd love to schedule a complimentary consultation for you. I have availability tomorrow at 11am or Thursday at 3pm — which works better for you?",
    },
    stat: "Med spas report 35% of booking inquiries come outside business hours",
  },
  {
    id: "auto",
    icon: "🔧",
    name: "Auto Body Shops",
    tagline: "Stop losing $5,000 jobs to missed calls",
    painPoints: [
      "Owners and techs are in the shop all day — no one's answering the phone",
      "Every missed call is a $1,500-$5,000 repair job walking to a competitor",
      "Customers calling for estimates need quick responses or they move on",
      "Can't afford a dedicated receptionist just to answer phones",
    ],
    solution:
      "PrimeReception answers every call while you're working. We take detailed messages about vehicle damage, insurance claims, and estimate requests. Urgent calls get forwarded to you immediately. Everything else becomes a message you can respond to between jobs.",
    scenario: {
      caller: "Customer calling about collision repair estimate",
      ai: "Thanks for calling Elite Auto Body! I'm sorry to hear about the damage. I'd be happy to help get you set up with a free estimate. Could I get your name, the year and model of your vehicle, and a brief description of the damage? We can usually get you in for an estimate within 24-48 hours.",
    },
    stat: "Auto body shops miss an average of 30% of incoming calls during peak hours",
  },
  {
    id: "law",
    icon: "⚖️",
    name: "Law Offices",
    tagline: "Every missed call could be a $5,000+ case",
    painPoints: [
      "Solo attorneys and small firms can't always answer during consultations or court",
      "Potential clients with urgent legal needs won't leave voicemails — they call the next firm",
      "A full-time receptionist costs $35,000-$45,000/year plus benefits",
      "After-hours calls from potential clients go completely unanswered",
    ],
    solution:
      "PrimeReception provides professional, dignified call handling befitting a law office. We screen calls, capture case details, determine urgency, and forward truly urgent matters to your cell. New potential clients get a professional first impression 24/7.",
    scenario: {
      caller: "Potential client calling about a personal injury case",
      ai: "Thank you for calling Davidson Law Group. I'm sorry to hear you're dealing with this situation. I'd like to get some details so the attorney can follow up with you personally. Could I get your name and a brief description of what happened? Attorney Davidson typically responds to new inquiries within 2-4 business hours.",
    },
    stat: "35% of people seeking a lawyer call multiple firms and hire whoever answers first",
  },
  {
    id: "hvac",
    icon: "🏠",
    name: "HVAC & Home Services",
    tagline: "Triage emergency calls while you're on the job",
    painPoints: [
      "Technicians are on job sites all day and can't answer phones",
      "Emergency calls (no heat in winter, no AC in summer) need immediate triage",
      "Scheduling requests pile up and get lost in voicemail",
      "Missing calls during peak season means losing thousands in revenue",
    ],
    solution:
      "PrimeReception triages every call. Emergency situations get forwarded to your on-call tech immediately. Routine scheduling requests are captured with all the details you need. You focus on the job at hand while we handle the phones.",
    scenario: {
      caller: "Homeowner calling with no heat on a cold night",
      ai: "I understand this is urgent — no heat in cold weather is serious. Let me get your information so we can help you as quickly as possible. I'm going to transfer you to our emergency technician right now. Can I get your name and address while I connect you?",
    },
    stat: "HVAC companies report 40% of emergency calls go unanswered during peak demand",
  },
  {
    id: "architecture",
    icon: "🏗️",
    name: "Architecture Firms",
    tagline: "Professional image without the overhead",
    painPoints: [
      "Small teams can't staff a dedicated front desk",
      "Professional image matters — voicemail doesn't reflect your brand",
      "Architects are in meetings, site visits, and design sessions all day",
      "High-value project inquiries deserve an immediate, professional response",
    ],
    solution:
      "PrimeReception gives your firm a professional front desk presence without the full-time hire. We answer calls with your firm name, take detailed messages about project inquiries, and forward urgent matters — maintaining the polished image your clients expect.",
    scenario: {
      caller: "Potential client calling about a commercial renovation project",
      ai: "Thank you for calling Cornerstone Architecture. I'd be happy to help connect you with our team about your project. Could I get your name and some details about the renovation? I'll have one of our architects reach out to schedule an initial consultation — typically within one business day.",
    },
    stat: "Small architecture firms spend an average of 8 hours/week on phone-related admin",
  },
  {
    id: "veterinary",
    icon: "🐾",
    name: "Veterinary Clinics",
    tagline: "Handle high call volume without stretching your staff",
    painPoints: [
      "Staff are stretched thin — caring for animals and answering phones simultaneously",
      "Pet emergencies need immediate triage, but routine calls clog the lines",
      "Appointment scheduling takes up valuable staff time",
      "After-hours callers with worried pet owners need guidance",
    ],
    solution:
      "PrimeReception handles routine calls so your staff can focus on animal care. We schedule appointments, answer common questions about services and hours, and immediately forward emergency calls to your on-call vet.",
    scenario: {
      caller: "Pet owner calling about a dog limping after a walk",
      ai: "I can hear you're concerned about your pup. Based on what you're describing, I'd recommend bringing them in for an exam. We have availability tomorrow at 9am or 2pm. If the limping gets significantly worse or your dog seems to be in severe pain, our emergency line is available — would you like me to transfer you now, or shall I book that appointment?",
    },
    stat: "Veterinary clinics receive 200+ calls per week on average",
  },
  {
    id: "accounting",
    icon: "📊",
    name: "Accounting & CPA Firms",
    tagline: "Handle tax season call surges without temp hires",
    painPoints: [
      "Tax season creates massive call spikes that overwhelm small offices",
      "CPAs can't answer phones during client meetings and focused work",
      "Hiring seasonal receptionists is expensive and training takes time",
      "Clients expect prompt, professional responses year-round",
    ],
    solution:
      "PrimeReception scales with your call volume — no hiring or training needed. We handle appointment scheduling, answer questions about document requirements, and capture new client inquiries. Perfect for managing the seasonal surge without the overhead.",
    scenario: {
      caller: "New client calling about tax preparation services",
      ai: "Thank you for calling Summit CPA Group! I'd be happy to help you with tax preparation. We offer individual and business tax services. Could I get your name and a good callback number? I'll also need to know if this is for personal taxes, a business, or both. One of our CPAs will reach out within one business day to discuss your specific needs and pricing.",
    },
    stat: "CPA firms see a 300% call increase during January through April",
  },
];

export default function Industries() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Built for Businesses Like Yours
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              We specialize in industries where every missed call means lost
              revenue. See how PrimeReception solves your specific challenges.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="bg-white border-b border-gray-100 py-4 sticky top-16 z-40 backdrop-blur bg-white/95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="shrink-0 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-charcoal hover:border-teal hover:text-teal transition-colors"
              >
                {ind.icon} {ind.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY SECTIONS */}
      {industries.map((ind, i) => (
        <section
          key={ind.id}
          id={ind.id}
          className={`py-20 scroll-mt-32 ${i % 2 === 0 ? "bg-white" : "bg-gray-bg"}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              {/* Header */}
              <div className="flex items-center gap-4 mb-2">
                <span className="text-4xl">{ind.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold text-navy">{ind.name}</h2>
                  <p className="text-teal font-medium">{ind.tagline}</p>
                </div>
              </div>

              {/* Stat callout */}
              <div className="mt-6 rounded-lg bg-navy/5 border border-navy/10 px-6 py-4">
                <p className="text-sm font-medium text-navy">{ind.stat}</p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
                {/* Pain points */}
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-4">
                    The Challenge
                  </h3>
                  <ul className="space-y-3">
                    {ind.painPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <svg className="h-5 w-5 shrink-0 text-red-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-600 leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-4">
                    How PrimeReception Helps
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {ind.solution}
                  </p>
                </div>
              </div>

              {/* Example call */}
              <div className="mt-10 rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="bg-navy px-6 py-3">
                  <p className="text-sm font-semibold text-white">
                    Example Call Scenario
                  </p>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Caller
                    </p>
                    <p className="text-sm text-gray-700 italic">
                      {ind.scenario.caller}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-teal uppercase tracking-wider mb-1">
                      AI Receptionist
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      &ldquo;{ind.scenario.ai}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Don&apos;t See Your Industry?
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              PrimeReception works for any business that answers phone calls. If
              your team misses calls, we can help. Book a demo and we&apos;ll
              build a custom solution for your industry.
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
          </div>
        </div>
      </section>
    </main>
  );
}
