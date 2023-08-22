import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '../../../services/provider.service';
import { Provider } from '../../../interfaces/provider';
import { PROVIDER_FORM_STRUCTURE } from 'src/app/constants';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.css']
})
export class ProviderDetailComponent implements OnInit {
  PROVIDER_FORM_STRUCTURE = PROVIDER_FORM_STRUCTURE;
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load provider data based on route parameter
        const providerId = params['id'];
        this.providerService.getOne(providerId).subscribe((provider) => {
          this.provider = provider;
        });
      }
    });
  }
}
