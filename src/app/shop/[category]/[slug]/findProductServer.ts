import { matrimonioRings } from "@/app/data/matrimonioRings";
import { compromisoRings } from "@/app/data/compromisoRings";
import { cintilloRings } from "@/app/data/cintilloRings";
import { gradoRings } from "@/app/data/gradoRings";
import { promesaRings } from "@/app/data/promesaRings";
import { setRings } from "@/app/data/setRings";

export async function findProductServer(category: string, slug: string) {
  const categories: { [key: string]: any[] } = {
    matrimonio: matrimonioRings,
    compromiso: compromisoRings,
    cintillos: cintilloRings,
    grado: gradoRings,
    promesa: promesaRings,
    set: setRings,
  };

  const products = categories[category];
  if (!products) return null;

  const found = products.find((p) => p.model === slug);
  return found || null;
}
