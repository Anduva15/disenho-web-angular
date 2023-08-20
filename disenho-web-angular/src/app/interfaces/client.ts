import { Product } from "./product";

export interface Client {
    id: String,
    name: String,
    amountPayed: String,
    products: Array<Product>,
    productsPrice: Array<Number>,
    restaurantId: String,
    status: String,
}
