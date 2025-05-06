"use client";

import { Suspense } from "react";

export default function PaymentFailedPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <PaymentFailedContent />
    </Suspense>
  );
}

// Componente con todo el contenido actual
function PaymentFailedContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { adviser } = useContext(AdviserContext);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);
  const [orderData, setOrderData] = useState<any>(null);

  useEffect(() => {
    // Obtener parámetros de la URL que podrían contener información del error
    const errorMessage = searchParams.get("error");
    const errorCode = searchParams.get("errorCode");

    // Intentar recuperar datos del pedido pendiente
    try {
      const storedOrderData = sessionStorage.getItem("pendingOrderDetails");
      if (storedOrderData) {
        setOrderData(JSON.parse(storedOrderData));
      }
    } catch (err) {
      console.error("Error al recuperar datos del pedido:", err);
    }

    // Construir mensaje de error para mostrar al usuario
    if (errorMessage) {
      setErrorDetails(errorMessage);
    } else if (errorCode) {
      const errorMessages: Record<string, string> = {
        "401":
          "La transacción no está autorizada. Verifica los datos de tu tarjeta.",
        "402": "Fondos insuficientes en la tarjeta.",
        "403": "Transacción rechazada por el emisor de la tarjeta.",
        "404": "La tarjeta ha expirado.",
        "500": "Error en el servidor de pagos. Por favor intenta más tarde.",
        default:
          "No se pudo completar la transacción. Por favor intenta con otro método de pago.",
      };
      setErrorDetails(errorMessages[errorCode] || errorMessages["default"]);
    } else {
      setErrorDetails(
        "La transacción no pudo ser completada. Por favor intenta nuevamente."
      );
    }
  }, [searchParams]);

  // Función para intentar nuevamente
  const handleRetryPayment = () => {
    router.push("/payment/checkout");
  };

  // Función para volver al catálogo
  const handleReturnToShop = () => {
    // Limpiar datos del pedido fallido
    sessionStorage.removeItem("pendingOrderDetails");
    localStorage.removeItem("pendingOrderDetails");
    router.push("/shop");
  };

  return (
    <div
      className={`max-w-screen-sm mx-auto px-4 py-8 text-myZinc ${inter.className}`}
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2">Pago no completado</h1>
          <p className="text-gray-600">{errorDetails}</p>
        </div>

        {orderData && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h2 className="font-semibold text-lg mb-2">Detalles del pedido</h2>
            <div className="space-y-1">
              <p>
                <span className="font-medium">Producto:</span>{" "}
                {orderData.productModel}
              </p>
              <p>
                <span className="font-medium">Material:</span>{" "}
                {orderData.material} {orderData.color}
              </p>
              {orderData.precio && (
                <p>
                  <span className="font-medium">Precio:</span> $
                  {Number(orderData.precio).toFixed(2)}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
          <button
            onClick={handleRetryPayment}
            className="bg-myZinc text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all flex-1"
          >
            Intentar nuevamente
          </button>
          <button
            onClick={handleReturnToShop}
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all flex-1"
          >
            Volver al catálogo
          </button>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          <p className="mb-2">
            Si continúas experimentando problemas, puedes contactarnos:
          </p>
          <Link
            href={`https://wa.me/593${adviser.tel}`}
            target="_blank"
            className="flex items-center text-green-600 hover:text-green-700"
          >
            <span className="icon-[mdi--whatsapp] mr-1 text-xl" />
            <span>Contactar por WhatsApp</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Importaciones necesarias para el componente
import { useEffect, useState, useContext } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { inter } from "@/app/ui/fonts";
import { AdviserContext } from "@/app/context/AdviserContext";
