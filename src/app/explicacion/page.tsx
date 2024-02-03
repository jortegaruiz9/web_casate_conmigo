import CardInfo from "../components/CardInfo";

const data = [
  {
    content:
      "Una vez extraídos de la mina, los metales preciosos pasan por unproceso de refinación. En este procedimiento, se eliminanimpurezas y se logra una pureza de 24k para el oro y 1000 para laplata, obteniendo así la calidad óptima. Posteriormente, ambosmetales se mezclan cuidadosamente para fortalecer su estructura,resultando en una aleación final de 18k para el oro y 925 para laplata.",
    img: "/imagenes/mina.jpeg",
    alt: "",
    tema: "01 | Materiales",
    title: "Obtención de materia prima",
    title2: "Oro 18k | Plata 925",
    color: "text-yellow-800",
    number: 1,
  },
  {
    content:
      "1) Preparación: Toma un trozo de papel estrecho y una regla | 2) Envuelve el papel alrededor del dedo: Envuelve el papel alrededor de la base del dedo y marca donde se encuentran el extremo y el inicio | 3) Mide la longitud: Desenrolla el papel y utiliza la regla para medir la distancia entre la marca y el extremo | 4) Consulta una tabla de tallas: Envia la foto de tu papel marcado a tu asesor.",
    img: "/imagenes/medida.jpg",
    alt: "",
    tema: "02 | Cómo saber tu medida?",
    title: "Encuentra su talla de una",
    title2: "manera sencilla",
    color: "text-gray-500",
    number: 2,
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
