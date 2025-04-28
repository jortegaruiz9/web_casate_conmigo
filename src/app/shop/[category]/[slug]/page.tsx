import { Metadata } from "next";
import ProductClient from "./ProductClient";
import { findProductServer } from "./findProductServer";

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const product = await findProductServer(params.category, params.slug); // 👈 ¡Faltaba el await!

  const title = product
    ? `Anillo ${product.model} - Cásate Conmigo`
    : `Anillo ${params.slug} - Cásate Conmigo`;

  const description = product
    ? `Descubre el modelo ${product.model} en nuestra colección de anillos de ${product.category}. Hecho artesanalmente en Ecuador.`
    : `Descubre el modelo ${params.slug} en nuestra colección de anillos de ${params.category}. Hecho artesanalmente en Ecuador.`;

  return {
    title,
    description,
    openGraph: {
      type: "website",
      url: `https://casateconmigo.ec/shop/${params.category}/${params.slug}`,
      title,
      description,
      siteName: "Cásate Conmigo",
      images: [
        {
          url: product
            ? `https://casateconmigo.ec${product.image}`
            : `https://casateconmigo.ec/opengraph-default.jpg`,
          width: 800,
          height: 600,
          alt: product ? product.alt : "Cásate Conmigo - Anillos",
        },
      ],
    },
  };
}

export default function Page({
  params,
}: {
  params: { category: string; slug: string };
}) {
  return <ProductClient params={params} />;
}
