"use client";
import Link from "next/link";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";

export default function NewHero() {
  return (
    <div className="relative w-full h-[502px] md:h-[459px]">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[459px] object-cover hidden md:block"
      >
        <source src="/videos/desktop.mp4" type="video/mp4" />
      </video>

      {/* Video móvil */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[502px] object-cover md:hidden"
      >
        <source src="/videos/mobile.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro para mejorar la legibilidad */}
      <div className="absolute"></div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 flex flex-col items-center justify-end pb-20 h-full">
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
          className="bg-white text-myZinc px-8 py-4 font-semibold"
        >
          Ir al Catálogo
        </Link>
      </div>
    </div>
  );
}
