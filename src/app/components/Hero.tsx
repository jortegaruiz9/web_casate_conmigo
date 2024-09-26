"use client";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import { AdviserContext } from "../context/AdviserContext";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

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
    "Cásate Conmigo es una joyería ecuatoriana especializada en la confección de anillos de boda personalizados en oro 18k y plata 925. Realiza tus compras en nuestra tienda en Quito y disfruta de envíos rápidos a todo Ecuador.",
  boton: "Ir al Catálogo",
  detail: "Anillos de boda / Precios",
};

let socialLinks = [
  {
    name: "s",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593995001783&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    instagram:
      "https://www.instagram.com/casate_conmigo777?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "f",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593983883197&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    instagram:
      "https://www.instagram.com/casateconmigo.ec?igsh=Y2pxam9oOG5leDVu",
  },
  {
    name: "c",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593983335393&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    instagram: "https://www.instagram.com/ca.camicc/",
  },
  {
    name: "j",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593984171976&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    instagram:
      "https://www.instagram.com/casate_conmigo.jf?igsh=MXF0NmZzcDA5Z2w3",
  },
  {
    name: "d",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593958606651&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    instagram:
      "https://www.instagram.com/casate.conmigo_so?igsh=OTZjMnZzMjhzNmk%3D&utm_source=qr",
  },
];

export default function Hero() {
  const adviserName = useContext(AdviserContext) as any;
  const adviser = adviserName.adviser.name;
  const [socialMedia, setSocialMedia] = useState(socialLinks[0]);

  useEffect(() => {
    if (adviser === "f") {
      setSocialMedia(socialLinks[1]);
    } else if (adviser === "c") {
      setSocialMedia(socialLinks[2]);
    } else if (adviser === "j") {
      setSocialMedia(socialLinks[3]);
    } else if (adviser === "d") {
      setSocialMedia(socialLinks[4]);
    } else {
      setSocialMedia(socialLinks[0]);
    }
  }, [adviser]);
  return (
    <div>
      {/* div padre*/}
      <div className="sm:flex">
        <div className="w-full px-10 flex flex-col py-10 gap-y-14 xl:pl-20">
          <article className="text-sm text-myZinc flex flex-col gap-y-10">
            <div className="text-5xl  lg:text-6xl font-bold">
              <h2>{article.title}</h2>
              <h2>
                {article.title2}{" "}
                <span className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-600 lg:text-4xl font-bold">
                  {article.textDecoration}
                </span>
              </h2>
            </div>
            <h2 className=" xl:w-8/12 ">{article.paragraph}</h2>
            <div className="flex items-center xl:justify-start gap-4 text-sm">
              <Link
                onClick={() => {
                  sendGAEvent({
                    event: "A-Ir al catalogo",
                    value: "1456",
                  });
                  sendGTMEvent({
                    event: "Ir al catalogo",
                    value: "456",
                  });
                }}
                href="./shop"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-myZinc rounded-xl group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-neutral-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-myWhite"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-neutral-500 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-myWhite font-bold ">
                  {article.boton}
                </span>
              </Link>
              <Link
                href="./shop"
                rel="noopener noreferrer"
                onClick={() => {
                  sendGAEvent({
                    event: "A-h3 ir al catalogo",
                    value: "2205",
                  });
                  sendGTMEvent({
                    event: "h3 ir al catalogo",
                    value: "0309",
                  });
                }}
              >
                <h1>{article.detail}</h1>
              </Link>
            </div>
          </article>

          <div className="flex items-end justify-between">
            <div className=" max-w-[200px] lg:max-w-[350px]">
              <Image
                src="/portada-izquierda.png"
                alt="anillos de boda"
                title="quito"
                width={200}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-4xl text-myZinc">
              <ul className="flex gap-x-2 justify-center items-center">
                <li>
                  <a
                    onClick={() => {
                      sendGAEvent({
                        event: "A-iconInstagram",
                        value: "345",
                      });
                      sendGTMEvent({
                        event: "iconInstagram",
                        value: "345",
                      });
                    }}
                    className="group relative"
                    rel="noopener noreferrer"
                    href={socialMedia.instagram}
                    target="_blank"
                  >
                    <span className="icon-[radix-icons--instagram-logo] group-hover:text-5xl transition-all hover:text-red-500" />
                    <span
                      className="absolute -top-14 left-[80%] -translate-x-[50%] 
                      z-20 origin-left scale-0 px-3 rounded-lg border 
                    border-gray-300 bg-white py-2 text-sm font-bold
                      shadow-md transition-all duration-300 ease-in-out 
                      group-hover:scale-100"
                    >
                      Instagram
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      sendGAEvent({
                        event: "A-iconWhatsapp",
                        value: "1123",
                      });
                      sendGTMEvent({
                        event: "iconWhatsapp",
                        value: "123",
                      });
                    }}
                    className="group relative "
                    rel="noopener noreferrer"
                    href={socialMedia.whatsapp}
                    target="_blank"
                  >
                    <span className="icon-[logos--whatsapp-icon] group-hover:text-5xl transition-all hover:text-green-500 animate-pulse animate-infinite animate-infinite animate-duration-[2000ms] " />
                    <span
                      className="absolute -top-14 left-[100%] -translate-x-[50%] 
                      z-20 origin-left scale-0 px-3 rounded-lg border 
                    border-gray-300 bg-white py-2 text-sm font-bold
                      shadow-md transition-all duration-300 ease-in-out 
                      group-hover:scale-100"
                    >
                      Whatsapp
                    </span>
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
                src="/anilloDerecha.png"
                width={150}
                height={375}
                className="w-full h-full object-cover"
                alt="anillos de compromiso"
                title="quito"
              />
            </div>
            <a
              onClick={() => {
                sendGAEvent({
                  event: "A-botonMaps",
                  value: "12345",
                });
                sendGTMEvent({
                  event: "botonMaps",
                  value: "2345",
                });
              }}
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
                    <h2 className="text-md lg:text-xl">{obj.name}</h2>
                    <h3 className="text-xs text-neutral-500 lg:text-md">
                      {obj.detail}
                    </h3>
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
