"use client";

import Card from "../components/Card";
import Acordion from "../components/Acordion";

const rings = [
  {
    image: "/modelos/1601242.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2LNKhxp2Tq/?igsh=MWgwNzJjMGVra2hkMg==",
    alt: "imagen modelo ACI-001",
    model: "ACI-001",
    color: "Oro 18k (Amarillo)",
    price: 332,
  },
];
export default function Shop() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <div className="mt-10">
          <ul className="flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row gap-x-4 text-lg text-myWhite ">
            <a href="./shop">
              <li className="rounded-xl bg-myZinc px-3 py-1">Cintillo</li>
            </a>
            <a href="./compromiso">
              <li className="rounded-xl bg-myZinc px-3 py-1">Compromiso</li>
            </a>
            <a href="./matrimonio">
              <li className="rounded-xl bg-myZinc px-3 py-1">Matrimonio</li>
            </a>
          </ul>
        </div>
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
