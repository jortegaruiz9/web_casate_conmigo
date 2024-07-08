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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
    grams: 8,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-019P.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBApjuijn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-019",
    model: "AM-019",
    color: "amarillo",
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
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
    grabado: true,
    grams: 10,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-028.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBkxtuSlz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-028",
    model: "AM-028",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-029.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o0WVquc80/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-029",
    model: "AM-029",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-030.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o0Z5vOwAr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-030",
    model: "AM-030",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-031.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o0dYvuoT7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-031",
    model: "AM-031",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-032.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o0hEsOZcL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-032",
    model: "AM-032",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-033.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o0q5XOS9C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-033",
    model: "AM-033",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-034.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o03t0OlES/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-034",
    model: "AM-034",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-035.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o06tgucwo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-035",
    model: "AM-035",
    color: "blanco",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-036.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o1Cf2uuys/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-036",
    model: "AM-036",
    color: "blanco",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-037.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o1GA-u4z_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-037",
    model: "AM-037",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-038.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o1I7Auh9M/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-038",
    model: "AM-038",
    color: "rosado",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-039.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o1NVRurKX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-039",
    model: "AM-039",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-040.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o1XBKOQqW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-040",
    model: "AM-040",
    color: "rosado",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-041.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o12AlO7uu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-041",
    model: "AM-041",
    color: "rosado",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-042.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o15QkuTtC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-042",
    model: "AM-042",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-043.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o1_ahO-FV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-043",
    model: "AM-043",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-044.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o2EBkuHeH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-044",
    model: "AM-044",
    color: "blanco",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-045.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNB4nuxF0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-045",
    model: "AM-045",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-046.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNEqruzQE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-046",
    model: "AM-046",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-047.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNJxCu0Op/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-047",
    model: "AM-047",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-048.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNM6cuEa4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-048",
    model: "AM-048",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-049.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNPz_Ox1m/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-049",
    model: "AM-049",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-050.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNTN5urUY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-050",
    model: "AM-050",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-051.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8rtYX5utMf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-051",
    model: "AM-051",
    color: "amarillo",
    grabado: true,
    grams: 16,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-052.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8r87cTuNU5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-052",
    model: "AM-052",
    color: "amarillo",
    grabado: true,
    grams: 18,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-053.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8r89b6u_SN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-053",
    model: "AM-053",
    color: "amarillo",
    grabado: true,
    grams: 18,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-054.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8sAgtVOgEI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-054",
    model: "AM-054",
    color: "amarillo",
    grabado: true,
    grams: 20,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-055.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8sAmEkuMZZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-055",
    model: "AM-055",
    color: "amarillo",
    grabado: true,
    grams: 20,
  },
  {
    category: "matrimonio",
    image: "/modelos/matrimonio/am-056.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8sAt6OurNU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-056",
    model: "AM-056",
    color: "amarillo",
    grabado: true,
    grams: 20,
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
      <h1 className="text-myZinc text-lg mt-10">
        Conoce nuestros anillos de boda
      </h1>
      <Button />
    </div>
  );
}
