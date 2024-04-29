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
  { name: "sandra", tel: 995001783 },
  { name: "camila", tel: 983335393 },
  { name: "juan", tel: 983883197 },
];

export default function AdviserContextProvider({ children }: any) {
  const [adviser, setAdviser] = useState<Adviser>(() => {
    // Intenta recuperar el valor del asesor del almacenamiento local, si no existe, usa el primer asesor por defecto
    const storedAdviser = localStorage.getItem("adviser");
    return storedAdviser ? JSON.parse(storedAdviser) : adviserDetails[0];
  });

  useEffect(() => {
    let urlParams = new URLSearchParams(window.location.search);
    let adviserKey = urlParams.get("adviserKey");
    let adviserSelect = adviserDetails.find((a) => a.name === adviserKey);
    if (adviserSelect) {
      setAdviser(adviserSelect);
    }
  }, []);

  useEffect(() => {
    // Guarda el valor del asesor en el almacenamiento local cada vez que cambie
    localStorage.setItem("adviser", JSON.stringify(adviser));
  }, [adviser]);

  return (
    <AdviserContext.Provider value={{ adviser, setAdviser }}>
      {children}
    </AdviserContext.Provider>
  );
}
