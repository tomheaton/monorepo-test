const withTM = require('next-transpile-modules')([
    "@monorepo-test/api",
    "@monorepo-test/react",
    "@monorepo-test/utils"
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true
}

module.exports = withTM(nextConfig);
