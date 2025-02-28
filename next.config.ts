import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  webpack: (config) => {
    config.cache = false; // Matikan cache saat pengembangan
    return config;
  },
};

export default nextConfig;
