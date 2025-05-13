const products = require("./src/app/data/products");
const posts = require("./src/app/data/sitemap-posts");

const generateShopPaths = (category, slugs) =>
  slugs.map((slug) => ({
    loc: `/shop/${category}/${slug}`,
    priority: 0.6,
    changefreq: "weekly",
  }));

module.exports = {
  siteUrl: "https://www.casateconmigo.ec",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/api/*", "/admin/*", "/_next/*"],

  additionalPaths: async (config) => [
    // Páginas principales e informativas
    { loc: "/", priority: 1.0, changefreq: "daily" },
    { loc: "/shop", priority: 0.9, changefreq: "daily" },
    { loc: "/shop/cintillos", priority: 0.8, changefreq: "daily" },
    { loc: "/shop/compromiso", priority: 0.8, changefreq: "daily" },
    { loc: "/shop/matrimonio", priority: 0.8, changefreq: "daily" },
    { loc: "/shop/promesa", priority: 0.8, changefreq: "daily" },
    { loc: "/shop/grado", priority: 0.8, changefreq: "daily" },
    { loc: "/shop/set", priority: 0.8, changefreq: "daily" },
    { loc: "/articulos", priority: 0.7, changefreq: "weekly" },
    { loc: "/nosotros", priority: 0.7, changefreq: "weekly" },

    // Artículos del blog
    ...posts.map((post) => ({
      loc: `/articulos/${post.slug}`,
      priority: 0.6,
      changefreq: "weekly",
    })),

    // Productos dinámicos
    ...generateShopPaths("cintillos", products.cintillos),
    ...generateShopPaths("compromiso", products.compromiso),
    ...generateShopPaths("promesa", products.promesa),
    ...generateShopPaths("matrimonio", products.matrimonio),
    ...generateShopPaths("set", products.set),
    ...generateShopPaths("grado", products.grado),
  ],

  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = "daily";

    if (path === "/") priority = 1.0;
    if (path.startsWith("/shop")) priority = 0.8;
    if (path.includes("nosotros") || path.includes("articulos")) {
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
