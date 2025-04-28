"use client";

import Button from "@/app/components/Button";
import Card from "@/app/components/card/Card";
import Link from "next/link";
import { gtmPageView } from "@/app/lib/gtm";
import { gaPageView } from "@/app/lib/ga";
import { useEffect } from "react";
import { CategoryType } from "@/app/types/category";

export const rings = [
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-001/amarillo.jpg",
    imageSilver: "/modelos/set/as-001/blanco.jpg",
    imageRose: "/modelos/set/as-001/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n-Y2Ptx7b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-001",
    model: "AS-001",
    color: "amarillo",
    grabado: true,
    grams: 6,
  },
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-002/amarillo.jpg",
    imageSilver: "/modelos/set/as-002/blanco.jpg",
    imageRose: "/modelos/set/as-002/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o2LUfOGWH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-002",
    model: "AS-002",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-003/amarillo.jpg",
    imageSilver: "/modelos/set/as-003/blanco.jpg",
    imageRose: "/modelos/set/as-003/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o2XlDOgiu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-003",
    model: "AS-003",
    color: "amarillo",
    grabado: true,
    grams: 12,
    bestSeller: true,
  },
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-004/amarillo.jpg",
    imageSilver: "/modelos/set/as-004/blanco.jpg",
    imageRose: "/modelos/set/as-004/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o2bJauOQr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-004",
    model: "AS-004",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-005/amarillo.jpg",
    imageSilver: "/modelos/set/as-005/blanco.jpg",
    imageRose: "/modelos/set/as-005/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNabqOaur/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-005",
    model: "AS-005",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-006/amarillo.jpg",
    imageSilver: "/modelos/set/as-006/blanco.jpg",
    imageRose: "/modelos/set/as-006/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNdX9ON1L/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-006",
    model: "AS-006",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-007/amarillo.jpg",
    imageSilver: "/modelos/set/as-007/blanco.jpg",
    imageRose: "/modelos/set/as-007/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNf68uvE4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-007",
    model: "AS-007",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-008/amarillo.jpg",
    imageSilver: "/modelos/set/as-008/blanco.jpg",
    imageRose: "/modelos/set/as-008/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8rsDATOg57/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-008",
    model: "AS-008",
    color: "amarillo",
    grabado: true,
    grams: 15,
  },
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-009/amarillo.jpg",
    imageSilver: "/modelos/set/as-009/blanco.jpg",
    imageRose: "/modelos/set/as-009/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8rtfobO8nU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-009",
    model: "AS-009",
    color: "amarillo",
    grabado: true,
    grams: 16,
  },
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-010/amarillo.jpg",
    imageSilver: "/modelos/set/as-010/blanco.jpg",
    imageRose: "/modelos/set/as-010/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8rtlJ1uCJq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-010",
    model: "AS-010",
    color: "amarillo",
    grabado: true,
    grams: 16,
  },
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-011/amarillo.jpg",
    imageSilver: "/modelos/set/as-011/blanco.jpg",
    imageRose: "/modelos/set/as-011/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8r9Cqyutgj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-011",
    model: "AS-011",
    color: "amarillo",
    grabado: true,
    grams: 18,
  },
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-012/amarillo.jpg",
    imageSilver: "/modelos/set/as-012/blanco.jpg",
    imageRose: "/modelos/set/as-012/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8r9HyBuwsk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-012",
    model: "AS-012",
    color: "amarillo",
    grabado: true,
    grams: 18,
  },
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-013/amarillo.jpg",
    imageSilver: "/modelos/set/as-013/blanco.jpg",
    imageRose: "/modelos/set/as-013/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8sA0c4ur-Y/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-013",
    model: "AS-013",
    color: "amarillo",
    grabado: true,
    grams: 20,
  },
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-014/amarillo.jpg",
    imageSilver: "/modelos/set/as-014/blanco.jpg",
    imageRose: "/modelos/set/as-014/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8sIgzJPLD8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-014",
    model: "AS-014",
    color: "amarillo",
    grabado: true,
    grams: 22,
  },
  {
    category: "set" as CategoryType,
    image: "/modelos/set/as-015/amarillo.jpg",
    imageSilver: "/modelos/set/as-015/blanco.jpg",
    imageRose: "/modelos/set/as-015/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8sIjC9vZBy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-015",
    model: "AS-015",
    color: "amarillo",
    grabado: true,
    grams: 22,
  },
];

export default function ShopTemplate() {
  useEffect(() => {
    const props = {
      page_title: "anillos de boda",
    };
    gtmPageView(props);
    gaPageView(window.location.href);
  }, []);

  const categoryTitle = "Set";

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Breadcrumbs */}
      <nav className="mt-8 mb-4 w-full pl-4 md:pl-36">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/shop" className="text-zinc-600 hover:text-zinc-900">
              Catálogo
            </Link>
          </li>
          <li>
            <span className="mx-2 text-zinc-400">/</span>
            <span className="text-zinc-900">{categoryTitle}</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-black mb-6 font-semibold">
        Nuestros anillos de Compromiso + Matrimonio
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {rings.map((model, index) => {
          return <Card key={index} product={model} />;
        })}
      </div>

      <Button />
    </div>
  );
}
