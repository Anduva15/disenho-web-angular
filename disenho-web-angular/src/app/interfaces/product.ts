export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  type: string;
  price: number;
  pricePerUnit: number;
  ingredients: string;
  edibleLine: string;
  edibleClass: string;
  picture: string;
  year: Date;
  measurementUnit: string;
  quantity: number;
  nationality: string;
  restaurantId: Array<number>;
  providerId: Array<number>;
  brandId: string;
}
