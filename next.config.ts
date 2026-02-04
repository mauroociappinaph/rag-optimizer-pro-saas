import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental', // Habilita Partial Prerendering de forma incremental
  },
};

export default nextConfig;
