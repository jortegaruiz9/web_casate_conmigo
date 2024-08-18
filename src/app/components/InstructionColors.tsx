export default function InstructionColors() {
  return (
    <div className="flex flex-col items-center gap-y-10 text-myZinc">
      <div className="flex flex-col text-center">
        <h2 className="text-2xl font-bold">Elige el material</h2>
        <p className="text-center mt-2">
          Seleccione los botones del modelo para cambiar color y precio.
        </p>
        <ul className="flex gap-x-2 justify-center mt-4">
          <li>
            <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-yellow-500 to-yellow-300 border-myZinc"></div>
          </li>
          <li>
            <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-gray-300 to-gray-400 border-myZinc"></div>
          </li>
          <li>
            <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-yellow-800 to-yellow-300 border-myZinc"></div>
          </li>
          <li>
            <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-gray-800 to-gray-300 border-myZinc"></div>
          </li>
          <li>
            <div className="w-6 h-6 rounded-sm bg-custom-gradient"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
