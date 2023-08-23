import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { AuthGuard } from './auth.guard';
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
  PRODUCTS,
  PRODUCT_ADD,
  PRODUCT,
  PRODUCT_EDIT,
  CLIENTS,
  CLIENT_ADD,
  CLIENT,
  CLIENT_EDIT,
  EMPLOYEE,
  EMPLOYEES,
  EMPLOYEE_ADD,
  EMPLOYEE_EDIT,
  ACCOUNTS,
  ACCOUNT_ADD,
  ACCOUNT,
  ACCOUNT_EDIT,
} from './constants';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';
import { RestaurantListComponent } from './components/restaurant/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './components/restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantFormComponent } from './components/restaurant/restaurant-form/restaurant-form.component';
import { CashierListComponent } from './components/cashier/cashier-list/cashier-list.component';
import { CashierDetailComponent } from './components/cashier/cashier-detail/cashier-detail.component';
import { CashierFormComponent } from './components/cashier/cashier-form/cashier-form.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';

import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { ClientFormComponent } from './components/client/client-form/client-form.component';

import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { EmployeeDetailComponent } from './components/employee/employee-detail/employee-detail.component';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AccountFormComponent } from './components/account/account-form/account-form.component';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';

const routes: Routes = [
  //LOGIN
  { path: 'login', component: LoginComponent },
  //Menu
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  //Seguridad
  { path: 'seguridad', component: SeguridadComponent, canActivate: [AuthGuard] },
  // USERS
  { path: USERS, component: UserListComponent, canActivate: [AuthGuard] },
  { path: USER_ADD, component: UserFormComponent, canActivate: [AuthGuard] },
  { path: `${USER}/:id`, component: UserDetailComponent , canActivate: [AuthGuard]},
  { path: `${USER_EDIT}/:id`, component: UserFormComponent, canActivate: [AuthGuard] },
  // RESTAURANTS
  { path: RESTAURANTS, component: RestaurantListComponent, canActivate: [AuthGuard] },
  { path: RESTAURANT_ADD, component: RestaurantFormComponent, canActivate: [AuthGuard] },
  { path: `${RESTAURANT}/:id`, component: RestaurantDetailComponent , canActivate: [AuthGuard]},
  { path: `${RESTAURANT_EDIT}/:id`, component: RestaurantFormComponent, canActivate: [AuthGuard] },
  // CASHIER
  { path: CASHIERS, component: CashierListComponent, canActivate: [AuthGuard] },
  { path: CASHIER_ADD, component: CashierFormComponent, canActivate: [AuthGuard]},
  { path: `${CASHIER}/:id`, component: CashierDetailComponent, canActivate: [AuthGuard] },
  { path: `${CASHIER_EDIT}/:id`, component: CashierFormComponent, canActivate: [AuthGuard] },
  // PRODUCT
  { path: PRODUCTS, component: ProductListComponent, canActivate: [AuthGuard] },
  { path: PRODUCT_ADD, component: ProductFormComponent , canActivate: [AuthGuard]},
  { path: `${PRODUCT}/:id`, component: ProductDetailComponent , canActivate: [AuthGuard]},
  { path: `${PRODUCT_EDIT}/:id`, component: ProductFormComponent , canActivate: [AuthGuard]},
  // CLIENT
  { path: CLIENTS, component: ClientListComponent , canActivate: [AuthGuard]},
  { path: CLIENT_ADD, component: ClientFormComponent , canActivate: [AuthGuard]},
  { path: `${CLIENT}/:id`, component: ClientDetailComponent , canActivate: [AuthGuard]},
  { path: `${CLIENT_EDIT}/:id`, component: ClientFormComponent , canActivate: [AuthGuard]},
  //EMPLOYEE
  { path: EMPLOYEES, component: EmployeeListComponent , canActivate: [AuthGuard]},
  { path: EMPLOYEE_ADD, component: EmployeeFormComponent , canActivate: [AuthGuard]},
  { path: `${EMPLOYEE}/:id`, component: EmployeeDetailComponent , canActivate: [AuthGuard]},
  { path: `${EMPLOYEE_EDIT}/:id`, component: EmployeeFormComponent , canActivate: [AuthGuard]},
  //ACCOUNTS
  { path: ACCOUNTS, component: AccountListComponent , canActivate: [AuthGuard]},
  { path: ACCOUNT_ADD, component: AccountFormComponent , canActivate: [AuthGuard]},
  { path: `${ACCOUNT}/:id`, component: AccountDetailComponent , canActivate: [AuthGuard]},
  { path: `${ACCOUNT_EDIT}/:id`, component: AccountFormComponent , canActivate: [AuthGuard]},
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
