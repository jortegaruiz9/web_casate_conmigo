// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap.xml",
      },
      {
        source: "/robots.txt",
        destination: "/robots.txt",
      },
    ];
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
