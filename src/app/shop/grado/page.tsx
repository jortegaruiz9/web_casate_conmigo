import { Metadata } from "next";

import ShopTemplate from "./Template";

export const metadata: Metadata = {
  title: "Grado - Cásate Conmigo",
  description: "Anillos de Grado",
};

export default function Shop() {
  return <ShopTemplate />;
}
