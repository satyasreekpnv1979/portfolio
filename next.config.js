/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  devIndicators: {
    position: 'bottom-right',
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY || '',
  },
}

module.exports = nextConfig 