"use client";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import InstructionColors from "@/app/components/InstructionColors";

const rings = [
  {
    category: "compromiso",
    image: "/modelos/2901242.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2tKhHQN6P4/?igsh=YmJ3bzgwb3hxdTVh",
    alt: "imagen modelo AC-001",
    model: "AC-001",
    color: "amarillo",
    grabado: false,
    grams: 2,
    garantia: true,
  },
  {
    category: "compromiso",
    image: "/modelos/1601242.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2LNKhxp2Tq/?igsh=MWgwNzJjMGVra2hkMg==",
    alt: "imagen modelo AC-002",
    model: "AC-002",
    color: "rosado",
    grabado: false,
    grams: 4,
    garantia: true,
  },
  {
    category: "compromiso",
    image: "/modelos/1901241.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2TAJ7_Jg9C/?igsh=MTB6bmd1YmFvZzVvbQ==",
    alt: "imagen modelo AC-003",
    model: "AC-003",
    color: "amarillo",
    grabado: false,
    grams: 4,
    garantia: true,
  },
  {
    category: "compromiso",
    image: "/modelos/2901244.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2tLo8Zt5KR/?igsh=b28zejdibTJvMnZ3",
    alt: "imagen modelo AC-004",
    model: "AC-004",
    color: "amarillo",
    grabado: false,
    grams: 4,
    garantia: true,
  },
  {
    category: "compromiso",
    image: "/modelos/1901243.jpg",
    linkProduct:
      "https://www.instagram.com/p/C2TDDkcJVCD/?igsh=MXM3cDlrdmFqd2szMQ==",
    alt: "imagen modelo AC-005",
    model: "AC-005",
    color: "amarillo",
    grabado: false,
    grams: 4,
    garantia: true,
  },
  {
    category: "compromiso",
    image: "/modelos/2901243.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2tLV-OtXP2/?igsh=azI4a3J5NHluenRk",
    alt: "imagen modelo AC-006",
    model: "AC-006",
    color: "amarillo",
    grabado: false,
    grams: 5,
    garantia: true,
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
