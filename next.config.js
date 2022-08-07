/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["unsplash.com"],
  },
};
module.exports = nextConfig;
