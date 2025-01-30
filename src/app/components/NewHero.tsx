"use client";
import Link from "next/link";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function NewHero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Detectar si es un dispositivo móvil real
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const isMobileDevice =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent.toLowerCase()
        );
      setIsMobile(isMobileDevice);
    };

    checkMobile();
  }, []);

  return (
    <div className="relative w-full h-[502px] md:h-[459px] bg-[#eae5df] overflow-hidden">
      {/* Imagen de fondo siempre presente */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-fallback.jpg"
          alt="Anillos de compromiso y matrimonio"
          fill
          priority
          sizes="100vw"
          quality={90}
          className={`object-cover transition-opacity duration-300 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setIsImageLoaded(true)}
        />
      </div>

      {/* Video solo si NO es un dispositivo móvil real */}
      {!isMobile && (
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero-fallback.jpg"
          >
            <source src="/videos/desktop.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Overlay con gradiente */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"
        aria-hidden="true"
      />

      {/* Contenido */}
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
          className="bg-white text-myZinc px-8 py-4 font-semibold hover:bg-white/90 transition-colors"
        >
          Ir al Catálogo
        </Link>
      </div>
    </div>
  );
}

// Helper class para precargar videos
class Video {
  constructor(public src: string) {}

  load() {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.src = this.src;
      video.preload = "auto";

      video.onloadeddata = () => resolve(video);
      video.onerror = reject;
    });
  }
}
