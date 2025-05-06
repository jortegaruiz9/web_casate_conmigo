"use client";

import { useState, useEffect } from "react";
import { inter } from "@/app/ui/fonts";
import Link from "next/link";
import Script from "next/script";

export default function TestSimpleEmailPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Verificar si EmailJS ya está disponible (puede haberse cargado desde layout.tsx)
    if (
      typeof window !== "undefined" &&
      typeof window.emailjs !== "undefined"
    ) {
      setScriptLoaded(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Por favor ingresa un correo electrónico");
      return;
    }

    if (!scriptLoaded) {
      alert("EmailJS aún no está cargado. Por favor, espera un momento.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      console.log(`Enviando correo directamente desde el cliente a ${email}`);

      // Verificar que EmailJS está disponible
      if (typeof window.emailjs === "undefined") {
        throw new Error(
          "EmailJS no está disponible. Verifica que el script esté cargado correctamente."
        );
      }

      // Usar directamente la API de EmailJS desde el cliente
      const response = await window.emailjs.send(
        "default_service",
        "template_uvsnwjl",
        {
          title: "Correo de prueba desde cliente",
          name: name || "Usuario",
          time: new Date().toLocaleString(),
          message:
            "Este es un correo de prueba enviado directamente desde el cliente usando EmailJS.",
          email: email,
        }
      );

      console.log("Respuesta de EmailJS:", response);

      setResult({
        success: true,
        message: "Correo enviado correctamente",
        details: response,
      });

      alert(`¡Correo enviado exitosamente a ${email}!`);
    } catch (error) {
      console.error("Error al enviar correo:", error);
      setResult({
        success: false,
        error: error instanceof Error ? error.message : "Error desconocido",
      });
      alert(
        `Error al enviar correo: ${
          error instanceof Error ? error.message : "Error desconocido"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

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
          Prueba de EmailJS Cliente
        </h1>

        {!scriptLoaded && (
          <div className="mb-4 p-3 bg-yellow-50 text-yellow-800 rounded-md">
            <p>Cargando EmailJS... Por favor espera.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tucorreo@ejemplo.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Nombre (opcional):
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading || !scriptLoaded}
            className={`w-full bg-zinc-800 text-white py-2 px-4 rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 ${
              loading || !scriptLoaded ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Enviando..." : "Enviar correo de prueba"}
          </button>
        </form>

        {result && (
          <div
            className={`mt-6 p-4 rounded-md ${
              result.success
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            <h3 className="font-medium mb-2">
              {result.success ? "¡Correo enviado!" : "Error al enviar correo"}
            </h3>
            <p>{result.message}</p>
            {result.error && <p className="mt-2 text-sm">{result.error}</p>}
            {result.details && (
              <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
                {JSON.stringify(result.details, null, 2)}
              </pre>
            )}
          </div>
        )}

        <div className="mt-8 pt-4 border-t">
          <h2 className="text-lg font-semibold mb-2">
            Información importante:
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            <li>
              Esta prueba usa EmailJS{" "}
              <strong>directamente desde el cliente</strong>
            </li>
            <li>
              EmailJS <strong>solo permite llamadas desde el navegador</strong>,
              no desde el servidor
            </li>
            <li>
              La plantilla debe tener los campos: <code>title</code>,{" "}
              <code>name</code>, <code>time</code>, <code>message</code> y{" "}
              <code>email</code>
            </li>
            <li>
              Si esto funciona pero los endpoints del servidor fallan, confirma
              que estás usando EmailJS correctamente en tu aplicación
            </li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-zinc-600 hover:text-zinc-800 text-sm">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
