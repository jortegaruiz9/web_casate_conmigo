import { Metadata } from "next";
import ProductClient from "./ProductClient";

// Metadata básica basada solo en params
export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const title = `Anillo ${params.slug} - Cásate Conmigo`;
  const description = `Descubre el modelo ${params.slug} en nuestra colección de anillos de ${params.category}. Hecho artesanalmente en Ecuador.`;

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
          url: `https://casateconmigo.ec/opengraph-default.jpg`, // (Opcional) Usa una imagen general si quieres
          width: 800,
          height: 600,
          alt: "Cásate Conmigo - Anillos",
        },
      ],
    },
  };
}

// Componente principal
export default function Page({
  params,
}: {
  params: { category: string; slug: string };
}) {
  return <ProductClient params={params} />;
}
