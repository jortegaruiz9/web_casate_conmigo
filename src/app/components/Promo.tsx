"use client";
import { inter } from "@/app/ui/fonts";
export default function Promo() {
  return (
    <div className={`relative z-50 ${inter.className}`}>
      <div className="bg-myZinc h-[40px] flex items-center justify-center text-white">
        <h2 className="text-sm">20% de descuento x San Valentin</h2>
      </div>
    </div>
  );
}
