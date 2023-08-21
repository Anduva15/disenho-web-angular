import { Product } from './product';

export interface Client {
  id: number;
  name: String;
  amountPayed: String;
  products: Array<Product>;
  productsPrice: Array<Number>;
  restaurantId: String;
  status: String;
}
