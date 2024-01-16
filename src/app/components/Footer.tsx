import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <hr className=" border-myWhite "></hr>
      <div className="bg-myZinc flex justify-center">
        <div className="w-56 p-3">
          <Image
            alt="Cásate Conmigo Logo"
            src="/casateConmigo.png"
            width={3000}
            height={3000}
          />
        </div>
      </div>
    </div>
  );
}
