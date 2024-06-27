"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    url: "./shop/cintillos",
    category: "Cintillo",
    src: "foto cintillo",
    imageUrl: "/modelos/cintillos/aci-002.jpg",
  },
  {
    url: "./shop/compromiso",
    category: "Compromiso",
    src: "foto compromiso",
    imageUrl: "/modelos/compromiso/ac-008.jpg",
  },
  {
    url: "./shop/matrimonio",
    category: "Matrimonio",
    src: "foto matrimonio",
    imageUrl: "/modelos/matrimonio/am-019.jpg",
  },
  {
    url: "./shop/set",
    category: "Set Anilllos",
    src: "foto set anillos",
    imageUrl: "/modelos/set/as-012.jpg",
  },
];

export default function Shop() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-10">
        {products.map((model, index) => {
          return (
            <Link href={model.url} key={index}>
              <div className="w-[350px]">
                <h2 className="text-center text-xl font-bold text-myZinc">
                  {model.category}
                </h2>
                <Image
                  src={model.imageUrl}
                  alt={model.src}
                  height={1080}
                  width={1080}
                />
              </div>
            </Link>
          );
        })}
      </div>
      <div>
        <h1 className="text-zinc text-lg mb-10">
          Conoce nuestros anillos de boda
        </h1>
      </div>
    </div>
  );
}
