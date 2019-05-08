import { Nutrient } from './nutrient';

export class Product {
  name: string;
  sku: number;
  description: string;
  price: number;
  cal: number;
  img: string;
  nutrient: Nutrient;
}
