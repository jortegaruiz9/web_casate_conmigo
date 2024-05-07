"use client";
import Card from "../components/Card";
import Acordion from "../components/Acordion";
import NavProduct from "../components/NavProduct";

const gold = 91;

const rings = [
  {
    image: "/modelos/190124.jpg",
    linkProduct:
      "https://www.instagram.com/p/C2TBmgNJYbK/?igsh=MTh4cjM1dnZ2ODMxMw==",
    alt: "imagen modelo ACI-001",
    model: "ACI-001",
    color: "Oro 18k (Amarillo)",
    price: gold * 2,
  },
  {
    image: "/modelos/801242.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12nqsbpLN7/?igsh=MWEwZTY1eXB6Mm1uYQ==",
    alt: "imagen modelo ACI-002",
    model: "ACI-002",
    color: "Oro 18k (Amarillo)",
    price: gold * 3,
  },
  {
    image: "/modelos/290124.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2tJPCCNEXR/?igsh=MTRlYWo2OG4xMXZ4ag==",
    alt: "imagen modelo ACI-003",
    model: "ACI-003",
    color: "Oro 18k (Amarillo)",
    price: gold * 4,
  },
];
export default function Shop() {
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
