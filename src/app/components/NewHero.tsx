"use client";
import Link from "next/link";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function NewHero() {
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadVideos = async () => {
        try {
          // Verificar si los videos existen
          const desktopResponse = await fetch("/videos/desktop.mp4", {
            method: "HEAD",
          });
          const mobileResponse = await fetch("/videos/mobile.mp4", {
            method: "HEAD",
          });

          if (desktopResponse.ok && mobileResponse.ok) {
            setIsVideoEnabled(true);
          } else {
            console.warn("Videos not found, using fallback image");
          }
        } catch (error) {
          console.warn("Error loading videos:", error);
        }
      };

      loadVideos();
    }
  }, []);

  return (
    <div className="relative w-full h-[502px] md:h-[459px]">
      {/* Imagen de fondo estática - siempre visible */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-fallback.jpg"
          alt="Fondo"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
      </div>

      {/* Videos solo si están habilitados y verificados */}
      {isVideoEnabled && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute top-0 left-0 w-full h-[459px] object-cover hidden md:block"
          >
            <source src="/videos/desktop.mp4" type="video/mp4" />
          </video>

          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute top-0 left-0 w-full h-[502px] object-cover md:hidden"
          >
            <source src="/videos/mobile.mp4" type="video/mp4" />
          </video>
        </>
      )}

      {/* Overlay con gradiente */}
      <div className="absolute inset-0" />

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
