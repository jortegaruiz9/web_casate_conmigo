import { Metadata } from "next";

import ShopTemplate from "./Template";

export const metadata: Metadata = {
  title: "Promesa - Cásate Conmigo",
  description: "Anillos de Promesa",
};

export default function Shop() {
  return <ShopTemplate />;
}
