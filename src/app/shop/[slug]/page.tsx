"use client";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { inter } from "@/app/ui/fonts";
import { useState, useEffect } from "react";
import ColorForm from "@/app/components/card/ColorForm";
import Card from "@/app/components/card/Card";
import SizeModal from "@/app/components/SizeModal";
import WhatsAppButton from "@/app/components/card/WhatsAppButton";
import RelatedProducts from "@/app/components/card/RelatedProducts";
import Link from "next/link";

// Importar los arrays de productos
import { rings as compromiseRings } from "@/app/shop/compromiso/Template";
import { rings as marriageRings } from "@/app/shop/matrimonio/Template";
import { rings as cintilloRings } from "@/app/shop/cintillos/Template";
import { rings as setRings } from "@/app/shop/set/Template";

// Definir tipos
interface PageProps {
  params: {
    slug: string;
  };
}

// Mapeo de nombres de categorías para el breadcrumb
const categoryNames: { [key: string]: string } = {
  compromiso: "Anillos de Compromiso",
  matrimonio: "Anillos de Matrimonio",
  cintillos: "Cintillos",
  set: "Set de Anillos",
};

// Componente de información del producto
const ProductInfo = ({
  product,
  grabado,
}: {
  product: any;
  grabado: boolean;
}) => {
  return (
    <div className="mt-6 space-y-4">
      <div className="flex flex-col gap-y-3">
        {/* Primer ítem - Grabado */}
        <div className="flex items-center gap-2">
          <span
            className={`icon-[${
              grabado
                ? "fluent--draw-text-24-filled"
                : "fluent--pen-off-16-filled"
            }] text-myZinc`}
          />
          <p className="text-sm">
            {grabado ? "Modelo incluye grabado" : "No incluye grabado"}
          </p>
        </div>

        {/* Segundo ítem - Artesanal */}
        <div className="flex items-center gap-2">
          <span className="icon-[mdi--leaf] text-myZinc" />
          <p className="text-sm underline">Hecho artesanalmente</p>
        </div>

        {/* Tercer ítem - Garantía */}
        <div className="flex items-center gap-2">
          <span className="icon-[mdi--shield-check] text-myZinc" />
          <p className="text-sm underline">En Oro 18k, Garantía por un año</p>
        </div>

        {/* Cuarto ítem - Calendario */}
        <div className="flex items-center gap-2">
          <span className="icon-[maki--caution] text-myZinc" />
          <p className="text-sm underline">
            Al salir de la tienda, ya no hay devoluciones.
          </p>
        </div>
      </div>

      <div className="space-y-2 text-xs text-zinc-600 mt-4">
        <p>
          La garantía cubre pequeños rayones y mantenimiento para dar brillo.
        </p>
        <p>
          No incluye torceduras de ningún tipo. Tampoco nos hacemos responsables
          por piedras minerales extraviadas durante su uso.
        </p>
        <p className="font-semibold">
          Los anillos de plata con baño de oro requieren más cuidados por su
          recubrimiento fino. No nos hacemos responsables por daños debido a un
          mal uso.
        </p>
      </div>
    </div>
  );
};

