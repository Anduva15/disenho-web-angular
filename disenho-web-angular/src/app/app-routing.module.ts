import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import {
  CASHIER,
  CASHIER_EDIT,
  CASHIERS,
  CASHIER_ADD,
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
import { RestaurantListComponent } from './components/restaurant/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './components/restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantFormComponent } from './components/restaurant/restaurant-form/restaurant-form.component';

import { CashierListComponent } from './components/cashier/cashier-list/cashier-list.component';
import { CashierDetailComponent } from './components/cashier/cashier-detail/cashier-detail.component';
import { CashierFormComponent } from './components/cashier/cashier-form/cashier-form.component';

import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';

const routes: Routes = [
  //LOGIN
  { path: 'login', component: LoginComponent },
  //Menu
  { path: 'menu', component: MenuComponent },
  //Seguridad
  { path: 'seguridad', component: SeguridadComponent },
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
  // CASHIER
  { path: CASHIERS, component: CashierListComponent },
  { path: CASHIER_ADD, component: CashierFormComponent },
  { path: `${CASHIER}/:id`, component: CashierDetailComponent },
  { path: `${CASHIER_EDIT}/:id`, component: CashierFormComponent },
  // REST
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }, // Ruta para manejar errores 404
  { path: 'server-error', component: InternalServerErrorComponent }, // Ruta para manejar errores 500
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
