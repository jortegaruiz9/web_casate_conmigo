/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://casateconmigo.ec",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/api/*", "/admin/*", "/_next/*"],
  additionalPaths: async (config) => [
    // Páginas principales
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
    // Categorías
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
      loc: "/shop/promesa",
      priority: 0.8,
      changefreq: "daily",
    },
    {
      loc: "/shop/grado",
      priority: 0.8,
      changefreq: "daily",
    },
    {
      loc: "/shop/set",
      priority: 0.8,
      changefreq: "daily",
    },
    // Páginas informativas
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
    // Cintillos dinámicos
    ...[
      "ACI-001",
      "ACI-002",
      "ACI-003",
      "ACI-004",
      "ACI-005",
      "ACI-006",
      "ACI-007",
      "ACI-008",
      "ACI-009",
    ].map((model) => ({
      loc: `/shop/${model}`,
      priority: 0.6,
      changefreq: "weekly",
    })),
    // Compromiso dinámicos
    ...[
      "AC-001",
      "AC-002",
      "AC-003",
      "AC-004",
      "AC-005",
      "AC-006",
      "AC-007",
      "AC-008",
      "AC-009",
      "AC-010",
      "AC-011",
      "AC-012",
      "AC-013",
      "AC-014",
      "AC-015",
      "AC-016",
      "AC-017",
      "AC-019",
      "AC-020",
    ].map((model) => ({
      loc: `/shop/${model}`,
      priority: 0.6,
      changefreq: "weekly",
    })),
    // Promesa dinámicos
    ...[
      "AP-001",
      "AP-002",
      "AP-003",
      "AP-004",
      "AP-005",
      "AP-006",
      "AP-007",
      "AP-008",
      "AP-009",
      "AP-010",
      "AP-011",
      "AP-012",
    ].map((model) => ({
      loc: `/shop/${model}`,
      priority: 0.6,
      changefreq: "weekly",
    })),
    // Matrimonio dinámicos
    ...[
      "AM-001",
      "AM-003",
      "AM-006",
      "AM-007",
      "AM-008",
      "AM-009",
      "AM-010",
      "AM-012",
      "AM-013",
      "AM-014",
      "AM-015",
      "AM-016",
      "AM-017",
      "AM-018",
      "AM-019",
      "AM-021",
      "AM-022",
      "AM-023",
      "AM-024",
      "AM-025",
      "AM-026",
      "AM-028",
      "AM-029",
      "AM-030",
      "AM-031",
      "AM-033",
      "AM-034",
      "AM-035",
      "AM-036",
      "AM-037",
      "AM-038",
      "AM-039",
      "AM-040",
      "AM-042",
      "AM-043",
      "AM-044",
      "AM-045",
      "AM-046",
      "AM-047",
      "AM-048",
      "AM-049",
      "AM-050",
      "AM-051",
      "AM-052",
      "AM-053",
      "AM-054",
      "AM-055",
      "AM-056",
    ].map((model) => ({
      loc: `/shop/${model}`,
      priority: 0.6,
      changefreq: "weekly",
    })),
    // Set dinámicos
    ...[
      "AS-001",
      "AS-002",
      "AS-003",
      "AS-004",
      "AS-005",
      "AS-006",
      "AS-007",
      "AS-008",
      "AS-009",
      "AS-010",
      "AS-011",
      "AS-012",
      "AS-013",
      "AS-014",
      "AS-015",
    ].map((model) => ({
      loc: `/shop/${model}`,
      priority: 0.6,
      changefreq: "weekly",
    })),
    // Grado dinámicos
    ...[
      "AG-001",
      "AG-002",
      "AG-003",
      "AG-004",
      "AG-005",
      "AG-006",
      "AG-007",
      "AG-008",
      "AG-009",
      "AG-010",
      "AG-011",
      "AG-012",
      "AG-013",
      "AG-014",
      "AG-015",
      "AG-016",
    ].map((model) => ({
      loc: `/shop/${model}`,
      priority: 0.6,
      changefreq: "weekly",
    })),
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
