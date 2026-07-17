import { ImageResponse } from "next/og";

export const alt = "Chandan Kumar Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#F7F8FB",
          color: "#15171C",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            borderRadius: 24,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: 56,
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "#15171C",
                borderRadius: 999,
                color: "#FFFFFF",
                display: "flex",
                fontSize: 28,
                fontWeight: 800,
                height: 76,
                justifyContent: "center",
                width: 76,
              }}
            >
              CK
            </div>
            <div style={{ color: "#2458FF", fontSize: 24, fontWeight: 800 }}>
              Portfolio
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.02 }}>
              Chandan Kumar
            </div>
            <div
              style={{
                color: "#5E6673",
                fontSize: 34,
                fontWeight: 500,
                lineHeight: 1.25,
                maxWidth: 820,
              }}
            >
              Web, AI, and IoT experiences built with product thinking.
            </div>
          </div>

          <div
            style={{
              color: "#5E6673",
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              gap: 28,
            }}
          >
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>AI</span>
            <span>IoT</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
