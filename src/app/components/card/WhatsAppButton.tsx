import React, { useContext } from "react";
import { AdviserContext } from "@/app/context/AdviserContext";
import { raleway } from "@/app/ui/fonts";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";

interface WhatsAppButtonProps {
  product: {
    model: string;
    linkProduct: string;
  };
  colorSeleccionado: string;
  precio: number | null;
  audio: HTMLAudioElement | null;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  product,
  colorSeleccionado,
  precio,
  audio,
}) => {
  const whatsapp = useContext(AdviserContext) as any;

  const handleOrderClick = () => {
    if (audio) {
      audio.play();
    }

    const whatsappMessage = `¡Hola! Me gustaría ordenar el modelo ${
      product.model
    } en el color ${colorSeleccionado}. Precio: ${
      precio ? precio.toFixed(2) : "No disponible"
    }. Más detalles del producto aquí: ${product.linkProduct}`;
    const whatsappImage = product.linkProduct;

    const whatsappLink = `https://wa.me/+593${
      whatsapp.adviser.tel
    }?text=${encodeURIComponent(whatsappMessage)}&media=${encodeURIComponent(
      whatsappImage
    )}`;

    sendGAEvent({
      event: "A-buttonComprar",
      value: "1910",
    });
    sendGTMEvent({
      event: "buttonComprar",
      value: "910",
    });

    window.open(whatsappLink, "_blank");
  };

  return (
    <button
      onClick={handleOrderClick}
      type="button"
      className="bg-white text-center w-40 rounded-md h-12 relative font-sans text-myZinc text-md font-semibold group"
      id="order-button"
    >
      <div className="bg-[#e1b0ac] text-white rounded-md h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] md:group-hover:w-[152px] z-10 duration-500">
        <span className="icon-[hugeicons--shopping-basket-done-01]"></span>
      </div>
      <p className={`translate-x-5 ${raleway.className} antialiased`}>
        Comprar
      </p>
    </button>
  );
};

export default WhatsAppButton;
