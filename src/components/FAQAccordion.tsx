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
      "Your AI receptionist can transfer calls to you or your team based on rules you set. Urgent calls get forwarded immediately. Everything else becomes a detailed message delivered to your email or phone.",
  },
  {
    question: "Do you store sensitive medical information (HIPAA)?",
    answer:
      "No. PrimeReception takes messages, answers FAQs, and routes calls. We do not collect, store, or process protected health information. This makes us a safe, low-risk solution for dental offices and healthcare-adjacent businesses.",
  },
  {
    question: "Can I customize how the AI responds?",
    answer:
      "Yes. During setup, we craft custom scripts, FAQs, and response patterns specific to your business. You can request changes anytime — unlimited revisions are included.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "No long-term contracts. You can cancel your monthly plan anytime. The one-time setup fee is non-refundable as it covers the work already completed.",
  },
  {
    question: "What's included in the setup fee?",
    answer:
      "Everything: custom AI voice personality configuration, call script writing, FAQ training, phone number setup, integration with your forwarding number, testing, quality assurance, and go-live support.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-200">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left"
          >
            <span className="text-base font-medium text-charcoal pr-4">
              {faq.question}
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-teal transition-transform ${
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
          {openIndex === i && (
            <p className="pb-5 text-sm leading-relaxed text-gray-600">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
