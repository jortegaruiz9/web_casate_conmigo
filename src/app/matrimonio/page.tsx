"use client";

import Card from "../components/Card";
import Acordion from "../components/Acordion";
const rings = [
  {
    image: "/modelos/801243.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12nY_kp_JN/?igsh=MTkzOGtwaDUyZGw0Yg==",
    alt: "imagen modelo AM-001",
    model: "AM-001",
    color: "Oro 18k (Blanco)",
    price: 392,
  },
  {
    image: "/modelos/1601243.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2LLzapp9X5/?igsh=MTRpcDViNG1obWhpMw==",
    alt: "imagen modelo AM-002",
    model: "AM-002",
    color: "Oro 18k (Amarillo)",
    price: 332,
  },
  {
    image: "/modelos/80124.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12m3bCJExx/?igsh=MXRhamdxbXd1cW9neQ==",
    alt: "imagen modelo AM-003",
    model: "AM-003",
    color: "Oro 18k (Amarillo)",
    price: 415,
  },
  {
    image: "/modelos/1901245.jpg",
    linkProduct:
      "https://www.instagram.com/p/C2S_-ykJuM2/?igsh=MTRtb3ZpMzZsbHE3aw==",
    alt: "imagen modelo AM-004",
    model: "AM-004",
    color: "Oro 18k (Amarillo)",
    price: 498,
  },
  {
    image: "/modelos/1901244.jpg",
    linkProduct:
      "https://www.instagram.com/p/C2TBY0PpDX4/?igsh=Y3diZDE2bG1kMjF1",
    alt: "imagen modelo AM-005",
    model: "AM-005",
    color: "Oro 18k (Amarillo)",
    price: 664,
  },
  {
    image: "/modelos/801245.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12m9zKppAG/?igsh=ZmpyZHEza2k2bGZu",
    alt: "imagen modelo AM-006",
    model: "AM-006",
    color: "Oro 18k (Amarillo)",
    price: 664,
  },
  {
    image: "/modelos/801244.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12nJvbpvWl/?igsh=cm5yM3MzcGZpdmdt",
    alt: "imagen modelo AM-007",
    model: "AM-007",
    color: "Oro 18k (Bicolor)",
    price: 807,
  },
  {
    image: "/modelos/160124.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2DsRzOpGbI/?igsh=MXVqaTBpMGN6MzNwNQ==",
    alt: "imagen modelo AM-008",
    model: "AM-008",
    color: "Oro 18k (Bicolor)",
    price: 980,
  },
];
export default function Compromiso() {
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
