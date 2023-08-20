import { FormItem } from './interfaces/FormItem';
// import { Validators } from '@angular/forms';

export const USER: string = 'user';
export const USERS: string = 'users';
export const USER_ADD: string = 'user/add';
export const USER_EDIT: string = 'user/edit';

export const USER_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'Nombre',
    inputType: 'text',
    // validators: [Validators.required],
  },
  // se necesita ???
  {
    name: 'firstName',
    label: 'Primer Nombre',
    inputType: 'text',
    // validators: [Validators.required, Validators.email],
  },
  {
    name: 'lastName',
    label: 'Apellido',
    inputType: 'text',
  },
  {
    name: 'phoneNumber1',
    label: 'Numero Telefonico 1',
    inputType: 'text',
    // validators: [Validators.required, Validators.minLength(6)],
  },
  {
    name: 'phoneNumber2',
    label: 'Numero Telefonico 2',
    inputType: 'text',
  },
  {
    name: 'login',
    label: 'Login',
    inputType: 'text',
  },
  {
    name: 'password',
    label: 'Password',
    inputType: 'password',
  },
  {
    name: 'isSystemAdmin',
    label: 'System Admin',
    inputType: 'checkbox',
  },
  {
    name: 'isSecurityAdmin',
    label: 'Security Admin',
    inputType: 'checkbox',
  },
  {
    name: 'isRestaurantAdmin',
    label: 'Restaurant Admin',
    inputType: 'checkbox',
  },
  {
    name: 'isAccountsAdmin',
    label: 'Account Admin',
    inputType: 'checkbox',
  },
];

export const RESTAURANT = 'restaurant';
export const RESTAURANTS = 'restaurants';
export const RESTAURANT_ADD: string = 'restaurant/add';
export const RESTAURANT_EDIT: string = 'restaurant/edit';

export const RESTAURANT_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'Nombre',
    inputType: 'text',
    // validators: [Validators.required],
  },
  {
    name: 'address',
    label: 'Direccion',
    inputType: 'text',
    // validators: [Validators.required],
  },
  {
    name: 'phone',
    label: 'Telefono',
    inputType: 'text',
    // validators: [Validators.required],
  },
  {
    name: 'clientsAmount',
    label: 'Cantidad de clientes',
    inputType: 'text',
    // validators: [Validators.required],
  },
];


export const ACCOUNT = 'account';
export const ACCOUNTS = 'accounts';
export const ACCOUNT_ADD: string = 'account/add';
export const ACCOUNT_EDIT: string = 'account/edit';

export const ACCOUNT_FORM_STRUCTURE: FormItem[] = [
  {
    name: 'name',
    label: 'Nombre',
    inputType: 'text',
    // validators: [Validators.required],
  },
  // se necesita ???
  {
    name: 'firstName',
    label: 'Primer Nombre',
    inputType: 'text',
    // validators: [Validators.required, Validators.email],
  },
  {
    name: 'lastName',
    label: 'Apellido',
    inputType: 'text',
  },
  {
    name: 'phoneNumber1',
    label: 'Numero Telefonico 1',
    inputType: 'text',
    // validators: [Validators.required, Validators.minLength(6)],
  },
  {
    name: 'phoneNumber2',
    label: 'Numero Telefonico 2',
    inputType: 'text',
  },
  {
    name: 'login',
    label: 'Login',
    inputType: 'text',
  },
  {
    name: 'password',
    label: 'Password',
    inputType: 'password',
  },
  {
    name: 'isSystemAdmin',
    label: 'System Admin',
    inputType: 'checkbox',
  },
  {
    name: 'isSecurityAdmin',
    label: 'Security Admin',
    inputType: 'checkbox',
  },
  {
    name: 'isRestaurantAdmin',
    label: 'Restaurant Admin',
    inputType: 'checkbox',
  },
  {
    name: 'isAccountsAdmin',
    label: 'Account Admin',
    inputType: 'checkbox',
  },
];