import type { NextConfig } from "next";

import { deviceSizes } from "./device-sizes";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "picsum.photos" },
    ],
    deviceSizes: deviceSizes as unknown as number[],
  },
};

export default nextConfig;
