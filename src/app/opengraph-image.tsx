import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Gowtham Kishore | Engineering Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          backgroundColor: "#000000",
        }}
      >
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700 }}>
          <span style={{ color: "#ffffff" }}>Gowtham&nbsp;</span>
          <span style={{ color: "#958cfa" }}>Kishore</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 32,
            color: "#9b9b9b",
          }}
        >
          Founder, Gixtronix Technologies
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 26,
            color: "#f1fa8c",
          }}
        >
          Test &amp; Measurement · IIoT · Embedded Systems
        </div>
      </div>
    ),
    { ...size }
  );
}
