import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Solara North Las Vegas — Dr. Jan Duffy";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #0f172a 0%, #1e3a8a 55%, #312e81 100%)",
        color: "#f8fafc",
        padding: 48,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ fontSize: 56, fontWeight: 700, textAlign: "center", lineHeight: 1.15 }}>
        Solara North Las Vegas
      </div>
      <div
        style={{
          marginTop: 20,
          fontSize: 28,
          fontWeight: 500,
          opacity: 0.92,
          textAlign: "center",
          maxWidth: 900,
          lineHeight: 1.35,
        }}
      >
        North Las Vegas &amp; Las Vegas Valley real estate · Dr. Jan Duffy
      </div>
    </div>,
    { ...size },
  );
}
