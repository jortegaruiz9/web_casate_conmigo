"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { inter } from "@/app/ui/fonts";
import ColorForm from "@/app/components/card/ColorForm";
import SizeModal from "@/app/components/SizeModal";
import WhatsAppButton from "@/app/components/card/WhatsAppButton";
import RelatedProducts from "@/app/components/card/RelatedProducts";

// Importar arrays de productos
import { rings as compromiseRings } from "@/app/shop/compromiso/Template";
import { rings as marriageRings } from "@/app/shop/matrimonio/Template";
import { rings as cintilloRings } from "@/app/shop/cintillos/Template";
import { rings as promesaRings } from "@/app/shop/promesa/Template";
import { rings as gradoRings } from "@/app/shop/grado/Template";
import { rings as setRings } from "@/app/shop/set/Template";

// Tipos
interface ClientPageProps {
  params: {
    category: string;
    slug: string;
  };
}

const categoryNames: { [key: string]: string } = {
  compromiso: "Anillos de Compromiso",
  promesa: "Anillos de Promesa",
  matrimonio: "Anillos de Matrimonio",
  cintillos: "Cintillos",
  set: "Set de Anillos",
  grado: "Anillos de Grado",
};

// Buscar producto
function findProduct(category: string, slug: string) {
  const categories = {
    compromiso: compromiseRings,
    matrimonio: marriageRings,
    cintillos: cintilloRings,
    promesa: promesaRings,
    grado: gradoRings,
    set: setRings,
  };

  const products = categories[category as keyof typeof categories];
  if (!products) return null;

  return products.find((p) => p.model === slug) || null;
}

