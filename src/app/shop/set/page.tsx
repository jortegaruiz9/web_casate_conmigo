"use client";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import InstructionColors from "@/app/components/InstructionColors";

const rings = [
  {
    category: "set",
    image: "/modelos/set/as-001.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nz9k6NA6_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AS-001",
    model: "AS-001",
    color: "amarillo",
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
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {rings.map((model, index) => {
          return <Card key={index} product={model} />;
        })}
      </div>
      <Button />
    </div>
  );
}
