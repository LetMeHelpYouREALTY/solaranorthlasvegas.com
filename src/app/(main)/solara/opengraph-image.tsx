import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Dr. Jan Duffy — North Las Vegas REALTOR, new construction guidance";

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
        background: "linear-gradient(148deg, #0b0b0f 0%, #231c0d 45%, #5c4818 100%)",
        color: "#f8f5ec",
        padding: 48,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ fontSize: 48, fontWeight: 700, textAlign: "center", lineHeight: 1.2 }}>
        Dr. Jan Duffy — North Las Vegas REALTOR®
      </div>
      <div
        style={{
          marginTop: 16,
          width: 120,
          height: 4,
          borderRadius: 999,
          background: "#c9a227",
        }}
      />
      <div
        style={{
          marginTop: 20,
          fontSize: 28,
          fontWeight: 500,
          opacity: 0.92,
          textAlign: "center",
          maxWidth: 920,
          lineHeight: 1.4,
        }}
      >
        New construction &amp; resale guidance — including the Solara area
      </div>
    </div>,
    { ...size },
  );
}
