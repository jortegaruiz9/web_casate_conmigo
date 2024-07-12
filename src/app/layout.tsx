import { Providers } from "./providers";
import "./ui/globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AdviserContextProvider from "./context/AdviserContext";
import GoogleTagManager from "./components/GoogleTagManager";
import { raleway } from "./ui/fonts";
import { Metadata } from "next";

// Metadata para SEO

export const metadata: Metadata = {
  title: "Cásate Conmigo Ec - Anillos de Boda en Oro 18k y Plata 925",
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
        <GoogleTagManager />
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
      </AdviserContextProvider>
    </html>
  );
}
