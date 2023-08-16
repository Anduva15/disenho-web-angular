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
