/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        transpilePackages: [
            "@monorepo-test/api",
            "@monorepo-test/react",
            "@monorepo-test/utils"
        ],
    },
}

module.exports = nextConfig;
