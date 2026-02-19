import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal">
                <span className="text-lg font-bold text-white">P</span>
              </div>
              <span className="text-xl font-bold">
                Prime<span className="text-teal">Reception</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Your AI Receptionist. Always On. Never Misses a Call.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Pages
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Industries
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/industries#dental" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Dental Offices
                </Link>
              </li>
              <li>
                <Link href="/industries#medspa" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Med Spas
                </Link>
              </li>
              <li>
                <Link href="/industries#auto" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Auto Body Shops
                </Link>
              </li>
              <li>
                <Link href="/industries#law" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Law Offices
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+14247885134"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  (424) 788-5134
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@primereception.com"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  hello@primereception.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Book a Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PrimeReception. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
