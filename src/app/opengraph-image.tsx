import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bible Is The Answer — Catholic Bible Companion";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #312e81 0%, #4f46e5 50%, #6366f1 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.08,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Bible icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 20,
            backgroundColor: "rgba(255,255,255,0.15)",
            marginBottom: 32,
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect x="4" y="3" width="24" height="26" rx="2" fill="white" />
            <rect x="4" y="3" width="3" height="26" rx="1" fill="rgba(255,255,255,0.7)" />
            <rect x="15.5" y="8" width="2" height="12" rx="0.5" fill="#4f46e5" />
            <rect x="11" y="12.5" width="11" height="2" rx="0.5" fill="#4f46e5" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Bible Is The Answer
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.8)",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Daily Catholic Mass Readings, Liturgical Calendar, Saints & Reflections
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 16,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
          }}
        >
          bibleistheanswer.com
        </div>
      </div>
    ),
    { ...size }
  );
}
