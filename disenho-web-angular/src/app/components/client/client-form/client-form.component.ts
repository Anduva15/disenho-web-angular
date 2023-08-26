import { Component, Input } from '@angular/core';
import { omit, sum } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

import { CLIENTS, CLIENT_FORM_STRUCTURE } from '../../../constants';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../interfaces/client';
import { Product } from '../../../interfaces/product';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ProductService } from 'src/app/services/product.service';

const clientFormStructure = CLIENT_FORM_STRUCTURE.filter(
  (c) => !['amountPayed', 'productsPrice'].includes(c.name)
);

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent {
  isNew: boolean = true;
  formFields = clientFormStructure;
  products: Product[] = [];
  @Input() client: Client = {
    id: 0,
    name: '',
    amountPayed: '',
    products: [],
    productsPrice: [],
    restaurantId: '',
    status: '',
  };

  constructor(
    private clientService: ClientService,
    private restaurantService: RestaurantService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restaurantService.getAll().subscribe((restaurants) => {
      const restaurantsSelect: Array<{ label: string; value: any }> = (
        restaurants || []
      ).map((r) => ({
        label: r.name,
        value: r.id,
      }));

      this.productService.getAll().subscribe((products) => {
        this.products = products;
        this.formFields = clientFormStructure.map((c) => {
          if (c.name === 'restaurantId') {
            return { ...c, options: restaurantsSelect };
          }

          if (c.name === 'products') {
            return {
              ...c,
              options: products.map((p) => ({
                label: p.name,
                value: p.id,
              })),
            };
          }

          return c;
        });
      });
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load client data if editing an existing client
        const clientId = params['id'];
        this.clientService.getOne(clientId).subscribe((client) => {
          this.client = client;
          this.isNew = false;
        });
      }
    });
  }

  onSubmit(formData: any) {
    this.client = {
      ...this.client,
      ...formData,
    };

    if (this.isNew) {
      this.clientService.create(omit(this.client, ['id'])).subscribe(() => {
        // Redirect to client list after successful creation
        this.router.navigate([CLIENTS]);
      });
    } else {
      this.clientService.update(this.client.id, this.client).subscribe(() => {
        // Redirect to client list after successful update
        this.router.navigate([CLIENTS]);
      });
    }
  }
}
