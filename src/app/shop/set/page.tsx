"use client";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import InstructionColors from "@/app/components/InstructionColors";

export default function Compromiso() {
  return (
    <div className="flex flex-col items-center">
      <Button />
      <div className="mb-10">
        <InstructionColors />
      </div>
      <p>PAGINA PROXIMAMENTE DISPONIBLE</p>
      <Button />
    </div>
  );
}
