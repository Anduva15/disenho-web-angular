import { Component } from '@angular/core';
import { RESTAURANT_ADD, RESTAURANTS } from '../constants';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent {
  RESTAURANTS = RESTAURANTS;
  RESTAURANT_ADD = RESTAURANT_ADD;
}
