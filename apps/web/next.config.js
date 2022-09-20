const withTM = require('next-transpile-modules')([
    "@monorepo-test/utils"
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true
}

module.exports = withTM(nextConfig);
