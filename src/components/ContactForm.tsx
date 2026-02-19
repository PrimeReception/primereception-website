"use client";

import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xnjbzrkr";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    industry: "",
    challenge: "",
    referral: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green/5 border border-green/20 p-8 text-center">
        <svg className="h-12 w-12 text-green mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="mt-4 text-xl font-semibold text-navy">
          Thanks! We&apos;ll be in touch soon.
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Check your email for a confirmation. In the meantime, feel free to
          pick a demo time using the calendar below.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-charcoal placeholder-gray-400 focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
          placeholder="John Smith"
        />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-charcoal placeholder-gray-400 focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-charcoal placeholder-gray-400 focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      {/* Business Name */}
      <div>
        <label htmlFor="business" className="block text-sm font-medium text-charcoal mb-1.5">
          Business Name *
        </label>
        <input
          type="text"
          id="business"
          name="business"
          required
          value={formData.business}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-charcoal placeholder-gray-400 focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
          placeholder="Bright Smile Dental"
        />
      </div>

      {/* Industry */}
      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-charcoal mb-1.5">
          Industry *
        </label>
        <select
          id="industry"
          name="industry"
          required
          value={formData.industry}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-charcoal focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
        >
          <option value="">Select your industry</option>
          <option value="dental">Dental Office</option>
          <option value="medspa">Med Spa / Aesthetic Clinic</option>
          <option value="auto">Auto Body Shop</option>
          <option value="law">Law Office</option>
          <option value="hvac">HVAC / Home Services</option>
          <option value="architecture">Architecture Firm</option>
          <option value="veterinary">Veterinary Clinic</option>
          <option value="accounting">Accounting / CPA Firm</option>
          <option value="realestate">Real Estate Agency</option>
          <option value="consulting">Consulting Firm</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Biggest Challenge */}
      <div>
        <label htmlFor="challenge" className="block text-sm font-medium text-charcoal mb-1.5">
          Biggest Challenge With Phone Calls
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={3}
          value={formData.challenge}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-charcoal placeholder-gray-400 focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none resize-none"
          placeholder="e.g., We miss calls during procedures, after-hours inquiries go to voicemail..."
        />
      </div>

      {/* How did you hear */}
      <div>
        <label htmlFor="referral" className="block text-sm font-medium text-charcoal mb-1.5">
          How Did You Hear About Us?
        </label>
        <select
          id="referral"
          name="referral"
          value={formData.referral}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-charcoal focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
        >
          <option value="">Select one</option>
          <option value="google">Google Search</option>
          <option value="social">Social Media</option>
          <option value="referral">Referral / Word of Mouth</option>
          <option value="ad">Online Ad</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Error message */}
      {error && (
        <p className="text-sm text-red-600 text-center">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-teal px-6 py-3 text-base font-semibold text-white hover:bg-teal-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting..." : "Submit & Book Your Demo"}
      </button>
      <p className="text-xs text-gray-400 text-center">
        No obligation. We&apos;ll reach out within 2-4 hours.
      </p>
    </form>
  );
}
