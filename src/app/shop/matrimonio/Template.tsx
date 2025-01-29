"use client";

import Button from "@/app/components/Button";
import Card from "@/app/components/card/Card";
import InstructionColors from "@/app/components/InstructionColors";
import { gtmPageView } from "@/app/lib/gtm";
import { gaPageView } from "@/app/lib/ga";
import { useEffect } from "react";
import Image from "next/image";
import { CategoryType } from "@/app/types/category";

export const rings = [
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-001/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-001/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-001/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8nz9k6NA6_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-001",
    model: "AM-001",
    color: "amarillo",
    grabado: true,
    grams: 4,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-003/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-003/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-003/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n0CJmtyYk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-003",
    model: "AM-003",
    color: "amarillo",
    grabado: true,
    grams: 4,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-006/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-006/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-006/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n0cuvtL6b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-006",
    model: "AM-006",
    color: "amarillo",
    grabado: true,
    grams: 4,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-007/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-007/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-007/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n6Xdstnoo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-007",
    model: "AM-007",
    color: "amarillo",
    grabado: true,
    grams: 6,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-008/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-008/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-008/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n6dTut_5x/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-008",
    model: "AM-008",
    color: "amarillo",
    grabado: true,
    grams: 6,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-009/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-009/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-009/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n692bt3e1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-009",
    model: "AM-009",
    color: "amarillo",
    grabado: true,
    grams: 6,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-010/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-010/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-010/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n7BwKNoAC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-010",
    model: "AM-010",
    color: "rosado",
    grabado: true,
    grams: 6,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-012/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-012/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-012/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n7IxWNGka/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-012",
    model: "AM-012",
    color: "blanco",
    grabado: true,
    grams: 6,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-013/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-013/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-013/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n8V5ht6mF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-013",
    model: "AM-013",
    color: "amarillo",
    grabado: true,
    grams: 7,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-014/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-014/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-014/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n-d_rtJws/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-014",
    model: "AM-014",
    color: "amarillo",
    grabado: true,
    grams: 8,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-015/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-015/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-015/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n-iUuNlk3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-015",
    model: "AM-015",
    color: "amarillo",
    grabado: true,
    grams: 8,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-016/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-016/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-016/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n-pFft0LW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-016",
    model: "AM-016",
    color: "blanco",
    grabado: true,
    grams: 8,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-017/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-017/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-017/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n-s5Bt5X0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-017",
    model: "AM-017",
    color: "amarillo",
    grabado: true,
    grams: 8,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-018/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-018/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-018/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8n-wfkOyWJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-018",
    model: "AM-018",
    color: "blanco",
    grabado: true,
    grams: 8,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-019/promo.jpg",
    imageSilver: "/modelos/matrimonio/am-019/blanco-2.jpg",
    imageRose: "/modelos/matrimonio/am-019/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBApjuijn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-019",
    model: "AM-019",
    color: "amarillo",
    grabado: true,
    grams: 10,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-021/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-021/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-021/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBI5COumF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-021",
    model: "AM-021",
    color: "amarillo",
    grabado: true,
    grams: 10,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-022/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-022/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-022/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBOmpOOYm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-022",
    model: "AM-022",
    color: "amarillo",
    grabado: true,
    grams: 10,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-023/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-023/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-023/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBVNHu1Xa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-023",
    model: "AM-023",
    color: "amarillo",
    grabado: true,
    grams: 10,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-024/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-024/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-024/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBYJHu8aF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-024",
    model: "AM-024",
    color: "amarillo",
    grabado: true,
    grams: 10,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-025/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-025/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-025/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oCWH0uiXJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-025",
    model: "AM-025",
    color: "amarillo",
    grabado: true,
    grams: 10,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-026/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-026/blanco-2.jpg",
    imageRose: "/modelos/matrimonio/am-026/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBca_OESk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-026",
    model: "AM-026",
    color: "amarillo",
    grabado: true,
    grams: 10,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-028/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-028/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-028/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8oBkxtuSlz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-028",
    model: "AM-028",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-029/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-029/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-029/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o0WVquc80/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-029",
    model: "AM-029",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-030/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-030/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-030/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o0Z5vOwAr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-030",
    model: "AM-030",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-031/amarillo-2.jpg",
    imageSilver: "/modelos/matrimonio/am-031/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-031/rosado-2.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o0dYvuoT7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-031",
    model: "AM-031",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-033/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-033/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-033/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o0q5XOS9C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-033",
    model: "AM-033",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-034/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-034/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-034/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o03t0OlES/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-034",
    model: "AM-034",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-035/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-035/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-035/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o06tgucwo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-035",
    model: "AM-035",
    color: "blanco",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-036/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-036/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-036/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o1Cf2uuys/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-036",
    model: "AM-036",
    color: "blanco",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-037/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-037/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-037/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o1GA-u4z_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-037",
    model: "AM-037",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-038/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-038/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-038/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o1I7Auh9M/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-038",
    model: "AM-038",
    color: "rosado",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-039/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-039/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-039/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o1NVRurKX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-039",
    model: "AM-039",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-040/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-040/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-040/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o1XBKOQqW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-040",
    model: "AM-040",
    color: "rosado",
    grabado: true,
    grams: 12,
  },
  // {
  //   category: "matrimonio",
  //   image: "/modelos/matrimonio/am-041/amarillo.jpg",
  //   imageSilver: "/modelos/matrimonio/am-041/blanco.jpg",
  //   imageRose: "/modelos/matrimonio/am-041/rosado.jpg",
  //   linkProduct:
  //     "https://www.instagram.com/p/C8o12AlO7uu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  //   alt: "imagen modelo AM-041",
  //   model: "AM-041",
  //   color: "rosado",
  //   grabado: true,
  //   grams: 12,
  // },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-042/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-042/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-042/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o15QkuTtC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-042",
    model: "AM-042",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-043/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-043/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-043/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o1_ahO-FV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-043",
    model: "AM-043",
    color: "amarillo",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-044/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-044/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-044/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8o2EBkuHeH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-044",
    model: "AM-044",
    color: "blanco",
    grabado: true,
    grams: 12,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-045/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-045/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-045/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNB4nuxF0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-045",
    model: "AM-045",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-046/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-046/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-046/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNEqruzQE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-046",
    model: "AM-046",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-047/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-047/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-047/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNJxCu0Op/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-047",
    model: "AM-047",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-048/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-048/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-048/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNM6cuEa4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-048",
    model: "AM-048",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-049/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-049/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-049/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNPz_Ox1m/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-049",
    model: "AM-049",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-050/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-050/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-050/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8pNTN5urUY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-050",
    model: "AM-050",
    color: "amarillo",
    grabado: true,
    grams: 14,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-051/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-051/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-051/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8rtYX5utMf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-051",
    model: "AM-051",
    color: "amarillo",
    grabado: true,
    grams: 16,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-052/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-052/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-052/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8r87cTuNU5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-052",
    model: "AM-052",
    color: "amarillo",
    grabado: true,
    grams: 18,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-053/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-053/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-053/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8r89b6u_SN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-053",
    model: "AM-053",
    color: "amarillo",
    grabado: true,
    grams: 18,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-054/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-054/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-054/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8sAgtVOgEI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-054",
    model: "AM-054",
    color: "amarillo",
    grabado: true,
    grams: 20,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-055/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-055/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-055/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8sAmEkuMZZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-055",
    model: "AM-055",
    color: "amarillo",
    grabado: true,
    grams: 20,
  },
  {
    category: "matrimonio" as CategoryType,
    image: "/modelos/matrimonio/am-056/amarillo.jpg",
    imageSilver: "/modelos/matrimonio/am-056/blanco.jpg",
    imageRose: "/modelos/matrimonio/am-056/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/C8sAt6OurNU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "imagen modelo AM-056",
    model: "AM-056",
    color: "amarillo",
    grabado: true,
    grams: 20,
  },
];

export default function ShopTemplate() {
  useEffect(() => {
    const props = {
      page_title: "matrimonio",
    };
    gtmPageView(props);
    gaPageView(window.location.href);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Button />
      <h1 className="text-myZinc text-lg mb-10">Anillos de matrimonio</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {rings.map((model, index) => {
          return <Card key={index} product={model} />;
        })}
      </div>

      <Button />
    </div>
  );
}
