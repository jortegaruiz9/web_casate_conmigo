import { Metadata } from "next";

import ShopTemplate from "./Template";

export const metadata: Metadata = {
  title: "Compromiso - Cásate Conmigo",
  description: "anillos de compromiso",
};

export default function Shop() {
  return <ShopTemplate />;
}
