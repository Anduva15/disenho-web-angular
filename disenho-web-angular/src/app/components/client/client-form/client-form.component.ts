import { Component } from '@angular/core';
import { omit } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

import { CLIENTS, CLIENT_FORM_STRUCTURE } from '../../../constants';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../interfaces/client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent {
  isNew: boolean = true;
  formFields = CLIENT_FORM_STRUCTURE;

  client: Client = {
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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
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
    // Update client data with form data
    this.client = { ...this.client, ...formData };

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