import Image from "next/image";
import { inter } from "../ui/fonts";
type Props = {
  adviser: {
    image: string;
    name: string;
    job: string;
    whatsapp: string;
    linkedin: string;
  };
};

export default function CardAdviser({ adviser }: Props) {
  return (
    <div className="w-[100%] h-[200px] lg:h-[280px] flex items-end relative shadow-lg">
      <Image
        className="object-cover w-full h-full"
        src={adviser.image}
        alt="imagen de asesor"
        width={270}
        height={340}
      />
      <div
        className={`${inter.className} antialiased flex flex-col absolute text-[10px] gap-y-1 lg:gap-y-2 pl-3 pb-3`}
      >
        <div>
          <h2 className="font-bold lg:text-[16px]">{adviser.name}</h2>
          <p className="text-[9px] lg:text-[12px]">{adviser.job}</p>
        </div>
        <div className="flex gap-x-2 items-center text-sm lg:text-[18px]">
          <a href={adviser.linkedin} target="_blank">
            <span className="icon-[ph--linkedin-logo-bold] hover:text-gray-300 transition-all hover:scale-125" />
          </a>
          <a href={adviser.whatsapp} target="_blank">
            <span className="icon-[flowbite--whatsapp-solid] hover:text-gray-300 transition-all hover:scale-125" />
          </a>
        </div>
      </div>
    </div>
  );
}
