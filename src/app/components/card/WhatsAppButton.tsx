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
      tallaMessage = `• Tallas:
    - Talla él: ${selectedSize || "Necesito asesoría"}
    - Talla ella: ${selectedSizeWoman || "Necesito asesoría"}`;
    } else {
      tallaMessage = `• Talla: ${selectedSize || "Necesito asesoría"}`;
    }

    const whatsappMessage = `¡Hola! Me interesa el modelo ${model}

• Color: ${tipoOro}
${tallaMessage}
${
  selectedCity
    ? `• Ciudad de entrega: ${selectedCity}`
    : "• Aún no he seleccionado mi ciudad"
}

➡️ Ver producto: ${linkProduct || "No disponible"}`;

    console.log("Mensaje final:", whatsappMessage);

    const whatsappLink = `https://wa.me/+593${
      whatsapp.adviser.tel
    }?text=${encodeURIComponent(whatsappMessage)}`;

    sendGAEvent({ event: "A-buttonComprar", value: "1910" });
    sendGTMEvent({ event: "buttonComprar", value: "910" });

    window.open(whatsappLink, "_blank");
  };

  return (
    <button
      onClick={handleOrderClick}
      className="w-full py-3 px-4 bg-myZinc text-white flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors mt-6"
    >
      <span className="icon-[ri--whatsapp-fill] text-xl" />
      <span>Comprar por WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;

{
  /* Antiguo diseño de boton 
  
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
  
  */
}
