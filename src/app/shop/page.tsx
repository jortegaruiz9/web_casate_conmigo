import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop - Cásate Conmigo",
  description: "anillos de boda",
};

import Image from "next/image";
import Link from "next/link";
import { title } from "process";

const products = [
  {
    url: "./shop/cintillos",
    category: "Cintillo - Churumbelas",
    src: "churumbelas en Quito",
    imageUrl: "/modelos/cintillos/aci-001/amarillo.jpg",
    title: "Cintillos - Churumbelas",
    leyend: "Descubre el anillo de cintillo, un símbolo de amor verdadero. ",
  },
  {
    url: "./shop/promesa",
    category: "Promesa",
    src: "anillo de promesa en Quito",
    imageUrl: "/modelos/promesa/ap-003/amarillo.jpg",
    title: "Cintillos - Churumbelas",
    leyend:
      "Sorprende a tu pareja con un anillo de promesa, marcando un amor verdadero. ",
  },
  {
    url: "./shop/compromiso",
    category: "Compromiso",
    src: "foto compromiso quito",
    imageUrl: "/modelos/compromiso/ac-018/infinito-amarillo.jpg",
    title: "anillos de compromiso",
    leyend:
      "Encuentra el anillo de compromiso que iniciará tu historia de amor. ",
  },
  {
    url: "./shop/matrimonio",
    category: "Matrimonio",
    src: "anillos de matriminio Quito",
    imageUrl: "/modelos/matrimonio/am-019/amarillo.jpg",
    title: "anillos de matrimonio",
    leyend: "Los anillos de matrimonio, el lazo que une corazones.",
  },
  {
    url: "./shop/set",
    category: "Set Anillos",
    src: "joyerias en Quito",
    imageUrl: "/modelos/set/as-012/amarillo.jpg",
    title: "joyerias quito",
    leyend:
      "El Set de anillos, una hermosa fusión de compromiso y alianzas eternas. ",
    bestSeller: true,
  },
  {
    url: "./shop/grado",
    category: "Grado",
    src: "joyerias en Quito",
    imageUrl: "/modelos/grado/ag-014/amarillo.jpg",
    title: "joyerias quito",
    leyend:
      "Anillos de grado para cualquier ocación que conlleve celebración. ",
    bestSeller: true,
  },
];

export default function Shop() {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[1440px] mx-auto px-4 mb-20">
      <div>
        <h1 className="text-myZinc mt-12 text-2xl font-bold">
          Selecciona la categoría
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-10 justify-items-center">
        {products.map((model, index) => (
          <Link href={model.url} key={index}>
            <div className="text-myZinc relative aReveal">
              <div>
                {/* Parte de arriba */}
                <div className="relative">
                  <div className="w-[280px] h-[365px] bg-[#eae5df] relative">
                    <Image
                      src={model.imageUrl}
                      alt={model.src}
                      title={model.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Parte de abajo */}
                <div className="px-3 pt-3 text-myZinc text-sm flex flex-col gap-y-2 w-[280px]">
                  <h2 className="text-xl font-bold truncate">
                    {model.category}
                  </h2>
                  <div className="flex justify-between items-center space-x-2">
                    <p className="text-xs text-zinc-600 ">{model.leyend}</p>
                    <Button variant="models">
                      <span className="icon-[ic--baseline-collections] text-lg" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
