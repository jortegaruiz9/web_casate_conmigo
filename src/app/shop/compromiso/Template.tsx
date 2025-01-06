"use client";

import Button from "@/app/components/Button";
import Card from "@/app/components/card/Card";
import InstructionColors from "@/app/components/InstructionColors";
import { gtmPageView } from "@/app/lib/gtm";
import { gaPageView } from "@/app/lib/ga";
import { useEffect } from "react";
import Image from "next/image";

const rings = [
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-001/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-001/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-001/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nuhTyt3VL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-001",
    model: "AC-001",
    color: "amarillo",
    grabado: false,
    grams: 2,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-002/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-002/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-002/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nulGlNoOf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-002",
    model: "AC-002",
    color: "amarillo",
    grabado: false,
    grams: 2,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-003/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-003/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-003/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nuo-MtYtm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-003",
    model: "AC-003",
    color: "amarillo",
    grabado: false,
    grams: 2,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-004/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-004/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-004/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nutkztKzi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-004",
    model: "AC-004",
    color: "amarillo",
    grabado: false,
    grams: 2,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-005/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-005/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-005/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nwanjt8-d/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-005",
    model: "AC-005",
    color: "rosado",
    grabado: false,
    grams: 3,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-006/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-006/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-006/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nwfvZNn6m/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-006",
    model: "AC-006",
    color: "rosado",
    grabado: false,
    grams: 3,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-007/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-007/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-007/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nwjD5Nk32/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-007",
    model: "AC-007",
    color: "rosado",
    grabado: false,
    grams: 3,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-008/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-008/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-008/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nyg0tNs6d/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-008",
    model: "AC-008",
    color: "amarillo",
    grabado: false,
    grams: 4,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-009/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-009/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-009/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nylUnt_nI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-009",
    model: "AC-009",
    color: "amarillo",
    grabado: false,
    grams: 4,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-010/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-010/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-010/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nyrXcNntS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-010",
    model: "AC-010",
    color: "amarillo",
    grabado: false,
    grams: 4,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-011/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-011/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-011/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nywy8t1Ea/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-011",
    model: "AC-011",
    color: "rosado",
    grabado: false,
    grams: 4,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-012/promo.jpg",
    imageSilver: "/modelos/compromiso/ac-012/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-012/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nyz48NWoT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-012",
    model: "AC-012",
    color: "amarillo",
    grabado: false,
    grams: 4,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-013/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-013/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-013/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8ny2i0N9Vz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-013",
    model: "AC-013",
    color: "amarillo",
    grabado: false,
    grams: 4,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-014/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-014/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-014/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n2vqwtfkC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-014",
    model: "AC-014",
    color: "amarillo",
    grabado: false,
    grams: 5,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-015/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-015/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-015/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n2023t903/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-015",
    model: "AC-015",
    color: "amarillo",
    grabado: false,
    grams: 5,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-016/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-016/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-016/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n240GtSWQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-016",
    model: "AC-016",
    color: "amarillo",
    grabado: false,
    grams: 5,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-017/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-017/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-017/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n3CJlNT3G/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-017",
    model: "AC-017",
    color: "amarillo",
    grabado: false,
    grams: 5,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-018/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-018/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-018/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n3HQatgOf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-018",
    model: "AC-018",
    color: "rosado",
    grabado: false,
    grams: 5,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-019/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-019/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-019/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n3QTjtu_Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-019",
    model: "AC-019",
    color: "amarillo",
    grabado: false,
    grams: 5,
  },
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-020/amarillo.jpg",
    imageSilver: "/modelos/compromiso/ac-020/blanco.jpg",
    imageRose: "/modelos/compromiso/ac-020/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n6SC7NqDF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-020",
    model: "AC-020",
    color: "blanco",
    grabado: false,
    grams: 6,
  },
];
export default function ShopTemplate() {
  useEffect(() => {
    const props = {
      page_title: "compromiso",
    };
    gtmPageView(props);
    gaPageView(window.location.href);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Button />
      <div className="mb-10">
        <InstructionColors />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {rings.map((model, index) => {
          return <Card key={index} product={model} />;
        })}
      </div>
      <h1 className="text-myZinc text-lg mt-10">Anillos de compromiso</h1>
      <Button />
    </div>
  );
}
