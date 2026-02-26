"use client";

import { useRef } from "react";

const testimonials = [
  {
    quote:
      "PrimeReception has been a game-changer for our practice. We're capturing 40% more appointment requests than before.",
    author: "Dr. Sarah K.",
    role: "Smile Dental Care",
  },
  {
    quote:
      "We used to miss 15+ calls a day during procedures. Now every single call gets answered professionally.",
    author: "Mark T.",
    role: "Precision Auto Body",
  },
  {
    quote:
      "The ROI was immediate. Within the first month, we booked $12,000 in new consultations we would have missed.",
    author: "Jennifer L.",
    role: "Lakeside Med Spa",
  },
  {
    quote:
      "Our patients love the experience. They have no idea it's AI — they just know someone always picks up.",
    author: "Dr. James R.",
    role: "Harbor Dental Group",
  },
  {
    quote:
      "I'm on job sites all day. Knowing every call is handled lets me focus on the work in front of me.",
    author: "Carlos M.",
    role: "Summit HVAC Services",
  },
];

export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Arrow buttons */}
      <div className="flex justify-end gap-3 mb-6">
        <button
          onClick={() => scroll("left")}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[320px] snap-start rounded-2xl bg-navy p-8 text-white"
          >
            <svg className="h-8 w-8 text-yellow mb-4 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-sm leading-relaxed text-white/90 mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="text-sm font-semibold text-white">{t.author}</p>
              <p className="text-xs text-white/60">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
