import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { RestaurantListComponent } from './components/restaurant/restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './components/restaurant/restaurant-form/restaurant-form.component';
import { RestaurantDetailComponent } from './components/restaurant/restaurant-detail/restaurant-detail.component';
import { CashierListComponent } from './components/cashier/cashier-list/cashier-list.component';
import { CashierFormComponent } from './components/cashier/cashier-form/cashier-form.component';
import { CashierDetailComponent } from './components/cashier/cashier-detail/cashier-detail.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientFormComponent } from './components/client/client-form/client-form.component';
import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { TextValue } from './components/text-value/text-value.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AccountComponent } from './components/account/account.component';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AccountFormComponent } from './components/account/account-form/account-form.component';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';
<<<<<<< HEAD
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeDetailComponent } from './components/employee/employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
=======
import { HeaderComponent } from './components/header/header.component';
>>>>>>> a2ea3a76461cf7a7070d03762a8844c85f156e8d

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserFormComponent,
    ListComponent,
    FormComponent,
    DetailsComponent,
    RestaurantListComponent,
    RestaurantFormComponent,
    RestaurantDetailComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductDetailComponent,
    CashierListComponent,
    CashierFormComponent,
    CashierDetailComponent,
    LoginComponent,
    MenuComponent,
    TextValue,
    SeguridadComponent,
    LogoutButtonComponent,
    AccountComponent,
    AccountListComponent,
    AccountFormComponent,
    AccountDetailComponent,
    ClientListComponent,
    ClientFormComponent,
    ClientDetailComponent,
<<<<<<< HEAD
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
=======
    HeaderComponent,
>>>>>>> a2ea3a76461cf7a7070d03762a8844c85f156e8d
  ],
  imports: [
    NgbModule,
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
