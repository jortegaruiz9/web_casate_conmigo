"use client";

import Button from "@/app/components/Button";
import Card from "@/app/components/card/Card";
import Link from "next/link";
import { gtmPageView } from "@/app/lib/gtm";
import { gaPageView } from "@/app/lib/ga";
import { useEffect } from "react";
import { gradoRings } from "@/app/data/gradoRings"; // 👈 Importamos desde /data

export const rings = gradoRings; // 👈 Declaramos rings a partir de los datos externos

export default function ShopTemplate() {
  useEffect(() => {
    const props = {
      page_title: "grado",
    };
    gtmPageView(props);
    gaPageView(window.location.href);
  }, []);

  const categoryTitle = "Grado";

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Breadcrumbs */}
      <nav className="mt-8 mb-4 w-full pl-4 md:pl-36">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/shop" className="text-zinc-600 hover:text-zinc-900">
              Catálogo
            </Link>
          </li>
          <li>
            <span className="mx-2 text-zinc-400">/</span>
            <span className="text-zinc-900">{categoryTitle}</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-black mb-6 font-semibold">
        Nuestros anillos de Grado
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {rings.map((model, index) => (
          <Card key={index} product={model} />
        ))}
      </div>

      <Button />
    </div>
  );
}
