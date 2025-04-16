/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Enable compression
  compress: true,

  // Experimental features
  experimental: {
    // Add any experimental features here
  },
};

module.exports = nextConfig;
