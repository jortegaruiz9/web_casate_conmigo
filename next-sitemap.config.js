/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://casateconmigo.ec",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/api/*", "/admin/*", "/_next/*"],
  additionalPaths: async (config) => [
    {
      loc: "/",
      priority: 1.0,
      changefreq: "daily",
    },
    {
      loc: "/shop",
      priority: 0.9,
      changefreq: "daily",
    },
    {
      loc: "/shop/cintillos",
      priority: 0.8,
      changefreq: "daily",
    },
    {
      loc: "/shop/compromiso",
      priority: 0.8,
      changefreq: "daily",
    },
    {
      loc: "/shop/matrimonio",
      priority: 0.8,
      changefreq: "daily",
    },
    {
      loc: "/shop/set",
      priority: 0.8,
      changefreq: "daily",
    },
    {
      loc: "/explicacion",
      priority: 0.7,
      changefreq: "weekly",
    },
    {
      loc: "/nosotros",
      priority: 0.7,
      changefreq: "weekly",
    },
  ],
  transform: async (config, path) => {
    // Prioridades personalizadas basadas en la ruta
    let priority = 0.7;
    let changefreq = "daily";

    if (path === "/") priority = 1.0;
    if (path.startsWith("/shop")) priority = 0.8;
    if (path.includes("nosotros") || path.includes("explicacion")) {
      priority = 0.7;
      changefreq = "weekly";
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};
