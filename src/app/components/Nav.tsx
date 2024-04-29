"use client";
import Image from "next/image";
import { useState, useContext } from "react";
import { MagicMotion } from "react-magic-motion";
import { AdviserContext } from "../context/AdviserContext";

type Props = {
  elements: { name: string; link: string }[];
};

export default function Nav({ elements }: Props) {
  let adviserData = useContext(AdviserContext) as any;
  let whatsapp = `https://api.whatsapp.com/send/?phone=593${adviserData.adviser.tel}&text=Hola,%20vi%20su%20página%20y%20deseo%20información%20sobre%20sus%20anillos`;
  let [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-myZinc h-[55px] flex items-center justify-center text-myWhite gap-2">
        <h3>Adquiere tu anillo</h3>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          Agendar una cita
          <span className="icon-[material-symbols--arrow-forward-rounded] text-3xl text-myWhite hover:scale-110 transition-all" />
        </a>
      </div>

      <nav className="bg-myWhite flex justify-between px-8 md:px-0 md:justify-around h-[80px] items-center text-myZinc">
        <div className="max-w-[100px]">
          <a className="flex items-center" href="/">
            <Image
              src="/logo.svg"
              alt="logo de jortega"
              width={2000}
              height={2000}
            />
          </a>
        </div>
        <ul className=" gap-12 items-center hidden md:flex">
          {elements.map((element, index) => {
            const indexNav = `custom_${index}`;
            return (
              <li key={indexNav}>
                <a href={element.link}>{element.name}</a>
              </li>
            );
          })}
          <hr className="border-r border-gray-300 h-8" />
          <li className="flex justify-center items-center text-myWhite">
            <a
              href={whatsapp}
              className="py-3 px-8 bg-myZinc rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-myZinc transition-all ease-out duration-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              Whatsapp
            </a>
          </li>
        </ul>
        <button className="flex items-center md:hidden" onClick={toggle}>
          <span className="icon-[ant-design--menu-outlined] text-2xl" />
        </button>
      </nav>
      <MagicMotion
        transition={{ type: "spring", stiffness: 180, damping: 60, mass: 1.1 }}
      >
        <div className="overflow-hidden">
          {isOpen && (
            <nav
              className={`${isOpen ? "block" : "hidden"} md:hidden bg-myWhite`}
            >
              <ul className="flex flex-col gap-3 py-6 px-6">
                {elements.map((element, index) => {
                  const indexHamburger = `custom_${index}`;
                  return (
                    <li key={indexHamburger}>
                      <a href={element.link}>{element.name}</a>
                    </li>
                  );
                })}
                <a
                  href={whatsapp}
                  className="py-3 w-full bg-myZinc rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-myZinc transition-all ease-out duration-300 text-myWhite text-center"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Whatsapp
                </a>
              </ul>
            </nav>
          )}
        </div>
      </MagicMotion>
      <hr className={`${isOpen ? "hidden" : "block"} border-gray-300`} />
    </div>
  );
}
