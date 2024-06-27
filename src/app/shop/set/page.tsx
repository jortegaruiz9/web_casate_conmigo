"use client";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import InstructionColors from "@/app/components/InstructionColors";

const rings = [
  {
    category: "set",
    image: "/modelos/set/as-001.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n-Y2Ptx7b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-001",
    model: "AS-001",
    color: "amarillo",
    grabado: true,
    grams: 6,
  },
  {
    category: "set",
    image: "/modelos/set/as-002.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o2LUfOGWH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-002",
    model: "AS-002",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "set",
    image: "/modelos/set/as-003.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o2XlDOgiu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-003",
    model: "AS-003",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "set",
    image: "/modelos/set/as-004.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o2bJauOQr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-004",
    model: "AS-004",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "set",
    image: "/modelos/set/as-005.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNabqOaur/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-005",
    model: "AS-005",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "set",
    image: "/modelos/set/as-006.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNdX9ON1L/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-006",
    model: "AS-006",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "set",
    image: "/modelos/set/as-007.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNf68uvE4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-007",
    model: "AS-007",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "set",
    image: "/modelos/set/as-008.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8rsDATOg57/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-008",
    model: "AS-008",
    color: "amarillo",
    grabado: true,
    grams: 15,
  },
  {
    category: "set",
    image: "/modelos/set/as-009.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8rtfobO8nU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-009",
    model: "AS-009",
    color: "amarillo",
    grabado: true,
    grams: 16,
  },
  {
    category: "set",
    image: "/modelos/set/as-010.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8rtlJ1uCJq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-010",
    model: "AS-010",
    color: "amarillo",
    grabado: true,
    grams: 16,
  },
  {
    category: "set",
    image: "/modelos/set/as-011.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8r9Cqyutgj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-011",
    model: "AS-011",
    color: "amarillo",
    grabado: true,
    grams: 18,
  },
  {
    category: "set",
    image: "/modelos/set/as-012.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8r9HyBuwsk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-012",
    model: "AS-012",
    color: "amarillo",
    grabado: true,
    grams: 18,
  },
  {
    category: "set",
    image: "/modelos/set/as-013.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8sA0c4ur-Y/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-013",
    model: "AS-013",
    color: "amarillo",
    grabado: true,
    grams: 20,
  },
  {
    category: "set",
    image: "/modelos/set/as-014.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8sIgzJPLD8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-014",
    model: "AS-014",
    color: "amarillo",
    grabado: true,
    grams: 22,
  },
  {
    category: "set",
    image: "/modelos/set/as-015.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8sIjC9vZBy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-015",
    model: "AS-015",
    color: "amarillo",
    grabado: true,
    grams: 22,
  },
];
export default function compromiso() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Button />
      <div className="mb-10">
        <InstructionColors />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {rings.map((model, index) => {
          return <Card key={index} product={model} />;
        })}
      </div>
      <h1 className="text-zinc text-lg mt-10">
        Conoce nuestros set de anillos
      </h1>
      <Button />
    </div>
  );
}
