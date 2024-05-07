"use client";

import Card from "../components/Card";
import Acordion from "../components/Acordion";
import NavProduct from "../components/NavProduct";

const gold = 91;
const goldM = 108;

const rings = [
  {
    image: "/modelos/2901242.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2tKhHQN6P4/?igsh=YmJ3bzgwb3hxdTVh",
    alt: "imagen modelo AC-001",
    model: "AC-001",
    color: "Oro 18k (Amarillo)",
    price: gold * 2,
  },
  {
    image: "/modelos/1601242.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2LNKhxp2Tq/?igsh=MWgwNzJjMGVra2hkMg==",
    alt: "imagen modelo AC-002",
    model: "AC-002",
    color: "Oro 18k (Amarillo)",
    price: gold * 4,
  },
  {
    image: "/modelos/1901241.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2TAJ7_Jg9C/?igsh=MTB6bmd1YmFvZzVvbQ==",
    alt: "imagen modelo AC-003",
    model: "AC-003",
    color: "Oro 18k (Amarillo)",
    price: gold * 4,
  },
  {
    image: "/modelos/2901244.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2tLo8Zt5KR/?igsh=b28zejdibTJvMnZ3",
    alt: "imagen modelo AC-004",
    model: "AC-004",
    color: "Oro 18k (Amarillo)",
    price: gold * 4,
  },
  {
    image: "/modelos/1901243.jpg",
    linkProduct:
      "https://www.instagram.com/p/C2TDDkcJVCD/?igsh=MXM3cDlrdmFqd2szMQ==",
    alt: "imagen modelo AC-005",
    model: "AC-005",
    color: "Oro 18k (Blanco)",
    price: goldM * 4,
  },
  {
    image: "/modelos/2901243.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2tLV-OtXP2/?igsh=azI4a3J5NHluenRk",
    alt: "imagen modelo AC-006",
    model: "AC-006",
    color: "Oro 18k (Blanco)",
    price: goldM * 5,
  },
];
export default function compromiso() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <NavProduct />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center my-10">
          {rings.map((model, index) => {
            return <Card key={index} product={model} />;
          })}
        </div>
      </div>
      <Acordion />
    </div>
  );
}
