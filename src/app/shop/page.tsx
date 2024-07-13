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
    imageUrl: "/modelos/cintillos/aci-002.jpg",
    title: "anillos de promesa",
  },
  {
    url: "./shop/compromiso",
    category: "Compromiso",
    src: "foto compromiso quito",
    imageUrl: "/modelos/compromiso/ac-008.jpg",
    title: "anillos de compromiso",
  },
  {
    url: "./shop/matrimonio",
    category: "Matrimonio",
    src: "anillos de matriminio quito",
    imageUrl: "/modelos/matrimonio/am-019.jpg",
    title: "anillos de matrimonio",
  },
  {
    url: "./shop/set",
    category: "Set Anilllos",
    src: "joyerias quito",
    imageUrl: "/modelos/set/as-012.jpg",
    title: "joyerias quito",
  },
];

export default function Shop() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 my-10">
        {products.map((model, index) => {
          return (
            <Link href={model.url} key={index}>
              <div className="w-[350px]">
                <h2 className="text-center text-xl font-bold text-myZinc mb-2">
                  {model.category}
                </h2>
                <Image
                  src={model.imageUrl}
                  alt={model.src}
                  title={title}
                  height={350}
                  width={350}
                />
              </div>
            </Link>
          );
        })}
      </div>
      <div>
        <h1 className="text-myZinc text-lg mb-10">anillos de boda</h1>
      </div>
    </div>
  );
}
