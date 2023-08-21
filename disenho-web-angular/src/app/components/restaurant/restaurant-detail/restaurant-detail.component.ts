import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../../services/restaurant.service';
import { Restaurant } from '../../../interfaces/restaurant';
import { RESTAURANT_FORM_STRUCTURE } from 'src/app/constants';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css'],
})
export class RestaurantDetailComponent implements OnInit {
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load restaurant data based on route parameter
        const restaurantId = params['id'];
        this.restaurantService.getOne(restaurantId).subscribe((restaurant) => {
          this.restaurant = restaurant;
        });
      }
    });
  }
}
