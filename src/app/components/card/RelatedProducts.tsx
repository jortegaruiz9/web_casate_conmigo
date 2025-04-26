"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { CategoryType } from "@/app/types/category";
import { rings as matrimonioRings } from "@/app/shop/matrimonio/Template";
import { rings as grado } from "@/app/shop/grado/Template";
import { rings as compromisoRings } from "@/app/shop/compromiso/Template";
import { rings as setRings } from "@/app/shop/set/Template";
import { rings as cintilloRings } from "@/app/shop/cintillos/Template";
import { rings as promesa } from "@/app/shop/promesa/Template";
import { inter } from "@/app/ui/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface RelatedProductsProps {
  currentModel: string;
  category: CategoryType;
}

export default function RelatedProducts({
  currentModel,
  category,
}: RelatedProductsProps) {
  const router = useRouter();

  // Seleccionar el array correcto según la categoría
  const getCategoryRings = () => {
    switch (category) {
      case "matrimonio":
        return matrimonioRings;
      case "compromiso":
        return compromisoRings;
      case "set":
        return setRings;
      case "cintillos":
        return cintilloRings;
      case "grado":
        return grado;
      case "promesa":
        return promesa;
      default:
        return [];
    }
  };

  // Filtrar productos relacionados (misma categoría, diferente modelo)
  const relatedProducts = getCategoryRings()
    .filter((ring) => ring.model !== currentModel)
    .slice(0, 6); // Limitamos a 6 productos relacionados

  if (relatedProducts.length === 0) return null;

  return (
    <div className={`w-full px-8 ${inter.className}`}>
      <h3 className="text-lg font-medium mb-4">Productos relacionados</h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {relatedProducts.map((product) => (
            <CarouselItem
              key={product.model}
              className="md:basis-1/3 lg:basis-1/3"
            >
              <div
                className="cursor-pointer"
                onClick={() => router.push(`/shop/${product.model}`)}
              >
                <div className="relative aspect-square mb-2">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="text-sm text-center">{product.model}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-myWhite hover:bg-myWhite/90 text-myZinc" />
        <CarouselNext className="right-4 bg-myWhite hover:bg-myWhite/90 text-myZinc" />
      </Carousel>
    </div>
  );
}
