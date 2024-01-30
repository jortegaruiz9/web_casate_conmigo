export default function NavProduct() {
  return (
    <div className="mt-10">
      <ul className="flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row gap-x-4 text-lg text-myWhite ">
        <a href="./shop">
          <li className="rounded-xl bg-myZinc px-3 py-1">Cintillo</li>
        </a>
        <a href="./compromiso">
          <li className="rounded-xl bg-myZinc px-3 py-1">Compromiso</li>
        </a>
        <a href="./diamantes">
          <li className="rounded-xl bg-myZinc px-3 py-1">Diamantes</li>
        </a>
        <a href="./matrimonio">
          <li className="rounded-xl bg-myZinc px-3 py-1">Matrimonio</li>
        </a>
      </ul>
    </div>
  );
}
