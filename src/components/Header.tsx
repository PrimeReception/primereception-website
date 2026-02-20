"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/icon.svg" alt="" width={36} height={36} className="shrink-0" />
            <span className="text-xl font-bold text-navy">
              Prime<span className="text-teal">Reception</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-charcoal hover:text-teal transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-charcoal hover:text-teal transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/industries"
              className="text-sm font-medium text-charcoal hover:text-teal transition-colors"
            >
              Industries
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-charcoal hover:text-teal transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-dark transition-colors"
            >
              Book a Demo
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="border-t border-gray-100 pb-4 md:hidden">
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/how-it-works"
                className="px-2 py-2 text-sm font-medium text-charcoal hover:text-teal"
                onClick={() => setMobileOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/pricing"
                className="px-2 py-2 text-sm font-medium text-charcoal hover:text-teal"
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/industries"
                className="px-2 py-2 text-sm font-medium text-charcoal hover:text-teal"
                onClick={() => setMobileOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="/about"
                className="px-2 py-2 text-sm font-medium text-charcoal hover:text-teal"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="mt-2 rounded-lg bg-teal px-5 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
