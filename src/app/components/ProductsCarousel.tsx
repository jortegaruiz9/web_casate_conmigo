"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Card from "./card/Card";
import { ProductType } from "../types/product";

interface ProductsCarouselProps {
  products: ProductType[];
  maxProducts?: number;
}

const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
  products,
  maxProducts = 8,
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const displayProducts = products.slice(0, maxProducts);

  return (
    <div className="w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
          containScroll: false,
          breakpoints: {
            "(min-width: 1024px)": {
              slidesToScroll: 3,
            },
          },
        }}
        className="relative"
      >
        <div className="flex justify-end mb-4 px-6">
          <div className="hidden lg:flex gap-2">
            <button
              onClick={() => api?.scrollPrev()}
              className="icon-[hugeicons--greater-than] rotate-180 h-5 w-5 text-zinc-600 hover:text-myZinc"
            />
            <button
              onClick={() => api?.scrollNext()}
              className="icon-[hugeicons--greater-than] h-5 w-5 text-zinc-600 hover:text-myZinc"
            />
          </div>
        </div>

        <CarouselContent className="-ml-2">
          {displayProducts.map((product, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] md:basis-1/2 lg:basis-1/3 pl-4"
            >
              <Card product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductsCarousel;
