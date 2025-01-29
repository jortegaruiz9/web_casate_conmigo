import { Providers } from "./providers";
import "./ui/globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AdviserContextProvider from "./context/AdviserContext";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { raleway } from "./ui/fonts";
import { Metadata } from "next";
import Promo from "./components/Promo";
import CookieConsent from "./components/CookieConsent";
import Script from "next/script";

// Metadata para SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://www.casateconmigoecu.com"),
  title: {
    default: "Cásate Conmigo - Anillos de Compromiso y Matrimonio",
    template: "%s | Cásate Conmigo",
  },
  description:
    "Encuentra el anillo perfecto para tu compromiso o matrimonio. Amplia colección de anillos en oro y plata.",
  keywords: ["anillos", "compromiso", "matrimonio", "joyas", "oro", "plata"],
  openGraph: {
    title: "Cásate Conmigo - Anillos de Compromiso y Matrimonio",
    description: "Encuentra el anillo perfecto para tu compromiso o matrimonio",
    url: "https://www.casateconmigoecu.com",
    siteName: "Cásate Conmigo",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-de-google",
  },
};

// Elementos de navegación
const items = [
  { name: "Catálogo", link: "/shop" },
  { name: "Conoce más", link: "/explicacion" },
  { name: "Nosotros", link: "/nosotros" },
];

// elementos que le pasamos a nuestro componente de promociones
const promo = [{ text: "Adquiere tu anillo.", buttonText: "Agendar una cita" }];

// RootLayout con optimización SEO
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <Script
          id="gtm-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Verificar el consentimiento almacenado
              const hasConsent = localStorage.getItem('cookieConsent');
              
              // Configurar el consentimiento predeterminado
              gtag('consent', 'default', {
                'analytics_storage': hasConsent === 'true' ? 'granted' : 'denied',
                'ad_storage': hasConsent === 'true' ? 'granted' : 'denied',
                'functionality_storage': hasConsent === 'true' ? 'granted' : 'denied',
                'security_storage': 'granted', // Siempre concedido para funcionalidad básica
                'personalization_storage': hasConsent === 'true' ? 'granted' : 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
      </head>
      <AdviserContextProvider>
        <body className={`${raleway.className} antialiased bg-myWhite`}>
          <CookieConsent />
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtm.js?id=GTM-PCZR7KW9`}
          />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PCZR7KW9"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Script
            id="ga-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window['ga-disable-${process.env.NEXT_PUBLIC_GA_ID}'] = !localStorage.getItem('cookieConsent');
                
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                
                gtag('consent', 'default', {
                  'analytics_storage': 'denied',
                  'ad_storage': 'denied',
                  'wait_for_update': 500
                });
                
                // Reducir la frecuencia de eventos
                let throttleTimer;
                const throttleDelay = 2000; // 2 segundos entre eventos
                
                const originalPush = dataLayer.push;
                dataLayer.push = function (...args) {
                  if (!throttleTimer) {
                    throttleTimer = setTimeout(() => {
                      throttleTimer = null;
                    }, throttleDelay);
                    return originalPush.apply(this, args);
                  }
                  return undefined;
                };
              `,
            }}
          />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
          <header className="relative">
            <title>Cásate Conmigo</title>
            <div className="relative z-50">
              <Promo elements={promo} />
            </div>
            <div className="relative z-40">
              <Nav elements={items} />
            </div>
            <hr className="border-gray-300" />
          </header>
          <main className="relative z-30">
            <Providers>{children}</Providers>
          </main>
          <footer className="relative z-30">
            <Footer />
          </footer>
        </body>
      </AdviserContextProvider>
    </html>
  );
}
