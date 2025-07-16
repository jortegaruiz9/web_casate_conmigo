"use client";
import React, { useState, useEffect } from "react";
// Define una interfaz para el objeto adviser
interface Adviser {
  name: string;
  tel: number;
}

// Mejorar la definición del contexto con tipos
interface AdviserContextType {
  adviser: Adviser;
  setAdviser: React.Dispatch<React.SetStateAction<Adviser>>;
}

// Define el contexto con el tipo de Adviser
export const AdviserContext = React.createContext<AdviserContextType>(
  {} as AdviserContextType
);

const adviserDetails: Adviser[] = [
  { name: "s", tel: 995001783 },
  { name: "c", tel: 983335393 },
  { name: "f", tel: 983883197 },
  { name: "j", tel: 984171976 },
  { name: "d", tel: 958606651 },
  { name: "sc", tel: 969089758 },
];

// Función auxiliar para manejar localStorage de forma segura
const getStoredAdviser = (): Adviser | null => {
  try {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem("adviser");
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    return null;
  }
};

export default function AdviserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [adviser, setAdviser] = useState<Adviser>(() => {
    const stored = getStoredAdviser();
    return stored || adviserDetails[0];
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    const ad = urlParams.get("ad");
    if (ad) {
      const adviserSelect = adviserDetails.find((a) => a.name === ad);
      if (adviserSelect) {
        setAdviser(adviserSelect);
      }
    }
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("adviser", JSON.stringify(adviser));
      }
    } catch (error) {
      // Manejar el error silenciosamente
    }
  }, [adviser]);

  return (
    <AdviserContext.Provider value={{ adviser, setAdviser }}>
      {children}
    </AdviserContext.Provider>
  );
}
