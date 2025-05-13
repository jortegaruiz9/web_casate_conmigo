"use client";

import Card from "@/components/cards/Product/Card";
import Link from "next/link";
import { gtmPageView } from "@/app/lib/analytics";
import { gaPageView } from "@/app/lib/analytics";
import { useEffect } from "react";
import { setRings } from "@/app/data/setRings"; // 👈 Importamos los datos desde /data/setRings

export const rings = setRings; // 👈 Declaramos rings desde la importación

export default function ShopTemplate() {
  useEffect(() => {
    const props = {
      page_title: "anillos de boda",
    };
    gtmPageView(props);
    gaPageView(window.location.href);
  }, []);

  const categoryTitle = "Set";

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
        Nuestros anillos de Compromiso + Matrimonio
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mb-20">
        {rings.map((model, index) => (
          <Card key={index} product={model} />
        ))}
      </div>
    </div>
  );
}
