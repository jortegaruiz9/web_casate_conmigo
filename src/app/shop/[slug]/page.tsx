"use client";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { inter } from "@/app/ui/fonts";
import { useState, useEffect } from "react";
import ColorForm from "@/app/components/card/ColorForm";
import Card from "@/app/components/card/Card";
import SizeModal from "@/app/components/SizeModal";
import WhatsAppButton, {
  WhatsAppButtonProps,
} from "@/app/components/card/WhatsAppButton";
import RelatedProducts from "@/app/components/card/RelatedProducts";

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
  const [showSizes, setShowSizes] = useState(false);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedSizeWoman, setSelectedSizeWoman] = useState<number | null>(
    null
  );
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Escuchar cambios en el menú
  useEffect(() => {
    if (isMenuOpen) {
      setShowSizes(false);
    }
  }, [isMenuOpen]);

  // Suscribirse a eventos personalizados del menú
  useEffect(() => {
    const handleMenuChange = (e: CustomEvent) => {
      if (e.detail.isOpen) {
        setShowSizes(false);
      }
    };

    window.addEventListener("menuStateChange" as any, handleMenuChange);
    return () => {
      window.removeEventListener("menuStateChange" as any, handleMenuChange);
    };
  }, []);

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
    <div className={`text-myZinc ${inter.className}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Columna izquierda - Imagen */}
            <div>
              <div className="relative aspect-square bg-[#eae5df]">
                <Image
                  src={imgProduct}
                  alt={product?.alt || ""}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Columna derecha - Información */}
            <div className="text-myZinc">
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

              {/* Color selector */}
              <div className="mb-6">
                <h3 className="text-sm mb-2">Color:</h3>
                <ColorForm
                  product={product}
                  category={product?.category || "compromiso"}
                  grams={product?.grams || 0}
                  setPrecioPlata={setPrecioPlata}
                  setPrecioOro={setPrecioOro}
                  setTipoPlata={setTipoPlata}
                  setTipoOro={setTipoOro}
                />
              </div>

              {/* Talla selector */}
              <div className="mb-6">
                <h3 className="text-sm mb-2">Talla:</h3>
                <button
                  onClick={() => setShowSizes(!showSizes)}
                  className="w-full py-3 px-4 bg-myWhite border rounded-md flex justify-between items-center text-zinc-600 hover:bg-gray-50 focus:border-[#f2beba] focus:outline-none"
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

              {/* Ciudad selector */}
              <div className="mb-6">
                <h3 className="text-sm mb-2">Ciudad:</h3>
                <div className="relative">
                  <select
                    className="w-full py-3 px-4 bg-myWhite border rounded-md text-zinc-600 appearance-none hover:bg-gray-50 focus:border-[#f2beba] focus:outline-none"
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

              {/* WhatsApp button */}
              <WhatsAppButton
                model={product?.model || ""}
                selectedSize={selectedSize}
                selectedCity={selectedCity}
                tipoOro={tipoOro}
                tipoPlata={tipoPlata}
                precioOro={precioOro}
                precioPlata={precioPlata}
              />

              {/* Información del producto */}
              <div className="mt-6 space-y-4">
                <div className="flex flex-col gap-y-3">
                  {product?.category === "matrimonio" ? (
                    <div className="flex items-center gap-2">
                      <span className="icon-[fluent--draw-text-24-filled] text-myZinc" />
                      <p className="text-sm">Modelo incluye grabado</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="icon-[fluent--pen-off-16-filled] text-myZinc" />
                      <p className="text-sm">No incluye grabado</p>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="icon-[mdi--leaf] text-myZinc" />
                    <p className="text-sm underline">Hecho artesanalmente</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="icon-[mdi--shield-check] text-myZinc" />
                    <p className="text-sm underline">
                      En Oro 18k, Garantía por un año
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="icon-[material-symbols--calendar-month] text-myZinc" />
                    <p className="text-sm underline">
                      Al aprobar el diseño, ya no hay cambios
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-zinc-600 mt-4">
                  <p>
                    -La garantía cubre pequeños rayones y mantenimiento para dar
                    brillo.
                  </p>
                  <p>
                    -No incluye torceduras de ningún tipo. Tampoco nos hacemos
                    responsables por piedras minerales extraviadas durante su
                    uso.
                  </p>
                  <p className="font-semibold">
                    Los anillos de plata con baño de oro requieren más cuidados
                    por su recubrimiento fino. No nos hacemos responsables por
                    daños debido a un mal uso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
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
