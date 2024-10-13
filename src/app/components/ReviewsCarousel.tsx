"use client";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "./core/Carousel";

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

const ReviewCarousel: React.FC = () => {
  const [shuffledReviews, setShuffledReviews] = useState(reviews);

  useEffect(() => {
    // Mezclar reseñas aleatoriamente cada vez que se renderiza el componente
    setShuffledReviews([...reviews].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div>
      <div className="relative w-full px-4">
        <Carousel>
          <CarouselContent className="-ml-4 md:-ml-12">
            {shuffledReviews.map((r, index) => (
              <CarouselItem className="pl-4 md:pl-12" key={index}>
                <div className="flex h-44 md:h-64 lg:h-48 xl:h-44 text-myZinc">
                  <div className="flex flex-col place-content-start text-sm px-4 md:px-0">
                    <div className="text-lg text-yellow-400">
                      <span className="icon-[material-symbols--star]" />
                      <span className="icon-[material-symbols--star]" />
                      <span className="icon-[material-symbols--star]" />
                      <span className="icon-[material-symbols--star]" />
                      <span className="icon-[material-symbols--star]" />
                    </div>
                    <div className="flex flex-col place-content-start">
                      <h3 className="font-bold">{r.importantText}</h3>
                      <p>{r.review}</p>
                    </div>
                    <div className="mt-auto">
                      <h5 className="font-bold">{r.name}</h5>
                      <h6>{r.date}</h6>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation
            classNameButton="text-myZinc bg-myWhite"
            alwaysShow
          />
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewCarousel;
