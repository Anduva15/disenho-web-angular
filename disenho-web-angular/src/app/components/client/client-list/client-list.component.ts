import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];
  CLIENT = CLIENT;
  CLIENTS = CLIENTS;
  CLIENT_FORM_STRUCTURE = CLIENT_FORM_STRUCTURE;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients = (urlParams?: UrlParam | undefined) => {
    this.clientService.getAll(urlParams).subscribe((clients) => {
      this.clients = clients;
    });
  };

  editUser(clientId: string) {
    this.router.navigate([CLIENT_EDIT, clientId]); // Navigate to the edit page
  }

  deleteUser = (clientId: string) => {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clientService.delete(clientId).subscribe(() => {
        this.clientService.getAll().subscribe((u) => {
          this.clients = u;
        });
      });
    }
  };
}
