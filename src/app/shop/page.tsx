"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Card from "../components/Card";

const modelos = [
  {
    image: "/modelos/801242.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12nqsbpLN7/?igsh=MWEwZTY1eXB6Mm1uYQ==",
    alt: "imagen modelo 80124",
    modelo: "ACI-001",
    color: "Oro 18k (Amarillo)",
    price: 249,
  },
  {
    image: "/modelos/801243.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12nY_kp_JN/?igsh=MTkzOGtwaDUyZGw0Yg==",
    alt: "imagen modelo 80124",
    modelo: "AM-001",
    color: "Oro 18k (Blanco)",
    price: 392,
  },
  {
    image: "/modelos/80124.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12m3bCJExx/?igsh=MXRhamdxbXd1cW9neQ==",
    alt: "imagen modelo 80124",
    modelo: "AM-002",
    color: "Oro 18k (Amarillo)",
    price: 415,
  },
  {
    image: "/modelos/801245.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12m9zKppAG/?igsh=ZmpyZHEza2k2bGZu",
    alt: "imagen modelo 80124",
    modelo: "AU-001",
    color: "Oro 18k (Amarillo)",
    price: 664,
  },
  {
    image: "/modelos/801244.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12nJvbpvWl/?igsh=cm5yM3MzcGZpdmdt",
    alt: "imagen modelo 80124",
    modelo: "AM-003",
    color: "Oro 18k (Bicolor)",
    price: 807,
  },
];
export default function Shop() {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center my-10">
        {modelos.map((model, index) => {
          return <Card key={index} product={model} />;
        })}
      </div>
      <Accordion className="text-md text-myWhite py-4 bg-myZinc">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Importancia"
          className=""
        >
          <p className=" text-zinc-400 text-sm px-4">
            El anillo de compromiso es un símbolo tangible de la promesa de
            compromiso entre dos personas. Al llevar el anillo, se muestra
            públicamente la intención de contraer matrimonio y comprometerse a
            construir una vida juntos.
          </p>
          <div className="px-4 py-4 md:w-60">
            <Image
              src="./portada-compromiso.jpg"
              alt="imagen portada compromiso"
              width={3000}
              height={3000}
            />
          </div>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Materiales">
          <ul className="text-sm px-4 text-zinc-400">
            <li>- Oro Amarillo 18k</li>
            <li>- Oro Blanco 18k</li>
            <li>- Oro Rosado 18k</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Tiempo de entrega"
        >
          <p className="px-4 text-zinc-400 text-sm">
            -De <span className="shopFont">24 a 48</span> horas laborables en la
            ciudad de Quito, otras ciudades del Ecuador
            <span className="shopFont"> 72</span> horas.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
