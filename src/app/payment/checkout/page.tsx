"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { inter } from "@/app/ui/fonts";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [orderData, setOrderData] = useState<any>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Cargar datos del pedido
  useEffect(() => {
    try {
      // Verificar si estamos en el cliente
      if (typeof window === "undefined") return;

      const orderDataStr = sessionStorage.getItem("pendingOrderDetails");
      if (!orderDataStr) {
        setError("No se encontraron datos del pedido");
        setLoading(false);
        return;
      }

      const parsedOrderData = JSON.parse(orderDataStr);
      setOrderData(parsedOrderData);

      // Solo establecer loading a false cuando tengamos los datos
      setLoading(false);
    } catch (err) {
      console.error("Error al procesar datos del pedido:", err);
      setError("Error al procesar los datos del pedido");
      setLoading(false);
    }
  }, []);

  // Renderizar el botón de Payphone cuando el script esté cargado
  useEffect(() => {
    // Verificar si estamos en el cliente
    if (typeof window === "undefined") return;

    if (!scriptLoaded || !orderData || loading || error) {
      return;
    }

    // Esta función se ejecutará una vez que el script esté cargado
    const renderPayphoneButton = () => {
      try {
        if (typeof window.PPaymentButtonBox === "undefined") {
          console.error(
            "PPaymentButtonBox no está disponible a pesar de que el script está cargado"
          );
          setError("Error al inicializar la pasarela de pago");
          return;
        }

        const totales = calcularTotal(orderData);
        const amountInCents = Math.round(totales.total * 100);

        console.log("Configurando botón de Payphone con datos:", {
          clientTransactionId: orderData.clientTransactionId,
          amount: amountInCents,
          email: orderData.email,
          reference:
            orderData.reference ||
            `Anillo ${orderData.productModel} - ${orderData.material}`,
        });

        const ppbConfig = {
          token: process.env.NEXT_PUBLIC_PAYPHONE_TOKEN || "",
          clientTransactionId: orderData.clientTransactionId,
          amount: amountInCents,
          amountWithoutTax: amountInCents,
          amountWithTax: 0,
          tax: 0,
          service: 0,
          tip: 0,
          currency: "USD",
          storeId: process.env.NEXT_PUBLIC_PAYPHONE_STORE_ID || "",
          reference:
            orderData.reference ||
            `Anillo ${orderData.productModel} - ${orderData.material}`,
          lang: "es",
          defaultMethod: "card",
          phoneNumber: orderData.phoneNumber || `+593${orderData.telefono}`,
          email: orderData.email,
          documentId: orderData.documentId || orderData.cedula,
          identificationType: 1,
          responseUrl: window.location.origin + "/payment/success",
          cancelUrl: window.location.origin + "/payment/failed",
        };

        console.log(
          "Renderizando botón en el elemento pp-button con config:",
          ppbConfig
        );

        try {
          const ppb = new window.PPaymentButtonBox(ppbConfig);
          ppb.render("pp-button");
        } catch (innerError: any) {
          console.error("Error interno al renderizar botón:", innerError);
          throw innerError;
        }
      } catch (renderError: any) {
        console.error("Error al renderizar el botón de Payphone:", renderError);
        setError(
          "Error al configurar el botón de pago: " + renderError.message
        );
      }
    };

    // Verificar si el elemento ya existe
    const ppButtonElement = document.getElementById("pp-button");
    if (ppButtonElement) {
      renderPayphoneButton();
    } else {
      // Si no existe, esperar un poco y volver a intentar
      const checkInterval = setInterval(() => {
        const element = document.getElementById("pp-button");
        if (element) {
          clearInterval(checkInterval);
          renderPayphoneButton();
        }
      }, 100);

      // Limpieza de recursos
      return () => {
        clearInterval(checkInterval);
      };
    }
  }, [scriptLoaded, orderData, loading, error]);

  // Función para calcular el total
  const calcularTotal = (data: any) => {
    const precioBase = Number(data.precio || 0);
    const precioCaja = data.cajaSeleccionada === "led" ? 20 : 0;
    const subtotal = precioBase + precioCaja;
    const impuestoPayphone = Math.round(subtotal * 0.0605 * 100) / 100;
    return {
      subtotal,
      impuestoPayphone,
      total: subtotal + impuestoPayphone,
    };
  };

  // Función para manejar la redirección al catálogo
  const handleReturnToCatalog = () => {
    router.push("/shop");
  };

  if (loading) {
    return (
      <div
        className={`max-w-screen-sm mx-auto px-4 py-8 text-myZinc ${inter.className}`}
      >
        <h1 className="text-2xl font-bold mb-4">Preparando tu pago...</h1>
        <div className="bg-gray-100 rounded-lg p-6 mb-4 flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-zinc-800"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`max-w-screen-sm mx-auto px-4 py-8 text-myZinc ${inter.className}`}
      >
        <h1 className="text-2xl font-bold mb-4">Ocurrió un problema</h1>
        <div className="bg-red-50 p-4 rounded-lg mb-6 text-red-800">
          <p>{error}</p>
        </div>
        <button
          onClick={handleReturnToCatalog}
          className="inline-block bg-myZinc text-white py-2 px-4 rounded-lg"
        >
          Volver al catálogo
        </button>
      </div>
    );
  }

  return (
    <>
      <div
        className={`max-w-screen-sm mx-auto px-4 py-8 text-myZinc ${inter.className}`}
      >
        {/* Cargar el script de Payphone con Next.js Script para mejor rendimiento */}
        <Script
          src="https://cdn.payphonetodoesposible.com/box/v1.1/payphone-payment-box.js"
          strategy="afterInteractive"
          onLoad={() => {
            console.log("Script de Payphone cargado correctamente");
            setScriptLoaded(true);
          }}
          onError={() => {
            console.error("Error al cargar el script de Payphone");
            setError("Error al cargar los recursos de pago");
          }}
        />

        {/* Cargar CSS de Payphone */}
        <link
          rel="stylesheet"
          href="https://cdn.payphonetodoesposible.com/box/v1.1/payphone-payment-box.css"
        />

        <h1 className="text-2xl font-bold mb-4">Finaliza tu compra</h1>

        {orderData && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h2 className="font-semibold text-lg mb-2">Resumen de tu pedido</h2>
            <div className="space-y-2 mb-4">
              <p>
                <span className="font-medium">Producto:</span>{" "}
                {orderData.productModel}
              </p>
              <p>
                <span className="font-medium">Material:</span>{" "}
                {orderData.material} {orderData.color}
              </p>
              {orderData.size && (
                <p>
                  <span className="font-medium">Talla:</span> {orderData.size}
                </p>
              )}
              {orderData.sizeWoman && (
                <p>
                  <span className="font-medium">Talla mujer:</span>{" "}
                  {orderData.sizeWoman}
                </p>
              )}
            </div>

            <div className="border-t pt-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${calcularTotal(orderData).subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Comisión Payphone (6.05%):</span>
                <span>
                  ${calcularTotal(orderData).impuestoPayphone.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between font-bold pt-1 mt-1 border-t">
                <span>Total a pagar:</span>
                <span>${calcularTotal(orderData).total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Contenedor donde se renderizará el botón de Payphone */}
        <div
          id="pp-button"
          className="my-8 min-h-[200px] border border-gray-200 rounded-lg p-4"
        ></div>

        <div className="text-sm text-gray-600 mt-4">
          <p>
            • Tu pedido será entregado en un plazo de 7 días hábiles como
            máximo.
          </p>
          <p>• Aceptamos Visa y Mastercard para el pago en línea.</p>
        </div>
      </div>
    </>
  );
}

// Añadir el tipo PPaymentButtonBox a Window
declare global {
  interface Window {
    PPaymentButtonBox: any;
  }
}
