"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { montserrat, raleway } from "@/app/ui/fonts";
import ColorForm from "./ColorForm";
import WhatsAppButton from "./WhatsAppButton";
import Adviser from "./Adviser";
import InstructionModal from "./InstructionModal";

interface CardProps {
  product: {
    category: string;
    image: string;
    imageSilver?: string;
    imageRose?: string;
    linkProduct: string;
    alt: string;
    model: string;
    color: string;
    grams: number;
    grabado?: boolean;
  };
}

export default function Card({ product }: CardProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [imgProduct, setImgProduct] = useState(product.image);
  const [precio, setPrecio] = useState<number | null>(null);
  const [colorSeleccionado, setColorSeleccionado] = useState("");
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const audioInstance = new Audio("/sound.MP3");
      setAudio(audioInstance);

      // Check if this product is liked
      const likedProducts = JSON.parse(
        localStorage.getItem("likedProducts") || "[]"
      );
      setIsLiked(likedProducts.includes(product.model));
    }
  }, [product.model]);

  useEffect(() => {
    switch (colorSeleccionado) {
      case "SilverYellow":
      case "Oro amarillo":
        setImgProduct(product.image);
        break;
      case "Plata":
      case "Oro blanco":
        setImgProduct(product.imageSilver ?? product.image);
        break;
      case "Oro rosa":
        setImgProduct(product.imageRose ?? product.image);
        break;
      default:
        setImgProduct(product.image);
        break;
    }
  }, [
    colorSeleccionado,
    product.image,
    product.imageSilver,
    product.imageRose,
  ]);

  const handleLike = () => {
    const likedProducts = JSON.parse(
      localStorage.getItem("likedProducts") || "[]"
    );
    if (isLiked) {
      const updatedLikes = likedProducts.filter(
        (model: string) => model !== product.model
      );
      localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
    } else {
      likedProducts.push(product.model);
      localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="text-myZinc md:px-6 relative aReveal">
      <button
        onClick={handleLike}
        className="absolute flex top-4 right-4 md:right-8 lg:right-10 z-10 bg-myWhite rounded-full p-2 shadow-md"
      >
        {isLiked ? (
          <span className="icon-[mdi--heart] text-[#ac2b2f] text-2xl" />
        ) : (
          <span className="icon-[mynaui--heart] text-gray-500 text-2xl" />
        )}
      </button>
      <div className="w-[340px]">
        <Image width={340} height={340} src={imgProduct} alt={product.alt} />
      </div>
      <div
        className={`${montserrat.className} antialiased w-[340px] ring-1 mt-2 ring-zinc-400`}
      >
        <div className="px-2 py-2 flex flex-col items-between">
          <div className="flex gap-x-2 items-center mb-2 justify-between">
            <div id="form-options">
              <ColorForm
                category={product.category}
                grams={product.grams}
                setPrecio={setPrecio}
                setColorSeleccionado={setColorSeleccionado}
              />
            </div>
            <div id="garantia-incluido">
              <ul
                className="flex text-2xl gap-x-1 text-gray-500 cursor-pointer"
                onClick={() => setIsCreateModalOpen(true)}
              >
                {product.grabado ? (
                  <li>
                    <span className="icon-[fluent--draw-text-24-filled] hover:text-myZinc" />
                  </li>
                ) : (
                  <li>
                    <span className="icon-[fluent--pen-off-16-filled] hover:text-myZinc" />
                  </li>
                )}
                {colorSeleccionado === "Plata" ||
                colorSeleccionado === "SilverYellow" ? (
                  <li>
                    <span className="icon-[mynaui--one-square] hover:text-myZinc" />
                  </li>
                ) : (
                  <li>
                    <span className="icon-[mdi--shield-check] hover:text-myZinc" />
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div id="prices-product">
              <div className="flex justify-between">
                <h2>
                  Modelo: <span className="font-bold">{product.model}</span>
                </h2>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex text-sm text-gray-600">
                    <h3>Precio: $</h3>
                    <h3>
                      {precio !== null
                        ? `${precio.toFixed(2)}`
                        : "No disponible"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <WhatsAppButton
              product={product}
              colorSeleccionado={colorSeleccionado}
              precio={precio}
              audio={audio}
            />
          </div>
        </div>
      </div>

      <InstructionModal
        isOpen={isCreateModalOpen}
        closeModal={() => setIsCreateModalOpen(false)}
      />

      <Adviser />
    </div>
  );
}
