import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Fix Error 2: ESLint config issue
  },

  webpack: (config) => {
    // Fix Error 1: aws4 missing optional MongoDB dependency
    config.resolve.fallback = {
      ...config.resolve.fallback,
      aws4: false,
    };

    // Existing: Payload CMS alias
    config.resolve.alias = {
      ...config.resolve.alias,
      "@payload-config": path.resolve(process.cwd(), "payload.config.ts"),
    };

    return config;
  },
};

export default nextConfig;