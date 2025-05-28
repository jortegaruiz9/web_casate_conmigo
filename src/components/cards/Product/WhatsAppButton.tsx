import React, { useContext } from "react";
import { AdviserContext } from "@/app/context/AdviserContext";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";
import { CategoryType } from "@/app/types/category";

export interface WhatsAppButtonProps {
  model: string;
  selectedSize: number | null;
  selectedSizeWoman?: number | null;
  selectedCity: string;
  tipoOro: "Amarillo" | "Blanco" | "Rosa";
  tipoPlata: "Amarillo" | "Blanco" | "Rosa";
  precioOro: number | null;
  precioPlata: number | null;
  linkProduct?: string;
  category: CategoryType;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  model,
  selectedSize,
  selectedSizeWoman,
  selectedCity,
  tipoOro,
  tipoPlata,
  precioOro,
  precioPlata,
  linkProduct,
  category,
}) => {
  const whatsapp = useContext(AdviserContext) as any;

  const handleOrderClick = () => {
    // Debug logs
    console.log("Debug Info:", {
      category,
      isDoubleRing: category === "matrimonio" || category === "set",
      selectedSize,
      selectedSizeWoman,
    });

    const isDoubleRing = category === "matrimonio" || category === "set";

    let tallaMessage = "";
    if (isDoubleRing) {
      tallaMessage = `• Talla:
    - Talla él: ${selectedSize || "Necesito asesoría"}
    - Talla ella: ${selectedSizeWoman || "Necesito asesoría"}`;
    } else {
      tallaMessage = `• Talla: ${selectedSize || "Necesito asesoría"}`;
    }

    // Determinar el material y precio
    let materialMessage = "";
    if (precioOro !== null && precioOro > 0) {
      materialMessage = `• Material: Oro 18k ${tipoOro}
• Precio: $${precioOro.toFixed(2)}`;
    } else if (precioPlata !== null && precioPlata > 0) {
      materialMessage = `• Material: Plata 925 con baño ${tipoPlata}
• Precio: $${precioPlata.toFixed(2)}`;
    } else {
      materialMessage =
        "• Material: Necesito información sobre materiales y precios";
    }

    const whatsappMessage = `¡Hola! Me interesa el modelo ${model}

${materialMessage}
${tallaMessage}
${
  selectedCity
    ? `• Ciudad de entrega: ${selectedCity}`
    : "• Aún no he seleccionado mi ciudad"
}

➡️ Ver producto: ${linkProduct || "No disponible"}`;

    console.log("Debug - Material Info:", {
      precioOro,
      precioPlata,
      tipoOro,
      tipoPlata,
      materialMessage,
    });

    console.log("Mensaje final:", whatsappMessage);

    const whatsappLink = `https://wa.me/+593${
      whatsapp.adviser.tel
    }?text=${encodeURIComponent(whatsappMessage)}`;

    sendGAEvent({ event: "button_buy_whatsapp", value: "1910" });
    sendGTMEvent({ event: "button_buy_whatsapp", value: "910" });

    window.open(whatsappLink, "_blank");
  };

  return (
    <button
      onClick={handleOrderClick}
      className="w-full py-2 px-4 bg-myZinc text-white flex items-center justify-center rounded-[10px] h-12 gap-2 hover:bg-zinc-700 transition-colors"
    >
      <span className="icon-[ri--whatsapp-fill] text-xl" />
      <span>Comprar por WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
