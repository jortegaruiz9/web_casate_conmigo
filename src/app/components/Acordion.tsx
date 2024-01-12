"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Card from "./Card";

export default function Acordion() {
  return (
    <Accordion className="text-md text-myWhite py-4 bg-myZinc">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="Importancia"
        className=""
      >
        <p className="w-full text-zinc-400 text-sm px-4 md:w-6/12">
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
        <p className="w-full text-zinc-400 text-sm px-4">
          Usamos oro de 24k para obtener los diferentes colores y dejar el
          material en una pureza de 18k.
        </p>
        <div className="px-4 py-4 md:w-96">
          <Image
            src="./materiales.png"
            alt="imagen portada compromiso"
            width={3000}
            height={3000}
          />
        </div>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Tiempo de entrega">
        <p className="px-4 text-zinc-400 text-sm">
          -De <span className="shopFont">24 a 48</span> horas laborables en la
          ciudad de Quito, otras ciudades del Ecuador
          <span className="shopFont"> 72</span> horas.
        </p>
      </AccordionItem>
    </Accordion>
  );
}
