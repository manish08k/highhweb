import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 180,
  height: 180
};
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0B0E",
          borderRadius: 40
        }}
      >
        <div
          style={{
            width: 66,
            height: 66,
            borderRadius: 16,
            backgroundColor: "#FF8A3D"
          }}
        />
      </div>
    ),
    {
      ...size
    }
  );
}
