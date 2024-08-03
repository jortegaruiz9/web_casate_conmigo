"use client"; // Añade esta línea al principio del archivo

import Image from "next/image";
import { useState, useContext } from "react";
import Link from "next/link";
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
  Link as NextUILink,
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

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-myWhite h-[80px] text-myZinc "
    >
      <NavbarContent>
        <NavbarBrand>
          <NextUILink className="flex items-center" href="/">
            <Image
              src="/logoBlack.svg"
              priority={true}
              alt="logo de jortega"
              width={180}
              height={36}
            />
          </NextUILink>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
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
              href={element.link}
              className={`text-myZinc ${
                currentPath === element.link ? "text-myZinc" : ""
              }`}
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

      <NavbarMenu className="flex justify-center space-y-12 bg-myWhite bg-opacity-80">
        {elements.map((element, index) => (
          <NavbarMenuItem
            key={`custom_${index}`}
            isActive={currentPath === element.link}
            className={
              currentPath === element.link ? " text-myWhite" : "text-myZinc"
            }
          >
            <NextUILink
              href={element.link}
              className={`text-myZinc text-lg ${
                currentPath === element.link ? "font-bold" : "text-myZinc"
              }`}
            >
              {element.name}
            </NextUILink>
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
      </NavbarMenu>
    </Navbar>
  );
}
