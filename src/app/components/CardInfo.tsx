"use client";
import { useState } from "react";
import Modal from "./ModalUi";
interface CardProps {
  info: {
    content: string;
    img: string;
    alt: string;
    tema: string;
    title: string;
    title2: string;
    color: string;
    number: number;
    ruta?: string;
  };
}

export default function CardInfo({ info }: CardProps) {
  let [isOpen, setIsOpen] = useState(false);
  let [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  return (
    <div className="sm:flex sm:flex-row-reverse">
      <div className=" h-[260px] sm:h-[500px] w-full relative flex items-end sm:justify-center">
        <div className="text-xs absolute text-white bg-gradient-to-b from-transparent via-myZinc to-myZinc h-[160px] hidden sm:block lg:text-sm lg:pl-2 xl:pl-4">
          <p className="m-auto w-11/12">
            {info.content}{" "}
            <button
              className={`font-bold ${info.ruta ? "block" : "hidden"}`}
              onClick={() => {
                setIsCreateModalOpen(true);
              }}
            >
              Video Explicativo
            </button>
          </p>
        </div>
        <div className="bg-gradient-to-b from-transparent via-transparent-300 to-myWhite absolute z-10 w-full h-[100px] sm:hidden"></div>
        <img
          src={info.img}
          alt={info.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-[300px] sm:h-[500px] w-full flex justify-center items-center relative ">
        <h4 className=" text-white z-10 text-[330px] font-bold absolute left-0 pl-2 hidden sm:block lg:pl-6 xl:pl-20 mb-8 ">
          {info.number}
        </h4>
        <div className="px-8 flex flex-col gap-y-2 absolute z-10 lg:px-14 xl:px-32 text-myZinc">
          <h4>{info.tema}</h4>
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl">
            {info.title} <span className={`${info.color}`}>{info.title2}</span>
          </h2>
          <p className="text-xs sm:hidden">
            {info.content}{" "}
            <button
              className={`font-bold ${info.ruta ? "block" : "hidden"}`}
              onClick={() => {
                setIsCreateModalOpen(true);
              }}
            >
              Video Explicativo
            </button>
          </p>
          <h4 className="hidden sm:flex">
            Todo lo que debes saber{" "}
            <span className="icon-[material-symbols--arrow-forward-rounded] text-2xl text-myZinc" />
          </h4>
        </div>
      </div>
      <Modal
        isOpen={isCreateModalOpen}
        closeModal={() => {
          setIsCreateModalOpen(false);
        }}
      >
        <div className=" flex justify-center items-center w-full">
          <div className="flex flex-col gap-y-4 w-full">
            <h3 className="font-bold">Resuelve todas tus dudas !</h3>
            <hr />
            <div className="w-12/12 h-[450px] sm:h-[550px] bg-red-200">
              <video
                className="w-full h-full object-cover"
                controls
                src={info.ruta}
              >
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                onClick={() => {
                  setIsCreateModalOpen(!isCreateModalOpen);
                }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
