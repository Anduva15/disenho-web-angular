import { Component } from '@angular/core';
import { omit } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

import { PRODUCTS, PRODUCT_FORM_STRUCTURE } from 'src/app/constants';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  isNew: boolean = true;
  formFields = PRODUCT_FORM_STRUCTURE;

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load product data if editing an existing product
        const productId = params['id'];
        this.productService.getOne(productId).subscribe((product) => {
          this.product = product;
          this.isNew = false;
        });
      }
    });
  }

  onSubmit(formData: any) {
    // Update product data with form data
    this.product = { ...this.product, ...formData };

    if (this.isNew) {
      this.productService.create(omit(this.product, ['id'])).subscribe(() => {
        // Redirect to product list after successful creation
        this.router.navigate([PRODUCTS]);
      });
    } else {
      this.productService
        .update(this.product.id, this.product)
        .subscribe(() => {
          // Redirect to product list after successful update
          this.router.navigate([PRODUCTS]);
        });
    }
  }
}
