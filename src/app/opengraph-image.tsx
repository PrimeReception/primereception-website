import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Prime Reception — AI Receptionist for Small Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A1A2E",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo circle */}
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "#2DD4A8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M16 19.5 C16 18.1 17.1 17 18.5 17 L20 17 C20.6 17 21 17.4 21 18 L21 20 C21 20.6 20.6 21 20 21 L19 21 C18.5 22 18.5 23.5 19.5 24.5 L22.5 27.5 C23.5 28.5 25 28.5 26 28 L26 27 C26 26.4 26.4 26 27 26 L29 26 C29.6 26 30 26.4 30 27 L30 28.5 C30 29.9 28.9 31 27.5 31 L26 31 C21.6 31 16 25.4 16 21 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Title */}
        <div style={{ display: "flex", fontSize: 56, fontWeight: 800 }}>
          <span style={{ color: "white" }}>Prime</span>
          <span style={{ color: "#2DD4A8" }}>Reception</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "#9CA3AF",
            marginTop: 16,
          }}
        >
          Your AI Receptionist. Always On. Never Misses a Call.
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            marginTop: 48,
            backgroundColor: "#2DD4A8",
            borderRadius: 8,
            padding: "14px 40px",
            fontSize: 20,
            fontWeight: 700,
            color: "white",
          }}
        >
          Book Your Free Demo
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: 16,
            color: "#6B7280",
            marginTop: 32,
          }}
        >
          primereception.com
        </div>
      </div>
    ),
    { ...size }
  );
}
