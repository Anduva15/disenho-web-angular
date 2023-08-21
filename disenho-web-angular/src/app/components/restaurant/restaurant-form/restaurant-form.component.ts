import { Component } from '@angular/core';
import { omit } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

import { RESTAURANTS, RESTAURANT_FORM_STRUCTURE } from 'src/app/constants';
import { RestaurantService } from '../../../services/restaurant.service';
import { Restaurant } from '../../../interfaces/restaurant';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css'],
})
export class RestaurantFormComponent {
  isNew: boolean = true;
  RESTAURANT_FORM_STRUCTURE = RESTAURANT_FORM_STRUCTURE;

  restaurant: Restaurant = {
    id: 0,
    name: '',
    address: '',
    phone: '',
    clientsAmount: 0,
  };

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load restaurant data if editing an existing user
        const restaurantId = params['id'];
        this.restaurantService.getOne(restaurantId).subscribe((restaurant) => {
          this.restaurant = restaurant;
          this.isNew = false;
        });
      }
    });
  }

  onSubmit(formData: any) {
    // Update user data with form data
    this.restaurant = { ...this.restaurant, ...formData };

    if (this.isNew) {
      this.restaurantService
        .create(omit(this.restaurant, ['id']))
        .subscribe(() => {
          // Redirect to user list after successful creation
          this.router.navigate([RESTAURANTS]);
        });
    } else {
      this.restaurantService
        .update(this.restaurant.id, this.restaurant)
        .subscribe(() => {
          // Redirect to user list after successful update
          this.router.navigate([RESTAURANTS]);
        });
    }
  }
}
