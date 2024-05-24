import { Providers } from "./providers";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AdviserContextProvider from "./context/AdviserContext";
import Head from "next/head";

// Metadata para SEO
const title = "Cásate Conmigo Ec - Anillos de Boda en Oro 18k y Plata 925";
const description =
  "Descubre nuestros anillos de boda personalizados en oro 18k y plata 925. Compra en nuestra joyería en Quito y disfruta de envíos rápidos a todo Ecuador.";

// Elementos de navegación
const items = [
  { name: "Tienda", link: "/shop" },
  { name: "Lo que debes saber", link: "/explicacion" },
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <AdviserContextProvider>
        <body className="bg-myWhite">
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
