import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "HIGHH — Build studio for software products, AI agents, and automations";
export const size = {
  width: 1200,
  height: 630
};
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
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#0A0B0E",
          backgroundImage:
            "radial-gradient(circle at 78% 22%, rgba(75,76,240,0.35), transparent 55%), radial-gradient(circle at 12% 85%, rgba(255,138,61,0.22), transparent 50%)",
          padding: "88px",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: "#16171c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "#FF8A3D"
              }}
            />
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-0.02em"
            }}
          >
            HIGHH
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            maxWidth: 980
          }}
        >
          We build the software your team stops waiting on.
        </div>

        <div
          style={{
            marginTop: 32,
            color: "#9aa1ae",
            fontSize: 28,
            lineHeight: 1.4,
            maxWidth: 820
          }}
        >
          Products, AI agents, and automations — designed and shipped by a
          build studio.
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
