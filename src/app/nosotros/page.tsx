export const metadata = {
  title: "Nosotros",
};

import Image from "next/image";
import { monserrat } from "../ui/fonts";

const perfiles = [
  {
    image: "/perfiles/Sandra-Ortega.JPEG",
    alt: "Perfil Sandra Ortega",
    name: "Sandra Ortega",
    tell: "099 500 1783",
  },
  {
    image: "/perfiles/Camila-Amacoria.jpg",
    alt: "Perfil Camila Amacoria",
    name: "Camila Amacoria",
    tell: "098 333 5393",
  },
  {
    image: "/perfiles/Juan-Gongora.jpg",
    alt: "Perfil Juan Góngora",
    name: "Juan Góngora",
    tell: "098 388 3197",
  },
];

export default function contacto() {
  return (
    <div className="flex flex-col gap-y-10 py-10">
      <div className=" w-full flex flex-col  gap-y-10">
        <div className="flex flex-col gap-y-4 sm:flex-row sm:justify-center px-8 sm:gap-x-32 md:gap-x-20 lg:gap-x-40 xl:gap-x-60">
          <div className="flex flex-col gap-y-4 sm:w-6/12 sm:justify-center text-myZinc">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl">
              Nosotros
            </h2>
            <h1 className="text-sm">
              Cásate Conmigo es una Empresa especializada en la confección y
              fabricación de Anillos de Compromiso, Aros de Matrimonio y Joyeria
              Fina. Nuestro objetivo es crear Joyas Únicas y de la más alta
              calidad utilizando materiales como Oro 18k, Diamantes Naturales
              (GIA) y Swarovski.
            </h1>
          </div>
          <div className="sm:w-4/12 md:w-3/12">
            <Image
              src="/imagenes/nosotros.jpg"
              alt="imagen nosotros"
              width={3000}
              height={3000}
            />
          </div>
        </div>
        <div className="bg-myZinc flex flex-col py-6 text-myWhite">
          <h2 className="text-center  sm:text-2xl font-bold">Nuestro Equipo</h2>
          <p className="text-xs text-center mt-2 sm:mt-4 sm:text-sm">
            Verifica que el nombre de tu asesor y número sean oficiales
          </p>
          <div className="flex justify-around text-xs mt-3 sm:mt-4">
            {perfiles.map((perfil, index) => {
              return (
                <div
                  className="flex flex-col justify-center items-center"
                  key={index}
                >
                  <div className="w-24 rounded-full h-24 md:w-60 md:h-60">
                    <Image
                      className="object-cover w-full h-full rounded-full"
                      src={perfil.image}
                      alt={perfil.alt}
                      width={3000}
                      height={3000}
                    />
                  </div>
                  <h4 className="mt-2 font-bold">{perfil.name}</h4>
                  <h6 className={`${monserrat.className} antialiased `}>
                    {perfil.tell}
                  </h6>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-y-4 sm:flex-row sm:justify-center px-8 sm:gap-x-32 md:gap-x-20 lg:gap-x-40 xl:gap-x-60 text-myZinc">
          <div className="flex flex-col gap-y-4 sm:w-6/12 sm:justify-center">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl">
              Asesoría Personalizada
            </h2>
            <p className="text-sm">
              Sabemos lo importante que es encontrar la Joya Ideal, es por eso
              que contamos con un equipo de profesionales altamente capacitados
              que te orientarán durante todo el proceso de compra. Escribenos y
              recibe Asesoría Personalizada con un Experto en Anillos de boda.
              Escribenos a Whatsapp
            </p>
          </div>
          <div className="sm:w-4/12 md:w-3/12">
            <Image
              src="/imagenes/pack.jpg"
              alt="imagen asesoria"
              width={3000}
              height={3000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
