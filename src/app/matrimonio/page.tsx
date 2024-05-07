"use client";

import Card from "../components/Card";
import Acordion from "../components/Acordion";
import NavProduct from "../components/NavProduct";

const gold = 91;
const goldM = 108;

const rings = [
  {
    image: "/modelos/1601243.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2LLzapp9X5/?igsh=MTRpcDViNG1obWhpMw==",
    alt: "imagen modelo AM-001",
    model: "AM-001",
    color: "Oro 18k (Amarillo)",
    price: gold * 4,
  },
  {
    image: "/modelos/2901245.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2tN7ZZtZbp/?igsh=MW5nZGZnNTYxNHZncw==",
    alt: "imagen modelo AM-002",
    model: "AM-002",
    color: "Oro 18k (Blanco)",
    price: goldM * 4,
  },
  {
    image: "/modelos/80124.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12m3bCJExx/?igsh=MXRhamdxbXd1cW9neQ==",
    alt: "imagen modelo AM-003",
    model: "AM-003",
    color: "Oro 18k (Amarillo)",
    price: gold * 5,
  },
  {
    image: "/modelos/1901245.jpg",
    linkProduct:
      "https://www.instagram.com/p/C2S_-ykJuM2/?igsh=MTRtb3ZpMzZsbHE3aw==",
    alt: "imagen modelo AM-004",
    model: "AM-004",
    color: "Oro 18k (Amarillo)",
    price: gold * 6,
  },
  {
    image: "/modelos/1901244.jpg",
    linkProduct:
      "https://www.instagram.com/p/C2TBY0PpDX4/?igsh=Y3diZDE2bG1kMjF1",
    alt: "imagen modelo AM-005",
    model: "AM-005",
    color: "Oro 18k (Amarillo)",
    price: gold * 8,
  },
  {
    image: "/modelos/801245.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12m9zKppAG/?igsh=ZmpyZHEza2k2bGZu",
    alt: "imagen modelo AM-006",
    model: "AM-006",
    color: "Oro 18k (Amarillo)",
    price: gold * 9,
  },
  {
    image: "/modelos/801244.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12nJvbpvWl/?igsh=cm5yM3MzcGZpdmdt",
    alt: "imagen modelo AM-007",
    model: "AM-007",
    color: "Oro 18k (Bicolor)",
    price: goldM * 8,
  },
  {
    image: "/modelos/2901246.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2tOEOsNNeT/?igsh=MXN3OG9wdXdoNXowdg==",
    alt: "imagen modelo AC-008",
    model: "AC-008",
    color: "Oro 18k (Amarillo)",
    price: gold * 10,
  },
  {
    image: "/modelos/160124.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2DsRzOpGbI/?igsh=MXVqaTBpMGN6MzNwNQ==",
    alt: "imagen modelo AM-009",
    model: "AM-009",
    color: "Oro 18k (Bicolor)",
    price: goldM * 10,
  },
];
export default function Compromiso() {
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
