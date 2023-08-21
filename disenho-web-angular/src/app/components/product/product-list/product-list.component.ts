import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { Router } from '@angular/router';
import {
  PRODUCT,
  PRODUCTS,
  PRODUCT_EDIT,
  PRODUCT_FORM_STRUCTURE,
} from '../../../constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  PRODUCT = PRODUCT;
  PRODUCTS = PRODUCTS;
  PRODUCT_FORM_STRUCTURE = PRODUCT_FORM_STRUCTURE;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  editUser(productId: string) {
    this.router.navigate([PRODUCT_EDIT, productId]); // Navigate to the edit page
  }

  deleteUser = (productId: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.delete(productId).subscribe(() => {
        this.productService.getAll().subscribe((u) => {
          this.products = u;
        });
      });
    }
  };
}
