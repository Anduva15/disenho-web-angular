import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../interfaces/client';
import { CLIENT_FORM_STRUCTURE } from 'src/app/constants';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
})
export class ClientDetailComponent implements OnInit {
  CLIENT_FORM_STRUCTURE = CLIENT_FORM_STRUCTURE;
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load client data based on route parameter
        const clientId = params['id'];
        this.clientService.getOne(clientId).subscribe((client) => {
          this.client = client;
        });
      }
    });
  }
}
