import { Metadata } from "next";

import ShopTemplate from "./Template";

export const metadata: Metadata = {
  title: "Set - Cásate Conmigo",
  description: "anillos de boda",
};

export default function Shop() {
  return <ShopTemplate />;
}
