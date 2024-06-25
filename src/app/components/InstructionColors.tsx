export default function InstructionColors() {
  return (
    <div>
      <ul className="flex flex-col gap-y-2">
        <li className="flex gap-x-4">
          <div className=" w-6 h-6  flex items-center justify-center rounded-full border-2  text-xs bg-gradient-to-br from-gray-300 to-gray-400 border-myZinc text-white">
            P
          </div>
          <p>Plata con baño de oro blanco o amarillo</p>
        </li>
        <li className="flex gap-x-4">
          <div className=" w-6 h-6  flex items-center justify-center rounded-full border-2  text-xs bg-gradient-to-br from-yellow-800 to-yellow-300 border-myZinc text-white">
            A
          </div>
          <p>Oro Amarillo 18K</p>
        </li>
        <li className="flex gap-x-4">
          <div className=" w-6 h-6  flex items-center justify-center rounded-full border-2  text-xs bg-gradient-to-br from-gray-800 to-gray-300 border-myZinc text-white">
            B
          </div>
          <p>Oro Blanco 18K</p>
        </li>
        <li className="flex gap-x-4">
          <div className=" w-6 h-6  flex items-center justify-center rounded-full border-2  text-xs bg-gradient-to-br from-pink-900 to-zinc-400 border-myZinc text-white">
            R
          </div>
          <p>Oro Rosado 18K</p>
        </li>
      </ul>
    </div>
  );
}
