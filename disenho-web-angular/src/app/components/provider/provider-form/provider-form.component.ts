import { Component } from '@angular/core';
import { omit } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

import { PROVIDERS, PROVIDER_FORM_STRUCTURE } from 'src/app/constants';
import { ProviderService } from '../../../services/provider.service';
import { Provider } from '../../../interfaces/provider';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.css']
})
export class ProviderFormComponent {
  isNew: boolean = true;
  formFields = PROVIDER_FORM_STRUCTURE;

  provider: Provider = {
    id: '',
    name: '',
    firstName: '',
    lastName: '',
    officePhoneNumber: '',
    fax: '',
    mobileNumber: '',
    picture: '',
    address: '',
    brands: [],
  };

  constructor(
    private providerService: ProviderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load provider data if editing an existing provider
        const providerId = params['id'];
        this.providerService.getOne(providerId).subscribe((provider) => {
          this.provider = provider;
          this.isNew = false;
        });
      }
    });
  }

  onSubmit(formData: any) {
    // Update provider data with form data
    this.provider = { ...this.provider, ...formData };

    if (this.isNew) {
      this.providerService.create(omit(this.provider, ['id'])).subscribe(() => {
        // Redirect to user list after successful creation
        this.router.navigate([PROVIDERS]);
      });
    } else {
      this.providerService.update(this.provider.id, this.provider).subscribe(() => {
        // Redirect to provider list after successful update
        this.router.navigate([PROVIDERS]);
      });
    }
  }
}
