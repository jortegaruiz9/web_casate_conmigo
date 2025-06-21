"use client";
import { inter } from "@/app/ui/fonts";
import Link from "next/link";
export default function Promo() {
  return (
    <div className={`${inter.className}`}>
      <div className="bg-myZinc h-[40px] flex items-center justify-center text-white">
        <Link href="/shop/compromiso/AC-012" className="text-sm underline">
          Conoce nuestro anillo más vendido
        </Link>
      </div>
    </div>
  );
}
