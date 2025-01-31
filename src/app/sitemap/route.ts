import { MetadataRoute } from 'next'

export async function GET(): Promise<Response> {
  const baseUrl = 'https://casateconmigo.ec'
  
  // Importaciones dinámicas
  const { rings: compromiseRings } = await import("../shop/compromiso/Template")
  const { rings: marriageRings } = await import("../shop/matrimonio/Template")
  const { rings: cintilloRings } = await import("../shop/cintillos/Template")
  const { rings: setRings } = await import("../shop/set/Template")
  
  const routes = [
    '',
    '/shop',
    '/shop/cintillos',
    '/shop/compromiso',
    '/shop/matrimonio',
    '/shop/set',
    '/explicacion',
    '/nosotros',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
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
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  const sitemap = [...routes, ...productPages]

  return new Response(JSON.stringify(sitemap), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
} 