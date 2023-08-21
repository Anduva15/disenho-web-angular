import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { DetailsComponent } from './components/details/details.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantListComponent } from './components/restaurant/restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './components/restaurant/restaurant-form/restaurant-form.component';
import { RestaurantDetailComponent } from './components/restaurant/restaurant-detail/restaurant-detail.component';

import { CashierComponent } from './components/cashier/cashier.component';
import { CashierListComponent } from './components/cashier/cashier-list/cashier-list.component';
import { CashierFormComponent } from './components/cashier/cashier-form/cashier-form.component';
import { CashierDetailComponent } from './components/cashier/cashier-detail/cashier-detail.component';

import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AccountComponent } from './components/account/account.component';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AccountFormComponent } from './components/account/account-form/account-form.component';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserDetailComponent,
    UserFormComponent,
    ListComponent,
    FormComponent,
    DetailsComponent,
    RestaurantComponent,
    RestaurantListComponent,
    RestaurantFormComponent,
    RestaurantDetailComponent,
    CashierComponent,
    CashierListComponent,
    CashierFormComponent,
    CashierDetailComponent,
    LoginComponent,
    MenuComponent,
    SeguridadComponent,
    LogoutButtonComponent,
    AccountComponent,
    AccountListComponent,
    AccountFormComponent,
    AccountDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
