"use client";
import { useState, useEffect } from "react";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const reviews = [
  {
    importantText: "Excelentes Anillos",
    review:
      "Estamos muy felices. Compré el set de anillos, 100% responsables y recomendables con los envíos. Saludos desde Guayaquil!",
    name: "Jafet Baldeon",
    date: "Julio / 2024",
  },
  {
    importantText: "Espléndido trabajo",
    review:
      "Encantada con mi anillo de boda. Atención muy cordial, muy recomendado!",
    name: "Tatiana Rosero",
    date: "Abril / 2024",
  },
  {
    importantText: "La mejor joyería de Ecuador",
    review:
      "En atención, experiencia, precios y recomendación, los mejores anillos 🙌🏼🙌🏼🙌🏼. No se equivoquen!",
    name: "Otoniel Moreno",
    date: "Junio / 2024",
  },
  {
    importantText: "Atención de primera",
    review:
      "Rápida, eficiente y con calidez. Además, los precios y la calidad de los anillos son los mejores del mercado.",
    name: "Sebastián Nader",
    date: "Junio / 2024",
  },
  {
    importantText: "Una gran experiencia",
    review:
      "Con Cásate Conmigo, estoy muy satisfecho de la compra, los recomiendo mucho!",
    name: "Ibania Jaramillo",
    date: "Junio / 2024",
  },
  {
    importantText: "Confianza a primera vista",
    review:
      "Cuando fui a retirar los anillos, no sabía que ahí los hacían, por eso la entrega fue de un día para otro. Muy agradecido y satisfecho!",
    name: "Active XavPatECU",
    date: "Diciembre / 2021",
  },
  {
    importantText: "Sobrepasaron mis expectativas",
    review:
      "Quiero agradecer a Cásate Conmigo. Qué calidad de trabajo! Me encantaron mis aros y las cadenas de mis hijos, todo espectacular.",
    name: "Leslie Mosquera",
    date: "Febrero / 2023",
  },
  {
    importantText: "Calidad de personas",
    review:
      "Ni hablar de su aspecto profesional. Agradecido por tener una guía para este momento tan importante. Encantado con mis anillos 🔝💎.",
    name: "Andrés Amaguaya",
    date: "Noviembre / 2022",
  },
  {
    importantText: "El lugar perfecto",
    review:
      "La señora Sandra fue muy amable y nos ayudó a elegir nuestros anillos de boda. Tuvo mucha paciencia! ✨💍",
    name: "Andrés Amaguaya",
    date: "Noviembre / 2022",
  },
  {
    importantText: "Tiempo récord",
    review:
      "La atención es maravillosa, me entregaron los anillos en tiempo récord y eso que los mandé a personalizar ❤️.",
    name: "Anig García",
    date: "Diciembre / 2021",
  },
  {
    importantText: "Hermosos diseños",
    review:
      "Excelente servicio, un trabajo hermoso. Lindos modelos, gracias Sandra por la paciencia y por los anillos a disposición.",
    name: "Andrés Echeverría",
    date: "Octubre / 2023",
  },
  {
    importantText: "Me salvaron",
    review:
      "Tuve que realizar los anillos en un tiempo reducido, me supieron ayudar y me sacaron de una verdadera emergencia.",
    name: "Alejandro Montenegro",
    date: "Octubre / 2023",
  },
  {
    importantText: "Precios honestos",
    review:
      "Los anillos son calidad-precio, muy bien realizados. Visité varias joyerías y sin duda me quedo con esta.",
    name: "Lucinda Intriago",
    date: "Octubre / 2023",
  },
  {
    importantText: "Asesores preparados",
    review:
      "Fui sin saber muy bien los pasos y anillos que necesitaba. Me supieron explicar y me fui muy contento y agradecido.",
    name: "Rommel Lara",
    date: "Agosto / 2023",
  },
  {
    importantText: "Compra online segura",
    review:
      "Realicé la compra 100% en línea. El asesor me ofreció hacer una videollamada y me mostró todos los anillos disponibles. Recomendado!",
    name: "Ernesto Guevara",
    date: "Agosto / 2023",
  },
  {
    importantText: "Entrega increíble",
    review:
      "No tenía los anillos en el registro civil, ellos me ofrecieron unos temporales y los llevaron al lugar. Muy agradecido!",
    name: "Abel Ramos",
    date: "Septiembre / 2023",
  },
  {
    importantText: "Facilidad de pagos",
    review:
      "Puedes pagar con varios tipos de tarjetas y cuentas. Me ofrecieron un plan acumulativo y me sorprendí en comparación con otras joyerías.",
    name: "Mela Cevallos",
    date: "Enero / 2023",
  },
];

const Reviews: React.FC = () => {
  const [shuffledReviews, setShuffledReviews] = useState(reviews);
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    setShuffledReviews([...reviews].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
          containScroll: false,
          breakpoints: {
            "(min-width: 1024px)": {
              slidesToScroll: 4,
            },
          },
        }}
        className="relative"
      >
        <div className="flex justify-end mb-4 px-6">
          <div className="hidden lg:flex gap-2">
            <button
              onClick={() => api?.scrollPrev()}
              className="icon-[hugeicons--greater-than] rotate-180 h-5 w-5 text-zinc-600 hover:text-myZinc"
            />
            <button
              onClick={() => api?.scrollNext()}
              className="icon-[hugeicons--greater-than] h-5 w-5 text-zinc-600 hover:text-myZinc"
            />
          </div>
        </div>
        <CarouselContent className="-ml-0">
          {shuffledReviews.map((r, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] md:basis-1/2 lg:basis-1/4 pl-0"
            >
              <div className="p-6 h-full border-y border-l first:border-l lg:[&:nth-child(4n)]:border-r border-myZinc">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-myZinc mb-2 text-sm">{r.review}</p>
                  </div>
                  <div className="mt-auto">
                    <p className=" text-gray-800 text-xs font-semibold">
                      {r.name}
                    </p>
                    <p className="text-sm text-zinc-600">{r.date}</p>
                  </div>
                  <div className="flex text-myZinc">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="icon-[material-symbols--star]" />
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Reviews;
