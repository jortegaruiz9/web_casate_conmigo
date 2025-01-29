"use client";
import Button from "@/app/components/Button";
import Card from "@/app/components/card/Card";
import InstructionColors from "@/app/components/InstructionColors";
import { gtmPageView } from "@/app/lib/gtm";
import { gaPageView } from "@/app/lib/ga";
import { useEffect } from "react";
import Image from "next/image";

export const rings = [
  {
    category: "cintillo",
    image: "/modelos/cintillos/aci-001/1.jpg",
    imageSilver: "/modelos/cintillos/aci-001/2.jpg",
    imageRose: "/modelos/cintillos/aci-001/3.jpg",
    linkProduct:
      "https://www.instagram.com/p/C2TBmgNJYbK/?igsh=MTh4cjM1dnZ2ODMxMw==",
    alt: "imagen modelo ACI-001",
    model: "ACI-001",
    color: "amarillo",
    grabado: false,
    grams: 2,
    garantia: true,
  },
  {
    category: "cintillo",
    image: "/modelos/cintillos/aci-002/1.jpg",
    imageSilver: "/modelos/cintillos/aci-002/2.jpg",
    imageRose: "/modelos/cintillos/aci-002/3.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12nqsbpLN7/?igsh=MWEwZTY1eXB6Mm1uYQ==",
    alt: "imagen modelo ACI-002",
    model: "ACI-002",
    color: "amarillo",
    grabado: true,
    grams: 3,
    garantia: true,
  },
  {
    category: "cintillo",
    image: "/modelos/cintillos/aci-003/1.jpg",
    imageSilver: "/modelos/cintillos/aci-003/2.jpg",
    imageRose: "/modelos/cintillos/aci-003/3.jpg",
    linkProduct:
      "https://www.instagram.com/p/C2tJPCCNEXR/?igsh=MTRlYWo2OG4xMXZ4ag==",
    alt: "imagen modelo ACI-003",
    model: "ACI-003",
    color: "amarillo",
    grabado: true,
    grams: 4,
    garantia: true,
    bestSeller: true,
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

  return (
    <div className="flex flex-col items-center justify-center">
      <Button />
      <h1 className="text-myZinc text-lg mb-10 font-bold">
        Anillos de promesa
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
