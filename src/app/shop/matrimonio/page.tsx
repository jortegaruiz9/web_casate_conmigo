import { Metadata } from "next";

import ShopTemplate from "./Template";

export const metadata: Metadata = {
  title: "Matrimonio - Cásate Conmigo",
  description: "anillos de matrimonio",
};

export default function Shop() {
  return <ShopTemplate />;
}
