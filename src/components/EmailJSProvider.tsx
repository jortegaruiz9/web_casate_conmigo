"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function EmailJSProvider() {
  useEffect(() => {
    // Verificar si EmailJS ya está disponible
    if (typeof window !== "undefined" && window.emailjs) {
      console.log("EmailJS ya está disponible");
      return;
    }
  }, []);

  return (
    <Script
      id="emailjs-global"
      strategy="afterInteractive"
      src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      onLoad={() => {
        console.log("EmailJS script cargado globalmente");
        try {
          if (typeof window !== "undefined" && window.emailjs) {
            // Inicializar EmailJS con el user_id según la documentación oficial
            window.emailjs.init("7g9Eo75qyHjgNk4Ai");
            console.log("EmailJS inicializado correctamente globalmente");
          }
        } catch (error) {
          console.error("Error al inicializar EmailJS globalmente:", error);
        }
      }}
      onError={() => {
        console.error("Error al cargar el script de EmailJS globalmente");
      }}
    />
  );
}
