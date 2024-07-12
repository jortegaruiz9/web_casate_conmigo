import React, { useState, useEffect } from "react";

// Definimos cuanto cuesta el oro
const goldPrice = 118;
const goldWhitePrice = 142;
const goldRosePrice = 142;

// Generador simple de IDs únicos
let idCounter = 0;
function uniqueId(prefix = "id") {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

interface FormProps {
  category: string;
  grams: number;
  setPrecio: (precio: number) => void;
  setColorSeleccionado: (color: string) => void;
}

const Form: React.FC<FormProps> = ({
  category,
  grams,
  setPrecio,
  setColorSeleccionado,
}) => {
  const [seleccionado, setSeleccionado] = useState<string>("silver");
  const [precio, setPrecioLocal] = useState<number | null>(null);

  useEffect(() => {
    obtenerPrecio();
    actualizarColorSeleccionado(seleccionado);
  }, [seleccionado]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeleccionado(event.target.value);
  };

  const actualizarColorSeleccionado = (value: string) => {
    switch (value) {
      case "silver":
        setColorSeleccionado("Plata");
        break;
      case "gold":
        setColorSeleccionado("Oro amarillo");
        break;
      case "goldWhite":
        setColorSeleccionado("Oro blanco");
        break;
      case "goldRose":
        setColorSeleccionado("Oro rosa");
        break;
      case "silverYellow":
        setColorSeleccionado("SilverYellow");
        break;
      default:
        setColorSeleccionado("");
        break;
    }
  };

  const obtenerPrecio = () => {
    let price = 0;

    switch (seleccionado) {
      case "silver":
      case "silverYellow":
        if (category === "compromiso" || category === "cintillo") {
          price = 80;
        } else if (category === "matrimonio") {
          price = 150;
        } else {
          price = 200;
        }
        break;
      case "gold":
        price = grams * goldPrice;
        break;
      case "goldWhite":
        price = grams * goldWhitePrice;
        break;
      case "goldRose":
        price = grams * goldRosePrice;
        break;
    }

    setPrecioLocal(price);
    setPrecio(price);
  };

  const idSilver = uniqueId("material");
  const idGold = uniqueId("material");
  const idGoldWhite = uniqueId("material");
  const idGoldRose = uniqueId("material");
  const idSilverYellow = uniqueId("material");

  return (
    <div>
      <form id="formulario" className="flex gap-x-1 items-center">
        <div className="relative">
          <input
            type="radio"
            id={idSilverYellow}
            name="material"
            value="silverYellow"
            checked={seleccionado === "silverYellow"}
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor={idSilverYellow}
            className={`cursor-pointer w-6 h-6 flex items-center justify-center rounded-sm border group relative ${
              seleccionado === "silverYellow"
                ? " border-myZinc "
                : "border-gray-300 "
            }`}
          >
            <div className="w-5 h-5 rounded-sm bg-gradient-to-br from-yellow-500 to-yellow-300 border-myZinc">
              {" "}
              <span
                className="absolute -top-80 left-[260%] -translate-x-[50%] 
                      z-20 origin-left scale-0 px-3 rounded-lg border 
                    border-gray-300 bg-white py-2 text-xs
                      shadow-md transition-all duration-300 ease-in-out 
                      group-hover:scale-100 w-[120px]"
              >
                Plata con baño de oro amarillo
              </span>
            </div>
          </label>
        </div>
        <div className="relative">
          <input
            type="radio"
            id={idSilver}
            name="material"
            value="silver"
            checked={seleccionado === "silver"}
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor={idSilver}
            className={`cursor-pointer w-6 h-6 flex items-center justify-center rounded-sm border group relative ${
              seleccionado === "silver" ? " border-myZinc " : "border-gray-300 "
            }`}
          >
            <span
              className="absolute -top-80 left-[130%] -translate-x-[50%] 
                      z-20 origin-left scale-0 px-3 rounded-lg border 
                    border-gray-300 bg-white py-2 text-xs
                      shadow-md transition-all duration-300 ease-in-out 
                      group-hover:scale-100 w-[120px]"
            >
              Plata con baño de oro blanco
            </span>
            <div className="w-5 h-5 rounded-sm bg-gradient-to-br from-gray-300 to-gray-400 border-myZinc"></div>
          </label>
        </div>

        <div className="relative">
          <input
            type="radio"
            id={idGold}
            name="material"
            value="gold"
            checked={seleccionado === "gold"}
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor={idGold}
            className={`cursor-pointer w-6 h-6 flex items-center justify-center rounded-sm border group relative ${
              seleccionado === "gold" ? " border-myZinc " : "border-gray-300"
            }`}
          >
            <span
              className="absolute -top-80 left-[0%] -translate-x-[50%] 
                      z-20 origin-left scale-0 px-3 rounded-lg border 
                    border-gray-300 bg-white py-2 text-xs
                      shadow-md transition-all duration-300 ease-in-out 
                      group-hover:scale-100 w-[120px]"
            >
              Oro Amarillo 18k
            </span>
            <div className="w-5 h-5 rounded-sm bg-gradient-to-br from-yellow-800 to-yellow-300 border-myZinc"></div>
          </label>
        </div>

        <div className="relative">
          <input
            type="radio"
            id={idGoldWhite}
            name="material"
            value="goldWhite"
            checked={seleccionado === "goldWhite"}
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor={idGoldWhite}
            className={`cursor-pointer w-6 h-6 flex items-center justify-center rounded-sm border group relative${
              seleccionado === "goldWhite"
                ? " border-myZinc "
                : "border-gray-300"
            }`}
          >
            <div className="w-5 h-5 rounded-sm bg-gradient-to-br from-gray-800 to-gray-300 border-myZinc">
              <span
                className="absolute -top-80 left-[-110%] -translate-x-[50%] 
                      z-20 origin-left scale-0 px-3 rounded-lg border 
                    border-gray-300 bg-white py-2 text-xs
                      shadow-md transition-all duration-300 ease-in-out 
                      group-hover:scale-100 w-[120px]"
              >
                Oro Blanco 18k
              </span>
            </div>
          </label>
        </div>
        <div className="relative">
          <input
            type="radio"
            id={idGoldRose}
            name="material"
            value="goldRose"
            checked={seleccionado === "goldRose"}
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor={idGoldRose}
            className={`cursor-pointer w-6 h-6 flex items-center justify-center rounded-sm border group relative  ${
              seleccionado === "goldRose"
                ? " border-myZinc "
                : "border-gray-300"
            }`}
          >
            {" "}
            <span
              className="absolute -top-80 left-[-250%] -translate-x-[50%] 
                z-20 origin-left scale-0 px-3 rounded-lg border 
              border-gray-300 bg-white py-2 text-xs
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100 w-[120px]"
            >
              Oro Rosado 18k
            </span>
            <div className="w-5 h-5 rounded-sm bg-custom-gradient "></div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;
