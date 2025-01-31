import { MetadataRoute } from 'next'
import { rings as compromiseRings } from "./shop/compromiso/Template";
import { rings as marriageRings } from "./shop/matrimonio/Template";
import { rings as cintilloRings } from "./shop/cintillos/Template";
import { rings as setRings } from "./shop/set/Template";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.casateconmigo.ec'
  
  const staticPages = [
    '',
    'shop',
    'explicacion',
    'nosotros',
  ].map(route => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFreq: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  const categoryPages = [
    'shop/cintillos',
    'shop/compromiso',
    'shop/matrimonio',
    'shop/set',
  ].map(route => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFreq: 'weekly',
    priority: 0.7,
  }))

  const allProducts = [
    ...compromiseRings,
    ...marriageRings,
    ...cintilloRings,
    ...setRings,
  ]

  const productPages = allProducts.map(product => ({
    url: `${baseUrl}/shop/${product.model.toLowerCase()}`,
    lastModified: new Date(),
    changeFreq: 'weekly',
    priority: 0.6,
  }))

  return [...staticPages, ...categoryPages, ...productPages]
} 