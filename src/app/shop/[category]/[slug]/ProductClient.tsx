"use client";

import { useEffect, useState, useRef, useCallback, useContext } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { inter } from "@/app/ui/fonts";
import ColorForm from "@/components/cards/Product/ColorForm";
import Sizes from "@/components/modal/Sizes";
import WhatsAppButton from "@/components/cards/Product/WhatsAppButton";
import RelatedProducts from "@/components/cards/Product/RelatedProducts";
import PayphoneModal from "@/components/payphone/PayphoneModal";
import { AdviserContext } from "@/app/context/AdviserContext";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";

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
  const { adviser } = useContext(AdviserContext);
  const [imgProduct, setImgProduct] = useState("");
  const [typeForm, setTypeForm] = useState("cotizar");
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
  const [formData, setFormData] = useState({
    material: "",
    grabadoEl: "",
    grabadoElla: "",
    direccion: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    cedula: "",
    email: "",
    tipoEntrega: "",
    cajaSeleccionada: "gamuza", // por defecto
    precio: 0,
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [showFormData, setShowFormData] = useState(false);
  const [showPayphoneModal, setShowPayphoneModal] = useState(false);
  const [paymentData, setPaymentData] = useState({
    amount: 0,
    clientTransactionId: "",
    reference: "",
    phoneNumber: "",
    email: "",
    documentId: "",
  });
  const redirected = useRef(false);

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

  useEffect(() => {
    // Actualizar precio cuando cambia el color del material
    if (formData.material === "Plata") {
      setFormData((prev) => ({
        ...prev,
        precio: precioPlata || 0,
      }));
    } else if (formData.material === "Oro") {
      setFormData((prev) => ({
        ...prev,
        precio: precioOro || 0,
      }));
    }
  }, [precioPlata, precioOro, tipoPlata, tipoOro, formData.material]);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    // Validar material
    if (!formData.material) {
      errors.material = "Por favor selecciona un material";
    }

    // Validar tallas
    if (product.category === "set" || product.category === "matrimonio") {
      if (!selectedSize || !selectedSizeWoman) {
        errors.tallas = "Por favor selecciona ambas tallas";
      }
    } else if (!selectedSize) {
      errors.tallas = "Por favor selecciona una talla";
    }

    // Validar grabado solo para matrimonio y set
    if (product.category === "matrimonio" || product.category === "set") {
      if (!formData.grabadoEl) {
        errors.grabadoEl = "Por favor ingresa el grabado para él";
      }
      if (!formData.grabadoElla) {
        errors.grabadoElla = "Por favor ingresa el grabado para ella";
      }
    }

    // Validar ciudad
    if (!selectedCity) {
      errors.ciudad = "Por favor selecciona una ciudad";
    }

    // Validar campos obligatorios
    if (!formData.direccion) {
      errors.direccion = "Por favor ingresa tu dirección";
    }

    if (!formData.nombres) {
      errors.nombres = "Por favor ingresa tus nombres";
    }

    if (!formData.apellidos) {
      errors.apellidos = "Por favor ingresa tus apellidos";
    }

    // Validar teléfono
    if (!formData.telefono) {
      errors.telefono = "Por favor ingresa tu número de teléfono";
    } else if (!/^\d{9}$/.test(formData.telefono)) {
      errors.telefono = "El número debe tener 9 dígitos (sin el 0 inicial)";
    }

    if (!formData.cedula) {
      errors.cedula = "Por favor ingresa tu cédula o RUC";
    } else if (!/^\d{10,13}$/.test(formData.cedula)) {
      errors.cedula = "La cédula o RUC debe tener entre 10 y 13 dígitos";
    }

    if (!formData.email) {
      errors.email = "Por favor ingresa tu correo";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Por favor ingresa un correo válido";
    }

    if (!formData.tipoEntrega) {
      errors.tipoEntrega = "Por favor selecciona un método de entrega";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleComprar = () => {
    // Verificar que el precio total sea válido
    const total = calcularTotal().total;
    if (total < 30) {
      // Añadir error específico para el material
      setFormErrors((prev) => ({
        ...prev,
        material:
          "El precio del producto no es válido. Por favor, verifica tu selección de material y color.",
      }));

      // Hacer scroll hasta el elemento de material
      const materialElement = document.querySelector('[name="material"]');
      if (materialElement) {
        materialElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    if (validateForm()) {
      // Almacenar datos completos del formulario en sessionStorage
      const orderData = {
        // Datos del producto
        productModel: product.model,
        productCategory: product.category,
        material: formData.material,
        color: formData.material === "Oro" ? tipoOro : tipoPlata,
        size: selectedSize,
        sizeWoman: selectedSizeWoman,
        grabadoEl: formData.grabadoEl,
        grabadoElla: formData.grabadoElla,
        cajaSeleccionada: formData.cajaSeleccionada,

        // Datos del cliente
        nombres: formData.nombres,
        apellidos: formData.apellidos,
        telefono: formData.telefono,
        cedula: formData.cedula,
        email: formData.email,
        ciudad: selectedCity,
        direccion: formData.direccion,
        tipoEntrega: formData.tipoEntrega,

        // Datos del asesor
        adviser: adviser,

        // Datos del pago
        precio: formData.precio,
        ...(formData.cajaSeleccionada === "led" ? { precioCaja: 20 } : {}),
        total: calcularTotal().total,

        // Datos necesarios para Payphone
        clientTransactionId: `${product.model}_${Date.now()}`,
        reference: `Anillo ${product.model} - ${formData.material}`,
        phoneNumber: `+593${formData.telefono}`,
        documentId: formData.cedula,
        amount: Math.round(calcularTotal().total * 100), // Convertir a centavos
      };

      // Guardar en sessionStorage para recuperar después
      sessionStorage.setItem("pendingOrderDetails", JSON.stringify(orderData));
      localStorage.setItem("pendingOrderDetails", JSON.stringify(orderData));

      // Redirigir a la página de pago
      window.location.href = "/payment/checkout";
    }
  };

  // Función para calcular el total
  const calcularTotal = useCallback(() => {
    const precioBase = Number(formData.precio || 0);
    // Solo considerar precio de la caja si es LED
    const precioCaja = formData.cajaSeleccionada === "led" ? 20 : 0;
    const subtotal = precioBase + precioCaja;
    const impuestoPayphone = Math.round(subtotal * 0.0605 * 100) / 100;
    return {
      subtotal,
      impuestoPayphone,
      total: subtotal + impuestoPayphone,
    };
  }, [formData.precio, formData.cajaSeleccionada]);

  // Optimizar handlePaymentComplete con useCallback para evitar recreaciones
  const memoizedHandlePaymentComplete = useCallback(
    async (response: any) => {
      try {
        // Cerrar el modal primero
        setShowPayphoneModal(false);

        console.log("Respuesta inicial Payphone:", response);

        // Validar que tenemos los datos necesarios
        if (!response.transactionId || !response.clientTransactionId) {
          console.error("Datos de transacción incompletos", response);
          return;
        }

        // Consultar detalles de la transacción mediante API
        const verificationResponse = await fetch(
          `/api/payment/verify?id=${response.transactionId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!verificationResponse.ok) {
          throw new Error("Error al verificar el pago");
        }

        const paymentDetails = await verificationResponse.json();
        console.log("Detalles de verificación:", paymentDetails);

        // Si el pago está aprobado
        if (paymentDetails.statusCode === 3) {
          // 3 = Aprobado según la doc de Payphone
          // Crear objeto con datos para confirmación
          const totales = calcularTotal();
          const confirmationData = {
            // Datos del producto
            productModel: product.model,
            productCategory: product.category,
            material: formData.material,
            color: formData.material === "Oro" ? tipoOro : tipoPlata,
            size: selectedSize,
            sizeWoman: selectedSizeWoman,
            grabadoEl: formData.grabadoEl,
            grabadoElla: formData.grabadoElla,
            cajaSeleccionada: formData.cajaSeleccionada,

            // Datos del cliente
            nombres: formData.nombres,
            apellidos: formData.apellidos,
            telefono: formData.telefono,
            cedula: formData.cedula,
            email: formData.email,
            ciudad: selectedCity,
            direccion: formData.direccion,
            tipoEntrega: formData.tipoEntrega,

            // Datos del asesor
            adviser: adviser,

            // Datos del pago
            precio: formData.precio,
            ...(formData.cajaSeleccionada === "led" ? { precioCaja: 20 } : {}),
            subtotal: totales.subtotal,
            impuestoPayphone: totales.impuestoPayphone,
            total: totales.total,

            // Datos de la transacción Payphone
            transactionId: paymentDetails.transactionId,
            authorizationCode: paymentDetails.authorizationCode || "",
            lastDigits: paymentDetails.lastDigits || "",

            // Información sobre el email de confirmación
            emailSent: paymentDetails.emailSent || false,
          };

          // Guardar en sessionStorage como respaldo en caso de problemas con la URL
          sessionStorage.setItem(
            "orderConfirmation",
            JSON.stringify(confirmationData)
          );

          // Almacenar también en localStorage para mayor persistencia
          localStorage.setItem(
            "pendingOrderDetails",
            JSON.stringify(confirmationData)
          );

          // Serializar y codificar datos para URL
          const encodedData = encodeURIComponent(
            JSON.stringify(confirmationData)
          );

          // Redireccionar a la página de confirmación
          window.location.href = `/payment/success?data=${encodedData}`;
        } else {
          // Mostrar error si el pago no está aprobado
          alert(
            `Error en el pago: ${
              paymentDetails.message || "No se pudo completar la transacción"
            }`
          );
        }
      } catch (error) {
        console.error("Error en el proceso de pago:", error);
        alert(
          "Hubo un error al procesar el pago. Por favor, intenta nuevamente."
        );
      }
    },
    [
      product,
      formData,
      selectedSize,
      selectedSizeWoman,
      selectedCity,
      tipoOro,
      tipoPlata,
      calcularTotal,
      adviser,
    ]
  );

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Monitorear si se detecta un evento de redirección
      console.log("Mensaje recibido en ventana principal:", event.data);

      if (event.data?.type === "PAYMENT_COMPLETE" && !redirected.current) {
        console.log("Pago completado, preparando redirección");
        redirected.current = true;
        setShowPayphoneModal(false);
        setTimeout(() => {
          memoizedHandlePaymentComplete(event.data.data);
        }, 500);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      redirected.current = false;
    };
  }, [memoizedHandlePaymentComplete]);

  // Función para actualizar el precio cuando cambia el material
  const handleMaterialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMaterial = e.target.value;
    let precio = 0;

    console.log("Debug - Material Change:", {
      selectedMaterial,
      precioOro,
      precioPlata,
    });

    if (selectedMaterial === "Plata") {
      precio = precioPlata || 0;
    } else if (selectedMaterial === "Oro") {
      precio = precioOro || 0;
    }

    setFormData((prev) => ({
      ...prev,
      material: selectedMaterial,
      precio: precio,
    }));
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCity(value);
  };

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
                    ? `Plata 925 Con Baño ${tipoPlata}`
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
            <div className="w-full pb-4 bg-gray-100/70 rounded-[10px]">
              {/*Botones de arriba*/}
              <div className="w-full flex mb-4">
                {/*Boton de payphone*/}
                <div
                  className={`w-1/2 h-10  rounded-tl-[10px] ${
                    typeForm === "pay" ? "bg-[#ff6f03]" : "bg-gray-200"
                  } flex justify-center items-center`}
                  onClick={() => {
                    setTypeForm("pay");
                  }}
                >
                  <div className="text-white font-semibold">
                    <span>Pay</span>
                  </div>
                </div>
                {/*Boton de cotizar*/}
                <div
                  className={`w-1/2 h-10  rounded-tr-[10px] ${
                    typeForm === "pay" ? "bg-gray-200" : "bg-myZinc"
                  } flex justify-center items-center`}
                  onClick={() => {
                    setTypeForm("cotizar");
                  }}
                >
                  <div className="text-white font-semibold">
                    <span>Cotizar</span>
                  </div>
                </div>
              </div>
              {/*Imputs del anillo*/}
              <div className="w-full flex flex-col items-center gap-y-4">
                {/* Payphone - visa y mastercard */}
                {typeForm === "pay" && (
                  <div className="w-full flex justify-center bg-orange-100">
                    <div className="w-11/12 flex py-4 space-x-4 items-center">
                      <h6 className="pl-2">Solo aceptamos:</h6>
                      <span className="icon-[logos--visa]" />
                      <span className="icon-[logos--mastercard] text-2xl" />
                    </div>
                  </div>
                )}
                {/*Material*/}
                <div className="w-full flex flex-col items-center gap-y-1">
                  <div className="w-11/12 text-sm pl-2">Material:</div>
                  <div className="relative w-11/12">
                    <select
                      className={`w-full py-2 px-4 bg-myWhite border rounded-[10px] text-zinc-600 appearance-none hover:bg-gray-100 focus:border-[#c7c2b8] focus:outline-none ${
                        formErrors.material ? "border-red-500" : ""
                      }`}
                      name="material"
                      onChange={handleMaterialChange}
                      value={formData.material}
                    >
                      <option value="">Selecciona el material</option>
                      <option value="Plata" disabled={tipoPlata === "Rosa"}>
                        {tipoPlata
                          ? `Plata 925 Con Baño ${tipoPlata}`
                          : "No disponible en plata"}
                        {" - "}
                        {precioPlata !== null
                          ? `$${precioPlata.toFixed(2)}`
                          : "No disponible"}
                      </option>
                      <option value="Oro">
                        Oro 18k {tipoOro}
                        {" - "}
                        {precioOro !== null
                          ? `$${precioOro.toFixed(2)}`
                          : "No disponible"}
                      </option>
                    </select>
                    {formErrors.material && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.material}
                      </p>
                    )}
                  </div>
                </div>
                {/*talla*/}
                <div className="w-full flex flex-col items-center gap-y-1">
                  <div className="w-11/12 text-sm pl-2">Tallas:</div>
                  <button
                    onClick={() => setShowSizes(!showSizes)}
                    className={`w-11/12 py-2 px-4 bg-myWhite border text-zinc-600 flex rounded-[10px] hover:bg-gray-100 focus:border-[#c7c2b8] ${
                      formErrors.tallas ? "border-red-500" : ""
                    }`}
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
                  </button>
                  {formErrors.tallas && (
                    <p className="text-red-500 text-xs mt-1 w-11/12">
                      {formErrors.tallas}
                    </p>
                  )}

                  <Sizes
                    showSizes={showSizes}
                    setShowSizes={setShowSizes}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    category={product.category}
                    selectedSizeWoman={selectedSizeWoman}
                    setSelectedSizeWoman={setSelectedSizeWoman}
                  />
                </div>
                {/*Payphone - Grabado / quiero que solo aparezcan cuando es matrimonio o grado*/}
                {typeForm === "pay" &&
                  (product.category === "matrimonio" ||
                    product.category === "set") && (
                    <>
                      <div className="w-full flex flex-col items-center gap-y-1">
                        <div className="w-11/12 text-sm pl-2">Grabado Él:</div>
                        <div className="relative w-11/12">
                          <input
                            type="text"
                            maxLength={20}
                            placeholder="Escribe aquí (máx. 20 caracteres)"
                            className={`w-full py-2 px-4 bg-myWhite border rounded-[10px] placeholder-zinc-600 appearance-none hover:bg-gray-100 focus:border-[#c7c2b8] focus:outline-none ${
                              formErrors.grabadoEl ? "border-red-500" : ""
                            }`}
                            name="grabadoEl"
                            onChange={handleInputChange}
                            value={formData.grabadoEl}
                          />
                          {formErrors.grabadoEl && (
                            <p className="text-red-500 text-xs mt-1">
                              {formErrors.grabadoEl}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="w-full flex flex-col items-center gap-y-1">
                        <div className="w-11/12 text-sm pl-2">
                          Grabado Ella:
                        </div>
                        <div className="relative w-11/12">
                          <input
                            type="text"
                            maxLength={20}
                            placeholder="Escribe aquí (máx. 20 caracteres)"
                            className={`w-full py-2 px-4 bg-myWhite border rounded-[10px] placeholder-zinc-600 appearance-none hover:bg-gray-100 focus:border-[#c7c2b8] focus:outline-none ${
                              formErrors.grabadoElla ? "border-red-500" : ""
                            }`}
                            name="grabadoElla"
                            onChange={handleInputChange}
                            value={formData.grabadoElla}
                          />
                          {formErrors.grabadoElla && (
                            <p className="text-red-500 text-xs mt-1">
                              {formErrors.grabadoElla}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                {/*Payphone - Elección cajas / debe cambiar el color de el borde segun cual esta seleccionado*/}
                {typeForm === "pay" && product.category !== "matrimonio" && (
                  <>
                    {product.category === "set" && (
                      <div className="w-11/12 mb-4">
                        <div className="bg-gray-100 p-4 rounded-[10px] text-sm">
                          <span className="icon-[material-symbols--info-outline] align-middle mr-2" />
                          <span>
                            La caja seleccionada será para el anillo de
                            compromiso del set. Los anillos de matrimonio vienen
                            en una caja de gamuza.
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="w-full flex justify-center h-10 mb-20">
                      <div className="w-11/12 flex gap-x-3">
                        <div
                          className={`w-1/2 border rounded-[10px] h-28 items-center flex px-2 cursor-pointer ${
                            formData.cajaSeleccionada === "gamuza"
                              ? "border-myZinc"
                              : "border-zinc-300"
                          }`}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              cajaSeleccionada: "gamuza",
                            }))
                          }
                        >
                          <div className="w-20 h-20 rounded-[10px]">
                            <Image
                              src="/cajas/caja-gamuza.jpg"
                              alt="foto de caja de gamuza"
                              width={40}
                              height={40}
                              className="object-cover w-full h-full rounded-[10px]"
                            />
                          </div>
                          <div className="text-xs pl-2 md:pl-4">
                            <h2 className="text-sm">Gamuza</h2>
                            <p>Roja</p>
                            <span className="font-semibold">Incluida</span>
                          </div>
                        </div>
                        <div
                          className={`w-1/2 border rounded-[10px] h-28 items-center flex px-2 cursor-pointer ${
                            formData.cajaSeleccionada === "led"
                              ? "border-myZinc"
                              : "border-zinc-300"
                          }`}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              cajaSeleccionada: "led",
                            }))
                          }
                        >
                          <div className="w-20 h-20 rounded-[10px]">
                            <Image
                              src="/cajas/caja-led.jpg"
                              alt="foto de caja de luz led"
                              width={40}
                              height={40}
                              className="object-cover w-full h-full rounded-[10px]"
                            />
                          </div>
                          <div className="text-xs pl-2 md:pl-4">
                            <h2 className="text-sm">Luz Led</h2>
                            <p>Negra</p>
                            <span className="font-semibold">$20.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {typeForm === "pay" && product.category === "matrimonio" && (
                  <div className="w-11/12 mb-4">
                    <div className="bg-gray-100 p-4 rounded-[10px] text-sm">
                      <span className="icon-[material-symbols--info-outline] align-middle mr-2" />
                      <span>
                        Los anillos de matrimonio incluyen una caja de gamuza
                        estándar.
                      </span>
                    </div>
                  </div>
                )}
                <div className="w-11/12">
                  <h4 className="pl-2 font-semibold">Información Personal</h4>
                </div>
                {/* Ciudad */}
                <div className="w-full flex flex-col items-center gap-y-1">
                  <div className="w-11/12 text-sm pl-2">Ciudad:</div>
                  <div className="relative w-11/12">
                    <select
                      className={`w-full py-2 px-4 bg-myWhite border rounded-[10px] text-zinc-600 appearance-none hover:bg-gray-100 focus:border-[#c7c2b8] ${
                        formErrors.ciudad ? "border-red-500" : ""
                      }`}
                      onChange={handleCityChange}
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
                    {formErrors.ciudad && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.ciudad}
                      </p>
                    )}
                  </div>
                </div>
                {/*Payphone - Dirección exacta*/}
                {typeForm === "pay" && (
                  <div className="w-full flex flex-col items-center gap-y-1">
                    <div className="w-11/12 text-sm pl-2">Dirección:</div>
                    <div className="relative w-11/12">
                      <input
                        type="text"
                        maxLength={100}
                        placeholder="Ingresa tu dirección exacta"
                        className={`w-full py-2 px-4 bg-myWhite border rounded-[10px] placeholder-zinc-600 appearance-none hover:bg-gray-100 focus:border-[#c7c2b8] focus:outline-none ${
                          formErrors.direccion ? "border-red-500" : ""
                        }`}
                        name="direccion"
                        onChange={handleInputChange}
                        value={formData.direccion}
                      />
                      {formErrors.direccion && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.direccion}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {/*Payphone - Nombre y apellido*/}
                {typeForm === "pay" && (
                  <div className="w-full flex justify-center mb-6">
                    <div className="w-11/12 flex gap-x-3">
                      <div className="w-1/2 h-10 space-y-1">
                        <div className="w-11/12 text-sm pl-2">Nombres:</div>
                        <input
                          type="text"
                          maxLength={30}
                          placeholder="Tus Nombres"
                          className={`w-full py-2 px-4 bg-myWhite border rounded-[10px] placeholder-zinc-600 appearance-none hover:bg-gray-100 focus:border-[#c7c2b8] focus:outline-none ${
                            formErrors.nombres ? "border-red-500" : ""
                          }`}
                          name="nombres"
                          onChange={handleInputChange}
                          value={formData.nombres}
                        />
                        {formErrors.nombres && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.nombres}
                          </p>
                        )}
                      </div>
                      <div className="w-1/2 h-10 space-y-1">
                        <div className="w-11/12 text-sm pl-2">Apellidos:</div>
                        <input
                          type="text"
                          maxLength={30}
                          placeholder="Tus Apellidos"
                          className={`w-full py-2 px-4 bg-myWhite border rounded-[10px] placeholder-zinc-600 appearance-none hover:bg-gray-100 focus:border-[#c7c2b8] focus:outline-none ${
                            formErrors.apellidos ? "border-red-500" : ""
                          }`}
                          name="apellidos"
                          onChange={handleInputChange}
                          value={formData.apellidos}
                        />
                        {formErrors.apellidos && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.apellidos}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {/*Payphone - Teléfono*/}
                {typeForm === "pay" && (
                  <div className="w-full flex flex-col items-center gap-y-1">
                    <div className="w-11/12 text-sm pl-2">Teléfono:</div>
                    <div className="relative w-11/12">
                      <div className="flex">
                        <div className="bg-gray-200 flex items-center px-3 rounded-l-[10px] border border-r-0">
                          +593
                        </div>
                        <input
                          type="tel"
                          maxLength={9}
                          placeholder="987654321"
                          className={`w-full py-2 px-4 bg-myWhite border rounded-r-[10px] placeholder-zinc-600 appearance-none hover:bg-gray-100 focus:border-[#c7c2b8] focus:outline-none ${
                            formErrors.telefono ? "border-red-500" : ""
                          }`}
                          name="telefono"
                          onChange={(e) => {
                            // Eliminar cualquier caracter no numérico y asegurarse de que no empiece con 0
                            const value = e.target.value.replace(/\D/g, "");
                            if (value === "" || value.charAt(0) !== "0") {
                              setFormData((prev) => ({
                                ...prev,
                                telefono: value,
                              }));
                            }
                          }}
                          value={formData.telefono}
                        />
                      </div>
                      {formErrors.telefono && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.telefono}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {/*Payphone - Cedula*/}
                {typeForm === "pay" && (
                  <div className="w-full flex flex-col items-center gap-y-1 mt-4">
                    <div className="w-11/12 text-sm pl-2">Cédula o Ruc:</div>
                    <div className="relative w-11/12">
                      <input
                        type="text"
                        maxLength={13}
                        placeholder="Ingresa tu Cédula o Ruc"
                        className={`w-full py-2 px-4 bg-myWhite border rounded-[10px] placeholder-zinc-600 appearance-none hover:bg-gray-100 focus:border-[#c7c2b8] focus:outline-none ${
                          formErrors.cedula ? "border-red-500" : ""
                        }`}
                        name="cedula"
                        onChange={(e) => {
                          // Solo permitir dígitos positivos
                          const value = e.target.value.replace(/\D/g, "");
                          setFormData((prev) => ({
                            ...prev,
                            cedula: value,
                          }));
                        }}
                        value={formData.cedula}
                      />
                      {formErrors.cedula && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.cedula}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {/*Payphone - Mail*/}
                {typeForm === "pay" && (
                  <div className="w-full flex flex-col items-center gap-y-1">
                    <div className="w-11/12 text-sm pl-2">Correo:</div>
                    <div className="relative w-11/12">
                      <input
                        type="email"
                        placeholder="Ingresa tu correo"
                        className={`w-full py-2 px-4 bg-myWhite border rounded-[10px] placeholder-zinc-600 appearance-none hover:bg-gray-100 focus:border-[#c7c2b8] focus:outline-none ${
                          formErrors.email ? "border-red-500" : ""
                        }`}
                        name="email"
                        onChange={handleInputChange}
                        value={formData.email}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {/*Payphone -  Envio o Retiro / debe poner escoger solo una*/}
                {typeForm === "pay" && (
                  <div className="w-full flex justify-center text-sm py-4">
                    <div className="w-11/12 space-y-3">
                      <div
                        className={`flex items-center gap-x-2 ${
                          formErrors.tipoEntrega ? "text-red-500" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="tipoEntrega"
                          value="envio"
                          onChange={handleInputChange}
                          checked={formData.tipoEntrega === "envio"}
                          className="w-5 h-5 cursor-pointer"
                        />
                        <span className="text-base">
                          Envío Gratuito Servientrega
                        </span>
                      </div>
                      <div
                        className={`flex items-center gap-x-2 ${
                          formErrors.tipoEntrega ? "text-red-500" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="tipoEntrega"
                          value="retiro"
                          onChange={handleInputChange}
                          checked={formData.tipoEntrega === "retiro"}
                          className="w-5 h-5 cursor-pointer"
                        />
                        <span className="text-base">
                          Retiro en tienda Quito
                        </span>
                      </div>
                      {formErrors.tipoEntrega && (
                        <p className="text-red-500 text-xs">
                          {formErrors.tipoEntrega}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {/* Consentimiento */}
                <div className="w-11/12 flex justify-center bg-gray-200 rounded-[10px] text-xs">
                  {typeForm === "pay" ? (
                    <p className="text-xs px-4 py-2">
                      Al hacer clic en &quot;Comprar Ahora&quot;, aceptas
                      nuestros Términos y Condiciones y reconoces que tu pago
                      será procesado de forma segura. Tu información de pago
                      está encriptada y no será almacenada después de esta
                      transacción.
                    </p>
                  ) : (
                    <p className="text-xs px-4 py-2">
                      Al hacer clic en &quot;Cotizar por WhatsApp&quot;,
                      contactarás con un asesor que recibirá este modelo y
                      podrás pedirle información sobre tallas, grabado, precios
                      y material
                    </p>
                  )}
                </div>
                {/*Payphone - Total*/}
                {typeForm === "pay" && (
                  <div className="w-full flex justify-center">
                    <div className="w-11/12 flex flex-col gap-y-1">
                      <div className="flex justify-between">
                        <h4>Subtotal:</h4>
                        <span>${calcularTotal().subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-600 text-sm">
                        <h4>Comisión Payphone (6.05%):</h4>
                        <span>
                          ${calcularTotal().impuestoPayphone.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between font-bold mt-1 pt-1 border-t">
                        <h4>Total a pagar:</h4>
                        <strong>${calcularTotal().total.toFixed(2)}</strong>
                      </div>
                    </div>
                  </div>
                )}
                {/*Payphone - Alerta*/}
                {typeForm === "pay" && (
                  <div className="w-full flex justify-center">
                    <div className="w-11/12 text-xs">
                      <h4>
                        Tu pedido sera entregado en un plazo de{" "}
                        <strong>7 días hábiles</strong> como máximo y como
                        minimo 24 horas.
                      </h4>
                    </div>
                  </div>
                )}
                {/* Botón WhatsApp / debe enviar de manera precisa el material - Botón de pago / debe guardar en un archivo todos los datos de los inputs con comentario payphone y mostrarlos debajo despues de accionar el boton*/}
                <div className="w-11/12">
                  {typeForm === "cotizar" ? (
                    <WhatsAppButton
                      model={product.model}
                      selectedSize={selectedSize}
                      selectedSizeWoman={selectedSizeWoman}
                      selectedCity={selectedCity}
                      tipoOro={tipoOro}
                      tipoPlata={tipoPlata}
                      precioOro={formData.material === "Oro" ? precioOro : null}
                      precioPlata={
                        formData.material === "Plata" ? precioPlata : null
                      }
                      linkProduct={`https://casateconmigo.ec/shop/${product.category}/${product.model}`}
                      category={product.category}
                    />
                  ) : (
                    <div
                      className="h-12 w-full bg-[#ff6f03] rounded-[10px] flex justify-center items-center cursor-pointer hover:bg-[#e66600]"
                      onClick={() => {
                        sendGAEvent({
                          event: "button_buy_payphone",
                          value: "220",
                        });
                        sendGTMEvent({
                          event: "button_buy_payphone",
                          value: "1220",
                        });
                        handleComprar();
                      }}
                    >
                      <h6 className="text-white">Comprar Ahora</h6>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Mostrar datos del formulario */}
            {showFormData && (
              <div className="mt-8">
                <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">
                    Detalles de la Compra
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">
                        Información del Producto
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <span className="font-medium">Modelo:</span>{" "}
                          {product.model}
                        </li>
                        <li>
                          <span className="font-medium">Material:</span>{" "}
                          {formData.material === "Oro"
                            ? `Oro 18k ${tipoOro}`
                            : `Plata 925 Con Baño ${tipoPlata}`}
                        </li>
                        <li>
                          <span className="font-medium">Talla(s):</span>{" "}
                          {product.category === "set" ||
                          product.category === "matrimonio"
                            ? `Él: ${
                                selectedSize || "No seleccionada"
                              } / Ella: ${
                                selectedSizeWoman || "No seleccionada"
                              }`
                            : selectedSize || "No seleccionada"}
                        </li>
                        {(product.category === "matrimonio" ||
                          product.category === "grado") && (
                          <>
                            <li>
                              <span className="font-medium">Grabado Él:</span>{" "}
                              {formData.grabadoEl || "No especificado"}
                            </li>
                            <li>
                              <span className="font-medium">Grabado Ella:</span>{" "}
                              {formData.grabadoElla || "No especificado"}
                            </li>
                          </>
                        )}
                        <li>
                          <span className="font-medium">Tipo de Caja:</span>{" "}
                          {formData.cajaSeleccionada === "led"
                            ? "Caja LED (+$20.00)"
                            : "Caja de Gamuza"}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">
                        Información de Contacto
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <span className="font-medium">Nombre:</span>{" "}
                          {formData.nombres} {formData.apellidos}
                        </li>
                        <li>
                          <span className="font-medium">Teléfono:</span> +593
                          {formData.telefono}
                        </li>
                        <li>
                          <span className="font-medium">Cédula/RUC:</span>{" "}
                          {formData.cedula}
                        </li>
                        <li>
                          <span className="font-medium">Email:</span>{" "}
                          {formData.email}
                        </li>
                        <li>
                          <span className="font-medium">Ciudad:</span>{" "}
                          {selectedCity}
                        </li>
                        <li>
                          <span className="font-medium">Dirección:</span>{" "}
                          {formData.direccion}
                        </li>
                        <li>
                          <span className="font-medium">
                            Método de Entrega:
                          </span>{" "}
                          {formData.tipoEntrega === "envio"
                            ? "Envío Gratuito Servientrega"
                            : "Retiro en Tienda Quito"}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">
                          Precio Base: ${formData.precio.toFixed(2)}
                        </p>
                        {formData.cajaSeleccionada === "led" && (
                          <p className="text-sm text-gray-600">
                            Caja LED: +$20.00
                          </p>
                        )}
                      </div>
                      <div className="text-xl font-bold">
                        Total: ${calcularTotal().total.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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

      {/* Modal de Payphone */}
      <PayphoneModal
        isOpen={showPayphoneModal}
        onClose={() => {
          console.log("Cerrando modal manualmente");
          setShowPayphoneModal(false);
        }}
        paymentData={paymentData}
        token={process.env.NEXT_PUBLIC_PAYPHONE_TOKEN || ""}
        storeId={process.env.NEXT_PUBLIC_PAYPHONE_STORE_ID || ""}
        onPaymentComplete={memoizedHandlePaymentComplete}
      />
    </div>
  );
}
