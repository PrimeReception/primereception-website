"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need any technical skills?",
    answer:
      "Absolutely not. We handle 100% of the setup, configuration, and training. You tell us about your business, and we do the rest. No software to install, no settings to configure.",
  },
  {
    question: "How long until my AI receptionist is live?",
    answer:
      "Most businesses are fully live within 5 business days. We handle voice setup, script writing, FAQ training, and testing before your first call.",
  },
  {
    question: "Will callers know it's AI?",
    answer:
      "Our AI uses natural, human-like voice technology. Most callers won't notice the difference. We always recommend transparency — you can choose to disclose it or not.",
  },
  {
    question: "What happens if someone needs to speak to a human?",
    answer:
      "Your AI receptionist can transfer calls to you or your team based on rules you set. Urgent calls get forwarded immediately. Everything else is captured as a detailed message for your team to follow up on.",
  },
  {
    question: "How do you handle sensitive information (HIPAA)?",
    answer:
      "PrimeReception is designed to minimize sensitive information collection. If your workflow involves protected health information, we configure call handling to limit what's captured and route appropriately. You remain responsible for your compliance requirements, and we'll align configuration to your policies and vendor agreements.",
  },
  {
    question: "Can I customize how the AI responds?",
    answer:
      "Yes. During setup, we craft custom scripts, FAQs, and response patterns specific to your business. Script revisions are included with every plan, and Pro plan customers get ongoing refinements.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "Month-to-month. Cancel anytime with 5 days' notice before your next billing date. No long-term contracts, no cancellation fees. The one-time implementation package fee is non-refundable as it covers the work already completed.",
  },
  {
    question: "What's included in the implementation package?",
    answer:
      "Everything: workflow review, call logic design, custom intake flow configuration, routing rules, AI voice tuning, call script writing, FAQ training, phone number setup, test scenario coverage, and go-live management.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy/10">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left group"
          >
            <span className="text-base font-medium text-navy pr-4 group-hover:text-gold transition-colors">
              {faq.question}
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-gold transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`grid transition-all duration-200 ease-in-out ${
              openIndex === i
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pb-5 text-sm leading-relaxed text-text-body">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
