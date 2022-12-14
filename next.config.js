/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "unsplash.com",
      "images.pexels.com",
      "assets.imgix.net",
      "i.ytimg.com",
      "yt3.ggpht.com",
    ],
  },
};
module.exports = nextConfig;
