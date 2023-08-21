import { Component } from '@angular/core';
import { CLIENTS, CLIENT_ADD } from '../../constants';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent {
  CLIENTS = CLIENTS;
  CLIENT_ADD = CLIENT_ADD;
  constructor() {}
}
