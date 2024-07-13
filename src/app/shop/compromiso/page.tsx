import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import InstructionColors from "@/app/components/InstructionColors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compromiso - Cásate Conmigo",
  description: "anillos de compromiso",
};

const rings = [
  {
    category: "compromiso",
    image: "/modelos/compromiso/ac-001.jpg",
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
    image: "/modelos/compromiso/ac-002.jpg",
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
    image: "/modelos/compromiso/ac-003.jpg",
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
    image: "/modelos/compromiso/ac-004.jpg",
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
    image: "/modelos/compromiso/ac-005.jpg",
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
    image: "/modelos/compromiso/ac-006.jpg",
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
    image: "/modelos/compromiso/ac-007.jpg",
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
    image: "/modelos/compromiso/ac-008.jpg",
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
    image: "/modelos/compromiso/ac-009.jpg",
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
    image: "/modelos/compromiso/ac-010.jpg",
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
    image: "/modelos/compromiso/ac-011.jpg",
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
    image: "/modelos/compromiso/ac-012P.jpg",
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
    image: "/modelos/compromiso/ac-013.jpg",
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
    image: "/modelos/compromiso/ac-014.jpg",
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
    image: "/modelos/compromiso/ac-015.jpg",
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
    image: "/modelos/compromiso/ac-016.jpg",
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
    image: "/modelos/compromiso/ac-017.jpg",
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
    image: "/modelos/compromiso/ac-018.jpg",
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
    image: "/modelos/compromiso/ac-019.jpg",
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
    image: "/modelos/compromiso/ac-020.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n6SC7NqDF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AC-020",
    model: "AC-020",
    color: "blanco",
    grabado: false,
    grams: 6,
  },
];
export default function compromiso() {
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
      <h1 className="text-myZinc text-lg mt-10">anillos de compromiso</h1>
      <Button />
    </div>
  );
}
