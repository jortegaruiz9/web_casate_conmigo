"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

interface PayphoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentData: {
    amount: number;
    clientTransactionId: string;
    reference: string;
    phoneNumber: string;
    email: string;
    documentId: string;
  };
  token: string;
  storeId: string;
  onPaymentComplete?: (response: any) => void;
}

export default function PayphoneModal({
  isOpen,
  onClose,
  paymentData,
  token,
  storeId,
  onPaymentComplete,
}: PayphoneModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const processedMessages = useRef(new Set<string>());

  // Forzar cierre después de cierto tiempo como último recurso
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (isOpen) {
      timeoutId = setTimeout(() => {
        console.log("Cierre de seguridad activado después de timeout");
        onClose();
      }, 300000); // 5 minutos como máximo
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setIsMounted(true);

    // Función para manejar clic fuera del modal
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Función para manejar el cierre del modal
  const handlePaymentSuccess = (data: any) => {
    console.log("Pago exitoso detectado, cerrando modal...", data);

    setPaymentCompleted(true);

    // Agregar setTimeout para asegurar que se muestre el feedback antes del cierre
    setTimeout(() => {
      if (onPaymentComplete) {
        onPaymentComplete(data);
      }
      onClose(); // Cerrar inmediatamente
    }, 300);
  };

  useEffect(() => {
    // Limpiamos el set de mensajes procesados cuando se abre/cierra el modal
    if (isOpen) {
      processedMessages.current.clear();
    }
  }, [isOpen]);

  useEffect(() => {
    // Solo inicializar Payphone cuando el modal esté abierto
    if (isOpen && iframeRef.current) {
      try {
        // El monto ya viene con el impuesto incluido desde ProductClient
        // No necesitamos calcular el impuesto de nuevo aquí
        const amount = paymentData.amount;

        console.log("Monto para Payphone (ya incluye comisión):", amount / 100);

        // Crear el contenido del iframe que contiene la cajita de pagos
        const iframeContent = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pago con Payphone</title>
            <link rel="stylesheet" href="https://cdn.payphonetodoesposible.com/box/v1.1/payphone-payment-box.css">
            <script type="module" src="https://cdn.payphonetodoesposible.com/box/v1.1/payphone-payment-box.js"></script>
            <style>
              body { margin: 0; padding: 16px; font-family: sans-serif; }
              #pp-button { min-height: 100px; width: 100%; }
            </style>
          </head>
          <body>
            <div id="pp-button"></div>
            <script>
              // Variable para controlar mensajes duplicados
              const processedMessages = new Set();
              
              window.addEventListener('DOMContentLoaded', () => {
                try {
                  if (window.PPaymentButtonBox) {
                    const ppb = new window.PPaymentButtonBox({
                      token: '${token}',
                      clientTransactionId: '${paymentData.clientTransactionId}',
                      amount: ${amount}, 
                      amountWithoutTax: ${amount}, 
                      amountWithTax: 0, 
                      tax: 0,
                      service: 0,
                      tip: 0,
                      currency: "USD",
                      storeId: '${storeId}',
                      reference: '${paymentData.reference}',
                      lang: "es",
                      defaultMethod: "card",
                      phoneNumber: '${paymentData.phoneNumber}',
                      email: '${paymentData.email}',
                      documentId: '${paymentData.documentId}',
                      identificationType: 1,
                      responseUrl: window.location.origin + "/payment/success"
                    });
                    ppb.render('pp-button');
                    
                    // Almacenar los datos de la compra para recuperarlos después
                    window.localStorage.setItem('pendingOrder', JSON.stringify({
                      productModel: '${encodeURIComponent(
                        paymentData.reference
                          .split(" - ")[0]
                          .replace("Anillo ", "")
                      )}',
                      productCategory: '${encodeURIComponent(
                        paymentData.reference.split(" - ")[1] || ""
                      )}',
                      total: ${amount / 100},
                      phoneNumber: '${paymentData.phoneNumber}',
                      email: '${paymentData.email}',
                      documentId: '${paymentData.documentId}',
                      clientTransactionId: '${paymentData.clientTransactionId}'
                    }));

                    // Función para notificar al componente padre (evitando duplicados)
                    function notifyComplete(data = {}) {
                      const messageKey = JSON.stringify(data);
                      if (processedMessages.has(messageKey)) {
                        console.log('Mensaje ya procesado, ignorando');
                        return;
                      }
                      
                      processedMessages.add(messageKey);
                      window.parent.postMessage({
                        type: "PAYMENT_COMPLETE",
                        data: {
                          ...data,
                          clientTransactionId: data.clientTransactionId || '${
                            paymentData.clientTransactionId
                          }'
                        }
                      }, "*");
                      
                      console.log('Mensaje enviado al componente padre:', data);
                    }
                    
                    // Sobrescribir el método replace para capturar redirecciones
                    const originalReplace = window.location.replace;
                    window.location.replace = function(url) {
                      console.log('IFRAME: Redirección interceptada:', url);
                      if (url && (url.includes('/payment/success') || url.includes('payphone'))) {
                        notifyComplete({url});
                        return; // NO redirigir desde aquí
                      }
                      return originalReplace.apply(this, arguments);
                    };
                    
                    // Detectar mensajes dentro del iframe
                    window.addEventListener('message', function(event) {
                      // No reenviar mensajes al padre para evitar bucles
                      console.log('IFRAME: Mensaje recibido (solo log):', event.data);
                    });
                    
                    // Detector para eventos de pago específicos
                    document.addEventListener('paymentSuccess', function() {
                      // Agregar tiempo para procesar el mensaje antes de redireccionar
                      setTimeout(() => {
                        notifyComplete({event: 'paymentSuccess'});
                      }, 100);
                      
                      // Eliminar la redirección directa desde el iframe
                      // La redirección ahora será manejada por el componente padre
                    });
                  } else {
                    console.error("PPaymentButtonBox no está disponible");
                  }
                } catch (error) {
                  console.error("Error al inicializar Payphone:", error);
                }
              });
            </script>
          </body>
          </html>
        `;

        // Aplicar el contenido al iframe
        const iframe = iframeRef.current;
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow?.document;

        if (iframeDoc) {
          iframeDoc.open();
          iframeDoc.write(iframeContent);
          iframeDoc.close();
        }
      } catch (error) {
        console.error("Error al configurar el iframe:", error);
      }
    }
  }, [isOpen, paymentData, token, storeId]);

  // Escuchar mensajes del iframe (con control de duplicados)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Crea una clave única para este mensaje
      const messageKey = JSON.stringify(event.data);

      // Evitar procesar el mismo mensaje múltiples veces
      if (processedMessages.current.has(messageKey)) {
        return;
      }

      console.log("Mensaje recibido en ventana principal:", event.data);
      processedMessages.current.add(messageKey);

      if (event.data && event.data.type === "PAYMENT_COMPLETE") {
        handlePaymentSuccess(event.data.data || event.data);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [onClose, onPaymentComplete]);

  // Si no está montado, no renderizar nada
  if (!isMounted) return null;

  // Si no está abierto, no renderizar nada
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-md p-4 max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Pago con Payphone</h3>
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-600 p-2 rounded-full"
          >
            <span className="icon-[material-symbols--close] text-xl"></span>
          </button>
        </div>

        <div className="flex-grow overflow-auto">
          <iframe
            ref={iframeRef}
            className="w-full h-full min-h-[400px] border-0"
            title="Payphone Payment"
            sandbox="allow-scripts allow-forms allow-same-origin"
          />
        </div>

        {paymentCompleted && (
          <div className="bg-green-100 p-2 mt-2 rounded text-center text-green-700">
            ¡Pago completado!
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
