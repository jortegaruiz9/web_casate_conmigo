"use client";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import InstructionColors from "@/app/components/InstructionColors";

const rings = [
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-001.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nz9k6NA6_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-001",
    model: "AM-001",
    color: "amarillo",
    grabado: false,
    grams: 4,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-002.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n0AUYNAKs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-002",
    model: "AM-002",
    color: "blanco",
    grabado: false,
    grams: 4,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-003.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n0CJmtyYk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-003",
    model: "AM-003",
    color: "amarillo",
    grabado: false,
    grams: 4,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-004.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n0XNttKIA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-004",
    model: "AM-004",
    color: "blanco",
    grabado: false,
    grams: 4,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-005.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n0Z8Ltiwt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-005",
    model: "AM-005",
    color: "amarillo",
    grabado: false,
    grams: 4,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-006.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n0cuvtL6b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-006",
    model: "AM-006",
    color: "amarillo",
    grabado: false,
    grams: 4,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-007.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n6Xdstnoo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-007",
    model: "AM-007",
    color: "amarillo",
    grabado: false,
    grams: 6,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-008.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n6dTut_5x/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-008",
    model: "AM-008",
    color: "amarillo",
    grabado: false,
    grams: 6,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-009.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n692bt3e1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-009",
    model: "AM-009",
    color: "amarillo",
    grabado: false,
    grams: 6,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-010.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n7BwKNoAC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-010",
    model: "AM-010",
    color: "rosado",
    grabado: false,
    grams: 6,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-011.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n7GUetA5L/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-011",
    model: "AM-011",
    color: "rosado",
    grabado: false,
    grams: 6,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-012.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n7IxWNGka/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-012",
    model: "AM-012",
    color: "blanco",
    grabado: false,
    grams: 6,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-013.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n8V5ht6mF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-013",
    model: "AM-013",
    color: "amarillo",
    grabado: false,
    grams: 7,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-014.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n-d_rtJws/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-014",
    model: "AM-014",
    color: "amarillo",
    grabado: false,
    grams: 8,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-015.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n-iUuNlk3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-015",
    model: "AM-015",
    color: "amarillo",
    grabado: false,
    grams: 8,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-016.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n-pFft0LW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-016",
    model: "AM-016",
    color: "blanco",
    grabado: false,
    grams: 8,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-017.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n-s5Bt5X0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-017",
    model: "AM-017",
    color: "amarillo",
    grabado: false,
    grams: 8,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-018.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n-wfkOyWJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-018",
    model: "AM-018",
    color: "blanco",
    grabado: false,
    grams: 8,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-019.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBApjuijn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-019",
    model: "AM-019",
    color: "amarillo",
    grabado: false,
    grams: 10,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-020.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBGERunyA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-020",
    model: "AM-020",
    color: "rosado",
    grabado: false,
    grams: 10,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-021.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBI5COumF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-021",
    model: "AM-021",
    color: "amarillo",
    grabado: false,
    grams: 10,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-022.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBOmpOOYm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-022",
    model: "AM-022",
    color: "amarillo",
    grabado: false,
    grams: 10,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-023.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBVNHu1Xa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-023",
    model: "AM-023",
    color: "amarillo",
    grabado: false,
    grams: 10,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-024.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBYJHu8aF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-024",
    model: "AM-024",
    color: "amarillo",
    grabado: false,
    grams: 10,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-025.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oCWH0uiXJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-025",
    model: "AM-025",
    color: "amarillo",
    grabado: false,
    grams: 10,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-026.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBca_OESk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-026",
    model: "AM-026",
    color: "amarillo",
    grabado: false,
    grams: 10,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-027.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBgt4uiqL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-027",
    model: "AM-027",
    color: "blanco",
    grabado: false,
    grams: 10,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-028.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBkxtuSlz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-028",
    model: "AM-028",
    color: "blanco",
    grabado: false,
    grams: 10,
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
      <Button />
    </div>
  );
}
