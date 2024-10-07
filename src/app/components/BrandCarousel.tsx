"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
];

const infiniteBrands = [
  ...brands,
  ...brands,
  ...brands,
  ...brands,
  ...brands,
  ...brands,
];

export default function BrandCarousel() {
  const logoRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (logoRef.current) {
      const ul = logoRef.current.querySelector("ul");
      if (ul) {
        setScrollWidth(ul.scrollWidth);
        const clone = ul.cloneNode(true) as HTMLUListElement;
        clone.setAttribute("aria-hidden", "true");
        logoRef.current.appendChild(clone);
      }
    }
  }, []);

  return (
    <main className="relative flex flex-col justify-center bg-myWhite overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12">
        <div className="text-center">
          <div
            ref={logoRef}
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              style={{
                animationDuration: `${scrollWidth / 25}s`,
              }}
            >
              {infiniteBrands.map((b, index) => {
                return (
                  <li key={index}>
                    <Image src={b.brand} alt={b.alt} width={b.w} height={b.h} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