// Componente principal
export default function ProductPage({ params }: PageProps) {
  // Estados
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
  const [showSizes, setShowSizes] = useState(false);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedSizeWoman, setSelectedSizeWoman] = useState<number | null>(
    null
  );
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efectos
  useEffect(() => {
    if (isMenuOpen) setShowSizes(false);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleMenuChange = (e: CustomEvent) => {
      if (e.detail.isOpen) setShowSizes(false);
    };

    window.addEventListener("menuStateChange" as any, handleMenuChange);
    return () =>
      window.removeEventListener("menuStateChange" as any, handleMenuChange);
  }, []);

  // Efecto para buscar el producto y productos relacionados
  useEffect(() => {
    const findProduct = () => {
      const allProducts = [
        ...compromiseRings,
        ...marriageRings,
        ...cintilloRings,
        ...setRings,
      ];
      const found = allProducts.find((p) => p.model === params.slug);

      if (found) {
        setProduct(found);
        setImgProduct(found.image);
        setRelatedProducts(
          allProducts
            .filter(
              (p) => p.category === found.category && p.model !== params.slug
            )
            .slice(0, 5)
        );
      } else {
        notFound();
      }
      setIsLoading(false);
    };

    findProduct();
  }, [params.slug]);

  // Efecto para actualizar la imagen según el tipo de oro
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

  // Función para obtener el breadcrumb
  const getBreadcrumbPath = () => {
    if (!product) return [];
    return [
      { name: "Catálogo", path: "/shop" },
      {
        name: categoryNames[product.category],
        path: `/shop/${product.category}`,
      },
      { name: product.model, path: `/shop/${product.model}` },
    ];
  };

  if (isLoading) return <div>Cargando...</div>;
  if (!product) return notFound();

  // Renderizado
  return (
    <div className={`text-myZinc ${inter.className}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb navigation */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm">
              {getBreadcrumbPath().map((item, index, array) => (
                <li key={item.path} className="flex items-center">
                  {index < array.length - 1 ? (
                    <>
                      <Link
                        href={item.path}
                        className="text-zinc-600 hover:text-zinc-900"
                      >
                        {item.name}
                      </Link>
                      <span className="mx-2 text-zinc-400">/</span>
                    </>
                  ) : (
                    <span className="text-zinc-900">{item.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Imagen del producto */}
            <div className="w-full flex justify-center">
              <div className="w-[280px] h-[365px] md:w-full md:h-[600px] relative bg-[#eae5df]">
                {product.bestSeller && (
                  <div className="absolute top-0 left-3 bg-myZinc z-20 w-3/12 lg:w-2/12 h-[18px] flex justify-center items-center">
                    <p className="text-myWhite text-[10px]">Más Vendido</p>
                  </div>
                )}
                <Image
                  src={imgProduct}
                  alt={product?.alt || ""}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Información del producto */}
            <div className="text-myZinc w-full max-w-[600px]">
              <h1 className="text-2xl font-medium mb-4">{product?.model}</h1>

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
                    $
                    {precioOro !== null
                      ? `${precioOro.toFixed(2)}`
                      : "No disponible"}
                  </p>
                </div>
              </div>

              {/* Selector de color */}
              <div className="mb-6">
                <h3 className="text-sm mb-2">Color:</h3>
                <ColorForm
                  product={product}
                  category={product?.category}
                  grams={product?.grams}
                  setPrecioPlata={setPrecioPlata}
                  setPrecioOro={setPrecioOro}
                  setTipoPlata={setTipoPlata}
                  setTipoOro={setTipoOro}
                />
              </div>

              {/* Selector de talla */}
              <div className="mb-6">
                <h3 className="text-sm mb-2">Talla:</h3>
                <button
                  onClick={() => setShowSizes(!showSizes)}
                  className="w-full py-3 px-4 bg-myWhite border flex justify-between items-center text-zinc-600 hover:bg-gray-100 focus:border-[#c7c2b8] focus:outline-none "
                >
                  <span>
                    {product.category === "set" ||
                    product.category === "matrimonio"
                      ? selectedSize && selectedSizeWoman
                        ? `Talla él: ${selectedSize} / Talla ella: ${selectedSizeWoman}`
                        : "No conozco mi talla"
                      : selectedSize
                      ? `Talla ${selectedSize}`
                      : "No conozco mi talla"}
                  </span>
                  <span className="icon-[material-symbols--keyboard-arrow-down-rounded] text-xl" />
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

              {/* Selector de ciudad */}
              <div className="mb-6">
                <h3 className="text-sm mb-2">Ciudad:</h3>
                <div className="relative">
                  <select
                    className="w-full py-3 px-4 bg-myWhite border text-zinc-600 appearance-none hover:bg-gray-100 focus:border-[#c7c2b8] focus:outline-none "
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
                      <option value="Nueva Loja">
                        Nueva Loja (Lago Agrio)
                      </option>
                      <option value="El Coca">El Coca</option>
                    </optgroup>
                    <optgroup label="Galápagos">
                      <option value="Puerto Baquerizo Moreno">
                        Puerto Baquerizo Moreno
                      </option>
                      <option value="Puerto Ayora">Puerto Ayora</option>
                    </optgroup>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 icon-[material-symbols--keyboard-arrow-down-rounded] text-xl text-zinc-600 pointer-events-none" />
                </div>
              </div>

              {/* Botón de WhatsApp */}
              <WhatsAppButton
                model={product?.model || ""}
                selectedSize={selectedSize}
                selectedCity={selectedCity}
                tipoOro={tipoOro}
                tipoPlata={tipoPlata}
                precioOro={precioOro}
                precioPlata={precioPlata}
                linkProduct={product?.linkProduct}
              />

              {/* Información adicional del producto */}
              <ProductInfo
                product={product}
                grabado={product.category === "matrimonio"}
              />
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        <div className="mt-16">
          <RelatedProducts
            currentModel={product?.model || ""}
            category={product?.category || "compromiso"}
          />
        </div>
      </div>
    </div>
  );
}
