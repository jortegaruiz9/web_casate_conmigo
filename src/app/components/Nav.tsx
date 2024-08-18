"use client";

import Image from "next/image";
import { useState, useContext } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { AdviserContext } from "../context/AdviserContext";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
} from "@nextui-org/react";

type Props = {
  elements: { name: string; link: string }[];
};

export default function Nav({ elements }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();
  const whatsapp = useContext(AdviserContext) as any;

  const handleOrderClick = () => {
    const whatsappMessage = `Me interesa conocer más sobre sus anillos, pude revisar su web`;
    const whatsappLink = `https://wa.me/+593${
      whatsapp.adviser.tel
    }?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, "_blank");
  };

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={handleMenuToggle}
      className="bg-myWhite h-[80px] text-myZinc "
    >
      <NavbarContent>
        <NavbarBrand>
          <Link
            className="flex items-center"
            href="/"
            as={NextLink}
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/logoBlack.svg"
              priority={true}
              alt="logo de jortega"
              width={180}
              height={36}
            />
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onChange={handleMenuToggle}
        />
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex gap-4 lg:gap-12"
        justify="center"
      >
        {elements.map((element, index) => (
          <NavbarItem
            key={`custom_${index}`}
            isActive={currentPath === element.link}
          >
            <Link
              as={NextLink}
              href={element.link}
              className={`text-myZinc ${
                currentPath === element.link ? "text-myZinc" : ""
              }`}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {element.name}
            </Link>
          </NavbarItem>
        ))}
        <hr className="border-r border-gray-300 h-8" />
        <NavbarItem>
          <Button
            className="py-6 px-10 bg-myZinc rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-myZinc transition-all ease-out duration-300 text-myWhite text-md antialiased"
            onClick={() => {
              sendGAEvent({ event: "A-NavWhatsapp", value: "15678" });
              sendGTMEvent({ event: "NavWhatsapp", value: "5678" });
              handleOrderClick();
            }}
          >
            Whatsapp
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex justify-start bg-myWhite bg-opacity-80">
        <div className="mt-28 space-y-12">
          {elements.map((element, index) => (
            <NavbarMenuItem
              key={`custom_${index}`}
              isActive={currentPath === element.link}
              className={
                currentPath === element.link ? " text-myWhite" : "text-myZinc"
              }
            >
              <Link
                as={NextLink}
                href={element.link}
                className={`text-myZinc text-lg ${
                  currentPath === element.link ? "font-bold" : "text-myZinc"
                }`}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {element.name}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Button
              className="py-6 px-6 bg-myZinc rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-myZinc transition-all ease-out duration-300 text-myWhite text-1xl antialiased"
              onClick={() => {
                sendGAEvent({ event: "A-HambuWhatsapp", value: "16789" });
                sendGTMEvent({ event: "HambuWhatsapp", value: "6789" });
                handleOrderClick();
              }}
            >
              Whatsapp
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
