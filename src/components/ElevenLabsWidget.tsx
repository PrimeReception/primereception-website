"use client";

import { useEffect, useRef, useState } from "react";

const SCRIPT_URL = "https://unpkg.com/@elevenlabs/convai-widget-embed";
const AGENT_ID = "agent_1301khq7wcn5ftjsrcb2g6fjxw45";

export default function ElevenLabsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    async function init() {
      // Load the script if not already present
      if (!document.querySelector(`script[src="${SCRIPT_URL}"]`)) {
        const script = document.createElement("script");
        script.src = SCRIPT_URL;
        script.async = true;
        document.body.appendChild(script);
        await new Promise<void>((resolve, reject) => {
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Failed to load ElevenLabs widget script"));
        });
      }

      // Wait for the custom element to be registered (up to 10s)
      if (!customElements.get("elevenlabs-convai")) {
        await customElements.whenDefined("elevenlabs-convai");
      }

      if (cancelled || !container) return;

      // Create and append the widget element
      const widget = document.createElement("elevenlabs-convai");
      widget.setAttribute("agent-id", AGENT_ID);
      container.appendChild(widget);
      setLoading(false);
    }

    init().catch((err) => {
      console.error("ElevenLabs widget failed to load:", err);
      if (!cancelled) setLoading(false);
    });

    return () => {
      cancelled = true;
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[100px] flex items-center justify-center">
      {loading && (
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading demo...
        </div>
      )}
    </div>
  );
}
