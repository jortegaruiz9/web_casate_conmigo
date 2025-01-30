"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { montserrat, raleway } from "@/app/ui/fonts";
import { CategoryType } from "@/app/types/category";
import ColorForm from "./ColorForm";
import WhatsAppButton from "./WhatsAppButton";
import Adviser from "./Adviser";
import InstructionModal from "./InstructionModal";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import OptimizedImage from "./OptimizedImage";
import { PRECIOS } from "@/app/config/constants";

const inter = Inter({ subsets: ["latin"] });

interface CardProps {
  product: {
    category: CategoryType;
    image: string;
    imageSilver?: string;
    imageRose?: string;
    linkProduct: string;
    alt: string;
    model: string;
    color: string;
    grams: number;
    grabado?: boolean;
    bestSeller?: boolean;
  };
}

export default function Card({ product }: CardProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const imageMap = {
    Amarillo: product.image,
    Blanco: product.imageSilver ?? product.image,
    Rosa: product.imageRose ?? product.image,
  };

  // Precarga de imágenes al montar el componente
  useEffect(() => {
    const preloadImages = () => {
      Object.values(imageMap).forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    };
    preloadImages();
  }, [product.image, product.imageSilver, product.imageRose]);

  const [imgProduct, setImgProduct] = useState(imageMap.Amarillo);
  const precioPlataInicial =
    product.category === "matrimonio"
      ? PRECIOS.PLATA_MATRIMONIO
      : PRECIOS.PLATA_COMPROMISO;

  const precioOroInicial = product.grams * PRECIOS.ORO_AMARILLO;

  const [precioPlata, setPrecioPlata] = useState<number | null>(
    precioPlataInicial
  );
  const [precioOro, setPrecioOro] = useState<number | null>(precioOroInicial);
  const [tipoPlata, setTipoPlata] = useState<"Amarillo" | "Blanco" | "Rosa">(
    "Amarillo"
  );
  const [tipoOro, setTipoOro] = useState<"Amarillo" | "Blanco" | "Rosa">(
    "Amarillo"
  );
  const router = useRouter();

  useEffect(() => {
    switch (tipoOro) {
      case "Amarillo":
        setImgProduct(product.image);
        break;
      case "Blanco":
        setImgProduct(product.imageSilver ?? product.image);
        break;
      case "Rosa":
        setImgProduct(product.imageRose ?? product.image);
        break;
      default:
        setImgProduct(product.image);
        break;
    }
  }, [tipoOro, product.image, product.imageSilver, product.imageRose]);

  const handleNavigateToProduct = () => {
    router.push(`/shop/${product.model}`);
  };

  const handleTipoOroChange = (tipo: "Amarillo" | "Blanco" | "Rosa") => {
    // Aplicar el cambio de imagen inmediatamente
    requestAnimationFrame(() => {
      setTipoOro(tipo);
      setImgProduct(imageMap[tipo]);
    });
  };

  return (
    <div className="text-myZinc relative aReveal w-[280px]">
      <div>
        {/* Parte de arriba */}
        <div className="relative">
          {product.bestSeller && (
            <div className="absolute top-0 left-3 bg-myZinc z-20 w-3/12 h-[18px] flex justify-center items-center">
              <p className="text-myWhite text-[10px]">Más Vendido</p>
            </div>
          )}
          <div className="w-[280px] h-[365px] bg-[#eae5df] relative">
            <OptimizedImage
              src={imgProduct}
              alt={product.alt}
              className="object-cover cursor-pointer"
              onClick={handleNavigateToProduct}
            />
          </div>
        </div>
        {/* Parte de abajo */}
        <div
          className={`${inter.className} antialiased px-3 pt-3 text-myZinc text-sm flex flex-col gap-y-2`}
        >
          <h2>{product.model}</h2>
          <div className="flex justify-between items-center">
            <h4 className="text-xs text-zinc-600">
              {tipoPlata
                ? `Plata 925 & Baño ${tipoPlata}`
                : "No disponible en plata"}
            </h4>
            <p>
              {precioPlata !== null
                ? `$${precioPlata.toFixed(2)}`
                : "No disponible"}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="text-xs text-zinc-600">Oro 18k {tipoOro}</h4>
            <p>
              $
              {precioOro !== null ? `${precioOro.toFixed(2)}` : "No disponible"}
            </p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <ColorForm
              product={product}
              category={product.category}
              grams={product.grams}
              setPrecioPlata={setPrecioPlata}
              setPrecioOro={setPrecioOro}
              setTipoPlata={setTipoPlata}
              setTipoOro={handleTipoOroChange}
            />
            <button onClick={handleNavigateToProduct}>
              <span className="icon-[hugeicons--shopping-basket-done-01] text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
