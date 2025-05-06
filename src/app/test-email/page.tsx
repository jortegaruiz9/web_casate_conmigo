"use client";

import React, { useEffect, useState, useRef } from "react";
import { inter } from "@/app/ui/fonts";
import Link from "next/link";
import Script from "next/script";

export default function TestEmailPage() {
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const btnRef = useRef<HTMLInputElement>(null);

  // Manejar el envío del formulario exactamente como lo hace el usuario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) {
      alert("Error: formulario no encontrado");
      return;
    }

    setSending(true);
    setResult(null);

    if (btnRef.current) {
      btnRef.current.value = "Sending...";
    }

    try {
      if (typeof window.emailjs === "undefined") {
        throw new Error(
          "EmailJS no está disponible. Asegúrate de que el script esté cargado correctamente."
        );
      }

      const serviceID = "default_service";
      const templateID = "template_uvsnwjl";

      // Usar exactamente el mismo método que el usuario: sendForm
      const response = await window.emailjs.sendForm(
        serviceID,
        templateID,
        formRef.current
      );

      console.log("Respuesta de EmailJS:", response);

      if (btnRef.current) {
        btnRef.current.value = "Send Email";
      }

      alert("Sent!");

      setResult({
        success: true,
        message: "Email enviado correctamente",
        details: response,
      });
    } catch (error: any) {
      console.error("Error al enviar email:", error);

      if (btnRef.current) {
        btnRef.current.value = "Send Email";
      }

      alert(JSON.stringify(error));

      setResult({
        success: false,
        message: "Error al enviar el email",
        error: error.message,
      });
    } finally {
      setSending(false);
    }
  };

  // Añadir la hora actual al campo time al cargar la página
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

  return (
    <div className={`min-h-screen bg-gray-50 py-12 ${inter.className}`}>
      <Script
        id="emailjs-init-test"
        strategy="afterInteractive"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        onLoad={() => {
          console.log("EmailJS script cargado en la página de prueba");
          try {
            if (typeof window.emailjs !== "undefined") {
              window.emailjs.init("7g9Eo75qyHjgNk4Ai");
              console.log(
                "EmailJS inicializado correctamente en la página de prueba"
              );
              setScriptLoaded(true);
            } else {
              console.error(
                "EmailJS no está disponible después de cargar el script"
              );
            }
          } catch (error) {
            console.error("Error al inicializar EmailJS:", error);
          }
        }}
        onError={() => {
          console.error("Error al cargar el script de EmailJS");
        }}
      />

      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Prueba de EmailJS con sendForm
        </h1>

        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">
            Esta página usa <strong>exactamente</strong> el mismo código que tu
            ejemplo:
          </p>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto mb-2">
            {`const serviceID = 'default_service';
const templateID = 'template_uvsnwjl';

emailjs.sendForm(serviceID, templateID, this)
 .then(() => {
   btn.value = 'Send Email';
   alert('Sent!');
 }, (err) => {
   btn.value = 'Send Email';
   alert(JSON.stringify(err));
 });`}
          </pre>
          <p className="text-sm text-red-600">
            <strong>Nota importante:</strong> La plantilla debe esperar campos
            con los nombres <code>title</code>, <code>name</code>,{" "}
            <code>time</code>, <code>message</code> y <code>email</code>.
          </p>
        </div>

        <form
          id="form"
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="field">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              defaultValue="Prueba de EmailJS"
            />
          </div>

          <div className="field">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              defaultValue="Cliente de Prueba"
            />
          </div>

          <div className="field">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              time
            </label>
            <input
              type="text"
              name="time"
              id="time"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              readOnly
            />
          </div>

          <div className="field">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              message
            </label>
            <input
              type="text"
              name="message"
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              defaultValue="Este es un mensaje de prueba desde sendForm"
            />
          </div>

          <div className="field">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              placeholder="tucorreo@ejemplo.com"
              required
            />
          </div>

          <input
            type="submit"
            id="button"
            ref={btnRef}
            value="Send Email"
            disabled={sending || !scriptLoaded}
            className={`w-full bg-zinc-800 text-white py-2 px-4 rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 ${
              sending || !scriptLoaded ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </form>

        {result && (
          <div
            className={`mt-6 p-4 rounded-md ${
              result.success
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            <h3 className="font-medium mb-2">{result.message}</h3>
            {result.error && <p className="text-sm">{result.error}</p>}
            {result.details && (
              <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
                {typeof result.details === "string"
                  ? result.details
                  : JSON.stringify(result.details, null, 2)}
              </pre>
            )}
          </div>
        )}

        <div className="mt-6 pt-4 border-t text-center">
          <Link href="/" className="text-zinc-600 hover:text-zinc-800 text-sm">
            Volver al inicio
          </Link>
        </div>
      </div>
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
