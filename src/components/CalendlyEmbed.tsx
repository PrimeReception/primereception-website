"use client";

import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/admin-primereception/30min";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mx-auto max-w-3xl">
      <div
        className="calendly-inline-widget rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100"
        data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1A1A2E&primary_color=3B82B6`}
        style={{ minWidth: "320px", height: "700px" }}
      />
      {/* Fallback if Calendly doesn't load */}
      <noscript>
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-4">
            JavaScript is required to load the scheduling widget.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal font-semibold hover:underline"
          >
            Click here to schedule on Calendly directly
          </a>
        </div>
      </noscript>
    </div>
  );
}
