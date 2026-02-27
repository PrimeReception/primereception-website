import Link from "next/link";
import { CONTACT } from "@/lib/contact";
import FAQAccordion from "@/components/FAQAccordion";
import HeroHeading from "@/components/HeroHeading";
import FloatingParticles from "@/components/FloatingParticles";
import NetworkGraph from "@/components/NetworkGraph";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCarousel from "@/components/TestimonialCarousel";

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
              PrimeReception answers every call with natural AI — so you never
              miss a patient, client, or customer again.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block rounded bg-teal px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-green transition-colors"
              >
                Get Started
              </Link>
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

      {/* ====== 2. ZIP / CONTACT BAR ====== */}
      <ScrollReveal>
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl">
                See if we cover your practice
              </h2>
              <p className="mt-4 text-text-body">
                Enter your zip code to check availability in your area.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <input
                  type="text"
                  placeholder="Enter your zip code"
                  className="w-full max-w-xs rounded-lg border border-navy/15 bg-cream px-5 py-3.5 text-sm text-navy placeholder:text-text-body/50 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                />
                <Link
                  href="/contact"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal text-white hover:bg-green transition-colors"
                  aria-label="Check availability"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
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
              {/* Card 1 */}
              <div className="text-center">
                <div className="mx-auto flex h-40 w-full max-w-[280px] items-center justify-center rounded-2xl bg-teal/15">
                  <span className="text-6xl">&#128222;</span>
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-navy">
                  24/7 call answering
                </h3>
                <p className="mt-3 text-sm text-text-body leading-relaxed max-w-xs mx-auto">
                  Every call answered professionally, day or night, weekends and
                  holidays included. No hold music, no voicemail.
                </p>
              </div>

              {/* Card 2 */}
              <div className="text-center">
                <div className="mx-auto flex h-40 w-full max-w-[280px] items-center justify-center rounded-2xl bg-teal/15">
                  <span className="text-6xl">&#128203;</span>
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-navy">
                  Appointment capture
                </h3>
                <p className="mt-3 text-sm text-text-body leading-relaxed max-w-xs mx-auto">
                  AI collects caller details, preferred times, and reason for
                  visit — so your team can confirm and book.
                </p>
              </div>

              {/* Card 3 */}
              <div className="text-center">
                <div className="mx-auto flex h-40 w-full max-w-[280px] items-center justify-center rounded-2xl bg-green/12">
                  <span className="text-6xl">&#128200;</span>
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
                How PrimeReception works
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
                Practices love PrimeReception
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
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-navy/50 mb-10">
              As Seen In
            </p>

            {/* Pull quote */}
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-2xl font-bold text-navy leading-snug sm:text-3xl lg:text-4xl">
                &ldquo;PrimeReception is doing for phone calls what online
                booking did for appointments — making them effortless for
                everyone involved.&rdquo;
              </p>
              <footer className="mt-6 text-sm text-text-body">
                &mdash; Industry Observer
              </footer>
            </blockquote>

            {/* Press logos placeholder row */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
              {["TechHealth Weekly", "Practice Growth", "AI Business Today", "Startup Review"].map(
                (name) => (
                  <span
                    key={name}
                    className="text-sm font-semibold text-navy/25 uppercase tracking-wider"
                  >
                    {name}
                  </span>
                )
              )}
            </div>
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
