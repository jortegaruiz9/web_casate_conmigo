import React, { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const Adviser: React.FC = () => {
  const startTour = () => {
    const driverObj = driver({
      nextBtnText: "Siguiente",
      prevBtnText: "Atrás",
      doneBtnText: "Salir",
      showProgress: true,
      steps: [
        {
          element: "#form-options",
          popover: {
            title: "Elección de color",
            description:
              "Haz clic en el material y color que necesitas tus anillo/s",
            side: "top",
            align: "center",
          },
        },
        {
          element: "#prices-product",
          popover: {
            title: "Tu elección cambia el precio",
            description: "Valida el precio según el material",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#garantia-incluido",
          popover: {
            title: "Incluido y Garantía",
            description:
              "Da click en estos iconos y conoce que incluyen tus anillos",
            side: "top",
            align: "center",
          },
        },
        {
          element: "#order-button",
          popover: {
            title: "Botón Comprar",
            description:
              "Haz clic en este botón para comprar mediante un asesor de whatsapp.",
            side: "top",
            align: "start",
          },
        },
      ],
    });

    driverObj.drive();
  };

  useEffect(() => {
    startTour();
  }, []);

  return null;
};

export default Adviser;
