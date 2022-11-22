/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: [
      "@monorepo-test/api",
    ],
  },
}

module.exports = nextConfig;
