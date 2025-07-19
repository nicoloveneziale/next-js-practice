import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    prr: "incremental"
  }
};

export default nextConfig;
