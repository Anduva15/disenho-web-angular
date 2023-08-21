import { Component } from '@angular/core';
import { PRODUCTS, PRODUCT_ADD } from '../../constants';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  PRODUCTS = PRODUCTS;
  PRODUCT_ADD = PRODUCT_ADD;
  constructor() {}
}
