import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import {
  RESTAURANT,
  RESTAURANTS,
  RESTAURANT_ADD,
  RESTAURANT_EDIT,
  USER,
  USERS,
  USER_ADD,
  USER_EDIT,
} from './constants';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantFormComponent } from './restaurant/restaurant-form/restaurant-form.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
    //LOGIN
    { path: "login", component: LoginComponent },
  // USERS
  { path: USERS, component: UserListComponent },
  { path: USER_ADD, component: UserFormComponent },
  { path: `${USER}/:id`, component: UserDetailComponent },
  { path: `${USER_EDIT}/:id`, component: UserFormComponent },
  // RESTAURANTS
  { path: RESTAURANTS, component: RestaurantListComponent },
  { path: RESTAURANT_ADD, component: RestaurantFormComponent },
  { path: `${RESTAURANT}/:id`, component: RestaurantDetailComponent },
  { path: `${RESTAURANT_EDIT}/:id`, component: RestaurantFormComponent },

  // REST
  { path: '', redirectTo: USERS, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, // Ruta para manejar errores 404
  { path: 'server-error', component: InternalServerErrorComponent }, // Ruta para manejar errores 500
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
