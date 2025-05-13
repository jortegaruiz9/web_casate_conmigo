"use client";

import Hero from "@/components/top/Hero";
import Reviews from "@/components/carrousel/Reviews";
import Rings from "@/components/carrousel/Rings";
import { inter } from "./ui/fonts";
import { Button } from "@/components/ui/button";
import { AdviserContext } from "./context/AdviserContext";
import { useContext } from "react";

const features = [
  {
    icon: "icon-[material-symbols--diamond]",
    title: "Materiales Premium",
    description:
      "Oro 18k y Plata 925 certificados para garantizar calidad y durabilidad.",
  },
  {
    icon: "icon-[material-symbols--edit]",
    title: "Personalización Total",
    description:
      "Diseños adaptados a tus preferencias, desde el material hasta el acabado final.",
  },
  {
    icon: "icon-[material-symbols--support-agent]",
    title: "Asesoría Experta",
    description:
      "Te guiamos en cada paso para elegir el anillo perfecto para tu momento especial.",
  },
  {
    icon: "icon-[material-symbols--local-shipping]",
    title: "Envíos Seguros",
    description: "Entrega a todo Ecuador con seguimiento incluido.",
  },
];

const guarantees = [
  {
    icon: "icon-[material-symbols--verified]",
    text: "Material Certificado",
  },
  {
    icon: "icon-[subway--save]",
    text: "Garantía por un año",
  },
  {
    icon: "icon-[material-symbols--handshake]",
    text: "Servicio Post-venta",
  },
];

const categories = [
  { type: "matrimonio", title: "Anillos de Matrimonio" },
  { type: "cintillos", title: "Cintillos - Churumbelas" },
  { type: "set", title: "Sets de Anillos" },
] as const;

export default function Home() {
  const whatsapp = useContext(AdviserContext) as any;

  const handleOrderClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const whatsappMessage = `Me interesa conocer más sobre sus anillos, pude revisar su web`;
    const whatsappLink = `https://wa.me/+593${
      whatsapp.adviser.tel
    }?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <main className={inter.className}>
      <div className="fixed bottom-4 right-6 sm:right-14 md:right-32 lg:right-14 z-50  ">
        <Button
          variant="whatsapp"
          size="rounded"
          className="animate-bounce shadow-md"
          onClick={handleOrderClick}
        >
          <span className="icon-[bi--whatsapp] text-2xl" />
        </Button>
      </div>
      <Hero />
      <div className="flex flex-col place-content-center items-center overflow-hidden">
        <div className="w-11/12 max-w-7xl">
          {/* Carrusel de Compromiso */}
          <Rings category="compromiso" title="Anillos de Compromiso" />

          {/* Sección de Introducción */}
          <section className="text-center py-12 px-4">
            <h1 className="text-3xl font-semibold text-myZinc mb-6">
              Anillos Personalizados en Oro 18k y Plata 925
            </h1>
            <p className="text-zinc-600 max-w-3xl mx-auto mb-12">
              En Cásate Conmigo creamos anillos únicos que cuentan tu historia
              de amor. Cada pieza es fabricada artesanalmente en Ecuador,
              combinando técnicas tradicionales con diseños modernos.
            </p>
          </section>

          {/* Sección de Características */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-100 ">
                <span className={`${feature.icon} text-4xl text-myZinc mb-4`} />
                <h3 className="font-semibold text-myZinc mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-600">{feature.description}</p>
              </div>
            ))}
          </section>

          {/* Carruseles de Productos */}
          {categories.map((category, index) => (
            <Rings
              key={index}
              category={category.type}
              title={category.title}
            />
          ))}

          {/* Sección de Garantía */}
          <section className="text-center py-12 px-4 bg-gray-100 my-16 ">
            <h2 className="text-2xl font-semibold text-myZinc mb-6">
              Calidad Garantizada
            </h2>
            <p className="text-zinc-600 max-w-3xl mx-auto mb-8">
              Todos nuestros anillos incluyen certificado de autenticidad y
              garantía. Trabajamos con los mejores artesanos joyeros de Ecuador
              para asegurar la más alta calidad en cada pieza.
            </p>
            <div className="flex justify-center gap-8">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="text-center">
                  <span className={`${guarantee.icon} text-4xl text-myZinc`} />
                  <p className="text-sm text-zinc-600 mt-2">{guarantee.text}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Reseñas */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-myZinc mb-8 text-center">
              Lo que Dicen Nuestros Clientes
            </h2>
            <Reviews />
          </section>
        </div>
      </div>
    </main>
  );
}
