import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/media/**',
      },
      // ✅ Fix 3: Add your Vercel domain for production images
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_SERVER_URL
          ? new URL(process.env.NEXT_PUBLIC_SERVER_URL).hostname
          : 'your-vercel-domain.vercel.app',
        pathname: '/api/media/**',
      },
    ],
  },

  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      aws4: false,
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      "@payload-config": path.resolve(process.cwd(), "payload.config.ts"),
    };

    return config;
  },
};

export default nextConfig;