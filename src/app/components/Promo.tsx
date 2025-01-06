"use client";
import { useContext } from "react";
import { AdviserContext } from "../context/AdviserContext";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";

type Props = {
  elements: { text: string; buttonText: string }[];
};

export default function Promo({ elements }: Props) {
  const whatsapp = useContext(AdviserContext) as any;
  const handleOrderClick = () => {
    // Construir el enlace de WhatsApp con la información del producto y la imagen
    const whatsappMessage = `Me interesa conocer más sobre sus anillos, pude revisar su web`;

    // Reemplaza '1234567890' con tu número de teléfono de WhatsApp
    const whatsappLink = `https://wa.me/+593${
      whatsapp.adviser.tel
    }?text=${encodeURIComponent(whatsappMessage)}`;

    // Abrir el enlace en una nueva pestaña
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <div className="bg-[#e1b0ac] h-[55px] flex items-center justify-center text-myZinc gap-2">
        <h3>Adquiere tu anillo.</h3>
        <button
          className="flex items-center gap-1"
          onClick={() => {
            sendGAEvent({
              event: "A-arrowWhatsapp",
              value: "1789",
            });
            sendGTMEvent({
              event: "arrowWhatsapp",
              value: "789",
            });
            handleOrderClick();
          }}
        >
          Agendar una cita
          <span className="icon-[material-symbols--arrow-forward-rounded] text-3xl text-myZinc hover:scale-110 transition-all" />
        </button>
      </div>
    </div>
  );
}
