export const metadata = {
  title: "Conoce más",
};
import CardInfo from "../components/CardInfo";

const data = [
  {
    content:
      "Una vez extraídos de la mina, los metales preciosos pasan por un proceso de refinación. En este procedimiento, se eliminan impurezas y se logra una pureza de 24k para el oro y 1000 para la plata, obteniendo así la calidad óptima. Posteriormente, ambosmetales se mezclan cuidadosamente para fortalecer su estructura, resultando en una aleación final de 18k para el oro y 925 para la plata.",
    img: "/imagenes/mina.jpeg",
    alt: "foto mina",
    tema: "01 | Materiales",
    title: "Obtención de materia prima",
    title2: "Oro 18k | Plata 925",
    color: "text-yellow-800",
    number: 1,
  },
  {
    content:
      "1) Preparación: Toma un trozo de papel estrecho y una regla | 2) Envuelve el papel alrededor del dedo: Envuelve el papel alrededor de la base del dedo y marca donde se encuentran el extremo y el inicio | 3) Mide la longitud: Desenrolla el papel y utiliza la regla para medir la distancia entre la marca y el extremo | 4) Enviar imagen: Envia la foto de tu papel marcado a tu asesor.",
    img: "/imagenes/medida.jpg",
    alt: "foto medida",
    tema: "02 | Cómo saber su medida?",
    title: "Encuentra su talla de una",
    title2: "manera sencilla",
    color: "text-gray-500",
    number: 2,
    ruta: "/video/tallas.MOV",
  },
  {
    content:
      "Te ofrecemos servicios de grabado lo cual permite personalizar y hacer única tu joya de manera gratuita. Se pueden grabar fechas, iniciales, o nombres según el modelo, de preferencia que no sea una grabación demasiado extensa ",
    img: "/imagenes/grabado.jpg",
    alt: "foto grabado de anillos",
    tema: "03 | Marca tus anillos?",
    title: "Haz tus anillos",
    title2: "únicos",
    color: "text-yellow-600",
    number: 3,
  },
  {
    content:
      "GIA es la principal autoridad mundial en diamantes, piedras de colores y perlas. El Instituto Gemológico Americano también conocido por sus siglas en inglés como “GIA” es una entidad de beneficio público y sin fines de lucro. Representa la principal fuente de conocimiento, estándares y educación en gemas y joyería.",
    img: "/portada-compromiso.jpg",
    alt: "foto gia",
    tema: "04 | Qué es GIA?",
    title: "Quien tasa los",
    title2: "diamantes",
    color: "text-gray-500",
    number: 4,
  },
  {
    content:
      "La seguridad en los envíos nacionales es de suma importancia para nosotros. En colaboración con nuestro socio logístico, Servientrega, garantizamos un servicio de entrega confiable y eficiente para nuestros productos, incluyendo tus anillos. Servientrega, reconocida por su amplia experiencia y compromiso con la seguridad, implementa rigurosos protocolos para asegurar la integridad de cada paquete durante todo el proceso logístico.",
    img: "/imagenes/servientrega.png",
    alt: "foto servientrega",
    tema: "05 | Recibe tu envio gratis!",
    title: "Todos tus pedidos seguros",
    title2: "a tu puerta",
    color: "text-green-500",
    number: 5,
  },
];

export default function explicacion() {
  return (
    <div>
      {data.map((info, index) => {
        return <CardInfo key={index} info={info} />;
      })}
    </div>
  );
}
