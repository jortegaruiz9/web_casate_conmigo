import type { Metadata } from "next";
import { Providers } from "./providers";

import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AdviserContextProvider from "./context/AdviserContext";

export const metadata: Metadata = {
  title: "Cásate Conmigo Ec",
  description: "Venta web de anillos de boda",
};

let items = [
  { name: "Tienda", link: "./shop" },
  { name: "Lo que debes saber", link: "./explicacion" },
  { name: "Nosotros", link: "./nosotros" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <AdviserContextProvider>
        <body className="bg-myWhite">
          <header>
            <Nav elements={items} />
          </header>
          <main>
            <Providers>{children}</Providers>
            <footer>
              <Footer />
            </footer>
          </main>
        </body>
      </AdviserContextProvider>
    </html>
  );
}
