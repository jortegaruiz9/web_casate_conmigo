export default function InstructionColors() {
  return (
    <div className="flex flex-col items-center gap-y-10">
      <div className="flex flex-col text-center">
        <h2 className="text-2xl font-bold text-myZinc">Elige el material</h2>
        <p className="text-center">
          Puedes seleccionar los botones del modelo para cambiar el precio según
          el material que elijas.
        </p>
      </div>
      <ul className="flex flex-col gap-y-2">
        <li className="flex gap-x-4">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-gray-300 to-gray-400 border-myZinc"></div>
          <p>Plata con baño de oro blanco o amarillo</p>
        </li>
        <li className="flex gap-x-4">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-yellow-800 to-yellow-300 border-myZinc"></div>
          <p>Oro Amarillo 18K</p>
        </li>
        <li className="flex gap-x-4">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-gray-800 to-gray-300 border-myZinc"></div>
          <p>Oro Blanco 18K</p>
        </li>
        <li className="flex gap-x-4">
          <div className="w-6 h-6 rounded-md">
            <img
              className="rounded-md"
              src="https://media.istockphoto.com/id/949916150/vector/pink-rose-gradients-collection-for-design.jpg?s=612x612&w=0&k=20&c=AcYe3JbsjsDcLsLsOcbDGGYEdxnaeqFhgaPSFdUxzkQ="
            ></img>
          </div>
          <p>Oro Rosado 18K</p>
        </li>
      </ul>
    </div>
  );
}
