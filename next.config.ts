import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "flagcdn.com" },
      { hostname: "unpkg.com" },
    ],
  },
};

export default nextConfig;
