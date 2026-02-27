import Link from "next/link";
import { CONTACT } from "@/lib/contact";
import FAQAccordion from "@/components/FAQAccordion";
import HeroHeading from "@/components/HeroHeading";
import FloatingParticles from "@/components/FloatingParticles";
import NetworkGraph from "@/components/NetworkGraph";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ElevenLabsWidget from "@/components/ElevenLabsWidget";

export default function Home() {
  return (
    <main>
      {/* ====== 1. HERO ====== */}
      <section className="relative bg-navy overflow-hidden min-h-[92vh] flex items-center">
        {/* Layered hero animations */}
        <FloatingParticles />
        <NetworkGraph />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-2xl">
            <HeroHeading />
            <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-lg sm:text-xl">
              Prime Reception answers every call with natural AI — so you never
              miss a patient, client, or customer again.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-block rounded bg-teal px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-green transition-colors"
              >
                Get Started
              </Link>
              <a
                href="tel:+14247885134"
                className="inline-flex items-center gap-2 rounded border-2 border-teal px-8 py-[14px] text-sm font-semibold uppercase tracking-widest text-teal hover:bg-teal hover:text-white transition-colors"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Try a Live Demo
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">
              Questions? Call{" "}
              <a
                href={`tel:${CONTACT.phoneE164}`}
                className="text-white/70 hover:text-white underline underline-offset-2"
              >
                {CONTACT.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ====== LIVE DEMO BANNER ====== */}
      <section className="bg-teal/10 py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-xl font-bold text-navy sm:text-2xl">
            Hear it for yourself — try our AI receptionist live
          </p>
          <p className="mt-2 text-sm text-text-body">
            Talk to our AI right here in your browser, or call it on your phone.
          </p>
          <div className="mt-8 mx-auto max-w-md">
            <ElevenLabsWidget />
          </div>
          <div className="mt-6">
            <a
              href="tel:+14247885134"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-green transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Or call (424) 788-5134 on your phone
            </a>
          </div>
        </div>
      </section>

      {/* ====== WHY IT WORKS ====== */}
      <ScrollReveal>
        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
                Feels like your best employee answering every call
              </h2>
              <p className="mt-4 text-text-body">
                Not a generic chatbot. A custom AI receptionist trained on your business.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Trained on you */}
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <h3 className="mt-5 font-serif text-xl font-bold text-navy">
                  Trained on you
                </h3>
                <p className="mt-3 text-sm text-text-body leading-relaxed max-w-xs mx-auto">
                  Your AI receptionist learns your services, hours, providers, insurance, and FAQs. It sounds like someone who&apos;s worked at your front desk for years.
                </p>
              </div>

              {/* Built with guardrails */}
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <h3 className="mt-5 font-serif text-xl font-bold text-navy">
                  Built with guardrails
                </h3>
                <p className="mt-3 text-sm text-text-body leading-relaxed max-w-xs mx-auto">
                  Strict boundaries ensure your AI never guesses, never improvises medical advice, and always escalates when a real human is needed.
                </p>
              </div>

              {/* All-in-one front desk */}
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                </svg>
                <h3 className="mt-5 font-serif text-xl font-bold text-navy">
                  All-in-one front desk
                </h3>
                <p className="mt-3 text-sm text-text-body leading-relaxed max-w-xs mx-auto">
                  Answers calls, books appointments, captures leads, handles FAQs, takes messages, and routes urgent calls — all from one number.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ====== 2. PRICING ====== */}
      <ScrollReveal>
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
                Simple, transparent pricing
              </h2>
              <p className="mt-4 text-text-body">
                No hidden fees. No per-minute charges. Cancel anytime.
              </p>
            </div>

            <div className="mx-auto max-w-5xl grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Core */}
              <div className="rounded-2xl border border-navy/10 bg-white p-8 md:p-10 shadow-sm flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-navy">Core</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-navy">$249</span>
                  <span className="text-text-body">/month</span>
                </div>
                <p className="mt-1 text-xs text-text-body/70">+ $750 one-time setup fee</p>
                <p className="mt-4 text-sm text-text-body leading-relaxed">
                  Best for solo practitioners and small offices with moderate call volume.
                </p>
                <ul className="mt-8 space-y-3 flex-1">
                  {[
                    "AI-powered call answering",
                    "Up to 150 calls/month",
                    "Business hours coverage (M\u2013F 8am\u20136pm)",
                    "Message taking & lead capture",
                    "Basic FAQ handling",
                    "Appointment capture",
                    "1 call forwarding number",
                    "Custom greeting script",
                    "1 script revision included",
                    "Email support",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-text-body">
                      <svg className="h-5 w-5 shrink-0 text-teal mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block text-center rounded border-2 border-teal px-6 py-3 text-sm font-semibold uppercase tracking-widest text-teal hover:bg-teal hover:text-white transition-colors"
                >
                  Get Started
                </Link>
                <p className="mt-3 text-[11px] text-text-body/60 text-center leading-snug">
                  Setup includes: custom voice, greeting script, phone number configuration &amp; testing
                </p>
              </div>

              {/* Pro */}
              <div className="relative rounded-2xl border-2 border-teal bg-white p-8 md:p-10 shadow-lg flex flex-col">
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-teal px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                  Most Popular
                </span>
                <h3 className="font-serif text-2xl font-bold text-navy">Pro</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-navy">$399</span>
                  <span className="text-text-body">/month</span>
                </div>
                <p className="mt-1 text-xs text-text-body/70">+ $1,500 one-time setup fee</p>
                <p className="mt-4 text-sm text-text-body leading-relaxed">
                  Best for dental offices, med spas, and busy service businesses with steady call volume.
                </p>
                <ul className="mt-8 space-y-3 flex-1">
                  {[
                    "Everything in Core, plus:",
                    "Up to 500 calls/month",
                    "24/7 coverage incl. weekends & holidays",
                    "Custom FAQ & script training",
                    "Up to 3 call forwarding numbers",
                    "Unlimited script revisions",
                    "SMS call alerts (coming soon)",
                    "Priority voice & script optimization",
                    "30-day optimization window post-launch",
                    "Phone & email support",
                    "Founder-led onboarding & optimization",
                  ].map((f, i) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm text-text-body ${i === 0 ? "font-semibold text-navy" : ""}`}>
                      {i === 0 ? null : (
                        <svg className="h-5 w-5 shrink-0 text-teal mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block text-center rounded bg-teal px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-green transition-colors"
                >
                  Get Started
                </Link>
                <p className="mt-3 text-[11px] text-text-body/60 text-center leading-snug">
                  Setup includes: everything in Core + custom FAQ training session, multi-number setup, script workshop with founder
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-2xl mt-12 text-center space-y-3">
              <p className="text-sm text-navy font-medium">
                The average practice recoups their investment within the first week — just 3–5 recovered missed calls pays for a full month.
              </p>
              <p className="text-xs text-text-body/60">
                *Need more than 500 calls/month? <Link href="/contact" className="text-teal hover:underline">Contact us</Link> for a custom Enterprise plan.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ====== 3. EXPERIENCE SECTION ====== */}
      <ScrollReveal>
        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-navy text-center sm:text-4xl lg:text-5xl">
              Experience a better reception
            </h2>
            <p className="mt-4 text-center text-text-body max-w-2xl mx-auto">
              Everything your front desk does — done better, faster, and around
              the clock.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
              {/* Card 1 — Phone */}
              <div className="text-center">
                <div className="mx-auto flex h-40 w-full max-w-[280px] items-center justify-center rounded-2xl bg-teal/10">
                  <svg className="h-16 w-16 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-navy">
                  24/7 call answering
                </h3>
                <p className="mt-3 text-sm text-text-body leading-relaxed max-w-xs mx-auto">
                  Every call answered professionally, day or night, weekends and
                  holidays included. No hold music, no voicemail.
                </p>
              </div>

              {/* Card 2 — Calendar */}
              <div className="text-center">
                <div className="mx-auto flex h-40 w-full max-w-[280px] items-center justify-center rounded-2xl bg-teal/10">
                  <svg className="h-16 w-16 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-navy">
                  Appointment capture
                </h3>
                <p className="mt-3 text-sm text-text-body leading-relaxed max-w-xs mx-auto">
                  AI collects caller details, preferred times, and reason for
                  visit — so your team can confirm and book.
                </p>
              </div>

              {/* Card 3 — Upward chart */}
              <div className="text-center">
                <div className="mx-auto flex h-40 w-full max-w-[280px] items-center justify-center rounded-2xl bg-teal/10">
                  <svg className="h-16 w-16 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-navy">
                  Lead capture &amp; routing
                </h3>
                <p className="mt-3 text-sm text-text-body leading-relaxed max-w-xs mx-auto">
                  Qualifies leads, collects contact info, and sends your team
                  everything they need to close.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ====== 4. HOW IT WORKS ====== */}
      <ScrollReveal>
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
              <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
                How Prime Reception works
              </h2>
              <Link
                href="/how-it-works"
                className="text-xs font-semibold uppercase tracking-widest text-teal hover:text-green transition-colors"
              >
                Learn More &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy/5">
                  <svg className="h-8 w-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-navy">
                  You sign up
                </h3>
                <p className="mt-3 text-sm text-text-body leading-relaxed max-w-xs mx-auto">
                  Tell us about your business, hours, services, and how you want
                  calls handled. Takes about 15 minutes.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy/5">
                  <svg className="h-8 w-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.67-5.67a8 8 0 1111.31 0l-5.64 5.67zm0 0l5.66 5.66M18.36 18.36L21 21" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-navy">
                  We build everything
                </h3>
                <p className="mt-3 text-sm text-text-body leading-relaxed max-w-xs mx-auto">
                  Custom AI voice, call scripts, FAQ training, phone number
                  setup, and end-to-end testing. You do zero technical work.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy/5">
                  <svg className="h-8 w-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-navy">
                  Go live in days
                </h3>
                <p className="mt-3 text-sm text-text-body leading-relaxed max-w-xs mx-auto">
                  Your AI receptionist starts answering calls. You get detailed
                  messages, leads, and appointment requests automatically.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ====== 5. VALUE PROPOSITION EQUATION ====== */}
      <ScrollReveal>
        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center md:gap-8">
              {/* Term 1 */}
              <div className="rounded-2xl border border-navy/10 bg-white px-8 py-6 text-center shadow-sm max-w-xs w-full">
                <p className="font-serif text-lg font-bold text-navy">
                  Your existing phone number
                </p>
              </div>

              {/* Plus */}
              <span className="text-3xl font-bold text-navy/30 select-none">+</span>

              {/* Term 2 */}
              <div className="rounded-2xl border border-navy/10 bg-white px-8 py-6 text-center shadow-sm max-w-xs w-full">
                <p className="font-serif text-lg font-bold text-navy">
                  AI that actually understands patients
                </p>
              </div>

              {/* Equals */}
              <span className="text-3xl font-bold text-navy/30 select-none">=</span>

              {/* Result */}
              <div className="rounded-2xl border-2 border-teal/30 bg-teal/5 px-8 py-6 text-center max-w-sm w-full">
                <p className="font-serif text-lg font-bold text-navy">
                  A front desk your patients will love, at a fraction of the cost
                </p>
                <span className="mt-2 inline-block text-2xl">&#10084;&#65039;</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ====== 6. RATING + TESTIMONIALS ====== */}
      <ScrollReveal>
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
                Practices love Prime Reception
              </h2>
              <div className="mt-8 flex flex-col items-center">
                <p className="text-7xl font-bold text-navy sm:text-8xl">98%</p>
                <p className="mt-2 text-sm text-text-body">satisfaction rate</p>
                {/* 5 green stars */}
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-7 w-7 text-teal"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <TestimonialCarousel />
          </div>
        </section>
      </ScrollReveal>

      {/* ====== 7. PRESS / SOCIAL PROOF ====== */}
      <ScrollReveal>
        <section className="relative bg-cream py-20 md:py-28 overflow-hidden">
          {/* Subtle teal glow behind the quote */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-teal/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Pull quote */}
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-2xl font-bold text-navy leading-snug sm:text-3xl lg:text-4xl">
                &ldquo;Prime Reception is doing for phone calls what online
                booking did for appointments — making them effortless for
                everyone involved.&rdquo;
              </p>
            </blockquote>

            <p className="mt-10 text-center text-sm font-semibold text-navy/40 uppercase tracking-widest">
              Trusted by 50+ practices nationwide
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ====== 8. FAQ ====== */}
      <ScrollReveal>
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-navy text-center sm:text-4xl lg:text-5xl mb-12">
              Still have questions?
            </h2>
            <FAQAccordion />
            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="text-xs font-semibold uppercase tracking-widest text-teal hover:text-green transition-colors"
              >
                See More Questions &rarr;
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
