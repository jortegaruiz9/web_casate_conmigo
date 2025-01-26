import React from "react";
import Modal from "../ModalUi";

interface InstructionModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const InstructionModal: React.FC<InstructionModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const instructivo = [
    {
      icon: "icon-[fluent--draw-text-24-filled]",
      text: "Precio incluye grabado",
    },
    { icon: "icon-[fluent--pen-off-16-filled]", text: "No incluye grabado" },
    { icon: "icon-[mynaui--one-square]", text: "Garantía por un año" },
    { icon: "icon-[bi--6-square]", text: "Garantía por seis meses" },
  ];

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="flex flex-col gap-y-2">
        <p className="text-xs text-center mt-4 text-myZinc">
          Precio con Swarovski, Diamante precios extra...
        </p>
        <ul>
          {instructivo.map((icon, index) => (
            <li
              className="flex items-center justify-center space-x-4 text-myZinc"
              key={index}
            >
              <span className={`${icon.icon}`} />
              <h2>{icon.text}</h2>
            </li>
          ))}
        </ul>
        <p className="text-xs text-center text-myZinc">
          -La garantía cubre pequeños rayones y mantenimiento para dar brillo.
        </p>
        <p className="text-xs text-center text-myZinc">
          -No incluye torceduras de ningún tipo. Tampoco nos hacemos
          responsables por piedras minerales extraviadas durante su uso.
        </p>
        <p className="text-xs text-center text-pink-600">
          Los anillos de plata con baño de oro requieren más cuidados por su
          recubrimiento fino. No nos hacemos responsables por daños debido a un
          mal uso.
        </p>
      </div>
    </Modal>
  );
};

export default InstructionModal;
