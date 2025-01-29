"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AdviserContext } from "../context/AdviserContext";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";

type Props = {
  elements: { name: string; link: string }[];
};

export default function Nav({ elements }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath = usePathname();
  const whatsapp = useContext(AdviserContext) as any;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 55);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOrderClick = () => {
    const whatsappMessage = `Me interesa conocer más sobre sus anillos, pude revisar su web`;
    const whatsappLink = `https://wa.me/+593${
      whatsapp.adviser.tel
    }?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, "_blank");
  };

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);

    // Emitir evento de cambio de menú
    const event = new CustomEvent("menuStateChange", {
      detail: { isOpen: newMenuState },
    });
    window.dispatchEvent(event);
  };

  return (
    <nav
      className={`bg-myWhite text-myZinc w-full transition-all duration-500 ${
        isScrolled ? "fixed top-0 shadow-sm z-50 bg-myWhite/95" : "relative"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logoBlack.svg"
                priority={true}
                alt="logo de jortega"
                width={180}
                height={36}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {elements.map((element, index) => (
              <Link
                key={index}
                href={element.link}
                className={`text-myZinc hover:text-myZinc/80 transition-colors ${
                  currentPath === element.link ? "font-semibold" : ""
                }`}
              >
                {element.name}
              </Link>
            ))}
            <button
              onClick={() => {
                sendGAEvent({ event: "A-NavWhatsapp", value: "15678" });
                sendGTMEvent({ event: "NavWhatsapp", value: "5678" });
                handleOrderClick();
              }}
              className="py-3 px-6 bg-myZinc text-myWhite rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-myZinc transition-all ease-out duration-300"
            >
              Whatsapp
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-myZinc hover:text-myZinc/80 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-myWhite bg-opacity-95 fixed inset-0 top-20 z-50">
          <div className="px-4 pt-2 pb-3 space-y-6">
            {elements.map((element, index) => (
              <Link
                key={index}
                href={element.link}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-xl py-2 text-myZinc hover:text-myZinc/80 transition-colors ${
                  currentPath === element.link ? "font-bold" : ""
                }`}
              >
                {element.name}
              </Link>
            ))}
            <button
              onClick={() => {
                sendGAEvent({ event: "A-HambuWhatsapp", value: "16789" });
                sendGTMEvent({ event: "HambuWhatsapp", value: "6789" });
                handleOrderClick();
                setIsMenuOpen(false);
              }}
              className="w-full py-4 px-6 bg-myZinc text-myWhite rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-myZinc transition-all ease-out duration-300 text-xl"
            >
              Whatsapp
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
