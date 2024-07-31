import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.casateconmigoecu.com/",
      lastModified: new Date("2024-07-13"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.casateconmigoecu.com/shop/",
      lastModified: new Date("2024-07-13"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.casateconmigoecu.com/shop/cintillos",
      lastModified: new Date("2024-07-13"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.casateconmigoecu.com/shop/compromiso",
      lastModified: new Date("2024-07-13"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.casateconmigoecu.com/shop/matrimonio",
      lastModified: new Date("2024-07-13"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.casateconmigoecu.com/shop/set",
      lastModified: new Date("2024-07-13"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.casateconmigoecu.com/explicacion",
      lastModified: new Date("2024-07-13"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.casateconmigoecu.com/nosotros",
      lastModified: new Date("2024-07-13"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
