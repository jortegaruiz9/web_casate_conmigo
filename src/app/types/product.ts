import { CategoryType } from "./category";

export interface ProductType {
  category: CategoryType;
  image: string;
  imageSilver?: string;
  imageRose?: string;
  linkProduct: string;
  alt: string;
  model: string;
  color: string;
  grams: number;
  grabado?: boolean;
  bestSeller?: boolean;
  garantia?: boolean;
} 