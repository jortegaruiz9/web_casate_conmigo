"use client";
import { inter } from "@/app/ui/fonts";
export default function Promo() {
  return (
    <div className={`${inter.className}`}>
      <div className="bg-myZinc h-[40px] flex items-center justify-center text-white">
        <a
          href="https://www.instagram.com/p/DHe6fLJMZU_/?igsh=YXVqdDJvOTE2MXA2"
          target="_blank"
          className="text-sm underline"
        >
          Conoce nuestro sorteo por el día de la madre
        </a>
      </div>
    </div>
  );
}
