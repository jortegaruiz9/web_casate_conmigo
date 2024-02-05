interface CardProps {
  info: {
    content: string;
    img: string;
    alt: string;
    tema: string;
    title: string;
    title2: string;
    color: string;
    number: number;
  };
}

export default function CardInfo({ info }: CardProps) {
  return (
    <div className="sm:flex sm:flex-row-reverse">
      <div className=" h-[260px] sm:h-[500px] w-full relative flex items-end sm:justify-center">
        <div className="text-xs absolute text-white bg-gradient-to-b from-transparent via-myZinc to-myZinc h-[160px] hidden sm:block lg:text-sm lg:pl-2 xl:pl-4">
          <p className="m-auto w-11/12">{info.content}</p>
        </div>
        <div className="bg-gradient-to-b from-transparent via-transparent-300 to-myWhite absolute z-10 w-full h-[100px] sm:hidden"></div>
        <img
          src={info.img}
          alt={info.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-[300px] sm:h-[500px] w-full flex justify-center items-center relative ">
        <h4 className=" text-white z-10 text-[330px] font-bold absolute left-0 pl-2 hidden sm:block lg:pl-6 xl:pl-20 mb-8 ">
          {info.number}
        </h4>
        <div className="px-8 flex flex-col gap-y-2 absolute z-10 lg:px-14 xl:px-32 text-myZinc">
          <h4>{info.tema}</h4>
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl">
            {info.title} <span className={`${info.color}`}>{info.title2}</span>
          </h2>
          <p className="text-xs sm:hidden">{info.content}</p>
          <h4 className="hidden sm:flex">
            Todo lo que debes saber{" "}
            <span className="icon-[material-symbols--arrow-forward-rounded] text-2xl text-myZinc" />
          </h4>
        </div>
      </div>
    </div>
  );
}
