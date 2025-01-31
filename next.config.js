// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
