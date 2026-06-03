import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Allows the placeholder
      },
    ],
  },
  reactCompiler: true,
};


export default nextConfig;
