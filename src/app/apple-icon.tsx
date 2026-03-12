import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4338ca 0%, #4f46e5 50%, #6366f1 100%)",
          borderRadius: 36,
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 32 32"
          fill="none"
        >
          <rect x="4" y="3" width="24" height="26" rx="2" fill="white" />
          <rect x="4" y="3" width="3" height="26" rx="1" fill="rgba(255,255,255,0.7)" />
          <rect x="8" y="5" width="18" height="22" rx="1" fill="#fafafa" />
          <rect x="15.5" y="8" width="2" height="12" rx="0.5" fill="#4f46e5" />
          <rect x="11" y="12.5" width="11" height="2" rx="0.5" fill="#4f46e5" />
          <line x1="11" y1="22" x2="22" y2="22" stroke="#d4d4d8" strokeWidth="0.8" />
          <line x1="11" y1="24" x2="19" y2="24" stroke="#d4d4d8" strokeWidth="0.8" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
