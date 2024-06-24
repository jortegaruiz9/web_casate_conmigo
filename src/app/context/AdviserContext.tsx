"use client";
import React, { useState, useEffect } from "react";
// Define una interfaz para el objeto adviser
interface Adviser {
  name: string;
  tel: number;
}

// Define el contexto con el tipo de Adviser
export const AdviserContext = React.createContext({});

const adviserDetails: Adviser[] = [
  { name: "s", tel: 995001783 },
  { name: "c", tel: 983335393 },
  { name: "f", tel: 983883197 },
  { name: "j", tel: 984171976 },
  { name: "d", tel: 958606651 },
];

export default function AdviserContextProvider({ children }: any) {
  const [adviser, setAdviser] = useState<Adviser>(() => {
    // Verificar si estamos en el navegador antes de acceder a localStorage
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const storedAdviser = localStorage.getItem("adviser");
      return storedAdviser ? JSON.parse(storedAdviser) : adviserDetails[0];
    } else {
      console.error("El navegador no soporta localStorage.");
      return adviserDetails[0]; // Usa el primer asesor por defecto
    }
  });

  useEffect(() => {
    // Verificar si estamos en el navegador antes de acceder a localStorage
    if (typeof window !== "undefined") {
      let urlParams = new URLSearchParams(window.location.search);
      let ad = urlParams.get("ad");
      let adviserSelect = adviserDetails.find((a) => a.name === ad);
      if (adviserSelect) {
        setAdviser(adviserSelect);
      }
    }
  }, []);

  useEffect(() => {
    // Verificar si estamos en el navegador antes de acceder a localStorage
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      localStorage.setItem("adviser", JSON.stringify(adviser));
    } else {
      console.error(
        "El navegador no soporta localStorage. No se pudo guardar el asesor en el almacenamiento local."
      );
    }
  }, [adviser]);

  return (
    <AdviserContext.Provider value={{ adviser, setAdviser }}>
      {children}
    </AdviserContext.Provider>
  );
}
