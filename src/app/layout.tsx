import { Providers } from "./providers";
import "./ui/globals.css";
import Footer from "@/components/sup/Footer";
import AdviserContextProvider from "./context/AdviserContext";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { raleway } from "./ui/fonts";
import { Metadata } from "next";
import Promo from "@/components/top/Promo";
import CookieConsent from "@/components/ui/CookieConsent";
import Script from "next/script";
import { Navbar } from "@/components/top/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.casateconmigo.ec"),
  title: {
    default: "Joyería Cásate Conmigo",
    template: "%s | Cásate Conmigo",
  },
  description: "Encuentra el anillo perfecto para tu momento especial",
  keywords: ["anillos", "compromiso", "matrimonio", "joyas", "oro", "plata"],
  openGraph: {
    title: "Joyería Cásate Conmigo",
    description: "Encuentra el anillo perfecto para tu momento especial",
    url: "https://www.casateconmigo.ec",
    siteName: "Cásate Conmigo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cásate Conmigo - Anillos de boda",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joyería Cásate Conmigo",
    description: "Encuentra el anillo perfecto para tu momento especial",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "";

  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        {/* Inicializar Consentimiento de Cookies */}
        <Script
          id="cookie-consent"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              const consent = localStorage.getItem('cookieConsent') === 'true';
              gtag('consent', 'default', {
                ad_storage: consent ? 'granted' : 'denied',
                analytics_storage: consent ? 'granted' : 'denied',
              });
            `,
          }}
        />
      </head>

      <AdviserContextProvider>
        <body className={`${raleway.className} antialiased bg-myWhite`}>
          {/* Google Tag Manager */}
          <GoogleTagManager gtmId={gtmId} />

          {/* Google Analytics */}
          <GoogleAnalytics gaId={gaId} />

          {/* Cookie Consent banner */}
          <CookieConsent />

          {/* Tu contenido */}
          <header className="relative">
            <div className="relative z-30">
              <Promo />
            </div>
            <div className="relative z-40">
              <Navbar />
            </div>
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
