import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { PRODUCT_FORM_STRUCTURE } from 'src/app/constants';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  PRODUCT_FORM_STRUCTURE = PRODUCT_FORM_STRUCTURE;
  product: Product = {
    id: 0,
    name: '',
    description: '',
    category: '',
    type: '',
    price: 0,
    pricePerUnit: 0,
    ingredients: '',
    edibleLine: '',
    edibleClass: '',
    picture: '',
    year: new Date(),
    measurementUnit: '',
    quantity: 0,
    nationality: '',
    restaurantId: [],
    providerId: [],
    brandId: '',
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load product data based on route parameter
        const productId = params['id'];
        this.productService.getOne(productId).subscribe((product) => {
          this.product = product;
        });
      }
    });
  }
}
