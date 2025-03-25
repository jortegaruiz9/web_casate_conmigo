import { Metadata } from "next";

import ShopTemplate from "./Template";

export const metadata: Metadata = {
  title: "Cintillos - Cásate Conmigo",
  description: "Anillos cintillos - churumbelas",
};

export default function Shop() {
  return <ShopTemplate />;
}
