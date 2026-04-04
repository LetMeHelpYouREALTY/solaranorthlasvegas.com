import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Solara new construction — North Las Vegas";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function SolaraOpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #1e293b 0%, #0f766e 50%, #134e4a 100%)",
        color: "#f0fdfa",
        padding: 48,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ fontSize: 52, fontWeight: 700, textAlign: "center", lineHeight: 1.15 }}>
        Solara · North Las Vegas
      </div>
      <div
        style={{
          marginTop: 18,
          fontSize: 26,
          fontWeight: 500,
          opacity: 0.9,
          textAlign: "center",
          maxWidth: 920,
          lineHeight: 1.4,
        }}
      >
        Lennar new-home townhomes — verify pricing on Lennar.com
      </div>
    </div>,
    { ...size },
  );
}
