// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "casateconmigoecu.com",
          },
        ],
        destination: "https://www.casateconmigo.ec/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.casateconmigoecu.com",
          },
        ],
        destination: "https://www.casateconmigo.ec/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
