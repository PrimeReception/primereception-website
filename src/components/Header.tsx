"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const transparent = isHomepage && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Hamburger — left */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 transition-colors ${
              transparent ? "text-white" : "text-navy"
            }`}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Centered logo — single image, no separate text */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src={transparent ? "/logo-full-white.png" : "/logo-full.png"}
              alt="PrimeReception"
              className="h-[60px] w-auto object-contain"
            />
          </Link>

          {/* Right — GET STARTED */}
          <Link
            href="/contact"
            className="hidden sm:inline-block rounded bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-burnt transition-colors"
          >
            Get Started
          </Link>
          {/* Mobile spacer so logo stays centered */}
          <div className="w-10 sm:hidden" />
        </div>

        {/* Slide-down nav */}
        {mobileOpen && (
          <nav
            className={`border-t pb-6 ${
              transparent ? "border-white/10" : "border-gray-100"
            }`}
          >
            <div className="flex flex-col gap-1 pt-4">
              {[
                { href: "/how-it-works", label: "How It Works" },
                { href: "/pricing", label: "Pricing" },
                { href: "/industries", label: "Industries" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2 py-3 text-sm font-medium transition-colors ${
                    transparent
                      ? "text-white/90 hover:text-white"
                      : "text-navy hover:text-gold"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-3 rounded bg-gold px-5 py-3 text-center text-xs font-semibold uppercase tracking-widest text-white hover:bg-burnt transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
