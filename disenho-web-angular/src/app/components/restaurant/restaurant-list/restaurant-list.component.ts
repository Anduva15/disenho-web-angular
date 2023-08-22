import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  RESTAURANT,
  RESTAURANTS,
  RESTAURANT_EDIT,
  RESTAURANT_FORM_STRUCTURE,
} from 'src/app/constants';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UrlParam } from '../../../interfaces/UrlParam';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  RESTAURANT = RESTAURANT;
  RESTAURANTS = RESTAURANTS;
  RESTAURANT_FORM_STRUCTURE = RESTAURANT_FORM_STRUCTURE;

  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onLoadRestaurants();
  }

  onLoadRestaurants = (urlParams?: UrlParam | undefined) => {
    this.restaurantService.getAll(urlParams).subscribe((restaurants) => {
      this.restaurants = restaurants;
    });
  };

  editRestaurant(userId: string) {
    this.router.navigate([RESTAURANT_EDIT, userId]); // Navigate to the edit page
  }

  deleteRestaurant = (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      this.restaurantService.delete(userId).subscribe(() => {
        this.restaurantService.getAll().subscribe((u) => {
          this.restaurants = u;
        });
      });
    }
  };
}
