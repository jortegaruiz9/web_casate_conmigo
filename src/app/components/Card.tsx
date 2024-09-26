import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { AdviserContext } from "../context/AdviserContext";
import Modal from "./ModalUi";
import { raleway, monserrat } from "../ui/fonts";
import Form from "./Form";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";

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
  const whatsapp = useContext(AdviserContext) as any;
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [imgProduct, setImgProduct] = useState(product.image);
  const [precio, setPrecio] = useState<number | null>(null);
  const [colorSeleccionado, setColorSeleccionado] = useState("");
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Crear instancia de Audio solo en el cliente
      const audioInstance = new Audio("/sound.MP3");
      setAudio(audioInstance);
    }
  }, []);

  const handleOrderClick = () => {
    if (audio) {
      audio.play();
    }

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
    { icon: "icon-[mdi--shield-check]", text: "Garantía de por vida" },
    { icon: "icon-[mynaui--one-square]", text: "Garantía por un año" },
  ];

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

  const startTour = () => {
    const driverObj = driver({
      nextBtnText: "Siguiente",
      prevBtnText: "Atrás",
      doneBtnText: "Salir",
      showProgress: true,
      steps: [
        {
          element: "#form-options",
          popover: {
            title: "Elección de color",
            description:
              "Haz clic en el material y color que necesitas tus anillo/s",
            side: "top",
            align: "center",
          },
        },
        {
          element: "#prices-product",
          popover: {
            title: "Tu elección cambia el precio",
            description: "Valida el precio según el material",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#garantia-incluido",
          popover: {
            title: "Incluido y Garantía",
            description:
              "Da click en estos iconos y conoce que incluyen tus anillos",
            side: "top",
            align: "center",
          },
        },
        {
          element: "#order-button",
          popover: {
            title: "Botón Comprar",
            description:
              "Haz clic en este botón para comprar mediante un asesor de whatsapp.",
            side: "top",
            align: "start",
          },
        },
      ],
    });

    driverObj.drive();
  };

  useEffect(() => {
    startTour();
  }, []);

  return (
    <div className="text-myZinc md:px-6 ">
      <div className="w-[340px]">
        <Image width={340} height={340} src={imgProduct} alt={product.alt} />
      </div>
      <div
        className={`${monserrat.className} antialiased w-[340px] ring-1 mt-2 ring-zinc-400 `}
      >
        <div className="px-2 py-2 flex flex-col items-between">
          <div className="flex gap-x-2 items-center mb-2 justify-between">
            <div id="form-options">
              <Form
                category={product.category}
                grams={product.grams}
                setPrecio={setPrecio}
                setColorSeleccionado={setColorSeleccionado}
              />
            </div>
            <div id="garantia-incluido">
              <ul
                className="flex text-2xl gap-x-1 text-gray-500 cursor-pointer"
                onClick={() => {
                  setIsCreateModalOpen(true);
                }}
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
            <button
              onClick={() => {
                sendGAEvent({
                  event: "A-buttonComprar",
                  value: "1910",
                });
                sendGTMEvent({
                  event: "buttonComprar",
                  value: "910",
                });
                handleOrderClick();
              }}
              type="button"
              className="bg-white text-center w-40 rounded-md h-12 relative font-sans text-myZinc text-md font-semibold group"
              id="order-button"
            >
              <div className="bg-pink-200 rounded-md h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[152px] z-10 duration-500">
                <span className="icon-[hugeicons--shopping-basket-done-01]"></span>
              </div>
              <p className={`translate-x-5 ${raleway.className} antialiased`}>
                Comprar
              </p>
            </button>
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
            {instructivo.map((icon, index) => (
              <li
                className="flex items-center justify-center space-x-4 text-myZinc"
                key={index}
              >
                <span className={`${icon.icon}`} />
                <h2>{icon.text}</h2>
              </li>
            ))}
          </ul>
          <p className="text-xs text-center text-myZinc">
            -La garantía cubre pequeños rayones y mantenimiento para dar brillo.
          </p>
          <p className="text-xs text-center text-myZinc">
            -No incluye torceduras de ningún tipo. Tampoco nos hacemos
            responsables por piedras minerales extraviadas durante su uso.
          </p>
          <p className="text-xs text-center text-pink-600">
            Los anillos de plata con baño de oro requieren más cuidados por su
            recubrimiento fino. No nos hacemos responsables por daños debido a
            un mal uso.
          </p>
        </div>
      </Modal>
    </div>
  );
}
