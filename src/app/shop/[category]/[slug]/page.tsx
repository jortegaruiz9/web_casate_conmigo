import { Metadata } from "next";
import ProductClient from "./ProductClient";
import { findProductServer } from "./findProductServer";

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await findProductServer(resolvedParams.category, resolvedParams.slug);

  const title = product
    ? `Anillo ${product.model} - Cásate Conmigo`
    : `Anillo ${resolvedParams.slug} - Cásate Conmigo`;

  const description = product
    ? `Descubre el modelo ${product.model} en nuestra colección de anillos de ${product.category}. Hecho artesanalmente en Ecuador.`
    : `Descubre el modelo ${resolvedParams.slug} en nuestra colección de anillos de ${resolvedParams.category}. Hecho artesanalmente en Ecuador.`;

  return {
    title,
    description,
    openGraph: {
      type: "website",
      url: `https://casateconmigo.ec/shop/${resolvedParams.category}/${resolvedParams.slug}`,
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

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  return <ProductClient params={{ category, slug }} />;
}
