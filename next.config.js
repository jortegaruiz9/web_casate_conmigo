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
};

module.exports = nextConfig;
