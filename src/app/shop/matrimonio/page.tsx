"use client";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import InstructionColors from "@/app/components/InstructionColors";

const rings = [
  {
    category: "matrimonio",
    image: "/modelos/1601243.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2LLzapp9X5/?igsh=MTRpcDViNG1obWhpMw==",
    alt: "imagen modelo AM-001",
    model: "AM-001",
    color: "amarillo",
    grabado: true,
    grams: 4,
    garantia: true,
  },
  {
    category: "matrimonio",
    image: "/modelos/2901245.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2tN7ZZtZbp/?igsh=MW5nZGZnNTYxNHZncw==",
    alt: "imagen modelo AM-002",
    model: "AM-002",
    color: "blanco",
    grabado: true,
    grams: 4,
    garantia: true,
  },
  {
    category: "matrimonio",
    image: "/modelos/80124.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12m3bCJExx/?igsh=MXRhamdxbXd1cW9neQ==",
    alt: "imagen modelo AM-003",
    model: "AM-003",
    color: "amarillo",
    grabado: true,
    grams: 5,
    garantia: true,
  },
  {
    category: "matrimonio",
    image: "/modelos/1901245.jpg",
    linkProduct:
      "https://www.instagram.com/p/C2S_-ykJuM2/?igsh=MTRtb3ZpMzZsbHE3aw==",
    alt: "imagen modelo AM-004",
    model: "AM-004",
    color: "amarillo",
    grabado: true,
    grams: 6,
    garantia: true,
  },
  {
    category: "matrimonio",
    image: "/modelos/1901244.jpg",
    linkProduct:
      "https://www.instagram.com/p/C2TBY0PpDX4/?igsh=Y3diZDE2bG1kMjF1",
    alt: "imagen modelo AM-005",
    model: "AM-005",
    color: "amarillo",
    grabado: true,
    grams: 8,
    garantia: true,
  },
  {
    category: "matrimonio",
    image: "/modelos/801245.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12m9zKppAG/?igsh=ZmpyZHEza2k2bGZu",
    alt: "imagen modelo AM-006",
    model: "AM-006",
    color: "amarillo",
    grabado: true,
    grams: 9,
    garantia: true,
  },
  {
    category: "matrimonio",
    image: "/modelos/801244.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12nJvbpvWl/?igsh=cm5yM3MzcGZpdmdt",
    alt: "imagen modelo AM-007",
    model: "AM-007",
    color: "amarillo",
    grabado: true,
    grams: 9,
    garantia: true,
  },
  {
    category: "matrimonio",
    image: "/modelos/2901246.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2tOEOsNNeT/?igsh=MXN3OG9wdXdoNXowdg==",
    alt: "imagen modelo AC-008",
    model: "AC-008",
    color: "amarillo",
    grabado: true,
    grams: 10,
    garantia: true,
  },
  {
    category: "matrimonio",
    image: "/modelos/160124.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2DsRzOpGbI/?igsh=MXVqaTBpMGN6MzNwNQ==",
    alt: "imagen modelo AM-009",
    model: "AM-009",
    color: "rosado",
    grabado: true,
    grams: 10,
    garantia: true,
  },
];
export default function Compromiso() {
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
