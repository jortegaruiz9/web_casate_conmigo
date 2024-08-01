/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.casateconmigoecu.com",
  generateRobotsTxt: true, // Opcional, para generar robots.txt
  sitemapSize: 5000, // Tamaño del sitemap antes de dividirlo
  exclude: [], // Lista de rutas a excluir, si es necesario
  additionalPaths: async (config) => [
    { loc: "/" },
    { loc: "/shop" },
    { loc: "/explicacion" },
    { loc: "/nosotros" },
    { loc: "/shop/cintillos" },
    { loc: "/shop/compromiso" },
    { loc: "/shop/matrimonio" },
    { loc: "/shop/set" },
  ],
  transform: async (config, path) => {
    return {
      loc: path, // La URL completa
      changefreq: "daily", // Frecuencia de cambio
      priority: 0.7, // Prioridad en el sitemap
      lastmod: new Date().toISOString(), // Fecha de la última modificación
    };
  },
};
