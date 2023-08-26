import { Component, OnInit } from '@angular/core';
import { get, keyBy } from 'lodash';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../interfaces/client';
import { Router } from '@angular/router';
import {
  CLIENT,
  CLIENTS,
  CLIENT_EDIT,
  CLIENT_FORM_STRUCTURE,
} from '../../../constants';
import { UrlParam } from '../../../interfaces/UrlParam';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  restaurants: { [id: string]: Restaurant } = {};
  clients: Client[] = [];
  CLIENT = CLIENT;
  CLIENTS = CLIENTS;
  CLIENT_FORM_STRUCTURE = CLIENT_FORM_STRUCTURE;
  formFields = [];

  constructor(
    private restaurantService: RestaurantService,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restaurantService.getAll().subscribe((restaurants) => {
      this.restaurants = keyBy(restaurants, 'id');

      this.loadClients();
    });
  }

  loadClients = (urlParams?: UrlParam | undefined) => {
    this.clientService.getAll(urlParams).subscribe((clients) => {
      this.clients = clients.map((c) => {
        const restaurant = this.restaurants[c.id];

        return {
          ...c,
          restaurantId: restaurant?.name,
        };
      });
    });
  };

  editUser(clientId: string) {
    this.router.navigate([CLIENT_EDIT, clientId]); // Navigate to the edit page
  }

  deleteUser = (clientId: string) => {
    if (confirm('Estas seguro que deseas borrar este cliente?')) {
      this.clientService.delete(clientId).subscribe(() => {
        this.clientService.getAll().subscribe((u) => {
          this.clients = u;
        });
      });
    }
  };
}
