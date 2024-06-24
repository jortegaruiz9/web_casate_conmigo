"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    url: "./shop/cintillos",
    category: "Cintillos",
    src: "Cintillos",
    imageUrl: "/modelos/801242.jpg",
  },
  {
    url: "./shop/compromiso",
    category: "Compromiso",
    src: "Compromiso",
    imageUrl: "/modelos/2901242.jpeg",
  },
  {
    url: "./shop/matrimonio",
    category: "Matrimonio",
    src: "Matrimonio",
    imageUrl: "/modelos/2901246.jpeg",
  },
  {
    url: "./shop/set",
    category: "Set Anillos",
    src: "Set",
    imageUrl: "/portadaTrio.jpg",
  },
];

export default function Shop() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-10 text-2xl">Conoce todos nuestros anillos</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-10">
        {products.map((model, index) => {
          return (
            <Link href={model.url} key={index}>
              <div className="w-[350px]">
                <h2 className="text-center text-xl">{model.category}</h2>
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
    </div>
  );
}
