import { CategoryType } from './category';

export type MaterialType = 'silver' | 'gold' | 'goldWhite' | 'goldRose' | 'silverYellow';
export type BañoType = "BañoAmarillo" | "BañoBlanco" | "BañoRosa";
export type ColorType = "Amarillo" | "Blanco" | "Rosa";

export interface MaterialPrice {
  material: MaterialType;
  price: number;
}

export interface ColorFormState {
  seleccionado: BañoType;
  precioPlata: number | null;
  precioOro: number | null;
  tipoPlata: ColorType;
  tipoOro: ColorType;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  grams: number;
} 