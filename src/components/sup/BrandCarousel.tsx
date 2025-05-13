"use client";
import Image from "next/image";

let brands = [
  { brand: "/imagenes/brands/brand-gia.png", alt: "brand GIA", w: 80, h: 28 },
  {
    brand: "/imagenes/brands/brand-swarovski.png",
    alt: "brand SWAROVSKI",
    w: 128,
    h: 22,
  },
  {
    brand: "/imagenes/brands/brand-oro.png",
    alt: "brand ORO18K",
    w: 100,
    h: 20,
  },
  { brand: "/imagenes/brands/brand-gia.png", alt: "brand GIA", w: 80, h: 28 },
  {
    brand: "/imagenes/brands/brand-swarovski.png",
    alt: "brand SWAROVSKI",
    w: 128,
    h: 22,
  },
  {
    brand: "/imagenes/brands/brand-oro.png",
    alt: "brand ORO18K",
    w: 100,
    h: 20,
  },
  { brand: "/imagenes/brands/brand-gia.png", alt: "brand GIA", w: 80, h: 28 },
  {
    brand: "/imagenes/brands/brand-swarovski.png",
    alt: "brand SWAROVSKI",
    w: 128,
    h: 22,
  },
  {
    brand: "/imagenes/brands/brand-oro.png",
    alt: "brand ORO18K",
    w: 100,
    h: 20,
  },
];

export default function Home() {
  return (
    <main>
      <div className="wrapper w-11/12 lg:w-8/12 m-auto relative h-[80px]">
        {brands.map((brand, index) => {
          return (
            <div
              key={index}
              className={`item item${
                index + 1
              } flex items-center justify-center w-[180px] h-[80px] absolute object-cover`}
            >
              <Image
                src={brand.brand}
                alt={brand.alt}
                width={brand.w}
                height={brand.h}
                style={{ width: `${brand.w}px`, height: `${brand.h}px` }}
                onError={(e) =>
                  console.log(`Error loading image: ${brand.alt}`)
                }
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