// Componente cliente
export default function ProductClient({ params }: ClientPageProps) {
  const [imgProduct, setImgProduct] = useState("");
  const [product, setProduct] = useState<any>(null);
  const [precioPlata, setPrecioPlata] = useState<number | null>(null);
  const [precioOro, setPrecioOro] = useState<number | null>(null);
  const [tipoPlata, setTipoPlata] = useState<"Amarillo" | "Blanco" | "Rosa">(
    "Amarillo"
  );
  const [tipoOro, setTipoOro] = useState<"Amarillo" | "Blanco" | "Rosa">(
    "Amarillo"
  );
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showSizes, setShowSizes] = useState(false);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedSizeWoman, setSelectedSizeWoman] = useState<number | null>(
    null
  );
  const [selectedCity, setSelectedCity] = useState<string>("");

  useEffect(() => {
    const found = findProduct(params.category, params.slug);

    if (found) {
      setProduct(found);
      setImgProduct(found.image);

      const allProducts = [
        ...compromiseRings,
        ...marriageRings,
        ...cintilloRings,
        ...promesaRings,
        ...gradoRings,
        ...setRings,
      ];
      setRelatedProducts(
        allProducts
          .filter(
            (p) => p.category === found.category && p.model !== found.model
          )
          .slice(0, 5)
      );
    } else {
      notFound();
    }

    setIsLoading(false);
  }, [params]);

  useEffect(() => {
    if (product) {
      const imageMap = {
        Amarillo: product.image,
        Blanco: product.imageSilver ?? product.image,
        Rosa: product.imageRose ?? product.image,
      };
      setImgProduct(imageMap[tipoOro]);
    }
  }, [tipoOro, product]);

  if (isLoading) return <div>Cargando...</div>;
  if (!product) return notFound();

  return (
    <div className={`text-myZinc ${inter.className}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/shop" className="text-zinc-600 hover:text-zinc-900">
                Catálogo
              </Link>
            </li>
            <li>
              <span className="mx-2 text-zinc-400">/</span>
              <Link
                href={`/shop/${params.category}`}
                className="text-zinc-600 hover:text-zinc-900"
              >
                {categoryNames[params.category]}
              </Link>
            </li>
            <li>
              <span className="mx-2 text-zinc-400">/</span>
              <span className="text-zinc-900">{product.model}</span>
            </li>
          </ol>
        </nav>

        {/* Producto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen */}
          <div className="w-full flex justify-center">
            <div className="w-[280px] h-[365px] md:w-full md:h-[600px] relative bg-[#eae5df]">
              <Image
                src={imgProduct}
                alt={product.alt || ""}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Información */}
          <div className="text-myZinc w-full max-w-[600px]">
            <h1 className="text-2xl font-medium mb-4">{product.model}</h1>

            {/* Precios */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center">
                <h4 className="text-sm">
                  {tipoPlata
                    ? `Plata 925 & Baño ${tipoPlata}`
                    : "No disponible en plata"}
                </h4>
                <p>
                  {precioPlata !== null
                    ? `$${precioPlata.toFixed(2)}`
                    : "No disponible"}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h4 className="text-sm">Oro 18k {tipoOro}</h4>
                <p>
                  {precioOro !== null
                    ? `$${precioOro.toFixed(2)}`
                    : "No disponible"}
                </p>
              </div>
            </div>

            {/* Selector de Color */}
            <div className="mb-6">
              <h3 className="text-sm mb-2">Color:</h3>
              <ColorForm
                product={product}
                category={product.category}
                grams={product.grams}
                setPrecioPlata={setPrecioPlata}
                setPrecioOro={setPrecioOro}
                setTipoPlata={setTipoPlata}
                setTipoOro={setTipoOro}
              />
            </div>

            {/* Selector de Talla */}
            <div className="mb-6">
              <h3 className="text-sm mb-2">Selecciona tu talla:</h3>
              <button
                onClick={() => setShowSizes(!showSizes)}
                className="w-full py-3 px-4 bg-myWhite border text-zinc-600"
              >
                {product.category === "set" || product.category === "matrimonio"
                  ? selectedSize && selectedSizeWoman
                    ? `Talla él: ${selectedSize} / Talla ella: ${selectedSizeWoman}`
                    : "No conozco mi talla"
                  : selectedSize
                  ? `Talla ${selectedSize}`
                  : "No conozco mi talla"}
              </button>

              <SizeModal
                showSizes={showSizes}
                setShowSizes={setShowSizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                category={product.category}
                selectedSizeWoman={selectedSizeWoman}
                setSelectedSizeWoman={setSelectedSizeWoman}
              />
            </div>

            {/* Ciudad */}
            <div className="mb-6">
              <h3 className="text-sm mb-2">Ciudad:</h3>
              <div className="relative">
                <select
                  className="w-full py-3 px-4 bg-myWhite border text-zinc-600 appearance-none hover:bg-gray-100 focus:border-[#c7c2b8] focus:outline-none"
                  onChange={(e) => setSelectedCity(e.target.value)}
                  value={selectedCity}
                >
                  <option value="">Selecciona tu ciudad</option>
                  <optgroup label="Sierra">
                    <option value="Quito">Quito</option>
                    <option value="Cuenca">Cuenca</option>
                    <option value="Ambato">Ambato</option>
                    <option value="Loja">Loja</option>
                    <option value="Riobamba">Riobamba</option>
                    <option value="Ibarra">Ibarra</option>
                    <option value="Latacunga">Latacunga</option>
                    <option value="Tulcán">Tulcán</option>
                    <option value="Guaranda">Guaranda</option>
                    <option value="Azogues">Azogues</option>
                  </optgroup>
                  <optgroup label="Costa">
                    <option value="Guayaquil">Guayaquil</option>
                    <option value="Manta">Manta</option>
                    <option value="Portoviejo">Portoviejo</option>
                    <option value="Machala">Machala</option>
                    <option value="Esmeraldas">Esmeraldas</option>
                    <option value="Santo Domingo">Santo Domingo</option>
                    <option value="Babahoyo">Babahoyo</option>
                    <option value="Santa Elena">Santa Elena</option>
                    <option value="Salinas">Salinas</option>
                    <option value="Daule">Daule</option>
                    <option value="Durán">Durán</option>
                    <option value="Milagro">Milagro</option>
                    <option value="Quevedo">Quevedo</option>
                  </optgroup>
                  <optgroup label="Oriente">
                    <option value="Tena">Tena</option>
                    <option value="Puyo">Puyo</option>
                    <option value="Macas">Macas</option>
                    <option value="Zamora">Zamora</option>
                    <option value="Nueva Loja">Nueva Loja (Lago Agrio)</option>
                    <option value="El Coca">El Coca</option>
                  </optgroup>
                  <optgroup label="Galápagos">
                    <option value="Puerto Baquerizo Moreno">
                      Puerto Baquerizo Moreno
                    </option>
                    <option value="Puerto Ayora">Puerto Ayora</option>
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Botón WhatsApp */}
            <WhatsAppButton
              model={product.model}
              selectedSize={selectedSize}
              selectedSizeWoman={selectedSizeWoman}
              selectedCity={selectedCity}
              tipoOro={tipoOro}
              tipoPlata={tipoPlata}
              precioOro={precioOro}
              precioPlata={precioPlata}
              linkProduct={`https://casateconmigo.ec/shop/${product.category}/${product.model}`}
              category={product.category}
            />

            {/* Información adicional */}
            <div className="mt-8 text-sm space-y-4">
              <p className="flex items-center gap-2">
                <span className="icon-[fluent--draw-text-24-filled] text-myZinc"></span>
                {["compromiso", "promesa", "grado"].includes(product.category)
                  ? "No incluye grabado"
                  : product.grabado
                  ? "Incluye grabado"
                  : "No incluye grabado"}
              </p>

              <p className="flex items-center gap-2">
                <span className="icon-[mdi--leaf] text-myZinc"></span>
                Hecho artesanalmente
              </p>
              <p className="flex items-center gap-2">
                <span className="icon-[mdi--shield-check] text-myZinc"></span>
                En Oro 18k, Garantía por un año
              </p>
              <p className="flex items-center gap-2">
                <span className="icon-[maki--caution] text-myZinc"></span>
                Al salir de la tienda, ya no hay devoluciones.
              </p>

              <div className="text-xs text-zinc-600 space-y-1">
                <p>
                  La garantía cubre pequeños rayones y mantenimiento para dar
                  brillo.
                </p>
                <p>
                  No incluye torceduras de ningún tipo ni extravíos de piedras
                  minerales durante su uso.
                </p>
                <p className="font-semibold">
                  Los anillos de plata con baño de oro requieren más cuidados
                  por su recubrimiento fino. No nos hacemos responsables por
                  daños debido a mal uso.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        <div className="mt-16">
          <RelatedProducts
            currentModel={product.model}
            category={product.category}
          />
        </div>
      </div>
    </div>
  );
}
