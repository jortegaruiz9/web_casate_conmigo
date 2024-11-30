import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros - Cásate Conmigo",
};

import Image from "next/image";
import CardAdviser from "../components/CardAdviser";
import ReviewCarousel from "../components/ReviewsCarousel";

const perfiles = [
  {
    image: "/perfiles/sandra_ortega.jpg",
    alt: "Perfil Sandra Ortega",
    name: "Sandra Ortega",
    job: "CEO & Asesora",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593995001783&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    linkedin: "https://www.linkedin.com/in/sandra-ortega-a5063098",
  },
  {
    image: "/perfiles/kennyn_amacoria.jpg",
    name: "Kennyn Amacoria",
    job: "Asesor comercial",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593984171976&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    linkedin: "#",
  },
  {
    image: "/perfiles/juan_gongora.jpg",
    name: "Juan Góngora",
    job: "Programador Frontend",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593983883197&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    linkedin: "https://www.linkedin.com/in/francisco-góngora-ortega",
  },
  {
    image: "/perfiles/josebeth_amacoria.jpg",
    name: "Camila Amacoria",
    job: "Asesora comercial",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593983335393&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    linkedin: "https://www.linkedin.com/in/josebeth-amacoria-5b7275252/",
  },
];

export default function contacto() {
  return (
    <div>
      <div className="mt-10 mb-10 flex flex-col gap-y-10 md:gap-y-20 w-full items-center">
        <section className="text-myZinc flex flex-col items-center gap-y-4 md:flex-row md:justify-between md:w-10/12">
          <div className="w-10/12 flex flex-col gap-y-4 md:w-6/12 ">
            <h1 className="font-bold text-2xl md:text-5xl">Nosotros</h1>
            <p className="text-sm">
              Cásate Conmigo es una Empresa especializada en la confección y
              fabricación de Anillos de Compromiso, Aros de Matrimonio y Joyeria
              Fina. Nuestro objetivo es crear Joyas Únicas y de la más alta
              calidad utilizando materiales como Oro 18k, Diamantes Naturales
              (GIA) y Swarovski.
            </p>
          </div>
          <div className="w-10/12 md:w-3/12 md:flex md:place-content-end">
            <Image
              src="/imagenes/nosotros.jpg"
              alt="imagen nosotros"
              width={350}
              height={373}
            />
          </div>
        </section>
        <section className="flex justify-center w-10/12">
          <div className="w-full md:space-y-8">
            <div className="hidden md:flex md:flex-col text-myZinc gap-y-4 md:items-end">
              <h2 className="font-bold text-2xl md:text-5xl">Nuestro Equipo</h2>
              <p className="text-sm">
                Confirma que el asesor con el que estas hablando coordiné con la
                descripción indicada
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1 md:gap-4">
              <CardAdviser adviser={perfiles[0]} />
              <CardAdviser adviser={perfiles[1]} />
              <CardAdviser adviser={perfiles[2]} />
              <CardAdviser adviser={perfiles[3]} />
            </div>
          </div>
        </section>
        <section className="text-myZinc flex flex-col items-center gap-y-4 md:flex-row md:justify-between md:w-10/12">
          <div className="w-10/12 flex flex-col gap-y-4 md:w-6/12 ">
            <h2 className="font-bold text-2xl md:text-5xl">
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
          <div className="w-10/12 md:w-3/12 md:flex md:place-content-end">
            <Image
              src="/imagenes/pack.jpg"
              alt="imagen asesoria"
              width={350}
              height={377}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
