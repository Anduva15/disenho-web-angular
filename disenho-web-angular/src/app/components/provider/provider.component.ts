import { Component } from '@angular/core';
import { PROVIDERS, PROVIDER_ADD } from '../../constants';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent {
  PROVIDERS = PROVIDERS;
  PROVIDER_ADD = PROVIDER_ADD;
  constructor() {}
}
