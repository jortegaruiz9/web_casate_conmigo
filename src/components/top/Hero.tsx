"use client";
import Link from "next/link";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [isMobileVideoError, setIsMobileVideoError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Precargar la imagen de fallback inmediatamente
    const img = new window.Image();
    img.src = "/videos/imagen-video.jpg";
    img.onload = () => setIsImageLoaded(true);

    // Cargar los videos después de que la imagen esté lista
    if (typeof window !== "undefined") {
      const loadVideos = async () => {
        try {
          const desktopVideo = new Video("/videos/desktop1.mp4");
          const mobileVideo = new Video("/videos/mobile1.mp4");

          await Promise.all([desktopVideo.load(), mobileVideo.load()]);
          setIsVideoEnabled(true);
        } catch (error) {
          console.warn("Error al cargar los videos:", error);
          setIsVideoEnabled(false);
        }
      };

      // Cargar videos después de que la imagen esté lista
      if (isImageLoaded) {
        loadVideos();
      }
    }
  }, [isImageLoaded]);

  return (
    <div className="relative w-full h-[502px] md:h-[459px] overflow-hidden">
      {/* Imagen de fallback siempre visible inicialmente */}
      <div className={`absolute inset-0 ${isVideoEnabled ? "md:hidden" : ""}`}>
        <Image
          src="/videos/imagen-video.jpg"
          alt="Hero imagen"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
          quality={75}
          loading="eager"
          style={{
            objectFit: "cover",
          }}
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
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            style={{ opacity: 0, transition: "opacity 0.3s ease-in" }}
            onLoadedData={(e) => {
              (e.target as HTMLVideoElement).style.opacity = "1";
            }}
          >
            <source src="/videos/desktop1.mp4" type="video/mp4" />
          </video>

          <video
            autoPlay
            loop
            muted
            playsInline
            onError={() => setIsMobileVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover md:hidden ${
              isMobileVideoError ? "hidden" : ""
            }`}
            style={{ opacity: 0, transition: "opacity 0.3s ease-in" }}
            onLoadedData={(e) => {
              (e.target as HTMLVideoElement).style.opacity = "1";
            }}
          >
            <source src="/videos/mobile1.mp4" type="video/mp4" />
          </video>
        </>
      )}

      {/* Overlay con gradiente */}
      <div className="absolute inset-0" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-end pb-20 h-full">
        <div className="flex items-center gap-6 text-sm tracking-wide">
          <Link
            href="./shop"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-myZinc transition-all"
          >
            Ir al Catálogo
          </Link>

          <a
            onClick={() => {
              sendGAEvent({
                event: "click_maps",
                value: "12345",
              });
              sendGTMEvent({
                event: "click_maps",
                value: "2345",
              });
            }}
            href="https://maps.app.goo.gl/NGMc6mL8N5qEDu6K9"
            rel="noopener noreferrer"
            target="_blank"
            className="px-6 py-3 bg-white text-myZinc transition-all flex items-center gap-2"
          >
            <span>Google Maps</span>
          </a>
        </div>
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
