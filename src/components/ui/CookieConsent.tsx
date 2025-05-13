"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Verificar si ya existe el consentimiento
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");

    // Actualizar consentimiento de GA
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
    });

    // Habilitar GA
    window[`ga-disable-${process.env.NEXT_PUBLIC_GA_ID}`] = false;

    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    window.dataLayer?.push({
      event: "cookie_consent_update",
      cookie_consent: false,
      analytics_storage: "denied",
      ad_storage: "denied",
    });
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700">
          Utilizamos cookies para mejorar tu experiencia. Al continuar
          navegando, aceptas nuestra política de cookies.
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleAccept}
            className="bg-myZinc text-white px-4 py-2 rounded-md text-sm hover:bg-myZinc/90"
          >
            Aceptar
          </button>
          <button
            onClick={declineCookies}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-300"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
