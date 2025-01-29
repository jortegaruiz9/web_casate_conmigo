import React, { useState, useEffect } from "react";

const goldPrice = 118;
const goldWhitePrice = 142;
const goldRosePrice = 142;

let idCounter = 0;
function uniqueId(prefix = "id") {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

interface ColorFormProps {
  category: string;
  grams: number;
  setPrecioPlata: (precio: number | null) => void;
  setPrecioOro: (precio: number | null) => void;
  setTipoPlata: (tipo: "Amarillo" | "Blanco" | "Rosa") => void;
  setTipoOro: (tipo: "Amarillo" | "Blanco" | "Rosa") => void;
}

const ColorForm: React.FC<ColorFormProps> = ({
  category,
  grams,
  setPrecioPlata,
  setPrecioOro,
  setTipoPlata,
  setTipoOro,
}) => {
  const [seleccionado, setSeleccionado] = useState<string>("BañoAmarillo");

  useEffect(() => {
    obtenerPrecios();
    actualizarTipos(seleccionado);
  }, [seleccionado]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeleccionado(event.target.value);
  };

  const obtenerPrecios = () => {
    // Precio plata
    let precioPlata = 0;
    if (seleccionado === "BañoRosa") {
      setPrecioPlata(null); // No disponible en plata
    } else if (category === "compromiso" || category === "cintillo") {
      precioPlata = 80;
      setPrecioPlata(precioPlata);
    } else if (category === "matrimonio") {
      precioPlata = 150;
      setPrecioPlata(precioPlata);
    } else {
      precioPlata = 200;
      setPrecioPlata(precioPlata);
    }

    // Precio oro
    let precioOro: number | null = 0;
    switch (seleccionado) {
      case "BañoAmarillo":
        precioOro = grams * goldPrice;
        break;
      case "BañoBlanco":
        precioOro = grams * goldWhitePrice;
        break;
      case "BañoRosa":
        precioOro = grams * goldRosePrice; // Ahora sí mostrará el precio en oro rosa
        break;
      default:
        precioOro = grams * goldPrice;
    }
    setPrecioOro(precioOro);
  };

  const actualizarTipos = (value: string) => {
    switch (value) {
      case "BañoAmarillo":
        setTipoPlata("Amarillo");
        setTipoOro("Amarillo");
        break;
      case "BañoBlanco":
        setTipoPlata("Blanco");
        setTipoOro("Blanco");
        break;
      case "BañoRosa":
        setTipoPlata("Rosa");
        setTipoOro("Rosa");
        break;
    }
  };

  const idSilver = uniqueId("material");
  const idGold = uniqueId("material");
  const idGoldWhite = uniqueId("material");
  const idGoldRose = uniqueId("material");
  const idSilverYellow = uniqueId("material");

  return (
    <div>
      <form id="formulario" className="flex gap-x-2 items-center">
        {/* Baño Amarillo */}
        <div className="relative">
          <input
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
