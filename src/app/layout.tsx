import { Providers } from "./providers";
import "./ui/globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AdviserContextProvider from "./context/AdviserContext";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { raleway } from "./ui/fonts";
import { Metadata } from "next";

// Metadata para SEO

export const metadata: Metadata = {
  title: "Cásate Conmigo - Joyería",
  description:
    "Descubre nuestros anillos de boda personalizados en oro 18k y plata 925. Compra en nuestra joyería en Quito y disfruta de envíos rápidos a todo Ecuador.",
};
// Elementos de navegación
const items = [
  { name: "Tienda", link: "/shop" },
  { name: "Conoce más", link: "/explicacion" },
  { name: "Nosotros", link: "/nosotros" },
];

// RootLayout con optimización SEO
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <GoogleTagManager gtmId="GTM-PCZR7KW9" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </head>
      <AdviserContextProvider>
        <body className={`${raleway.className} antialiased bg-myWhite`}>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PCZR7KW9"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <header>
            <title>Cásate Conmigo</title>
            <Nav elements={items} />
          </header>
          <main>
            <Providers>{children}</Providers>
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
        <GoogleAnalytics gaId="G-ZKWNJCQD3D" />
      </AdviserContextProvider>
    </html>
  );
}
