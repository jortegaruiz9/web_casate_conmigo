import React, { useState, useEffect, useId } from "react";
import { PRECIOS } from "@/app/config/constants";
import { BañoType } from "@/app/types/forms";
import { CategoryType } from "@/app/types/category";

interface ColorFormProps {
  category: CategoryType;
  grams: number;
  setPrecioPlata: (precio: number | null) => void;
  setPrecioOro: (precio: number | null) => void;
  setTipoPlata: (tipo: "Amarillo" | "Blanco" | "Rosa") => void;
  setTipoOro: (tipo: "Amarillo" | "Blanco" | "Rosa") => void;
  product: any;
}

/**
 * Componente para seleccionar el color y tipo de material de una joya
 * @param {ColorFormProps} props - Propiedades del componente
 * @returns {JSX.Element} Formulario de selección de color
 */
const ColorForm: React.FC<ColorFormProps> = ({
  category,
  grams,
  setPrecioPlata,
  setPrecioOro,
  setTipoPlata,
  setTipoOro,
}) => {
  const [seleccionado, setSeleccionado] = useState<BañoType>("BañoAmarillo");

  // Inicializar precios al montar el componente
  useEffect(() => {
    // Precio plata inicial según la categoría
    let precioPlataInicial;
    switch (category) {
      case "matrimonio":
        precioPlataInicial = PRECIOS.PLATA_MATRIMONIO;
        break;
      case "set":
        precioPlataInicial = PRECIOS.PLATA_SET;
        break;
      default:
        precioPlataInicial = PRECIOS.PLATA_COMPROMISO;
    }
    setPrecioPlata(precioPlataInicial);

    // Precio oro inicial
    const precioOroInicial = grams * PRECIOS.ORO_AMARILLO;
    setPrecioOro(precioOroInicial);
  }, []); // Solo se ejecuta al montar el componente

  // Precalcular precios según la categoría
  const preciosPlata = {
    BañoAmarillo: (() => {
      switch (category) {
        case "matrimonio":
          return PRECIOS.PLATA_MATRIMONIO;
        case "set":
          return PRECIOS.PLATA_SET;
        default:
          return PRECIOS.PLATA_COMPROMISO;
      }
    })(),
    BañoBlanco: (() => {
      switch (category) {
        case "matrimonio":
          return PRECIOS.PLATA_MATRIMONIO;
        case "set":
          return PRECIOS.PLATA_SET;
        default:
          return PRECIOS.PLATA_COMPROMISO;
      }
    })(),
    BañoRosa: null,
  };

  const preciosOro = {
    BañoAmarillo: grams * PRECIOS.ORO_AMARILLO,
    BañoBlanco: grams * PRECIOS.ORO_BLANCO,
    BañoRosa: grams * PRECIOS.ORO_ROSA,
  };

  const tipoMap = {
    BañoAmarillo: "Amarillo",
    BañoBlanco: "Blanco",
    BañoRosa: "Rosa",
  } as const;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as BañoType;
    if (["BañoAmarillo", "BañoBlanco", "BañoRosa"].includes(value)) {
      requestAnimationFrame(() => {
        setSeleccionado(value);
        setPrecioPlata(preciosPlata[value]);
        setPrecioOro(preciosOro[value]);
        const nuevoTipo = tipoMap[value];
        setTipoPlata(nuevoTipo);
        setTipoOro(nuevoTipo);
      });
    }
  };

  const baseId = useId();
  const idSilver = `silver-${baseId}`;
  const idGold = `gold-${baseId}`;
  const idGoldWhite = `gold-white-${baseId}`;
  const idGoldRose = `gold-rose-${baseId}`;
  const idSilverYellow = `silver-yellow-${baseId}`;

  return (
    <div role="group" aria-labelledby="color-selection">
      <h2 id="color-selection" className="sr-only">
        Selección de Color
      </h2>
      <form className="flex gap-x-2 items-center">
        {/* Baño Amarillo */}
        <div className="relative">
          <input
            aria-label="Baño Amarillo"
            type="radio"
            id={idSilverYellow}
            name="material"
            value="BañoAmarillo"
            checked={seleccionado === "BañoAmarillo"}
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor={idSilverYellow}
            className={`cursor-pointer w-5 h-5 flex items-center justify-center rounded-full border ${
              seleccionado === "BañoAmarillo"
                ? "border-myZinc"
                : "border-[#eae5df]"
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-yellow-800 to-yellow-300 border-myZinc"></div>
          </label>
        </div>
        {/* Baño Blanco */}
        <div className="relative">
          <input
            type="radio"
            id={idSilver}
            name="material"
            value="BañoBlanco"
            checked={seleccionado === "BañoBlanco"}
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor={idSilver}
            className={`cursor-pointer w-5 h-5 flex items-center justify-center rounded-full border ${
              seleccionado === "BañoBlanco"
                ? "border-myZinc"
                : "border-[#eae5df]"
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-myZinc"></div>
          </label>
        </div>
        {/* Baño Rosa */}
        <div className="relative">
          <input
            type="radio"
            id={idGoldRose}
            name="material"
            value="BañoRosa"
            checked={seleccionado === "BañoRosa"}
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor={idGoldRose}
            className={`cursor-pointer w-5 h-5 flex items-center justify-center rounded-full border ${
              seleccionado === "BañoRosa" ? "border-myZinc" : "border-[#eae5df]"
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-custom-gradient"></div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default ColorForm;
