import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['10.228.98.16', '10.217.34.16', '10.253.90.16'],
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
