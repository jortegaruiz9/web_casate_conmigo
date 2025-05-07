"use client";

import React, { useRef, useState, useEffect } from "react";
import Script from "next/script";

interface EmailJSFormProps {
  title?: string;
  defaultMessage?: string;
  defaultName?: string;
  defaultEmail?: string;
  buttonText?: string;
  onSuccess?: (response: any) => void;
  onError?: (error: any) => void;
  className?: string;
}

export default function EmailJSForm({
  title = "Envío de Email",
  defaultMessage = "",
  defaultName = "",
  defaultEmail = "",
  buttonText = "Enviar Email",
  onSuccess,
  onError,
  className = "",
}: EmailJSFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLInputElement>(null);
  const [sending, setSending] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // Actualizar el campo de tiempo al cargar
  useEffect(() => {
    if (formRef.current) {
      const timeField = formRef.current.querySelector(
        "#time"
      ) as HTMLInputElement;
      if (timeField) {
        timeField.value = new Date().toLocaleString();
      }
    }
  }, [scriptLoaded]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) {
      setError("Error: formulario no encontrado");
      return;
    }

    // Verificar que el email está completo
    const emailField = formRef.current.querySelector(
      "#email"
    ) as HTMLInputElement;
    if (!emailField || !emailField.value) {
      setError("Por favor, ingresa un correo electrónico");
      return;
    }

    setSending(true);
    setError(null);
    setSuccess(false);

    if (buttonRef.current) {
      buttonRef.current.value = "Enviando...";
    }

    try {
      if (typeof window.emailjs === "undefined") {
        throw new Error(
          "EmailJS no está disponible. Asegúrate de que el script esté cargado correctamente."
        );
      }

      const serviceID = "default_service";
      const templateID = "template_8xccjbi";

      // Usar exactamente el mismo método que muestra el ejemplo del usuario
      console.log("Enviando formulario con EmailJS...");
      const response = await window.emailjs.sendForm(
        serviceID,
        templateID,
        formRef.current
      );

      console.log("Respuesta de EmailJS:", response);

      if (buttonRef.current) {
        buttonRef.current.value = buttonText;
      }

      // Mostrar éxito
      setSuccess(true);

      // Limpiar campos excepto nombre y email
      const messageField = formRef.current.querySelector(
        "#message"
      ) as HTMLInputElement;
      if (messageField) {
        messageField.value = "";
      }

      // Llamar al callback de éxito si existe
      if (onSuccess) {
        onSuccess(response);
      }
    } catch (err: any) {
      console.error("Error al enviar email:", err);

      if (buttonRef.current) {
        buttonRef.current.value = buttonText;
      }

      setError(err.message || "Error al enviar el email");

      // Llamar al callback de error si existe
      if (onError) {
        onError(err);
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={className}>
      <Script
        id="emailjs-init-component"
        strategy="afterInteractive"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        onLoad={() => {
          console.log("EmailJS script cargado en el componente");
          try {
            if (typeof window.emailjs !== "undefined") {
              window.emailjs.init("7g9Eo75qyHjgNk4Ai");
              console.log(
                "EmailJS inicializado correctamente en el componente"
              );
              setScriptLoaded(true);
            } else {
              console.error(
                "EmailJS no está disponible después de cargar el script"
              );
              setError(
                "No se pudo cargar EmailJS. Por favor, recarga la página."
              );
            }
          } catch (error) {
            console.error("Error al inicializar EmailJS:", error);
            setError("Error al inicializar EmailJS");
          }
        }}
        onError={() => {
          console.error("Error al cargar el script de EmailJS");
          setError("Error al cargar el script de EmailJS");
        }}
      />

      <form
        id="form"
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input type="hidden" name="title" id="title" value={title} />

        <div className="field">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={defaultName}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
          />
        </div>

        <input type="hidden" name="time" id="time" />

        <div className="field">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mensaje:
          </label>
          <textarea
            name="message"
            id="message"
            defaultValue={defaultMessage}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
          />
        </div>

        <div className="field">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={defaultEmail}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
          />
        </div>

        <div>
          <input
            type="submit"
            id="button"
            ref={buttonRef}
            value={buttonText}
            disabled={sending || !scriptLoaded}
            className={`w-full bg-zinc-800 text-white py-2 px-4 rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 ${
              sending || !scriptLoaded ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </div>

        {error && (
          <div className="bg-red-50 text-red-800 p-3 rounded-md text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 text-green-800 p-3 rounded-md text-sm">
            Mensaje enviado correctamente
          </div>
        )}
      </form>
    </div>
  );
}

// Añadir la definición de tipos para EmailJS en Window
declare global {
  interface Window {
    emailjs: {
      init: (userId: string) => void;
      send: (
        serviceId: string,
        templateId: string,
        templateParams: Record<string, any>,
        userId?: string
      ) => Promise<{ status: number; text: string }>;
      sendForm: (
        serviceId: string,
        templateId: string,
        form: HTMLFormElement | string,
        userId?: string
      ) => Promise<{ status: number; text: string }>;
    };
  }
}
