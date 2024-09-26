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
    imageUrl: "/modelos/cintillos/aci-003/amarillo.jpg",
    title: "anillos de promesa",
    leyend: "Descubre el anillo de cintillo, un símbolo de tu amor verdadero. ",
  },
  {
    url: "./shop/compromiso",
    category: "Compromiso",
    src: "foto compromiso quito",
    imageUrl: "/modelos/compromiso/ac-012/amarillo.jpg",
    title: "anillos de compromiso",
    leyend:
      "Encuentra el anillo de compromiso que iniciará su historia de amor. ",
  },
  {
    url: "./shop/matrimonio",
    category: "Matrimonio",
    src: "anillos de matriminio quito",
    imageUrl: "/modelos/matrimonio/am-019/amarillo.jpg",
    title: "anillos de matrimonio",
    leyend: "Los anillos de matrimonio, el lazo que une sus corazones.",
  },
  {
    url: "./shop/set",
    category: "Set Anillos",
    src: "joyerias quito",
    imageUrl: "/modelos/set/as-012/amarillo.jpg",
    title: "joyerias quito",
    leyend:
      "El Set de anillos, una hermosa fusión de compromiso y alianza eterno. ",
  },
];

export default function Shop() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="text-myZinc mt-12 text-2xl font-bold">
          Selecciona la categoría
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 my-10">
        {products.map((model, index) => {
          return (
            <Link
              href={model.url}
              key={index}
              className=" md:shadow-md md:py-6 md:px-6"
            >
              <div className="w-[350px]">
                <Image
                  src={model.imageUrl}
                  alt={model.src}
                  title={title}
                  height={350}
                  width={350}
                />
                <div className="mt-2 text-myZinc py-2">
                  <h2 className=" text-xl font-bold ">{model.category}</h2>
                  <div className="flex gap-x-4">
                    <div>
                      <h3 className="text-sm">{model.leyend}</h3>
                    </div>
                    <div className="bg-myZinc flex justify-center items-center rounded-md px-2">
                      <span className="icon-[material-symbols--arrow-forward] text-myWhite text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
