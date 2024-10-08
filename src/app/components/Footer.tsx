"use client";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import { AdviserContext } from "../context/AdviserContext";
import Link from "next/link";
import { monserrat } from "../ui/fonts";
import BrandCarousel from "./BrandCarousel";

let socialLinks = [
  {
    name: "s",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593995001783&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    facebook:
      "https://www.facebook.com/share/929rZriTMVZDzydQ/?mibextid=LQQJ4d",
    instagram:
      "https://www.instagram.com/casate_conmigo777?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    tel: "099 500 1783",
  },
  {
    name: "f",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593983883197&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    facebook:
      "https://www.facebook.com/share/6CauRXhAbajKZKBt/?mibextid=LQQJ4d",
    instagram:
      "https://www.instagram.com/casateconmigo.ec?igsh=Y2pxam9oOG5leDVu",
    tel: "098 388 3197",
  },
  {
    name: "c",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593983335393&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    facebook:
      "https://www.facebook.com/profile.php?id=100087172031030&mibextid=LQQJ4d",
    instagram: "https://www.instagram.com/ca.camicc/",
    tel: "098 333 5393",
  },
  {
    name: "j",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593984171976&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    facebook:
      "https://www.facebook.com/share/Btx92Jj2Us9gTgKD/?mibextid=LQQJ4d",
    instagram:
      "https://www.instagram.com/casate_conmigo.jf?igsh=MXF0NmZzcDA5Z2w3",
    tel: "098 417 1976",
  },
  {
    name: "d",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593958606651&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    facebook:
      "https://www.facebook.com/share/929rZriTMVZDzydQ/?mibextid=LQQJ4d",
    instagram:
      "https://www.instagram.com/casate.conmigo_so?igsh=OTZjMnZzMjhzNmk%3D&utm_source=qr",
    tel: "095 860 6651",
  },
];

let nav = [
  { title: "Navegación" },
  { title: "Catálogo", direction: "/shop" },
  { title: "Conoce Más", direction: "/explicacion" },
  { title: "Nosotros", direction: "/nosotros" },
];

let typesOfRings = [
  { title: "Tipos de anillos" },
  { title: "Anillo Promesa", direction: "/shop/cintillos" },
  { title: "Anillo Compromiso", direction: "/shop/compromiso" },
  { title: "Anillos de Matrimonio", direction: "/shop/matrimonio" },
  { title: "Set de anillos", direction: "/shop/set" },
];

const age = new Date().getFullYear();

export default function Footer() {
  const adviserName = useContext(AdviserContext) as any;
  const adviser = adviserName.adviser.name;
  const [socialMedia, setSocialMedia] = useState(socialLinks[0]);

  useEffect(() => {
    switch (adviser) {
      case "f":
        setSocialMedia(socialLinks[1]);
        break;
      case "c":
        setSocialMedia(socialLinks[2]);
        break;
      case "j":
        setSocialMedia(socialLinks[3]);
        break;
      case "d":
        setSocialMedia(socialLinks[4]);
        break;
      default:
        setSocialMedia(socialLinks[0]);
    }
  }, [adviser]);

  let pay = [
    { title: "Paga con:" },
    { icon: "icon-[fontisto--mastercard]" },
    { icon: "icon-[fontisto--dinners-club]" },
    { icon: "icon-[fontisto--visa]" },
  ];

  const address = [
    "Quito - Ecuador",
    "Nuñez de vela y corea",
    "Edf. Korea plaza local 4",
    socialMedia.tel,
  ];
  return (
    <div className="bg-myZinc w-full">
      <div className="flex flex-col items-center gap-y-2 py-8 md:py-12 w-full">
        <div className="flex flex-row justify-around items-start w-full text-xs md:text-medium text-neutral-400">
          <ul className="hidden lg:block space-y-4">
            {nav.map((e, index) => (
              <li
                key={e.title}
                className={
                  index !== 0
                    ? "text-zinc-400 hover:text-zinc-200 transition-all"
                    : "text-myWhite font-bold"
                }
              >
                {e.direction ? (
                  <Link href={e.direction}>{e.title}</Link>
                ) : (
                  e.title
                )}
              </li>
            ))}
          </ul>

          <ul className="space-y-4">
            {typesOfRings.map((e) => (
              <li
                key={e.title}
                className={
                  e.direction
                    ? "text-zinc-400 hover:text-zinc-200 transition-all"
                    : "text-myWhite font-bold"
                }
              >
                {e.direction ? (
                  <Link href={e.direction}>{e.title}</Link>
                ) : (
                  e.title
                )}
              </li>
            ))}
          </ul>

          <ul className="space-y-4">
            <li className="font-bold text-myWhite">Dirección</li>
            {address.map((line, index) => (
              <li
                key={`${line}-${index}`}
                className={
                  index === address.length - 1
                    ? `${monserrat.className} antialiased hover:text-zinc-200 transition all`
                    : "hover:text-zinc-200 transition all"
                }
              >
                {line}
              </li>
            ))}
          </ul>
          <ul className="hidden space-y-4 lg:block h-full">
            {pay.map((e, index) => (
              <li
                key={`${e.title}-${index}`}
                className="text-zinc-400 hover:text-zinc-200 transition-all"
              >
                {e.title}
                <span className={`${e.icon} text-2xl`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-myWhite">
        <BrandCarousel />
      </div>
      <div className="flex flex-col items-center bg-myWhite w-full py-6">
        <Image
          alt="Cásate Conmigo Logo"
          src="/logoBlack.svg"
          width={208}
          height={42}
        />
        <ul className="flex gap-x-4 md:gap-x-8 text-2xl text-myZinc">
          {(Object.keys(socialMedia) as Array<keyof typeof socialMedia>)
            .filter((key) => key !== "name" && key !== "tel")
            .map((key) => {
              const icons: Record<
                "whatsapp" | "facebook" | "instagram",
                string
              > = {
                whatsapp: "icon-[bi--whatsapp]",
                facebook: "icon-[basil--facebook-solid]",
                instagram: "icon-[radix-icons--instagram-logo]",
              };
              return (
                <li key={key} className="hover:scale-110 transition-all">
                  <a
                    href={socialMedia[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={icons[key]} />
                  </a>
                </li>
              );
            })}
        </ul>
        <div className="text-xs lg:text-sm text-myZinc">
          <h6>
            ©{" "}
            <span className={`${monserrat.className} antialiased`}>{age}</span>{" "}
            Cásate Conmigo, todos los derechos reservados.
          </h6>
        </div>
      </div>
    </div>
  );
}
