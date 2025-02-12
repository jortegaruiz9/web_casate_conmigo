import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { AdviserContext } from "../context/AdviserContext";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "¡Hola! Me gustaría obtener más información sobre los anillos.",
  className,
}) => {
  const { adviser } = useContext(AdviserContext);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/51${adviser.tel}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      variant="whatsapp"
      size="lg"
      className={className}
      onClick={handleWhatsAppClick}
    >
      <Button variant="whatsapp" size="rounded"></Button>
    </Button>
  );
};

export default WhatsAppButton;
