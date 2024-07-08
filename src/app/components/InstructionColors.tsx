import Image from "next/image";

export default function InstructionColors() {
  return (
    <div className="flex flex-col items-center gap-y-10 text-myZinc">
      <div className="flex flex-col text-center">
        <h2 className="text-2xl font-bold">Elige el material</h2>
        <p className="text-center mt-2">
          Puedes seleccionar los botones del modelo para cambiar el precio según
          el material que elijas.
        </p>
      </div>
      <ul className="flex flex-col gap-y-2">
        <li className="flex gap-x-4">
          <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-yellow-500 to-yellow-300 border-myZinc"></div>
          <p>Plata con baño de Oro Amarillo</p>
        </li>
        <li className="flex gap-x-4">
          <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-gray-300 to-gray-400 border-myZinc"></div>
          <p>Plata con baño de Oro Blanco</p>
        </li>
        <li className="flex gap-x-4">
          <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-yellow-800 to-yellow-300 border-myZinc"></div>
          <p>Oro Amarillo 18K</p>
        </li>
        <li className="flex gap-x-4">
          <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-gray-800 to-gray-300 border-myZinc"></div>
          <p>Oro Blanco 18K</p>
        </li>
        <li className="flex gap-x-4">
          <div className="w-6 h-6 rounded-sm bg-custom-gradient"></div>
          <p>Oro Rosado 18K</p>
        </li>
      </ul>
    </div>
  );
}
