import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../../services/provider.service';
import { Provider } from '../../../interfaces/provider';
import { Router } from '@angular/router';
import {
  PROVIDER,
  PROVIDERS,
  PROVIDER_EDIT,
  PROVIDER_FORM_STRUCTURE,
} from '../../../constants';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {
  providers: Provider[] = [];
  PROVIDER = PROVIDER;
  PROVIDERS = PROVIDERS;
  PROVIDER_FORM_STRUCTURE = PROVIDER_FORM_STRUCTURE;

  constructor(private ProviderService: ProviderService, private router: Router) {}

  ngOnInit(): void {
    this.ProviderService.getAll().subscribe((providers) => {
      this.providers = providers;
    });
  }

  editProvider(providerId: string) {
    this.router.navigate([PROVIDER_EDIT, providerId]); // Navigate to the edit page
  }

  deleteProvider = (providerId: string) => {
    if (confirm('Are you sure you want to delete this provider?')) {
      this.ProviderService.delete(providerId).subscribe(() => {
        this.ProviderService.getAll().subscribe((u) => {
          this.providers = u;
        });
      });
    }
  }
}
