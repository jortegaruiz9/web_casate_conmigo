"use client";
import Button from "@/app/components/Button";
import Link from "next/link";
import Card from "@/app/components/card/Card";
import { gtmPageView } from "@/app/lib/gtm";
import { gaPageView } from "@/app/lib/ga";
import { useEffect } from "react";
import { CategoryType } from "@/app/types/category";

export const rings = [
  {
    category: "cintillos" as CategoryType,
    image: "/modelos/cintillos/aci-001/amarillo.jpg",
    imageSilver: "/modelos/cintillos/aci-001/blanco.jpg",
    imageRose: "/modelos/cintillos/aci-001/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoiOyjvc76/?igsh=MnFhemtpNWE4OHlj",
    alt: "imagen modelo ACI-001",
    model: "ACI-001",
    color: "amarillo",
    grabado: false,
    grams: 2,
    garantia: true,
  },
  {
    category: "cintillos" as CategoryType,
    image: "/modelos/cintillos/aci-002/amarillo.jpg",
    imageSilver: "/modelos/cintillos/aci-002/blanco.jpg",
    imageRose: "/modelos/cintillos/aci-002/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHowHDnvo-W/?igsh=MWxlZjh4b25lZzlyaA==",
    alt: "imagen modelo ACI-002",
    model: "ACI-002",
    color: "amarillo",
    grabado: true,
    grams: 2,
    garantia: true,
  },
  {
    category: "cintillos" as CategoryType,
    image: "/modelos/cintillos/aci-003/amarillo.jpg",
    imageSilver: "/modelos/cintillos/aci-003/blanco.jpg",
    imageRose: "/modelos/cintillos/aci-003/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHowNcfvNOm/?igsh=c2tqbHJ6dWdraGly",
    alt: "imagen modelo ACI-003",
    model: "ACI-003",
    color: "amarillo",
    grabado: true,
    grams: 2,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "cintillos" as CategoryType,
    image: "/modelos/cintillos/aci-004/amarillo.jpg",
    imageSilver: "/modelos/cintillos/aci-004/blanco.jpg",
    imageRose: "/modelos/cintillos/aci-004/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHowWIVPw40/?igsh=dHB4bWp6enU3dHR0",
    alt: "imagen modelo ACI-004",
    model: "ACI-004",
    color: "amarillo",
    grabado: true,
    grams: 2,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "cintillos" as CategoryType,
    image: "/modelos/cintillos/aci-005/amarillo.jpg",
    imageSilver: "/modelos/cintillos/aci-005/blanco.jpg",
    imageRose: "/modelos/cintillos/aci-005/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoxS-tvcZH/?igsh=MTUwN3g1YjF2cXBwbg==",
    alt: "imagen modelo ACI-005",
    model: "ACI-005",
    color: "amarillo",
    grabado: true,
    grams: 3,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "cintillos" as CategoryType,
    image: "/modelos/cintillos/aci-006/amarillo.jpg",
    imageSilver: "/modelos/cintillos/aci-006/blanco.jpg",
    imageRose: "/modelos/cintillos/aci-006/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoxWOYv3xt/?igsh=MTZ3OXQ1eDM1bHZvbw==",
    alt: "imagen modelo ACI-006",
    model: "ACI-006",
    color: "amarillo",
    grabado: true,
    grams: 4,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "cintillos" as CategoryType,
    image: "/modelos/cintillos/aci-007/amarillo.jpg",
    imageSilver: "/modelos/cintillos/aci-007/blanco.jpg",
    imageRose: "/modelos/cintillos/aci-007/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHowgoRPKxz/?igsh=MTJhaXplNjN5eWs2aQ==",
    alt: "imagen modelo ACI-007",
    model: "ACI-007",
    color: "amarillo",
    grabado: true,
    grams: 4,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "cintillos" as CategoryType,
    image: "/modelos/cintillos/aci-008/amarillo.jpg",
    imageSilver: "/modelos/cintillos/aci-008/blanco.jpg",
    imageRose: "/modelos/cintillos/aci-008/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHowtTmvqOw/?igsh=MTRjcTN1cnR1OWdtYQ==",
    alt: "imagen modelo ACI-008",
    model: "ACI-008",
    color: "amarillo",
    grabado: true,
    grams: 4,
    garantia: true,
    bestSeller: true,
  },
  {
    category: "cintillos" as CategoryType,
    image: "/modelos/cintillos/aci-009/amarillo.jpg",
    imageSilver: "/modelos/cintillos/aci-009/blanco.jpg",
    imageRose: "/modelos/cintillos/aci-009/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHowz4rPzf6/?igsh=cmJpdXEzajM2b3hy",
    alt: "imagen modelo ACI-009",
    model: "ACI-009",
    color: "amarillo",
    grabado: true,
    grams: 4,
    garantia: true,
    bestSeller: false,
  },
];

export default function ShopTemplate() {
  useEffect(() => {
    const props = {
      page_title: "cintillo",
    };
    gtmPageView(props);
    gaPageView(window.location.href);
  }, []);

  const categoryTitle = "Cintillos";

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
        Nuestros anillos de Cintillo y Churumbelas
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
