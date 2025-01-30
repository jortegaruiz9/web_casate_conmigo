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
    category: "Cintillo",
    src: "anillo de promesa quito",
    imageUrl: "/modelos/cintillos/aci-003/portada.jpg",
    title: "anillos de promesa",
    leyend: "Descubre el anillo de cintillo, un símbolo de amor verdadero. ",
  },
  {
    url: "./shop/compromiso",
    category: "Compromiso",
    src: "foto compromiso quito",
    imageUrl: "/modelos/compromiso/ac-018/amarillo.png",
    title: "anillos de compromiso",
    leyend:
      "Encuentra el anillo de compromiso que iniciará tu historia de amor. ",
  },
  {
    url: "./shop/matrimonio",
    category: "Matrimonio",
    src: "anillos de matriminio quito",
    imageUrl: "/modelos/matrimonio/am-019/amarillo.jpg",
    title: "anillos de matrimonio",
    leyend: "Los anillos de matrimonio, el lazo que une corazones.",
  },
  {
    url: "./shop/set",
    category: "Set Anillos",
    src: "joyerias quito",
    imageUrl: "/modelos/set/as-012/amarillo.jpg",
    title: "joyerias quito",
    leyend:
      "El Set de anillos, una hermosa fusión de compromiso y alianzas eternas. ",
    bestSeller: true,
  },
];

export default function Shop() {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[1440px] mx-auto px-4">
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
                  <p className="text-xs text-zinc-600 line-clamp-2 h-10">
                    {model.leyend}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <button className="bg-myZinc text-myWhite px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors text-sm">
                      Ver modelos
                    </button>
                    <span className="icon-[material-symbols--arrow-forward] text-myZinc text-xl bg-[#eae5df] p-2 rounded-md hover:bg-zinc-200 transition-colors" />
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
