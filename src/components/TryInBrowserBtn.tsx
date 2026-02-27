"use client";

export default function TryInBrowserBtn() {
  return (
    <button
      type="button"
      onClick={() => {
        const widget = document.querySelector("elevenlabs-convai") as HTMLElement | null;
        if (widget) widget.click();
      }}
      className="inline-flex items-center gap-2 rounded border-2 border-teal px-6 py-[10px] text-sm font-semibold uppercase tracking-widest text-teal hover:bg-teal hover:text-white transition-colors"
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
      Try in Browser
    </button>
  );
}
