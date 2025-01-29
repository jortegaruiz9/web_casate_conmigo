"use client";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { inter } from "@/app/ui/fonts";
import { useState, useEffect } from "react";
import ColorForm from "@/app/components/card/ColorForm";
import Card from "@/app/components/card/Card";

// Importar los arrays de productos
import { rings as compromiseRings } from "@/app/shop/compromiso/Template";
import { rings as marriageRings } from "@/app/shop/matrimonio/Template";
import { rings as cintilloRings } from "@/app/shop/cintillos/Template";
import { rings as setRings } from "@/app/shop/set/Template";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: PageProps) {
  const { slug } = params;
  const [imgProduct, setImgProduct] = useState("");
  const [precioPlata, setPrecioPlata] = useState<number | null>(null);
  const [precioOro, setPrecioOro] = useState<number | null>(null);
  const [tipoPlata, setTipoPlata] = useState<"Amarillo" | "Blanco" | "Rosa">(
    "Amarillo"
  );
  const [tipoOro, setTipoOro] = useState<"Amarillo" | "Blanco" | "Rosa">(
    "Amarillo"
  );
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const findProduct = () => {
      const allProducts = [
        ...compromiseRings,
        ...marriageRings,
        ...cintilloRings,
        ...setRings,
      ];

      console.log("Slug buscado:", slug);
      console.log("Todos los productos:", allProducts);

      const found = allProducts.find((p) => p.model === slug);
      console.log("Producto encontrado:", found);

      if (found) {
        setProduct(found);
        setImgProduct(found.image);

        const related = allProducts
          .filter((p) => p.category === found.category && p.model !== slug)
          .slice(0, 5);
        console.log("Productos relacionados:", related);
        setRelatedProducts(related);
      } else {
        console.log("No se encontró el producto");
        notFound();
      }
      setIsLoading(false);
    };

    findProduct();
  }, [slug]);

  useEffect(() => {
    if (product) {
      switch (tipoOro) {
        case "Amarillo":
          setImgProduct(product.image);
          break;
        case "Blanco":
          setImgProduct(product.imageSilver ?? product.image);
          break;
        case "Rosa":
          setImgProduct(product.imageRose ?? product.image);
          break;
      }
    }
  }, [tipoOro, product]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!product) {
    return notFound();
  }

  return (
    <div className={`${inter.className}`}>
      <div className="flex flex-col text-myZinc gap-y-4">
        <div className="flex text-xs text-zinc-500 px-4 gap-x-2 mt-4 uppercase">
          <span>Catálogo</span>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span>{product.model}</span>
        </div>
        <div className="bg-[#eae5df] relative w-11/12">
          {product.bestSeller && (
            <div className="absolute top-0 left-3 bg-myZinc z-20 w-24 h-[18px] flex justify-center items-center">
              <p className="text-myWhite text-[10px]">Más Vendido</p>
            </div>
          )}
          <Image
            src={imgProduct}
            alt={product.alt}
            width={430}
            height={560}
            className="w-full object-cover"
          />
        </div>
      </div>
      {/* codigo anterior */}
      <main className="min-h-screen flex-col items-center p-4 md:p-24 text-myZinc hidden">
        <div className={`${inter.className} w-full max-w-6xl`}>
          {/* Breadcrumb */}
          <div className="flex gap-2 text-sm text-zinc-500 mb-6">
            <span>Catálogo</span>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span>{product.model}</span>
          </div>

          {/* Producto principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Imagen del producto */}

            {/* Información del producto */}
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-bold">Modelo: {product.model}</h1>

              {/* Selector de color */}
              <div className="mt-4">
                <h3 className="text-sm mb-2">Color:</h3>
                <ColorForm
                  category={product.category}
                  grams={product.grams}
                  setPrecioPlata={setPrecioPlata}
                  setPrecioOro={setPrecioOro}
                  setTipoPlata={setTipoPlata}
                  setTipoOro={setTipoOro}
                />
              </div>

              {/* Precios */}
              <div className="mt-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Plata 925 & Baño {tipoPlata}</span>
                  <span className="font-bold">
                    {precioPlata !== null
                      ? `$${precioPlata.toFixed(2)}`
                      : "No disponible"}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Oro 18k {tipoOro}</span>
                  <span className="font-bold">
                    $
                    {precioOro !== null
                      ? `${precioOro.toFixed(2)}`
                      : "No disponible"}
                  </span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex gap-4 mt-6">
                <button className="flex-1 bg-myZinc text-white py-3 px-6">
                  Place Bid
                </button>
                <button className="flex-1 bg-green-700 text-white py-3 px-6">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Productos relacionados */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Productos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {relatedProducts.map((product, index) => (
                <Card key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
