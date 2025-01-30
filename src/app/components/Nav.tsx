"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AdviserContext } from "../context/AdviserContext";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";

type Props = {
  elements: { name: string; link: string }[];
};

export default function Nav({ elements }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();
  const whatsapp = useContext(AdviserContext) as any;

  const menuItems = [
    {
      category: "Productos",
      items: [
        { name: "Cintillos", link: "/shop/cintillos" },
        { name: "Compromiso", link: "/shop/compromiso" },
        { name: "Matrimonio", link: "/shop/matrimonio" },
        { name: "Set Anillos", link: "/shop/set" },
      ],
    },
    {
      category: "Información",
      items: [
        { name: "Catálogo", link: "/shop" },
        { name: "Conoce más", link: "/explicacion" },
        { name: "Nosotros", link: "/nosotros" },
      ],
    },
  ];

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
              className="py-3 px-6 bg-myZinc text-myWhite  hover:ring-2 hover:ring-offset-2 hover:ring-myZinc transition-all ease-out duration-300"
            >
              Whatsapp
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden relative z-[60]">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-myZinc hover:text-myZinc/80 hover:bg-gray-100 transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">
                {isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              </span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="fixed inset-0 z-50">
            {/* Background overlay */}
            <div className="fixed inset-0 bg-myWhite" aria-hidden="true" />

            {/* Menu content */}
            <div className="fixed inset-0 top-20 z-50 overflow-y-auto bg-myWhite">
              <div className="flex min-h-full items-start justify-center p-4 text-center">
                <div className="w-full max-w-md transform overflow-hidden transition-all">
                  <div className="space-y-6">
                    {menuItems.map((section, idx) => (
                      <div key={idx} className="space-y-3">
                        <h3 className="text-sm font-medium text-[#9e8e73] border-b border-[#9e8e73]/20 pb-2">
                          {section.category}
                        </h3>
                        <div className="space-y-2">
                          {section.items.map((item, index) => (
                            <Link
                              key={index}
                              href={item.link}
                              onClick={() => setIsMenuOpen(false)}
                              className={`block text-base py-1.5 text-myZinc hover:text-myZinc/80 transition-colors ${
                                currentPath === item.link ? "font-medium" : ""
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        sendGAEvent({
                          event: "A-HambuWhatsapp",
                          value: "16789",
                        });
                        sendGTMEvent({ event: "HambuWhatsapp", value: "6789" });
                        handleOrderClick();
                        setIsMenuOpen(false);
                      }}
                      className="w-full py-3 px-6 bg-myZinc text-myWhite hover:ring-2 hover:ring-offset-2 hover:ring-myZinc transition-all ease-out duration-300 text-base mt-4"
                    >
                      Whatsapp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
