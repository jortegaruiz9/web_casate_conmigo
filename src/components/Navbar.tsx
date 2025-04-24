"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { AdviserContext } from "@/app/context/AdviserContext";
import { ScrollTo } from "@/app/utils/ScrollTo";
import { inter } from "@/app/ui/fonts";

let socialLinks = [
  {
    name: "s",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593995001783&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    facebook:
      "https://www.facebook.com/share/929rZriTMVZDzydQ/?mibextid=LQQJ4d",
    instagram:
      "https://www.instagram.com/casate_conmigo777?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "f",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593983883197&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    facebook:
      "https://www.facebook.com/share/6CauRXhAbajKZKBt/?mibextid=LQQJ4d",
    instagram:
      "https://www.instagram.com/casateconmigo.ec?igsh=Y2pxam9oOG5leDVu",
  },
  {
    name: "c",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593983335393&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    facebook:
      "https://www.facebook.com/profile.php?id=100087172031030&mibextid=LQQJ4d",
    instagram: "https://www.instagram.com/ca.camicc/",
  },
  {
    name: "j",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593984171976&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    facebook:
      "https://www.facebook.com/share/Btx92Jj2Us9gTgKD/?mibextid=LQQJ4d",
    instagram:
      "https://www.instagram.com/casate_conmigo.jf?igsh=MXF0NmZzcDA5Z2w3",
  },
  {
    name: "d",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B593958606651&text=Me+interesa+conocer+m%C3%A1s+sobre+sus+anillos%2C+pude+revisar+su+web&type=phone_number&app_absent=0",
    facebook:
      "https://www.facebook.com/share/929rZriTMVZDzydQ/?mibextid=LQQJ4d",
    instagram:
      "https://www.instagram.com/casate.conmigo_so?igsh=OTZjMnZzMjhzNmk%3D&utm_source=qr",
  },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [socialMedia, setSocialMedia] = useState(socialLinks[0]);
  const [formattedPhone, setFormattedPhone] = useState("");

  const whatsapp = useContext(AdviserContext) as any;
  const adviser = whatsapp.adviser.name;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 55);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (whatsapp?.adviser?.tel) {
      setFormattedPhone(formatPhone(whatsapp.adviser.tel));
    }
  }, [whatsapp?.adviser?.tel]);

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

  const handleNavClick = (elementId: string) => {
    setIsMenuOpen(false);
    ScrollTo(elementId);
  };

  function formatPhone(number: string | number) {
    return number.toString().replace(/(\d{2})(\d{3})(\d{3})/, "$1-$2-$3");
  }

  return (
    <>
      {/* Mobile Nav */}
      <div
        className={` text-myZinc w-full transition-all duration-500 fixed bg-white md:hidden flex h-16 justify-between items-center px-6 border-b-[1px] border-myZinc  ${
          isScrolled ? "fixed top-0 shadow-sm z-50 " : "relative"
        }`}
      >
        <Link href="/">
          <Image
            src="/logoBlack.svg"
            priority={true}
            alt="logo de jortega"
            width={180}
            height={36}
          />
        </Link>
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : ""
            } icon-[material-symbols-light--menu] text-black text-xl`}
          />
        </button>
      </div>

      {/* Desktop Nav */}
      <div
        className={` text-myZinc w-full transition-all duration-500 hidden md:block fixed bg-white/95 ${
          isScrolled ? "fixed top-0 shadow-sm z-50 bg-myWhite/95" : "relative"
        }`}
      >
        <div className="h-24 lg:h-20 bg-white text-black border-b-[1px] border-myZinc/20">
          <div className="h-full flex items-center justify-between px-20 xl:px-40">
            <Link href="/" className="h-20 flex items-center justify-center">
              <Image
                src="/logoBlack.svg"
                priority={true}
                alt="logo de jortega"
                width={180}
                height={36}
              />
            </Link>

            <div className="flex items-center gap-x-6">
              <ul className="flex items-center justify-center space-x-4 font-light">
                <li>
                  <Link href="/shop">Catálogo</Link>
                </li>
                <li>
                  <Link href="/articulos">Articulos</Link>
                </li>
                <li>
                  <Link href="/nosotros">Nosotros</Link>
                </li>
              </ul>
              <button
                className="w-10 h-10 rounded-full bg-myZinc flex items-center justify-center hover:bg-gradient-to-b hover:bg-myZinc/90 transition duration-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span
                  className={`transition-transform duration-300 ${
                    isMenuOpen ? "rotate-90" : ""
                  } icon-[material-symbols-light--menu] text-white text-xl`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menú desplegable */}
      <div
        className={`${
          inter.className
        } fixed inset-0 bg-myZinc z-50 pb-20 lg:pb-0 transition-all duration-500 ease-in-out overflow-y-auto ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ top: "0" }}
      >
        <div className="min-h-screen px-6">
          <div className="h-20 relative">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white p-2"
            >
              <span className="icon-[material-symbols--close] text-2xl" />
            </button>
          </div>

          <div className="py-2 lg:flex lg:justify-between lg:items-center lg:px-10 xl:px-20 xl:justify-around">
            <div className="lg:flex lg:flex-col lg:gap-y-4">
              <Image
                src="/logoWhite.svg"
                alt="Veterinaria Rumipamba"
                width={300}
                height={80}
                className="mb-8"
              />

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-x-2 text-white">
                  <span className="icon-[ph--clock-fill]" />
                  <span>Atención de lunes a sábado </span>
                  <span className="bg-white text-myZinc text-xs px-2 py-1 rounded-full">
                    10am a 6pm
                  </span>
                </div>
                <div className="flex items-center gap-x-2 text-white">
                  <span className="icon-[ph--phone-fill]" />
                  <span>+593 {formattedPhone}</span>
                </div>
                <div className="flex items-center gap-x-2 text-white">
                  <span className="icon-[ph--map-pin-fill]" />
                  <span>Nuñez de vela y corea - Edf. Korea Plaza Local 4</span>
                </div>
              </div>

              <div className="flex gap-x-4 mb-8">
                <a
                  href={`tel:+593${whatsapp.adviser.tel}`}
                  className="flex-1 bg-white text-myZinc py-3 rounded-full font-medium text-center"
                >
                  Llamar
                </a>
                <a
                  href="https://www.google.com/maps/place/C%C3%A1sate+Conmigo+-+Anillos+de+compromiso+y+matrimonio/@-0.1774134,-78.4897115,17z/data=!3m1!4b1!4m6!3m5!1s0x91d59b1a9f0784b7:0x7a2bd47f59ff07ac!8m2!3d-0.1774134!4d-78.4871366!16s%2Fg%2F11mvp85br2?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                  target="_blank"
                  className="flex-1 bg-white/10 text-white py-3 rounded-full font-medium text-center"
                >
                  Maps
                </a>
              </div>

              <div className="flex items-center gap-x-2 text-gray-400 mb-6 lg:mb-0">
                <span className="text-yellow-500">✨</span>
                <p className="text-sm">
                  Eternamente comprometidos con tus anillos de boda.
                </p>
              </div>
            </div>

            <nav className="space-y-4">
              <Link
                href="/shop"
                onClick={() => handleNavClick("sobre-nosotros")}
                className="block text-2xl text-white hover:text-blue-500 transition-colors duration-300"
              >
                Catálogo
              </Link>
              <ul
                className="text-neutral-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <li>
                  -<Link href="/shop/cintillos">Cintillo - Churumbela</Link>
                </li>
                <li>
                  -<Link href="/shop/promesa">Promesa</Link>
                </li>
                <li>
                  -<Link href="/shop/compromiso">Compromiso</Link>
                </li>
                <li>
                  -<Link href="/shop/matrimonio">Matrimonio</Link>
                </li>
                <li>
                  -<Link href="/shop/set">Set</Link>
                </li>
                <li>
                  -<Link href="/shop/grado">Grado</Link>
                </li>
              </ul>
              <Link
                href="articulos"
                onClick={() => handleNavClick("departamentos")}
                className="block text-2xl text-white hover:text-blue-500 transition-colors duration-300"
              >
                Artículos
              </Link>
              <Link
                href="/nosotros"
                className="block text-2xl text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>

              <div className="hidden lg:block text-white">
                <hr className="border-t border-white/10 mb-6 text-background " />
                <ul className="flex gap-x-4 md:gap-x-8 text-2xl text-black">
                  {(Object.keys(socialMedia) as Array<keyof typeof socialMedia>)
                    .filter((key) => key !== "name")
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
                        <li
                          key={key}
                          className="hover:scale-110 transition-all"
                        >
                          <a
                            className=" bg-white rounded-full w-12 h-12 flex items-center justify-center"
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
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
