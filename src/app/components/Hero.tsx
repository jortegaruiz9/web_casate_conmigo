"use client";
import Image from "next/image";

const materials = [
  { name: "Oro Amarillo", detail: "18 Kilates" },
  { name: "Oro Blanco", detail: "18 Kilates" },
  { name: "Oro Rosa", detail: "18 Kilates" },
  { name: "Diamond", detail: "Gia" },
];

const article = {
  title: "El anillo",
  title2: "perfecto",
  textDecoration: "Oro18k",
  paragraph:
    "Descubre el anillo de tus sueños, diseñado a medida y con los más exquisitos materiales y acabados. Pensado exclusivamente para nuestros clientes VIP en todo el Ecuador, porque tu elegancia merece lo extraordinario.",
  boton: "Ir al Catálogo",
  detail: "Modelos / Precios",
};

export default function Hero() {
  return (
    <div>
      {/* div padre*/}
      <div className="sm:flex">
        <div className="w-full px-10 flex flex-col py-10 gap-y-14 xl:pl-20">
          <article className="text-sm text-myZinc flex flex-col gap-y-10">
            <div className="text-5xl font-bold lg:text-6xl">
              <h1>{article.title}</h1>
              <h2>
                {article.title2}{" "}
                <span className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-600 via-yellow-400 to-zinc-800 lg:text-4xl">
                  {article.textDecoration}
                </span>
              </h2>
            </div>
            <p className=" xl:w-8/12 ">{article.paragraph}</p>
            <div className="flex items-center xl:justify-start gap-4 text-sm">
              <a
                href="https://drive.google.com/file/d/16F51hw6q29nuomOuLaDSJxlWXl1N-it3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-myZinc rounded-xl group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-neutral-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-myWhite"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-neutral-500 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-myWhite font-bold">
                  {article.boton}
                </span>
              </a>
              <h3>{article.detail}</h3>
            </div>
          </article>

          <div className="flex items-end justify-between">
            <div className=" max-w-[200px] lg:max-w-[350px]">
              <Image
                src="/portada-izquierda.png"
                alt="imagen anillo diamante"
                width={2000}
                height={2000}
              />
            </div>
            <div className="text-4xl text-myZinc">
              <ul className="flex">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/casateconmigo.ecuador/"
                    target="_blank"
                  >
                    <span className="icon-[mdi--facebook]" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://instagram.com/jortega.jewerly?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
                    target="_blank"
                  >
                    <span className="icon-[mdi--instagram]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* lado derecho */}
        <div className=" py-10 w-full bg-gradient-to-b from-myZinc via-myZinc to-neutral-800">
          <div className="flex justify-between items-start">
            <div className="max-w-[150px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[200px]">
              <Image
                src="/portada-derecha.png"
                alt="imagen anillo diamante"
                width={2000}
                height={2000}
              />
            </div>
            <a
              href="https://maps.app.goo.gl/NGMc6mL8N5qEDu6K9"
              rel="noopener noreferrer"
              target="_blank"
              className="bg-myWhite rounded-lg px-6 py-2 flex flex-col items-center justify-center mr-4 text-myZinc xl:mr-20"
            >
              <div>
                <span className="icon-[material-symbols--star]" />
                <span className="icon-[material-symbols--star]" />
                <span className="icon-[material-symbols--star]" />
                <span className="icon-[material-symbols--star]" />
                <span className="icon-[material-symbols--star-half]" />
              </div>
              <div className="flex items-center gap-2">
                <h4>Google Maps</h4>
                <span className="icon-[solar--map-arrow-right-bold-duotone] text-myZinc" />
              </div>
            </a>
          </div>
          <div>
            <ul className="flex text-xs justify-end gap-4 text-myWhite mr-4 sm:mt-48 md:mt-10 lg:mt-0 xl:mr-20">
              {materials.map((obj, index) => {
                const indexMaterials = `custom_${index}`;
                return (
                  <li key={indexMaterials}>
                    <h6 className="text-md lg:text-xl">{obj.name}</h6>
                    <p className="text-xs text-neutral-500 lg:text-md">
                      {obj.detail}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
