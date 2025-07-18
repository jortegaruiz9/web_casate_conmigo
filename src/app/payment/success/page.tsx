"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AdviserContext } from "@/app/context/AdviserContext";
import { sendEmailWithRetry } from "@/app/utils/emailService";

// Definir tipo para el pedido
interface OrderDetails {
  productModel?: string;
  productCategory?: string;
  material?: string;
  color?: string;
  size?: number;
  sizeWoman?: number;
  grabadoEl?: string;
  grabadoElla?: string;
  cajaSeleccionada?: string;
  nombres?: string;
  apellidos?: string;
  telefono?: string;
  cedula?: string;
  email?: string;
  ciudad?: string;
  direccion?: string;
  tipoEntrega?: string;
  precio?: number;
  precioCaja?: number;
  total?: number;
  transactionId?: string;
  authorizationCode?: string;
  lastDigits?: string;
  adviser?: { name: string };
  [key: string]: any; // Para permitir acceso dinámico a propiedades
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}

// Componente con todo el contenido actual
function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const { adviser } = useContext(AdviserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [orderData, setOrderData] = useState<OrderDetails>({});
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    const loadOrderData = async () => {
      try {
        console.log("Cargando datos del pedido...");

        // 1. Intentar obtener datos de localStorage
        const storedData = localStorage.getItem("pendingOrderDetails");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          console.log("Datos encontrados en localStorage:", parsedData);

          // Agregar info de transacción desde URL
          const transactionId = searchParams.get("id");
          const clientTransactionId = searchParams.get("clientTransactionId");

          if (transactionId) {
            parsedData.transactionId = transactionId;
          }

          setOrderData(parsedData);
          setLoading(false);
          return;
        }

        // Si no hay datos, mostrar error
        setError("No se encontraron datos del pedido");
        setLoading(false);
      } catch (err) {
        console.error("Error al cargar datos:", err);
        setError("Error al procesar la información del pedido");
        setLoading(false);
      }
    };

    loadOrderData();
  }, [searchParams]);

  // Función para enviar correo automáticamente
  useEffect(() => {
    // Solo enviar si tenemos datos de pedido y no estamos cargando
    if (!loading && orderData && orderData.email && !emailSent) {
      // Pequeño retraso para asegurar que todo está cargado
      const timer = setTimeout(async () => {
        try {
          console.log("Enviando email de confirmación automáticamente...");
          console.log("Datos del pedido para correo:", orderData);

          // Verificar si hay información del asesor
          let asesorLetra = "N/A";
          if (orderData.adviser && orderData.adviser.name) {
            asesorLetra = orderData.adviser.name.toUpperCase().charAt(0);
            console.log(
              "Información del asesor encontrada:",
              orderData.adviser,
              "- Letra:",
              asesorLetra
            );
          } else {
            console.log(
              "No se encontró información del asesor en los datos del pedido"
            );
          }

          setSendingEmail(true);
          console.log("Enviando email automático desde el cliente");

          // Calcular totales si es necesario
          const subtotal = orderData.subtotal
            ? Number(orderData.subtotal)
            : Number(orderData.precio || 0) + Number(orderData.precioCaja || 0);

          const impuesto = orderData.impuestoPayphone
            ? Number(orderData.impuestoPayphone)
            : Math.round(subtotal * 0.0605 * 100) / 100;

          const total = orderData.total
            ? Number(orderData.total)
            : subtotal + impuesto;

          // Usar la nueva función de envío con reintentos
          const response = await sendEmailWithRetry(
            "default_service",
            "template_8xccjbi",
            {
              name: `${orderData.nombres || ""} ${orderData.apellidos || ""}`,
              time: new Date().toLocaleString(),
              message: `
*DATOS DEL PEDIDO*
------------------------
*Producto:* ${orderData.productModel || "No disponible"}
*Categoría:* ${orderData.productCategory || "No disponible"}
*Material:* ${orderData.material || "No disponible"} ${orderData.color || ""}
${orderData.size ? `*Talla:* ${orderData.size}` : ""}
${orderData.sizeWoman ? `*Talla mujer:* ${orderData.sizeWoman}` : ""}
${orderData.grabadoEl ? `*Grabado él:* ${orderData.grabadoEl}` : ""}
${orderData.grabadoElla ? `*Grabado ella:* ${orderData.grabadoElla}` : ""}
*Caja:* ${orderData.cajaSeleccionada === "led" ? "Caja LED" : "Caja Gamuza"}

*DATOS DE ENTREGA*
------------------------
*Ciudad:* ${orderData.ciudad || "No disponible"}
*Dirección:* ${orderData.direccion || "No disponible"}
*Método de entrega:* ${
                orderData.tipoEntrega === "envio"
                  ? "Envío Gratuito Servientrega"
                  : "Retiro en tienda Quito"
              }
*Teléfono:* +593${orderData.telefono || "No disponible"}
*Email:* ${orderData.email}

*RESUMEN DE PAGO*
------------------------
${
  orderData.precio
    ? `*Precio base:* $${Number(orderData.precio).toFixed(2)}`
    : ""
}
${
  orderData.precioCaja && Number(orderData.precioCaja) > 0
    ? `*Caja LED:* $${Number(orderData.precioCaja).toFixed(2)}`
    : ""
}
*Subtotal:* $${subtotal.toFixed(2)}
*Comisión Payphone (6.05%):* $${impuesto.toFixed(2)}
*Total:* $${total.toFixed(2)}

*INFORMACIÓN ADICIONAL*
------------------------
*Asesor:* ${asesorLetra}
*ID transacción:* ${orderData.transactionId || "No disponible"}
${
  orderData.authorizationCode
    ? `*Código autorización:* ${orderData.authorizationCode}`
    : ""
}
${orderData.lastDigits ? `*Últimos dígitos:* ${orderData.lastDigits}` : ""}

¡Gracias por tu compra!
`,
              email: orderData.email,
              title: `Confirmación de Pedido - ${
                orderData.productModel || "Anillo"
              } - Asesor: ${asesorLetra}`,
            },
            "7g9Eo75qyHjgNk4Ai"
          );

          console.log("Resultado de EmailJS automático:", response);
          if (response.status === 200) {
            setEmailSent(true);
          }
        } catch (err) {
          console.error("Error al enviar correo automático:", err);
        } finally {
          setSendingEmail(false);
        }
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [loading, orderData, emailSent]);

  const shareWithAdviser = () => {
    try {
      // Calcular el total correcto
      const subtotal = orderData.subtotal
        ? Number(orderData.subtotal)
        : Number(orderData.precio || 0) + Number(orderData.precioCaja || 0);

      const impuesto = orderData.impuestoPayphone
        ? Number(orderData.impuestoPayphone)
        : Math.round(subtotal * 0.0605 * 100) / 100;

      const total =
        orderData.total && !isNaN(Number(orderData.total))
          ? Number(orderData.total)
          : subtotal + impuesto;

      // Construir un mensaje detallado para WhatsApp
      let message = `Hola, soy *${orderData.nombres || ""} ${
        orderData.apellidos || ""
      }*.\n\n`;
      message += `*DATOS DEL PEDIDO*\n`;
      message += `------------------------\n`;
      message += `*Producto:* ${orderData.productModel || ""}\n`;
      message += `*Categoría:* ${orderData.productCategory || ""}\n`;
      message += `*Material:* ${orderData.material || ""} ${
        orderData.color || ""
      }\n`;

      // Tallas (si aplican)
      if (orderData.size) {
        message += `*Talla:* ${orderData.size}\n`;
      }
      if (orderData.sizeWoman) {
        message += `*Talla mujer:* ${orderData.sizeWoman}\n`;
      }

      // Grabados (si aplican)
      console.log("Datos de grabado:", {
        grabadoEl: orderData.grabadoEl,
        grabadoElla: orderData.grabadoElla,
      });

      if (
        orderData.grabadoEl !== undefined &&
        orderData.grabadoEl !== null &&
        orderData.grabadoEl !== ""
      ) {
        message += `*Grabado él:* ${orderData.grabadoEl}\n`;
      }
      if (
        orderData.grabadoElla !== undefined &&
        orderData.grabadoElla !== null &&
        orderData.grabadoElla !== ""
      ) {
        message += `*Grabado ella:* ${orderData.grabadoElla}\n`;
      }

      // Tipo de caja
      message += `*Caja:* ${
        orderData.cajaSeleccionada === "led" ? "Caja LED" : "Caja Gamuza"
      }\n`;

      message += `\n*DATOS DE ENTREGA*\n`;
      message += `------------------------\n`;
      message += `*Ciudad:* ${orderData.ciudad || ""}\n`;
      message += `*Dirección:* ${orderData.direccion || ""}\n`;
      message += `*Método de entrega:* ${
        orderData.tipoEntrega === "envio"
          ? "Envío Gratuito Servientrega"
          : "Retiro en tienda Quito"
      }\n`;
      message += `*Teléfono:* +593${orderData.telefono || ""}\n`;
      message += `*Email:* ${orderData.email || ""}\n`;

      message += `\n*RESUMEN DE PAGO*\n`;
      message += `------------------------\n`;
      if (orderData.precio) {
        message += `*Precio base:* $${Number(orderData.precio).toFixed(2)}\n`;
      }
      if (orderData.precioCaja && Number(orderData.precioCaja) > 0) {
        message += `*Caja LED:* $${Number(orderData.precioCaja).toFixed(2)}\n`;
      }
      message += `*Subtotal:* $${subtotal.toFixed(2)}\n`;
      message += `*Comisión Payphone (6.05%):* $${impuesto.toFixed(2)}\n`;
      message += `*Total:* $${total.toFixed(2)}\n`;

      // Información de la transacción
      message += `\n*ID transacción:* ${
        orderData.transactionId || "No disponible"
      }\n`;
      if (orderData.authorizationCode) {
        message += `*Código autorización:* ${orderData.authorizationCode}\n`;
      }

      message += `\n¿Podrías confirmarme la recepción de mi pedido? Gracias.`;

      // Construir URL de WhatsApp
      const whatsappURL = `https://wa.me/593${
        adviser.tel
      }?text=${encodeURIComponent(message)}`;

      // Abrir WhatsApp
      window.open(whatsappURL, "_blank");
    } catch (err) {
      console.error("Error al compartir con asesor:", err);
      alert("No se pudo contactar al asesor. Por favor, inténtalo más tarde.");
    }
  };

  // Nueva función para enviar el correo de confirmación manualmente
  const resendConfirmationEmail = async () => {
    if (!orderData.email) {
      alert("No hay datos de email para enviar la confirmación");
      return;
    }

    setSendingEmail(true);
    try {
      console.log(
        "Enviando email directamente desde el cliente con datos completos"
      );
      console.log("Datos del pedido para reenvío:", orderData);

      // Verificar si hay información del asesor
      let asesorLetra = "N/A";
      if (orderData.adviser && orderData.adviser.name) {
        asesorLetra = orderData.adviser.name.toUpperCase().charAt(0);
        console.log(
          "Información del asesor encontrada para reenvío:",
          orderData.adviser,
          "- Letra:",
          asesorLetra
        );
      } else {
        console.log(
          "No se encontró información del asesor en los datos del pedido para reenvío"
        );
      }

      // Calcular totales si es necesario
      const subtotal = orderData.subtotal
        ? Number(orderData.subtotal)
        : Number(orderData.precio || 0) + Number(orderData.precioCaja || 0);

      const impuesto = orderData.impuestoPayphone
        ? Number(orderData.impuestoPayphone)
        : Math.round(subtotal * 0.0605 * 100) / 100;

      const total = orderData.total
        ? Number(orderData.total)
        : subtotal + impuesto;

      // Usar la nueva función de envío con reintentos
      const response = await sendEmailWithRetry(
        "default_service",
        "template_8xccjbi",
        {
          name: `${orderData.nombres || ""} ${orderData.apellidos || ""}`,
          time: new Date().toLocaleString(),
          message: `
*DATOS DEL PEDIDO*
------------------------
*Producto:* ${orderData.productModel || "No disponible"}
*Categoría:* ${orderData.productCategory || "No disponible"}
*Material:* ${orderData.material || "No disponible"} ${orderData.color || ""}
${orderData.size ? `*Talla:* ${orderData.size}` : ""}
${orderData.sizeWoman ? `*Talla mujer:* ${orderData.sizeWoman}` : ""}
${orderData.grabadoEl ? `*Grabado él:* ${orderData.grabadoEl}` : ""}
${orderData.grabadoElla ? `*Grabado ella:* ${orderData.grabadoElla}` : ""}
*Caja:* ${orderData.cajaSeleccionada === "led" ? "Caja LED" : "Caja Gamuza"}

*DATOS DE ENTREGA*
------------------------
*Ciudad:* ${orderData.ciudad || "No disponible"}
*Dirección:* ${orderData.direccion || "No disponible"}
*Método de entrega:* ${
            orderData.tipoEntrega === "envio"
              ? "Envío Gratuito Servientrega"
              : "Retiro en tienda Quito"
          }
*Teléfono:* +593${orderData.telefono || "No disponible"}
*Email:* ${orderData.email}

*RESUMEN DE PAGO*
------------------------
${
  orderData.precio
    ? `*Precio base:* $${Number(orderData.precio).toFixed(2)}`
    : ""
}
${
  orderData.precioCaja && Number(orderData.precioCaja) > 0
    ? `*Caja LED:* $${Number(orderData.precioCaja).toFixed(2)}`
    : ""
}
*Subtotal:* $${subtotal.toFixed(2)}
*Comisión Payphone (6.05%):* $${impuesto.toFixed(2)}
*Total:* $${total.toFixed(2)}

*INFORMACIÓN ADICIONAL*
------------------------
*Asesor:* ${asesorLetra}
*ID transacción:* ${orderData.transactionId || "No disponible"}
${
  orderData.authorizationCode
    ? `*Código autorización:* ${orderData.authorizationCode}`
    : ""
}
${orderData.lastDigits ? `*Últimos dígitos:* ${orderData.lastDigits}` : ""}

¡Gracias por tu compra!
`,
          email: orderData.email,
          title: `Confirmación de Pedido - ${
            orderData.productModel || "Anillo"
          }`,
        },
        "7g9Eo75qyHjgNk4Ai"
      );

      console.log("Resultado de EmailJS:", response);

      if (response.status === 200) {
        setEmailSent(true);
        alert("Correo de confirmación enviado correctamente");
      } else {
        alert(`Error al enviar el correo: Código ${response.status}`);
      }
    } catch (err) {
      console.error("Error al enviar correo:", err);
      alert(
        `Error al enviar el correo: ${
          err instanceof Error ? err.message : "Error desconocido"
        }`
      );
    } finally {
      setSendingEmail(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-myZinc">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">
              Procesando información...
            </h2>
            <p>Estamos verificando tu pedido, espera un momento por favor.</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-myZinc">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4 text-red-500">
              Error al cargar los datos
            </h2>
            <p>{error}</p>
            <Link
              href="/"
              className="mt-6 inline-block px-6 py-2 bg-myZinc text-white rounded-lg"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 text-myZinc">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-start">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 mb-6">
                <span className="icon-[heroicons--check-circle-solid] mr-2" />
                <span>Pago exitoso</span>
              </div>
              <h1 className="text-2xl font-bold">¡Gracias por tu compra!</h1>
              <p className="text-gray-600 mt-2">
                Tu pedido ha sido recibido y está siendo procesado.
                {orderData.email && (
                  <span className="block mt-1">
                    {orderData.emailSent ? (
                      <span className="text-green-600">
                        ✓ Te hemos enviado un correo de confirmación a{" "}
                        {orderData.email}
                      </span>
                    ) : (
                      <span>
                        Recibirás información del pedido en tu correo{" "}
                        {orderData.email}
                      </span>
                    )}
                  </span>
                )}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">ID de transacción:</p>
              <p className="font-medium">
                {orderData.transactionId || "No disponible"}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Detalles del Pedido</h2>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Producto</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <span className="font-medium">Modelo:</span>{" "}
                      {orderData.productModel || "No disponible"}
                    </li>
                    <li>
                      <span className="font-medium">Categoría:</span>{" "}
                      {orderData.productCategory || "Categoría"}
                    </li>
                    <li>
                      <span className="font-medium">Material:</span>{" "}
                      {orderData.material || "No disponible"}
                    </li>
                    <li>
                      <span className="font-medium">Color:</span>{" "}
                      {orderData.color || "No disponible"}
                    </li>
                    {orderData.size && (
                      <li>
                        <span className="font-medium">Talla:</span>{" "}
                        {orderData.size}
                      </li>
                    )}
                    {orderData.sizeWoman && (
                      <li>
                        <span className="font-medium">Talla mujer:</span>{" "}
                        {orderData.sizeWoman}
                      </li>
                    )}
                    {orderData.grabadoEl && (
                      <li>
                        <span className="font-medium">Grabado él:</span>{" "}
                        {orderData.grabadoEl}
                      </li>
                    )}
                    {orderData.grabadoElla && (
                      <li>
                        <span className="font-medium">Grabado ella:</span>{" "}
                        {orderData.grabadoElla}
                      </li>
                    )}
                    <li>
                      <span className="font-medium">Caja:</span>{" "}
                      {orderData.cajaSeleccionada === "led"
                        ? "Caja LED"
                        : "Caja Gamuza"}
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-3">
                    Datos de Entrega
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <span className="font-medium">Nombre:</span>{" "}
                      {orderData.nombres} {orderData.apellidos}
                    </li>
                    <li>
                      <span className="font-medium">Teléfono:</span> +593
                      {orderData.telefono}
                    </li>
                    <li>
                      <span className="font-medium">Email:</span>{" "}
                      {orderData.email}
                    </li>
                    <li>
                      <span className="font-medium">Ciudad:</span>{" "}
                      {orderData.ciudad}
                    </li>
                    <li>
                      <span className="font-medium">Dirección:</span>{" "}
                      {orderData.direccion}
                    </li>
                    <li>
                      <span className="font-medium">Método de entrega:</span>{" "}
                      {orderData.tipoEntrega === "envio"
                        ? "Envío Gratuito Servientrega"
                        : "Retiro en tienda Quito"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Resumen de Pago</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  {orderData.precio && (
                    <div className="flex justify-between">
                      <span>Precio base:</span>
                      <span>${Number(orderData.precio).toFixed(2)}</span>
                    </div>
                  )}
                  {orderData.precioCaja && Number(orderData.precioCaja) > 0 && (
                    <div className="flex justify-between">
                      <span>Caja LED:</span>
                      <span>${Number(orderData.precioCaja).toFixed(2)}</span>
                    </div>
                  )}

                  {/* Calcular el subtotal en caso de que no venga en los datos */}
                  {(() => {
                    const subtotal = orderData.subtotal
                      ? Number(orderData.subtotal)
                      : Number(orderData.precio || 0) +
                        Number(orderData.precioCaja || 0);

                    return (
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                    );
                  })()}

                  {/* Calcular el impuesto si no viene en los datos */}
                  {(() => {
                    const subtotal = orderData.subtotal
                      ? Number(orderData.subtotal)
                      : Number(orderData.precio || 0) +
                        Number(orderData.precioCaja || 0);

                    const impuesto = orderData.impuestoPayphone
                      ? Number(orderData.impuestoPayphone)
                      : Math.round(subtotal * 0.0605 * 100) / 100;

                    return (
                      <div className="flex justify-between text-gray-600">
                        <span>Comisión Payphone (6.05%):</span>
                        <span>${impuesto.toFixed(2)}</span>
                      </div>
                    );
                  })()}

                  {/* Calcular el total final */}
                  {(() => {
                    // Si ya tenemos un total y es un número válido, usarlo
                    if (orderData.total && !isNaN(Number(orderData.total))) {
                      return (
                        <div className="flex justify-between font-semibold pt-3 border-t border-gray-200">
                          <span>Total:</span>
                          <span>${Number(orderData.total).toFixed(2)}</span>
                        </div>
                      );
                    }

                    // Si no, calcularlo de los componentes
                    const subtotal = orderData.subtotal
                      ? Number(orderData.subtotal)
                      : Number(orderData.precio || 0) +
                        Number(orderData.precioCaja || 0);

                    const impuesto = orderData.impuestoPayphone
                      ? Number(orderData.impuestoPayphone)
                      : Math.round(subtotal * 0.0605 * 100) / 100;

                    const total = subtotal + impuesto;

                    return (
                      <div className="flex justify-between font-semibold pt-3 border-t border-gray-200">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center">
              <button
                onClick={shareWithAdviser}
                className="py-3 px-6 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center transition-colors"
              >
                <span className="icon-[mdi--whatsapp] mr-2 text-xl" />
                Compartir información del pedido con tu asesor
              </button>

              {!emailSent && (
                <button
                  onClick={resendConfirmationEmail}
                  disabled={sendingEmail}
                  className={`mt-4 py-2 px-4 text-white rounded-lg flex items-center transition-colors ${
                    sendingEmail
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  <span className="icon-[heroicons--envelope] mr-2" />
                  {sendingEmail
                    ? "Enviando..."
                    : "Reenviar correo de confirmación"}
                </button>
              )}

              <Link href="/" className="mt-4 text-gray-600 hover:text-gray-800">
                Volver a la página de inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
