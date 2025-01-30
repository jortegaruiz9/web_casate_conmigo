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
          // Intentar precargar los videos usando la clase Video
          const desktopVideo = new Video("/videos/desktop1.mp4");
          const mobileVideo = new Video("/videos/mobile1.mp4");

          await Promise.all([desktopVideo.load(), mobileVideo.load()]);

          setIsVideoEnabled(true);
        } catch (error) {
          console.warn("Error al cargar los videos:", error);
          setIsVideoEnabled(false);
        }
      };

      loadVideos();
    }
  }, []);

  return (
    <div className="relative w-full h-[502px] md:h-[459px]">
      {/* Videos solo si están habilitados y verificados */}
      {isVideoEnabled && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-[459px] object-cover hidden md:block"
          >
            <source src="/videos/desktop1.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento video.
          </video>

          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-[502px] object-cover md:hidden"
          >
            <source src="/videos/mobile1.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento video.
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
