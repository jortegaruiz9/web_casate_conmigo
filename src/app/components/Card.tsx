import React, { useContext, useState } from "react";
import { Image } from "@nextui-org/react";
import { AdviserContext } from "../context/AdviserContext";
import Modal from "./ModalUi";
import Form from "./Form";

interface CardProps {
  product: {
    category: string;
    image: string;
    linkProduct: string;
    alt: string;
    model: string;
    color: string;
    grams: number;
    grabado?: boolean;
  };
}

export default function Card({ product }: CardProps) {
  const whatsapp = useContext(AdviserContext) as any;
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [precio, setPrecio] = useState<number | null>(null);
  const [colorSeleccionado, setColorSeleccionado] = useState("");

  const handleOrderClick = () => {
    const whatsappMessage = `¡Hola! Me gustaría ordenar el modelo ${
      product.model
    } en el color ${colorSeleccionado}. Precio: ${
      precio ? precio.toFixed(2) : "No disponible"
    }. Más detalles del producto aquí: ${product.linkProduct}`;
    const whatsappImage = product.image;

    const whatsappLink = `https://wa.me/+593${
      whatsapp.adviser.tel
    }?text=${encodeURIComponent(whatsappMessage)}&media=${encodeURIComponent(
      whatsappImage
    )}`;

    window.open(whatsappLink, "_blank");
  };

  const instructivo = [
    {
      icon: "icon-[fluent--draw-text-24-filled]",
      text: "Precio incluye grabado",
    },
    { icon: "icon-[fluent--pen-off-16-filled]", text: "No incluye grabado" },
    { icon: "icon-[mdi--shield-check]", text: "Garantia de por vida" },
    { icon: "icon-[mynaui--one-square]", text: "Garantia por un año" },
  ];

  return (
    <div>
      <div className="w-[350px]">
        <Image
          isZoomed
          width={1080}
          height={1080}
          src={product.image}
          alt={product.alt}
        />
      </div>
      <div className="shopFont w-[350px] ring-1 mt-2 ring-myZinc">
        <div className="px-2 py-2">
          <div className="flex justify-between">
            <div className="flex gap-x-2 items-center">
              <h4>Opción:</h4>
              <Form
                category={product.category}
                grams={product.grams}
                setPrecio={setPrecio}
                setColorSeleccionado={setColorSeleccionado}
              />
            </div>
            <h2>Modelo: {product.model}</h2>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex">
                <h3>Precio: $</h3>
                <h3>
                  {precio !== null ? `${precio.toFixed(2)}` : "No disponible"}
                </h3>
              </div>
              <div>
                <ul
                  className="flex text-2xl gap-x-2 text-myZinc"
                  onClick={() => {
                    setIsCreateModalOpen(true);
                  }}
                >
                  {product.grabado ? (
                    <li>
                      <span className="icon-[fluent--draw-text-24-filled]" />
                    </li>
                  ) : (
                    <li>
                      <span className="icon-[fluent--pen-off-16-filled]" />
                    </li>
                  )}
                  {colorSeleccionado === "Plata" || colorSeleccionado === "" ? (
                    <li>
                      <span className="icon-[mynaui--one-square]" />
                    </li>
                  ) : (
                    <li>
                      <span className="icon-[mdi--shield-check]" />
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div>
              <button
                onClick={handleOrderClick}
                className="inline-flex overflow-hidden text-white bg-black rounded group"
              >
                <span className="px-3.5 py-3 bg-gradient-to-br from-yellow-500 to-yellow-500 border-myZinc group-hover:from-yellow-700 group-hover:to-yellow-400 flex items-center justify-center">
                  <span className="icon-[hugeicons--shopping-basket-done-01] text-lg" />
                </span>
                <span className="pl-4 pr-5 py-2.5">Comprar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isCreateModalOpen}
        closeModal={() => {
          setIsCreateModalOpen(false);
        }}
      >
        <div className="flex flex-col gap-y-2">
          <p className="text-xs text-center mt-4 text-myZinc">
            Precio con Swarovski, Diamante precios extra...
          </p>
          <ul>
            {instructivo.map((icon, index) => {
              return (
                <li
                  className="flex items-center justify-center space-x-4"
                  key={index}
                >
                  <span className={`${icon.icon}`} />
                  <h2>{icon.text}</h2>
                </li>
              );
            })}
          </ul>
          <p className="text-xs text-center  text-myZinc">
            -La garantía cubre pequeños rayones y mantenimiento para dar brillo.
          </p>
          <p className="text-xs text-center  text-myZinc">
            -No incluye torceduras de ningún tipo. Tampoco nos hacemos
            responsables por piedras minerales extraviadas durante su uso .
          </p>
          <p className="text-xs text-center text-yellow-600">
            Los anillos de plata con baño de oro requieren más cuidados por su
            recubrimiento fino. No nos hacemos responsables por daños debido a
            un mal uso.
          </p>
        </div>
      </Modal>
    </div>
  );
}
